# Quitiweb Landing

This repository contains the Vite + React landing page for [quitiweb.com](https://quitiweb.com). The project is configured to build with Tailwind CSS and deploy automatically to GitHub Pages using GitHub Actions.

The blank page and MIME type error you saw on GitHub Pages happens when the development entry point (`/src/main.jsx`) is published instead of the compiled bundle. The steps below ensure the production build is created and served correctly.

---

## Project setup

### Requirements

- Node.js 18 (LTS) or newer
- npm 9+

### Install dependencies

```bash
npm ci
```

### Local development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Production build

```bash
npm run build
```

The compiled site will be written to the `dist/` directory.

---

## GitHub Pages deployment

This repository ships with a workflow at `.github/workflows/deploy.yml` that builds the site and publishes the `dist/` folder to GitHub Pages every time `main` is updated.

### 1. Enable GitHub Pages

1. Go to **Settings → Pages** in the repository (`Quitiweb/qw-landing`).
2. For **Source**, choose **GitHub Actions**.
3. Save the settings.

The workflow uses the official `deploy-pages` action, so no manual branch configuration is required beyond setting the source to GitHub Actions.

### 2. Secrets (optional)

No secrets are required. The workflow uses the default GitHub token with the correct permissions.

### 3. Trigger a deployment

Push to `main` or click **Run workflow** on the Actions tab. When the action finishes, you can preview the site at the Pages URL shown in the workflow logs.

> **Note:** The build sets `VITE_BASE_PATH=/`. This is ideal for the custom domain `quitiweb.com`. If you need to browse the site via the repository URL (`https://quitiweb.github.io/qw-landing/`) temporarily, re-run the build with `VITE_BASE_PATH=/qw-landing/` and redeploy. For regular production deploys to the custom domain, keep the base path at `/`.

---

## Custom domain: quitiweb.com

The repository includes a `public/CNAME` file so the deployed site always keeps the `quitiweb.com` hostname.

### DNS configuration

Point the domain to GitHub's Pages infrastructure by creating the following DNS records with your domain registrar (Hostinger, Cloudflare, etc.). Replace the existing records if necessary.

| Type | Host | Value |
|------|------|-------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |
| CNAME | www | quitiweb.github.io |

Recommended TTL: 1 hour or lower while testing.

### GitHub Pages settings

1. In **Settings → Pages**, set the **Custom domain** to `quitiweb.com`.
2. Check **Enforce HTTPS** after GitHub finishes provisioning the SSL certificate.
3. GitHub will automatically create a `CNAME` file in the deployment. Our static `public/CNAME` guarantees the domain persists across builds.

### Verify HTTPS

- Visit `https://quitiweb.com`. It may take up to 24 hours for DNS changes to propagate.
- Use tools like [https://www.whatsmydns.net/](https://www.whatsmydns.net/) to confirm the A and CNAME records resolve globally.

If the domain still shows the old blank page, clear the browser cache or force-reload with `Cmd+Shift+R`.

---

## Troubleshooting

- **Blank page / MIME type `text/jsx`:** The deployment picked up the raw source. Ensure the GitHub Action finishes successfully and that the `dist/` folder is the artifact being deployed.
- **404 on subroutes:** Because the site is a single-page application, configure your DNS to point to `quitiweb.com` and always build with `VITE_BASE_PATH=/`.
- **DNS propagation delays:** GitHub might serve the default 404 until the custom domain resolves everywhere. Wait a few minutes and retry with a hard refresh.

---

## Manual deployment (optional)

If you ever need to deploy manually, run:

```bash
npm run build
npx gh-pages -d dist
```

Be sure to keep the `public/CNAME` file so the custom domain stays attached.

---

## Repository housekeeping

- Keep `main` production-ready; every merge triggers a deploy.
- Update content in `src/` and commit changes. The action will rebuild automatically.
- To change the custom domain, update the DNS records and edit `public/CNAME` accordingly before redeploying.
