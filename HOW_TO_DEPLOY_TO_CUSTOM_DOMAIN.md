# Deploy Changes to Custom Domain (tirthc.in)

## The Problem

Your changes are working locally but not appearing on **tirthc.in** because:
- The development environment (local) has the latest changes ✅
- The preview URL might be auto-deploying from a different branch
- The custom domain needs to be redeployed with the latest changes

## Solution: Deploy Your Changes

You need to deploy/publish your portfolio to make changes live on tirthc.in.

### Step 1: Check Emergent Dashboard

1. Go to **Emergent Dashboard**: https://app.emergent.sh/
2. Find your project: **hireme-dev**
3. Look for deployment options

### Step 2: Deploy/Publish

Look for one of these buttons in your Emergent dashboard:
- **"Deploy"** button
- **"Publish"** button  
- **"Push to Production"** button
- **"Redeploy"** option

Click it to deploy your latest changes.

### Step 3: Verify Custom Domain Configuration

In your Emergent project settings:
1. Go to **Settings** or **Domains** section
2. Verify that **tirthc.in** and **www.tirthc.in** are listed as custom domains
3. Make sure they point to the **correct deployment/environment**

### Step 4: Wait for Deployment

After clicking deploy:
- Wait 2-5 minutes for deployment to complete
- Check the deployment status in Emergent dashboard
- Once status shows "Deployed" or "Live", check tirthc.in

## How to Deploy (Common Methods)

### Method 1: Emergent Dashboard Deploy Button
Most common - just click "Deploy" or "Publish" in your project dashboard

### Method 2: Git Push (if connected to Git)
If your project is connected to GitHub:
```bash
git add .
git commit -m "Update dates and add project durations"
git push origin main
```
Emergent will auto-deploy from the main branch.

### Method 3: Manual Redeploy
In Emergent dashboard:
1. Go to Deployments section
2. Find latest deployment
3. Click "Redeploy" or "Restart"

## Check Deployment Status

After deploying, verify:

1. **Emergent Dashboard** - Shows "Deployed" status
2. **Preview URL** - https://hireme-dev.preview.emergentagent.com/
3. **Custom Domain** - https://www.tirthc.in

All three should show the same updated content.

## What Should You See After Deployment?

✅ Work Experience:
- Amazon DSP: **September 2025** - Present
- Swiss Chalet: **February 2025** - Present

✅ Projects with Durations:
- Enterprise Virtual Infrastructure: **May 2025 - August 2025**
- Apache Guacamole: **January 2025 - April 2025**
- Nextcloud with AD: **January 2025 - April 2025**
- Disaster Planning: **September 2024 - December 2024**

## Still Not Working?

If deployment doesn't fix it:

1. **Check which environment custom domain points to:**
   - Custom domains might point to "Production" environment
   - Changes might be in "Development" or "Preview" environment
   - Need to deploy to the correct environment

2. **Contact Emergent Support:**
   - Use the support chat in Emergent dashboard
   - Ask: "My custom domain tirthc.in is not showing latest changes. How do I redeploy to custom domain?"

3. **Verify DNS propagation:**
   - Visit: https://www.whatsmydns.net/
   - Enter: tirthc.in
   - Should point to: hireme-dev.preview.emergentagent.com

---

**Summary:** Your code changes are done! You just need to **deploy/publish** from the Emergent dashboard to make them live on tirthc.in.
