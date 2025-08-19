# Contact Form Email Setup

## Overview
The contact form is configured to send emails to vendoora2025@gmail.com using Gmail SMTP.

## Setup Instructions

### 1. Gmail App Password Setup
1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### 2. Environment Configuration
1. Open `.env.local` in the project root
2. Replace `your_gmail_app_password_here` with the app password from step 1
3. Ensure `EMAIL_USER=vendoora2025@gmail.com` is correct

### 3. Testing
1. Run `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check vendoora2025@gmail.com for the email

## Email Features
- **HTML formatted emails** with clean styling
- **Form validation** on both client and server
- **Loading states** during submission
- **Success/error messaging** for user feedback
- **Security** - environment variables protect credentials

## Troubleshooting
- Ensure 2-factor authentication is enabled on the Gmail account
- Use the 16-character app password, not your regular Gmail password
- Check spam folder if emails aren't arriving
- Verify `.env.local` file is in the project root and not committed to git
