# LandlordCrew marketing site

Public, SEO-friendly landing page for landlords to discover the **LandlordCrew** iOS and Android apps.

Static HTML/CSS/JS — no build step. Optimized for **GitHub Pages**.

Live (after Pages is enabled): https://govikan.github.io/landlordcrew-site/

The product app / portal stay on https://landlordcrew.com (separate Vercel project in `LandlordOps`).

## Local preview

```bash
cd landlordcrew-site
python3 -m http.server 8080
# open http://localhost:8080
```

## Publish on GitHub Pages

1. Create a new public repo (e.g. `landlordcrew-site`) under your GitHub account.
2. Push this folder:

```bash
cd landlordcrew-site
git init
git add .
git commit -m "Add LandlordCrew marketing site for GitHub Pages"
git branch -M main
git remote add origin https://github.com/Govikan/landlordcrew-site.git
git push -u origin main
```

3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) deploys on every push to `main`.

### Custom domain (optional)

1. Add a `CNAME` file at the repo root with your host (one line), e.g. `www.landlordcrew.com`.
2. Point DNS (CNAME → `govikan.github.io`).
3. Update absolute URLs in `index.html` (canonical, Open Graph), `robots.txt`, and `sitemap.xml` to match the custom domain.

## Store links

| Platform | URL |
|----------|-----|
| App Store | https://apps.apple.com/app/id6822991206 |
| Google Play | https://play.google.com/store/apps/details?id=ai.landlordops.landlordops_app |

Edit defaults in [`js/site.js`](js/site.js) and the matching `href`s in [`index.html`](index.html).

## SEO included

- Title, description, canonical, Open Graph / Twitter cards
- JSON-LD (`Organization`, `SoftwareApplication` ×2, `WebSite`)
- `robots.txt` + `sitemap.xml`
- `404.html` for GitHub Pages
- `.nojekyll` (skip Jekyll processing)
