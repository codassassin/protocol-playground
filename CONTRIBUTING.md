# Contributing to Packet City

Contributions are welcome—from protocol corrections and issue reports to code, accessibility, design and documentation.

## Before making a change
1. Check existing issues to avoid duplication.
2. For substantial changes, open an issue describing the proposal first.
3. Keep pull requests focused; avoid unrelated refactors and UI changes.

## Reporting protocol or simulation issues
Include the lab and step, current behavior, expected behavior, an authoritative reference or reproducible explanation, and screenshots/recordings for visual issues.

## Development
```bash
npm install
npm run build
npm run dev
```

## Pull requests
- Explain motivation and scope.
- Describe behavior changes and include screenshots for visual changes.
- Note tests or manual verification performed.
- Do not introduce secrets or API keys.
- Preserve accessibility, responsive behavior and themes.
- Prefer readable code and small components over compressed or opaque implementations.

## Accuracy
Packet City is an educational visual model, not a full protocol implementation. Distinguish protocol behavior from simplifications and use primary references.

## AI-assisted work
AI tools may be used, but contributors are responsible for understanding, reviewing and testing their submissions. PRs should describe the change clearly and should not submit unreviewed generated code.

Treat contributors respectfully. Critique ideas and implementation, not people. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
