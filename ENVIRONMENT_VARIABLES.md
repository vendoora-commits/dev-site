# Environment Variables for Vendoora Deployment

## Required Environment Variables for Vercel

Set these environment variables in your Vercel dashboard under **Settings → Environment Variables**:

### 🔐 Contact Form Configuration

```bash
# Gmail SMTP Configuration for Contact Form
EMAIL_USER=vendoora2025@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

**Note**: Use a Gmail App Password, not your regular Gmail password. Generate one at: https://myaccount.google.com/apppasswords

### 🌍 Internationalization (Optional)

```bash
# Default locale fallback
NEXT_PUBLIC_DEFAULT_LOCALE=en

# Enable domain-based routing
NEXT_PUBLIC_DOMAIN_ROUTING=true

# Production URL (update when deploying)
NEXT_PUBLIC_SITE_URL=https://vendoora.pk
```

## How to Set Environment Variables in Vercel

### Method 1: Vercel Dashboard (Recommended)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - **Name**: `EMAIL_USER`
   - **Value**: `vendoora2025@gmail.com`
   - **Environment**: Production, Preview, Development
4. Repeat for `EMAIL_PASS` with your Gmail App Password

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Set environment variables
vercel env add EMAIL_USER
vercel env add EMAIL_PASS

# Deploy
vercel --prod
```

## Gmail App Password Setup

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" as the app
3. Select "Other" as the device and enter "Vendoora Contact Form"
4. Copy the generated 16-character password
5. Use this password as `EMAIL_PASS` (not your regular Gmail password)

## Testing Contact Form

After deployment, test the contact form:

1. Visit your deployed site
2. Go to the Contact page
3. Fill out and submit the form
4. Check that you receive the email at `vendoora2025@gmail.com`

## Security Notes

- ✅ Environment variables are encrypted in Vercel
- ✅ Never commit real passwords to git
- ✅ Use App Passwords instead of main account passwords
- ✅ Rotate passwords regularly

## Troubleshooting

### Contact Form Not Working

1. **Check Environment Variables**: Ensure `EMAIL_USER` and `EMAIL_PASS` are set in Vercel
2. **Verify App Password**: Make sure you're using a Gmail App Password, not your regular password
3. **Check Vercel Logs**: View deployment logs for any errors
4. **Test Locally**: Set up `.env.local` for local testing

### Local Development Setup

Create `.env.local` for local testing:

```bash
# .env.local (DO NOT COMMIT TO GIT)
EMAIL_USER=vendoora2025@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

## Environment-Specific Configuration

### Production (vendoora.pk)
```bash
NEXT_PUBLIC_SITE_URL=https://vendoora.pk
NEXT_PUBLIC_DEFAULT_LOCALE=ur
```

### Production (vendoora.us.com)
```bash
NEXT_PUBLIC_SITE_URL=https://vendoora.us.com
NEXT_PUBLIC_DEFAULT_LOCALE=en
```

### Development
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LOCALE=en
```

## Deployment Checklist

- [ ] Set `EMAIL_USER` in Vercel environment variables
- [ ] Set `EMAIL_PASS` in Vercel environment variables
- [ ] Test contact form after deployment
- [ ] Verify emails are being received
- [ ] Check Vercel deployment logs for any errors

## Support

If you encounter issues:

1. Check Vercel deployment logs
2. Verify environment variables are set correctly
3. Test Gmail App Password is working
4. Contact support with specific error messages from logs
