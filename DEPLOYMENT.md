# Deployment Guide - Project Nurture Website

This guide covers various deployment options for the Project Nurture website.

## Prerequisites

Before deployment, ensure:
- All dependencies are installed (`npm install`)
- The build works locally (`npm run build`)
- Test the production build (`npm run preview`)

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers the simplest deployment for Vite + React projects.

**Steps:**
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

**Or use GitHub Integration:**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite settings
5. Click Deploy!

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### 2. Netlify

Another excellent option with great features.

**Steps:**
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

**Or use GitHub Integration:**
1. Push to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Deploy!

---

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

**Setup:**
1. Install gh-pages package:
   ```bash
   npm install -D gh-pages
   ```

2. Update `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/nurture-ngo/',  // Replace with your repo name
   })
   ```

3. Add deployment scripts to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings

---

### 4. Firebase Hosting

Google's hosting solution with CDN.

**Steps:**
1. Install Firebase tools:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init hosting
   ```
   - Select existing project or create new
   - Public directory: `dist`
   - Configure as single-page app: Yes
   - Automatic builds with GitHub: Optional

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

### 5. Custom Server (VPS/cPanel)

For self-hosted solutions.

**Steps:**
1. Build the project:
   ```bash
   npm run build
   ```

2. Upload `dist/` folder to your server

3. Configure web server (Nginx example):
   ```nginx
   server {
       listen 80;
       server_name projectnurture.org;
       root /var/www/nurture-ngo/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. Restart web server:
   ```bash
   sudo systemctl restart nginx
   ```

---

## Environment Variables

If you need environment variables:

1. Create `.env` file (DO NOT commit):
   ```
   VITE_API_URL=https://api.example.com
   VITE_CONTACT_EMAIL=contact@projectnurture.org
   ```

2. Access in code:
   ```js
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. For production, set these in your hosting platform's dashboard

---

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form functionality
- [ ] Check responsive design on mobile
- [ ] Test page load speed
- [ ] Verify all images load correctly
- [ ] Check social media links
- [ ] Set up SSL certificate (HTTPS)
- [ ] Configure custom domain
- [ ] Set up Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

---

## Performance Tips

1. **Enable Compression:**
   - Most hosting providers enable gzip/brotli by default
   - Verify in Network tab (Chrome DevTools)

2. **CDN:**
   - Vercel, Netlify automatically use CDN
   - For custom hosting, consider Cloudflare

3. **Image Optimization:**
   - Use WebP format where possible
   - Implement lazy loading for images

4. **Caching:**
   - Configure proper cache headers
   - Most Vite builds include hash in filenames

---

## Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Support

For deployment issues:
- Check build logs in your hosting dashboard
- Verify all dependencies are in `package.json`
- Ensure Node.js version compatibility
- Test the production build locally first

---

**Recommended Stack:**
- **Development**: Local Vite dev server
- **Staging**: Vercel preview deployments
- **Production**: Vercel with custom domain
