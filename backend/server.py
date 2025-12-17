from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Model
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact")
async def send_contact_message(contact: ContactMessage):
    """
    Store contact message in database and send notification email
    """
    try:
        # Store in database
        message_doc = {
            "id": str(uuid.uuid4()),
            "name": contact.name,
            "email": contact.email,
            "subject": contact.subject,
            "message": contact.message,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "status": "received"
        }
        
        await db.contact_messages.insert_one(message_doc)
        logger.info(f"Contact message received from {contact.email}")
        
        # Try to send email notification if SMTP is configured
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = os.environ.get('SMTP_PORT')
        smtp_user = os.environ.get('SMTP_USER')
        smtp_pass = os.environ.get('SMTP_PASS')
        recipient_email = os.environ.get('RECIPIENT_EMAIL', 'tirthpatel1617@gmail.com')
        
        if all([smtp_host, smtp_port, smtp_user, smtp_pass]):
            try:
                # Create email
                msg = MIMEMultipart('alternative')
                msg['Subject'] = f"Portfolio Contact: {contact.subject}"
                msg['From'] = smtp_user
                msg['To'] = recipient_email
                
                # Email body
                html_body = f"""
                <html>
                  <body style="font-family: monospace; background-color: #0a0a0a; color: #00ff41; padding: 20px;">
                    <h2 style="color: #00ff41;">New Contact Message from Portfolio</h2>
                    <div style="background-color: #1a1a1a; border: 1px solid #00ff41; padding: 20px; margin: 20px 0;">
                      <p><strong style="color: #00d9ff;">Name:</strong> {contact.name}</p>
                      <p><strong style="color: #00d9ff;">Email:</strong> {contact.email}</p>
                      <p><strong style="color: #00d9ff;">Subject:</strong> {contact.subject}</p>
                      <hr style="border-color: #00ff41;">
                      <p><strong style="color: #00d9ff;">Message:</strong></p>
                      <p style="white-space: pre-wrap;">{contact.message}</p>
                    </div>
                    <p style="color: #888; font-size: 12px;">This message was sent from your portfolio contact form.</p>
                  </body>
                </html>
                """
                
                msg.attach(MIMEText(html_body, 'html'))
                
                # Send email
                with smtplib.SMTP(smtp_host, int(smtp_port)) as server:
                    server.starttls()
                    server.login(smtp_user, smtp_pass)
                    server.send_message(msg)
                
                logger.info(f"Email notification sent to {recipient_email}")
            except Exception as email_error:
                logger.error(f"Failed to send email notification: {str(email_error)}")
                # Don't fail the API call if email fails
        
        return {
            "success": True,
            "message": "Your message has been received! I'll get back to you soon.",
            "id": message_doc["id"]
        }
        
    except Exception as e:
        logger.error(f"Error processing contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process your message. Please try again.")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()