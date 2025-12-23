# Quick Start Guide - Project Nurture Website

Welcome! This guide will help you get the Project Nurture website running on your machine in under 5 minutes.

## Prerequisites Check

Before starting, make sure you have:
- ✅ Node.js installed (v18 or higher) - [Download here](https://nodejs.org/)
- ✅ A code editor (VS Code recommended)
- ✅ Terminal/Command Prompt access
- ✅ Git (optional, for cloning)

### Verify Node.js Installation
```bash
node --version
npm --version
```
Both commands should return version numbers.

---

## Installation Steps

### Step 1: Get the Code

**Option A - Clone from Git:**
```bash
git clone <repository-url>
cd nurture-ngo
```

**Option B - Download ZIP:**
1. Download and extract the ZIP file
2. Open terminal in the extracted folder

### Step 2: Install Dependencies
```bash
npm install
```
This will take 1-2 minutes. You'll see a progress bar.

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: View the Website
Open your browser and go to: **http://localhost:5173**

That's it! 🎉 The website should now be running.

---

## Quick Commands Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |

---

## Common Issues & Fixes

### Issue: "Cannot find module..."
**Fix:** Delete `node_modules` folder and run:
```bash
npm clean-install
```

### Issue: Port 5173 already in use
**Fix:** Kill the existing process or change port:
```bash
npm run dev -- --port 3000
```

### Issue: Blank page in browser
**Fix:** 
1. Check terminal for errors
2. Try clearing browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Restart the dev server

### Issue: Tailwind styles not loading
**Fix:** 
1. Stop the server (Ctrl+C)
2. Delete `.vite` cache folder
3. Restart: `npm run dev`

---

## Making Changes

### 1. Edit Content
Content is in these files:
- **Hero text**: `src/sections/Hero.jsx`
- **Founders bios**: `src/sections/About.jsx`
- **Projects**: `src/sections/Impact.jsx`
- **Contact info**: `src/components/Footer.jsx`

### 2. Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  'forest-green': '#2F5233',  // Change this
  'soft-beige': '#F1F8E9',     // Change this
  // ...
}
```

### 3. Add Images
1. Place images in `/public` folder
2. Reference them in JSX: `src="/your-image.jpg"`

### 4. See Changes
Save your file - the browser will automatically reload!

---

## Building for Production

When you're ready to publish:

```bash
# Build the production version
npm run build

# Test the production build
npm run preview
```

The production files will be in the `dist/` folder.

---

## Next Steps

1. **✅ Website is running** - Explore all sections
2. **📝 Customize content** - Update text and images
3. **🎨 Adjust styling** - Modify colors and fonts
4. **🚀 Deploy** - See `DEPLOYMENT.md` for hosting options

---

## File Tour

Quick overview of important files:

```
nurture-ngo/
│
├── src/
│   ├── sections/          # Main page sections
│   │   ├── Hero.jsx       👈 Start here to edit hero
│   │   ├── About.jsx      👈 Team & founder info
│   │   └── Impact.jsx     👈 Projects & achievements
│   │
│   ├── components/        # Reusable UI pieces
│   │   ├── Navbar.jsx     👈 Top navigation
│   │   ├── Footer.jsx     👈 Contact form & footer
│   │   └── Button.jsx     👈 Buttons throughout site
│   │
│   └── App.jsx            👈 Main app structure
│
├── public/                👈 Put images/files here
├── index.html             👈 HTML template
└── tailwind.config.js     👈 Design system config
```

---

## Getting Help

### Documentation
- 📖 Full README: `README-PROJECT.md`
- 🚀 Deployment: `DEPLOYMENT.md`
- 📋 Summary: `PROJECT-SUMMARY.md`

### Useful Resources
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/)

### For Technical Issues
1. Check error message in terminal
2. Search the error on Google/Stack Overflow
3. Restart the development server
4. Clear cache and reinstall dependencies

---

## Development Workflow

### Daily Work
```bash
# Morning: Start server
npm run dev

# Work on your changes
# Save files - see live updates

# Evening: Stop server
Ctrl+C (or Cmd+C on Mac)
```

### Before Committing
```bash
# Check for errors
npm run lint

# Test production build
npm run build
npm run preview
```

---

## Pro Tips

1. **🔥 Keep terminal visible** - You'll see errors immediately
2. **💾 Save often** - Changes appear instantly
3. **📱 Test on mobile** - Open on your phone using network URL
4. **🎨 Use browser DevTools** - Press F12 to inspect elements
5. **⚡ Hot reload magic** - Edit and see changes without refresh!

---

## Success Checklist

After installation, verify:
- [ ] Development server starts without errors
- [ ] Website loads at http://localhost:5173
- [ ] All sections are visible
- [ ] Navigation works (click menu items)
- [ ] Animations are smooth
- [ ] Mobile menu works (resize browser)
- [ ] Contact form shows success message

---

## You're Ready! 🚀

The Project Nurture website is now running on your machine. Start customizing and make it your own!

**Happy coding!** 💚

---

**Need help?** Check the other documentation files or reach out to the development team.

_Built for Project Nurture - Wellness Begins with Green_ 🌱
