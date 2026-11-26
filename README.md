# Packet City

**Packet City is an interactive networking playground for exploring how protocols and network flows work.**

It visualizes selected protocol walkthroughs as a node-and-message flow, with step controls, message details, learning notes and fault scenarios. It is an educational model—not a packet capture, network emulator, or full implementation of the protocols.

## Explore
- Follow protocol message sequences step by step.
- See participating hosts, network devices and services.
- Read message summaries and selected fields.
- Explore simplified what-if and fault scenarios.
- Use the optional AI Network Tutor with your own API key.

## Protocol labs
DNS, ARP, TCP, UDP, HTTP, ICMP, DHCP, NTP, SSH, SMTP, IMAP, FTP, SNMP, VLAN, NAT, OSPF, BGP, MQTT, QUIC, TLS, IP and WebSocket.

The depth and accuracy of each lab varies. Many flows are scripted illustrations. We are validating them against specifications and real-world behavior; please report inaccuracies.

## Run locally
Requirements: Node.js 20 or compatible recent release.
```bash
git clone https://github.com/codassassin/protocol-playground.git
cd protocol-playground
npm install
npm run build
npm run dev
```
Vite prints the local URL. The project is static and does not require a project-owned backend.

## Architecture and limitations
- [Architecture overview](docs/architecture.md)
- [Simulation model and limitations](docs/simulation-model.md)
- [Protocol accuracy and references](docs/protocol-accuracy.md)
- [AI Tutor notes](GEMINI_TUTOR_SETUP.md)

## Feedback
Corrections, usability feedback, lab ideas and documentation feedback are welcome. Because the code is proprietary, code contributions are not accepted unless separately agreed in writing. Start with [CONTRIBUTING.md](CONTRIBUTING.md) or open an issue. For lab reviews, include the protocol, step, expected and observed behavior, and a reference where possible.

## Project status
Packet City is actively developed. React and earlier implementation assets coexist during migration. Check the active source entry point before editing.

## AI-assisted development
AI tools may be used in development. Changes are reviewed and tested where practical; the goal is to make the code, simulations and decisions understandable and technically defensible. Independent review is encouraged.

## License and reuse

Packet City is proprietary and **not open source**. All rights are reserved. The repository is public for visibility, feedback and discussion—not to grant permission to reuse, copy, modify, redistribute, or create derivative projects from its code or assets. See [LICENSE](LICENSE) for the terms.

GitHub's own terms may allow viewing and forking within the platform. A public repository cannot technically prevent someone from copying what they can access, and this license notice does not override GitHub's platform terms or applicable law. It asserts the copyright restrictions on reuse outside permissions granted by those terms.
