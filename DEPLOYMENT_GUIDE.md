# GitHub Pages Deployment Troubleshooting Guide

## Overview
This guide provides step-by-step instructions to deploy your React application to GitHub Pages and troubleshoot common deployment issues.

## Prerequisites
- GitHub repository with your React application
- Node.js and npm installed locally
- GitHub account with repository access

## Step 1: Repository Configuration

### 1.1 Update package.json
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 1.2 Install gh-pages
```bash
npm install --save-dev gh-pages
```

### 1.3 Update vite.config.ts
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repo name
  // ... other config
});
```

## Step 2: GitHub Repository Settings

### 2.1 Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### 2.2 Repository Permissions
Ensure your repository has the following permissions:
- Actions: Read and write permissions
- Contents: Read and write permissions
- Metadata: Read permissions
- Pages: Write permissions

## Step 3: Deployment Methods

### Method 1: Manual Deployment
```bash
npm run deploy
```

### Method 2: Automatic Deployment (GitHub Actions)
The included `.github/workflows/deploy.yml` file will automatically deploy on push to main branch.

## Common Issues and Solutions

### Issue 1: 404 Error on Page Load
**Problem**: Page shows 404 error when accessing directly or refreshing

**Solution**: 
1. Add a `404.html` file in the `public` folder that redirects to `index.html`
2. For client-side routing, ensure proper base URL configuration

### Issue 2: Assets Not Loading
**Problem**: CSS, JS, or image files return 404 errors

**Solutions**:
1. Verify `base` property in `vite.config.ts` matches your repository name
2. Check `homepage` field in `package.json` is correct
3. Ensure all asset paths are relative, not absolute

### Issue 3: Build Fails in GitHub Actions
**Problem**: GitHub Actions workflow fails during build

**Solutions**:
1. Check Node.js version compatibility
2. Verify all dependencies are listed in `package.json`
3. Check for TypeScript errors
4. Ensure build script works locally

### Issue 4: Deployment Branch Not Created
**Problem**: `gh-pages` branch doesn't exist

**Solutions**:
1. Run `npm run deploy` locally first
2. Check if gh-pages package is installed
3. Verify repository permissions

### Issue 5: Changes Not Reflecting
**Problem**: Latest changes don't appear on the deployed site

**Solutions**:
1. Clear browser cache
2. Wait 5-10 minutes for GitHub Pages to update
3. Check if deployment was successful in Actions tab
4. Verify correct branch is selected in Pages settings

## Step 4: Verification Steps

### 4.1 Local Testing
```bash
npm run build
npm run preview
```

### 4.2 Check Deployment Status
1. Go to repository "Actions" tab
2. Check latest workflow run status
3. Review any error messages

### 4.3 Verify Live Site
1. Visit `https://yourusername.github.io/your-repo-name`
2. Test all navigation links
3. Check browser console for errors
4. Test on different devices/browsers

## Step 5: Advanced Configuration

### Custom Domain (Optional)
1. Add `CNAME` file to `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update repository Pages settings

### Environment Variables
For production-specific configurations:
```typescript
// vite.config.ts
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
```

## Troubleshooting Checklist

- [ ] Repository name matches `base` in vite.config.ts
- [ ] `homepage` field in package.json is correct
- [ ] GitHub Pages is enabled in repository settings
- [ ] `gh-pages` branch exists and is selected
- [ ] All dependencies are installed
- [ ] Build completes successfully locally
- [ ] No TypeScript/ESLint errors
- [ ] Assets load correctly on deployed site
- [ ] Navigation works properly
- [ ] GitHub Actions workflow completes successfully

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages Package Documentation](https://www.npmjs.com/package/gh-pages)

## Support

If you continue to experience issues:
1. Check GitHub Pages status page
2. Review GitHub Actions logs for detailed error messages
3. Test deployment with a minimal React app first
4. Consider using alternative deployment platforms (Netlify, Vercel)

Remember to replace `yourusername` and `your-repo-name` with your actual GitHub username and repository name throughout the configuration files.