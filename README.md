# Packet City

Packet City is a static, GitHub Pages-compatible networking playground.

## React migration (first stage)
The entry point is now a React/Vite shell. Existing protocol labs remain preserved in `legacy.html` during migration so features aren't lost. Labs and tools will be migrated to native React components in stages.

## Build
```bash
npm install
npm run build
```

## GitHub Pages
The workflow `.github/workflows/pages.yml` builds Vite and publishes `dist`. Set repository Settings → Pages → Source to **GitHub Actions**.

No backend is required. The site is designed for static GitHub Pages hosting.
