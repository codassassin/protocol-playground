# Simulation model and limitations

## Current model
The React labs use predefined sequences of steps. Each step describes a sender, recipient, message label, explanation and selected fields. The UI presents this sequence as a visual topology flow.

This is a guided educational model, not a packet-level emulator or a dynamic implementation of all protocol behavior.

## Simplifications
Depending on the lab, the walkthrough may omit state machines and timing, complete packet encoding/checksums, retransmissions and concurrency, dynamic routing/policy/cache decisions, or device and operating-system differences.

Fault scenarios are educational abstractions and should not be assumed to reproduce real device or network behavior.

## Accuracy expectations
When updating a lab: identify the behavior being taught; check primary references and errata; explain simplifications; update message fields and text; verify navigation, reset, playback and fault behavior; document unresolved limitations.

## Direction
Reusable simulation components and stronger validation are goals, not claims that current labs are full protocol engines.
