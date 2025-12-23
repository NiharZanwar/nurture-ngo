# Complete Deployment Guide - Project Nurture

Everything you need to deploy your website to staging and production.

---

## Quick Overview

### Deployment Options

| Option | Staging | Production | Cost | Custom Domain |
|--------|---------|------------|------|---------------|
| **GitHub Pages Only** | ✅ Free | ✅ Free | $0/mo | ✅ Yes |
| **GitHub + Vercel** | ✅ Free | ✅ Free | $0/mo | ✅ Yes |
| **GitHub + Netlify** | ✅ Free | ✅ Free | $0/mo | ✅ Yes |

**Recommended:** GitHub Pages for both (100% free, simple, no external services needed)

---

## Architecture: Dual GitHub Pages Setup

```
STAGING                              PRODUCTION
┌─────────────────────────────┐     ┌──────────────────────────────┐
│ Repo: nurture-ngo           │     │ Repo: NiharZanwar.github.io  │
│ URL: /nurture-ngo/          │     │ URL: / (root)                │
│ Purpose: Test changes       │     │ Purpose: Live website        │
└─────────────────────────────┘     └──────────────────────────────┘
```

**About the Production Repo Name:**
- ❗ **Must be exactly:** `NiharZanwar.github.io` (your username + .github.io)
- Cannot use a different name (GitHub requirement for root-level sites)
- But you can add a custom domain like `www.projectnurture.org` on top

---

## One-Time Setup (10 minutes)

### Step 1: Create Production Repository

1. Go to: https://github.com/new
2. Repository name: **`NiharZanwar.github.io`** (exactly this)
3. Public repository
4. Click **Create repository**

### Step 2: Install gh-pages

```bash
npm install -D gh-pages
```

### Step 3: Configuration Files

**Already configured for you:**
- ✅ `vite.config.js` - Auto-detects staging vs production
- ✅ `package.json` - Has deploy scripts
- ✅ `.env.staging` and `.env.production` - Environment configs

---

## Deploy Commands

### Deploy to Staging

```bash
npm run deploy:staging
```

**Result:** https://NiharZanwar.github.io/nurture-ngo/

### Deploy to Production

```bash
npm run deploy:production
```

**Result:** https://NiharZanwar.github.io/

---

## First Deployment

### Staging Setup

```bash
# 1. Deploy
npm run deploy:staging

# 2. Enable GitHub Pages
# Go to: https://github.com/NiharZanwar/nurture-ngo/settings/pages
# Source: Select 'gh-pages' branch → Save

# 3. Visit (wait 1-2 minutes)
# https://NiharZanwar.github.io/nurture-ngo/
```

### Production Setup

```bash
# 1. Deploy (automatically pushes to NiharZanwar.github.io repo)
npm run deploy:production

# 2. Visit (wait 1-2 minutes)
# https://NiharZanwar.github.io/
```

---

## Add Custom Domain (Optional)

Want `www.projectnurture.org` instead of `NiharZanwar.github.io`?

### Step 1: Create CNAME File

Create `public/CNAME`:
```
www.projectnurture.org
```

### Step 2: Configure DNS

At your domain provider (Namecheap, GoDaddy, etc.):

```
Type: CNAME
Name: www
Value: NiharZanwar.github.io
```

For apex domain (optional):
```
Type: A
Name: @
Values: 185.199.108.153
        185.199.109.153
        185.199.110.153
        185.199.111.153
```

### Step 3: Update GitHub

1. Go to: https://github.com/NiharZanwar/NiharZanwar.github.io/settings/pages
2. Custom domain: `www.projectnurture.org`
3. Save and wait for DNS check (up to 24 hours)
4. Enable "Enforce HTTPS"

### Step 4: Redeploy

```bash
npm run deploy:production
```

---

## Daily Workflow

```bash
# 1. Develop locally
npm run dev

# 2. Make changes and test
# ...edit code...

# 3. Deploy to staging first
npm run deploy:staging
# Visit: https://NiharZanwar.github.io/nurture-ngo/
# Test everything works

# 4. Deploy to production
npm run deploy:production
# Visit: https://NiharZanwar.github.io/
# Or your custom domain
```

---

## Environment Detection

Your app knows which environment it's running in:

```javascript
// Show staging banner
const isStaging = import.meta.env.MODE === 'staging'

{isStaging && (
  <div className="bg-yellow-400 text-black p-2 text-center font-bold">
    🚧 STAGING ENVIRONMENT 🚧
  </div>
)}
```

---

## Alternative: Vercel/Netlify for Production

If you prefer using Vercel or Netlify for production:

### Option A: Vercel

```bash
# Install
npm install -g vercel

# First time
vercel login
vercel link

# Deploy production
npm run build:production
vercel --prod
```

Update `package.json`:
```json
"deploy:production": "npm run build:production && vercel --prod"
```

### Option B: Netlify

```bash
# Install
npm install -g netlify-cli

# First time
netlify login
netlify init

# Deploy production
npm run build:production
netlify deploy --prod
```

Update `package.json`:
```json
"deploy:production": "npm run build:production && netlify deploy --prod"
```

---

## Configuration Details

### How It Works

**vite.config.js:**
```javascript
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // Staging: /nurture-ngo/ (subdirectory)
    // Production: / (root)
    base: mode === 'staging' ? '/nurture-ngo/' : '/',
  }
})
```

**package.json scripts:**
```json
{
  "build:staging": "vite build --mode staging",
  "deploy:staging": "npm run build:staging && gh-pages -d dist",
  
  "build:production": "vite build --mode production",
  "deploy:production": "npm run build:production && gh-pages -d dist -r https://github.com/NiharZanwar/NiharZanwar.github.io.git"
}
```

---

## Troubleshooting

### Issue: Blank page after deployment

**Cause:** Base path mismatch  
**Fix:** Verify in `vite.config.js`:
```javascript
base: mode === 'staging' ? '/nurture-ngo/' : '/'
```

### Issue: Images not loading

**Cause:** Wrong image paths  
**Fix:** Put images in `public` folder:
```jsx
// ✅ Correct
<img src="/image.jpg" />  // File at public/image.jpg

// ❌ Wrong
<img src="../assets/image.jpg" />
```

### Issue: Site not updating

**Fix:**
```bash
# Force redeploy
npm run deploy:staging -- --force
npm run deploy:production -- --force

# Clear browser cache
Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
```

### Issue: Permission denied

**Fix:** Check git configuration:
```bash
git remote -v
# Should show HTTPS or SSH URLs

# If needed, reconfigure
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Issue: Production repo doesn't exist

**Fix:** Create it first:
- Go to https://github.com/new
- Name it exactly: `NiharZanwar.github.io`
- Make it public
- Don't initialize with README

---

## Automated Deployment (Optional)

Auto-deploy on every push to main:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build:staging
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**Result:** Every push to `main` → Automatic staging deployment

---

## Testing Builds Locally

Before deploying, test locally:

```bash
# Test staging build
npm run build:staging
npm run preview
# Visit: http://localhost:4173

# Test production build
npm run build:production
npm run preview
# Visit: http://localhost:4173
```

---

## Command Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build:staging` | Build for staging |
| `npm run build:production` | Build for production |
| `npm run deploy:staging` | Deploy to staging |
| `npm run deploy:production` | Deploy to production |
| `npm run preview` | Preview built version |

---

## URLs Summary

| Environment | Default URL | With Custom Domain |
|-------------|-------------|-------------------|
| **Development** | http://localhost:5173 | - |
| **Staging** | https://NiharZanwar.github.io/nurture-ngo/ | - |
| **Production** | https://NiharZanwar.github.io/ | https://www.projectnurture.org |

---

## Repository Structure

```
nurture-ngo (Development Repo)
├── main branch        → Source code
└── gh-pages branch    → Built files (Staging)

NiharZanwar.github.io (Production Repo)
└── main branch        → Built files (Production)
```

---

## FAQs

**Q: Can I use a different name instead of NiharZanwar.github.io?**  
A: No, GitHub requires the exact format `username.github.io` for root-level sites. However, you can add a custom domain on top.

**Q: Do I need two repositories?**  
A: For the cleanest setup with both staging and production on GitHub Pages, yes. Alternative: Use Vercel/Netlify for production (only one repo needed).

**Q: Can I use the same repo for both?**  
A: Yes, but you'd need GitHub Pro for multiple Pages sites from one repo. The two-repo approach is simpler and free.

**Q: What if I only want production?**  
A: Just use the production deployment. Skip staging if you don't need it.

**Q: How do I delete a deployment?**  
A: Delete the `gh-pages` branch or the `NiharZanwar.github.io` repository on GitHub.

---

## Quick Start Checklist

- [ ] Create `NiharZanwar.github.io` repository on GitHub
- [ ] Run: `npm install -D gh-pages`
- [ ] Deploy staging: `npm run deploy:staging`
- [ ] Enable Pages in nurture-ngo repo settings
- [ ] Deploy production: `npm run deploy:production`
- [ ] Test both URLs
- [ ] (Optional) Add custom domain
- [ ] (Optional) Set up automated deployments

---

## Cost Breakdown

| Service | Cost |
|---------|------|
| GitHub Pages (Staging) | **$0** |
| GitHub Pages (Production) | **$0** |
| Custom Domain | ~$10-15/year |
| **Total** | **$0-15/year** |

**Compare to alternatives:**
- Vercel Pro: $20/month ($240/year)
- Netlify Pro: $19/month ($228/year)

---

## Support Resources

- [GitHub Pages Docs](https://docs.github.com/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Summary

✅ **Setup:** 10 minutes one-time setup  
✅ **Staging:** Free GitHub Pages with testing URL  
✅ **Production:** Free GitHub Pages with custom domain  
✅ **Deploy:** One command for each environment  
✅ **Cost:** $0/month (only domain cost if you want)  

**Your commands:**
```bash
npm run deploy:staging      # Test here first
npm run deploy:production   # Go live
```

---

**Questions?** Check the Troubleshooting section or open an issue on GitHub.

**Happy deploying!** 🚀🌱
