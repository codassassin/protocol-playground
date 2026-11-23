# Packet City — Gemini AI Tutor

The tutor calls a Cloudflare Worker. Your Gemini API key stays on the Worker as a secret and is never committed to this repository or exposed to the browser.

## Deploy the Worker
1. Open Cloudflare Dashboard: https://dash.cloudflare.com/
2. Go to **Workers & Pages** → create a Worker.
3. Name it (e.g. `packet-city-tutor`) and deploy a starter.
4. Open the Worker editor and replace its code with `gemini-worker.js` from this repository. Deploy.
5. In Worker settings, add a secret named **GEMINI_API_KEY**. Get a key from Google AI Studio: https://aistudio.google.com/app/apikey
6. Deploy/update the Worker again if prompted.

## Connect Packet City
1. Visit https://codassassin.github.io/protocol-playground/
2. Open **Network Tutor**.
3. Paste your deployed Worker URL into the endpoint field and click **Save**. The endpoint is saved in that browser's local storage.

## Topic restriction
The Worker instruction restricts answers to computer networking, internet protocols, Packet City and closely related network troubleshooting/security fundamentals. Off-topic prompts are refused. Prompt instructions are not a perfect security boundary, however, and this public endpoint should not be used with sensitive information.

## Security and limits
- The Gemini key is a Cloudflare Worker secret, not a frontend key.
- The Worker only accepts requests whose browser Origin is the Packet City GitHub Pages origin, and it validates request size/message length.
- Origin checks do not stop all abuse (e.g. direct requests can forge Origin). Add a robust rate limiter or Cloudflare Turnstile before broad promotion if abuse becomes a concern.
- Gemini free tier quotas, eligible models and availability may change.
