# Sitemap Fix Guide

## 🚨 Current Issue
Google Search Console is showing: **"Page cannot be indexed: Excluded by 'noindex' tag"**

The problem is that the production sitemap has this header:
```
X-Robots-Tag: noindex, nofollow
```

## 🔧 Solution Steps

### 1. Deploy the Fixed Sitemap
The new `app/sitemap.ts` file uses Next.js 13+ sitemap API and doesn't include problematic headers.

### 2. Clear Production Cache
Run this command to clear all cached versions:
```bash
node scripts/clear-cache.js
```

### 3. Force Vercel Redeploy
- Push your changes to GitHub
- Vercel will automatically redeploy
- Wait 5-10 minutes for the new version to be live

### 4. Test the Fixed Sitemap
After deployment, test:
```bash
curl -v https://www.turfngroup.com/sitemap.xml
```

**Expected result:** No `X-Robots-Tag: noindex, nofollow` header

### 5. Resubmit to Google Search Console
1. Go to Google Search Console
2. Navigate to Sitemaps section
3. Click "Add a new sitemap"
4. Enter: `https://www.turfngroup.com/sitemap.xml`
5. Submit

### 6. Monitor Results
- Wait 24-48 hours for Google to re-crawl
- Check Google Search Console for indexing status
- The "noindex" error should be resolved

## ✅ What's Fixed

- ✅ **Removed problematic headers** from sitemap
- ✅ **Using Next.js 13+ sitemap API** (more reliable)
- ✅ **Proper XML structure** with all 9 URLs
- ✅ **Fresh timestamps** on each request
- ✅ **No conflicting files** or routes

## 🎯 Expected Outcome

After deployment, your sitemap should:
- Return proper XML without `noindex` headers
- Be accessible to Google's crawler
- Show all 9 URLs with correct priorities
- Allow Google to index your pages

## 📞 If Issues Persist

If the problem continues after deployment:
1. Check if Vercel has any environment-specific settings
2. Verify the deployment was successful
3. Test the sitemap URL directly in browser
4. Contact Vercel support if needed 