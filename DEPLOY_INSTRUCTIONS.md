# Deployment Instructions

## Current Status
✅ All code changes committed to branch: `feature/omar-portfolio-build`
✅ All images in place
✅ No TypeScript errors
✅ Ready to deploy

---

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Description: "Production AI/ML Infrastructure Engineer Portfolio"
4. Visibility: **Public**
5. **DO NOT** check "Initialize this repository with a README"
6. Click "Create repository"

---

## Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Use these instead:

```bash
cd m1ke-portfolio

# Add your new repository as remote (replace YOUR-REPO-NAME)
git remote add origin https://github.com/Omizzy24/YOUR-REPO-NAME.git

# Push your branch
git push -u origin feature/omar-portfolio-build

# Optional: Merge to main and push
git checkout -b main
git merge feature/omar-portfolio-build
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Option A: Automatic Deployment (Recommended)

1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Select your new repository: `Omizzy24/YOUR-REPO-NAME`
4. Vercel will auto-detect Next.js settings:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"
6. Wait 2-3 minutes for build to complete
7. Your site will be live at: `https://YOUR-REPO-NAME.vercel.app`

### Option B: Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd m1ke-portfolio
vercel --prod
```

---

## Step 4: Custom Domain (Optional)

After deployment, you can add a custom domain:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `omaralshammary.com`)
4. Follow DNS configuration instructions

---

## Troubleshooting

### If build fails on Vercel:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (should be 18.x or higher)

### If images don't load:
- Verify images are in `/public` directory
- Check image paths start with `/` (e.g., `/me.png`)
- Clear browser cache

### If you need to make changes:
```bash
cd m1ke-portfolio
git checkout feature/omar-portfolio-build
# Make your changes
git add .
git commit -m "Your change description"
git push origin feature/omar-portfolio-build
# Vercel will auto-deploy
```

---

## Quick Reference

**Repository Location**: `/Users/omaral-shammary/Desktop/Portfolio_repos/Portfolio-WIP/m1ke-portfolio`

**Current Branch**: `feature/omar-portfolio-build`

**Files Changed**: 19 files (2,230 insertions, 614 deletions)

**Key Changes**:
- Hero section with your positioning
- 4 work experience entries
- 6 projects with impact metrics
- Systems philosophy section
- Awards and certifications
- All images in place

---

## Support

If you encounter issues:
1. Check Vercel build logs
2. Verify all images are present in `/public`
3. Ensure GitHub repository is public
4. Check that you're pushing to the correct branch

Your portfolio is production-ready and follows enterprise-grade standards!
