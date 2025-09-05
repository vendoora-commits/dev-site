# Vercel Deployment Guide for Domain-Based Locales

## Overview
This guide explains how to deploy the Vendoora site to Vercel with domain-based locale detection, specifically setting up `vendoora.pk` to default to Urdu.

## Prerequisites
- Vercel account
- Domain names configured in Vercel
- Next.js project with next-intl configured

## Domain Configuration

### 1. Add Domains in Vercel Dashboard

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Add the following domains (as you acquire them):
   - `vendoora.pk` (Primary for Pakistan - Urdu) ✅ **Ready to deploy**
   - `vendoora.us.com` (United States - English) ✅ **Ready to deploy**
   - `vendoora.es` (Spain - Spanish)
   - `vendoora.pt` (Portugal - Portuguese)
   - `vendoora.fr` (France - French)
   - `vendoora.bd` (Bangladesh - Bengali)
   - `vendoora.uz` (Uzbekistan - Uzbek)
   - `vendoora.ru` (Russia - Russian)
   - `vendoora.il` (Israel - Hebrew)
   - `vendoora.sa` (Saudi Arabia - Arabic)

**Note**: `vendoora.com` is not currently owned. The site will fallback to English for any unrecognized domains.

### 2. DNS Configuration

For each domain, configure DNS records:

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Environment Variables

Set the following environment variables in Vercel:

```bash
# Default locale (fallback)
NEXT_PUBLIC_DEFAULT_LOCALE=en

# Enable domain-based routing
NEXT_PUBLIC_DOMAIN_ROUTING=true

# Production URL
NEXT_PUBLIC_SITE_URL=https://vendoora.pk
```

## Deployment Steps

### 1. Connect Repository
```bash
# Connect your GitHub repository to Vercel
# Or use Vercel CLI
npx vercel --prod
```

### 2. Configure Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. Domain-Specific Deployments

For `vendoora.pk` specifically:

1. **Primary Domain**: Set `vendoora.pk` as the primary domain
2. **Default Locale**: The site will automatically serve Urdu content
3. **RTL Support**: Hebrew, Arabic, and Urdu will display with RTL layout
4. **SEO**: Proper `lang` and `dir` attributes will be set

## Testing Domain Configuration

### Local Testing
```bash
# Test with different hostnames
npm run dev

# Add to /etc/hosts for local testing:
127.0.0.1 vendoora.pk
127.0.0.1 vendoora.us.com
127.0.0.1 vendoora.es
127.0.0.1 vendoora.pt
```

### Production Testing
1. Deploy to Vercel
2. Visit `https://vendoora.pk` - should show Urdu content
3. Visit `https://vendoora.us.com` - should show English content
4. Visit any other domain - should show English content (fallback)
5. Test language switcher functionality

## Verification Checklist

- [ ] `vendoora.pk` serves Urdu content by default
- [ ] RTL layout works correctly for Urdu
- [ ] Language switcher includes all 10 languages
- [ ] Domain detection works for all configured domains
- [ ] SEO meta tags include correct `lang` and `dir` attributes
- [ ] Navigation and UI elements position correctly in RTL
- [ ] All translation files are properly loaded

## Troubleshooting

### Common Issues

1. **Domain not detected**: Check DNS configuration and Vercel domain settings
2. **Wrong locale**: Verify `DOMAIN_LOCALE_MAP` in `src/utils/domain-locale.ts`
3. **RTL not working**: Check CSS and component RTL classes
4. **Build errors**: Ensure all translation files exist

### Debug Commands

```bash
# Check domain detection
curl -H "Host: vendoora.pk" https://your-app.vercel.app

# Verify locale headers
curl -I https://vendoora.pk
```

## Performance Considerations

- **Static Generation**: Pages are statically generated for each locale
- **CDN**: Vercel's global CDN ensures fast loading worldwide
- **Caching**: Proper cache headers for international content
- **Image Optimization**: Next.js Image component with locale-aware alt text

## Security

- **CSP Headers**: Configure Content Security Policy for each domain
- **HTTPS**: All domains use HTTPS by default
- **Headers**: Security headers configured in `vercel.json`

## Monitoring

- **Analytics**: Track usage by domain and locale
- **Performance**: Monitor Core Web Vitals for each region
- **Errors**: Set up error tracking for domain-specific issues

## Adding vendoora.com Later

When you acquire `vendoora.com`, follow these steps:

### 1. Update Configuration Files

**Update `src/utils/domain-locale.ts`:**
```typescript
export const DOMAIN_LOCALE_MAP: Record<string, string> = {
  'vendoora.pk': 'ur',
  'vendoora.com': 'en', // Add this line
  // ... other domains
};
```

**Update `next-intl.config.js`:**
```javascript
domains: [
  {
    domain: 'vendoora.pk',
    defaultLocale: 'ur'
  },
  {
    domain: 'vendoora.com',
    defaultLocale: 'en'
  },
  // ... other domains
]
```

### 2. Deploy and Test
1. Deploy the updated configuration
2. Add `vendoora.com` domain in Vercel dashboard
3. Configure DNS for `vendoora.com`
4. Test that `vendoora.com` serves English content

## Support

For issues specific to domain-based routing:
1. Check Vercel deployment logs
2. Verify DNS configuration
3. Test with different domains
4. Review middleware configuration
