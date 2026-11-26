# Architecture overview

This describes the current high-level shape of the project and will evolve during migration.

## Runtime
Packet City is a static React/Vite application for GitHub Pages. `src/main.jsx` renders `src/App.jsx`. Educational descriptions currently live in `src/education.js`.

Older non-React simulator and tutor assets remain during migration. Consult the active entry point and build configuration before editing files.

## Main areas
- **Lab definitions and flow:** presently embedded in the React application as topology and scripted steps.
- **Education content:** `src/education.js` holds summaries, step explanations and glossary content.
- **Presentation:** `src/app.css` styles the React interface and themes.
- **AI Tutor:** hosted in an iframe and communicates with the parent through messages; it uses a visitor-supplied API key.
- **Deployment:** Vite builds the static site; GitHub Actions deploys the artifact to Pages.

## Planned separation
The implementation is intended to move toward separate lab data, simulation logic, components, styling and tutor integration. Future architecture must not be described as implemented until it is.
