# Email Configuration Guide for Portfolio Contact Form

Your portfolio contact form is currently **working** and storing all messages in the database! 

To enable actual email notifications when someone contacts you, follow these steps:

## Option 1: Gmail SMTP (Recommended for Personal Use)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Create a new app password for "Mail"
   - Copy the 16-character password

3. **Add to Backend `.env` file**:
```bash
# Add these lines to /app/backend/.env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tirthpatel1617@gmail.com
SMTP_PASS=your_16_character_app_password_here
RECIPIENT_EMAIL=tirthpatel1617@gmail.com
```

4. **Restart backend**:
```bash
sudo supervisorctl restart backend
```

## Option 2: Other Email Providers

### SendGrid
- Sign up at https://sendgrid.com (Free tier: 100 emails/day)
- Get API credentials
- Configure SMTP settings

### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your_email@outlook.com
SMTP_PASS=your_password
```

## Current Status

✅ Contact form is **fully functional**
✅ Messages are stored in MongoDB database
✅ Form validation working
✅ Success/error notifications working
⚠️ Email notifications disabled (will work once SMTP configured)

## How It Works Now

1. User fills out contact form
2. Message sent to backend API (`/api/contact`)
3. Message stored in MongoDB (`contact_messages` collection)
4. User sees success message
5. You can view all messages in the database

## View Contact Messages

You can check all received messages by querying the database:
```bash
mongosh portfolio --eval "db.contact_messages.find().pretty()"
```

## Test Email After Configuration

Once you add SMTP settings:
1. Restart backend: `sudo supervisorctl restart backend`
2. Test the contact form
3. Check your email for notifications

## Email Notification Features

When SMTP is configured, you'll receive:
- **Sender Name** and **Email**
- **Subject Line**
- **Full Message**
- **Timestamp**
- Professional network-themed HTML email format

All emails are styled to match your portfolio's cybersecurity aesthetic! 🔐💚
