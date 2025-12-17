# 📧 Gmail Email Setup for Portfolio Contact Form

## Step-by-Step Instructions

### Step 1: Enable Gmail App Password

1. **Go to your Google Account**: https://myaccount.google.com/
2. **Enable 2-Factor Authentication** (if not already enabled):
   - Go to Security → 2-Step Verification
   - Follow the setup process

3. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Type: "Portfolio Website"
   - Click "Generate"
   - **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

### Step 2: Update Backend Configuration

Open the file `/app/backend/.env` and add these lines at the end:

```bash
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tirthpatel1617@gmail.com
SMTP_PASS=your_16_character_app_password_here
RECIPIENT_EMAIL=tirthpatel1617@gmail.com
```

**Replace `your_16_character_app_password_here` with the password you copied in Step 1**

### Step 3: Restart Backend

Run this command:
```bash
sudo supervisorctl restart backend
```

### Step 4: Test the Contact Form

1. Go to your portfolio website
2. Scroll to the contact form
3. Fill out the form and submit
4. Check your Gmail inbox for the notification!

## ✅ What Happens After Setup

Once configured, every time someone submits the contact form:
- ✅ Message is saved in your database
- ✅ You receive an email notification at `tirthpatel1617@gmail.com`
- ✅ Email includes: sender's name, email, subject, and full message
- ✅ Styled with your portfolio's cybersecurity theme (green/cyan colors!)

## 🔍 Troubleshooting

**If emails don't arrive:**

1. Check backend logs:
   ```bash
   tail -f /var/log/supervisor/backend.err.log
   ```

2. Verify Gmail App Password is correct (16 characters, no spaces)

3. Make sure 2-Factor Authentication is enabled on your Gmail account

4. Check spam folder in Gmail

**Still not working?** The contact form still works and saves all messages to the database. You can check them anytime!

## 📊 View All Contact Messages

To see all messages received through your portfolio:

```bash
mongosh portfolio --eval "db.contact_messages.find().pretty()"
```

This shows all messages even if email notifications aren't set up yet!

---

**Need help?** The contact form is already working and storing messages. Email notifications are just a bonus feature!
