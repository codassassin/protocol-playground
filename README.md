# Packet City — Interactive Networking Lab

A browser-based, hands-on playground for learning how internet protocols and networks work. Build a topology, connect devices, send simulated packets, inspect protocol steps, use a network command shell, calculate subnets, and solve troubleshooting missions.

## Explore

- **Network builder:** add PCs, routers, switches, servers, DNS nodes and firewalls; drag devices around the canvas; edit hostnames and IPv4 addresses; connect and remove links.
- **Packet journey:** step through a web request: DNS query/answer, TCP three-way handshake, TLS 1.3 negotiation, HTTPS request and HTTP response.
- **Packet inspector:** inspect protocol fields and see the related OSI layer highlighted.
- **Command deck:** use simulated `ping`, `traceroute`, `nslookup`, `dig`, `curl`, `ip addr`, `ip route` and `arp -a`.
- **Subnet studio:** calculate IPv4 network, broadcast, mask, host range and preview smaller CIDR blocks.
- **Troubleshooting missions:** diagnose DNS, MTU, TCP handshake and routing scenarios.
- **Fault injection:** introduce DNS failure, packet loss, high latency or a blocked TCP/443 path.

## Run locally

No build step or dependencies are required.

1. Clone the repository.
2. Open `index.html` in a modern browser.

Or serve the folder with any static web server.

## GitHub Pages

This is a self-contained static site. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Important

Packet City is a learning simulator. The network builder, packet flow, command output and fault conditions are illustrative and run locally in the browser. It does **not** transmit real packets, capture traffic, run host operating-system commands, or configure a real firewall.

## Future roadmap

- Real packet/header byte encoders and decoders
- VLAN, NAT, DHCP, ICMP and BGP labs
- Editable routing tables and longest-prefix-match routing
- TCP retransmission, sequence/ACK, congestion and receive-window visualizers
- Save, load and share custom topologies
- Optional isolated backend for real packet capture in a controlled lab
