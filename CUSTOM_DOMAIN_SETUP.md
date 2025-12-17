# Custom Domain Setup for tirthc.in

## Current Status

✅ **DNS Records Configured in Hostinger:**
- ALIAS record: @ → hireme-dev.preview.emergentagent.com
- CNAME record: www → tirthc.in

## Next Steps

### Step 1: Configure Domain on Emergent Platform

You need to tell Emergent that you want to use `tirthc.in` as your custom domain. This typically involves:

1. **Access Emergent Dashboard:**
   - Go to your Emergent project settings
   - Look for "Custom Domain" or "Domain Settings" section

2. **Add Custom Domain:**
   - Add: `tirthc.in`
   - Add: `www.tirthc.in`

3. **SSL Certificate:**
   - Emergent should automatically provision an SSL certificate for your domain
   - This may take a few minutes to hours

### Step 2: Wait for DNS Propagation

DNS changes can take 24-48 hours to fully propagate worldwide, though it often happens much faster (usually within 1-2 hours).

### Step 3: Verify Domain

Once configured, you should be able to access your portfolio at:
- https://tirthc.in
- https://www.tirthc.in

## Troubleshooting

### If Domain Doesn't Work After 24 Hours:

1. **Check DNS Propagation:**
   - Visit: https://www.whatsmydns.net/
   - Enter your domain: tirthc.in
   - Check if ALIAS record is resolving correctly

2. **Verify Emergent Configuration:**
   - Make sure custom domain is added in Emergent dashboard
   - Check if SSL certificate is issued

3. **Check TTL:**
   - Current TTL is 14400 seconds (4 hours)
   - Wait at least 4 hours for changes to propagate

## Contact Emergent Support

If you need help with custom domain configuration on the Emergent side:

**Option 1: Emergent Dashboard**
- Go to your project dashboard
- Look for "Support" or "Help" section
- Submit a ticket mentioning: "Need help configuring custom domain tirthc.in"

**Option 2: Emergent Documentation**
- Check Emergent's documentation for custom domain setup
- Look for "Custom Domain" or "DNS Configuration" guides

## Current URLs

- **Preview URL:** https://hireme-dev.preview.emergentagent.com/
- **Custom Domain (once configured):** https://tirthc.in

## Your DNS Records (Reference)

```
Type: ALIAS
Name: @
Points to: hireme-dev.preview.emergentagent.com
TTL: 14400

Type: CNAME
Name: www
Points to: tirthc.in
TTL: 300
```

---

**Note:** DNS records are correctly configured on your end (Hostinger). The missing piece is configuring the custom domain on Emergent's platform side.
