# Custom Domain Cache Issue Fix

## Why Changes Don't Show on tirthc.in

Your custom domain **tirthc.in** is showing old content because of **browser caching** or **DNS caching**.

## Quick Fix: Clear Browser Cache

### Method 1: Hard Refresh (Quickest)
**On Windows/Linux:**
- Chrome/Edge: Press `Ctrl + Shift + R` or `Ctrl + F5`
- Firefox: Press `Ctrl + Shift + Delete`

**On Mac:**
- Chrome/Safari: Press `Cmd + Shift + R`
- Safari: Press `Cmd + Option + R`

### Method 2: Clear Browser Cache Manually

**Chrome/Edge:**
1. Press `Ctrl + Shift + Delete` (or `Cmd + Shift + Delete` on Mac)
2. Select "Time range": **All time**
3. Check "Cached images and files"
4. Click "Clear data"

**Firefox:**
1. Press `Ctrl + Shift + Delete`
2. Select "Time range to clear": **Everything**
3. Check "Cache"
4. Click "Clear Now"

**Safari:**
1. Go to Safari menu → Preferences → Privacy
2. Click "Manage Website Data"
3. Remove "tirthc.in"
4. Click "Done"

### Method 3: Open in Incognito/Private Mode
This bypasses all cache:
- Chrome: `Ctrl + Shift + N` (or `Cmd + Shift + N` on Mac)
- Firefox: `Ctrl + Shift + P`
- Safari: `Cmd + Shift + N`

Then visit: https://www.tirthc.in

## Advanced: Clear DNS Cache

If hard refresh doesn't work, clear DNS cache:

### Windows:
```cmd
ipconfig /flushdns
```

### Mac:
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

### Linux:
```bash
sudo systemd-resolve --flush-caches
```

## Verify Changes

After clearing cache, visit these URLs:
- https://www.tirthc.in
- https://tirthc.in

**You should now see:**
1. ✅ Amazon DSP: September 2025
2. ✅ Swiss Chalet: February 2025
3. ✅ Project durations displayed below each project title

## Still Not Working?

If you still see old content after trying all the above:

1. **Wait 15-30 minutes** - CDN/server cache might need time to clear
2. **Check on different device** - Try your phone with mobile data (not WiFi)
3. **Check the preview URL** - If https://hireme-dev.preview.emergentagent.com/ shows changes, the issue is definitely cache

## Current Versions

- **Preview URL** (Always latest): https://hireme-dev.preview.emergentagent.com/
- **Custom Domain**: https://www.tirthc.in (may take time to update due to cache)

---

**Note:** The changes ARE deployed - it's just a caching issue. Hard refresh should fix it immediately!
