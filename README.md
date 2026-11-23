# Protocol Playground

An interactive, browser-based networking learning lab. Explore how protocols work through step-by-step simulations and packet inspection.

## Current labs

- HTTP / HTTPS journey
- DNS resolution
- TCP handshake and data flow
- UDP datagrams
- IP routing / TTL
- ARP
- TLS handshake

## Interactive features

- Animated network topology
- Step-by-step and auto-play simulation
- Adjustable simulation speed
- Packet inspector (decoded and raw-style view)
- OSI layer highlighting
- Scenario controls for DNS failure, packet loss, latency, and blocked ports
- Quick knowledge challenge

> This project currently uses illustrative simulations. It does not generate real network traffic or capture packets.

## Run locally

No build step is required.

1. Clone the repository.
2. Open `index.html` in a modern browser.

## Deploy with GitHub Pages

1. Push the project to a GitHub repository.
2. Open **Settings → Pages**.
3. Set the source to **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save. GitHub Pages will publish the site.

## Roadmap

- Drag-and-drop network topology builder
- More realistic packet/hex decoding
- Subnetting visualizer
- Routing-table simulator
- Simulated terminal: `ping`, `traceroute`, `dig`, `nslookup`, `curl`
- Troubleshooting missions and guided learning paths
- More protocol labs

## License

MIT (to be added when project licensing is finalized).
