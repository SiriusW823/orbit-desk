# Orbit Desk devlog

## Entry 1 — Turning a new tab into mission control

I started with a simple question: what should a new tab help me do? I chose three jobs—orient me in time, remind me what matters, and make it easy to begin a focused work session. I sketched the page around a large greeting, a local clock, and two functional panels instead of starting from a template.

The visual direction uses a deep green-black background, sharp lime controls, and a small orange accent. CSS gradients and an orbit animation create atmosphere without relying on stock illustrations or a UI kit. The layout collapses from two columns to one on smaller screens.

## Entry 2 — Adding behavior and testing it

I added a 25-minute focus timer with pause and reset controls. The task panel creates, completes, and removes priorities, then saves them in `localStorage` so they survive a reload. The greeting, clock, and date update from the visitor's own device.

I tested the site in a browser by starting the timer, confirming it counted down, adding a task, checking the updated count, and resetting the state. I also added keyboard focus styles, semantic labels, and reduced-motion handling. The result is a dependency-free HTML/CSS/JavaScript project that can be hosted on any static service.

## Next

- Publish the public GitHub repository
- Deploy the site
- Create the Stardance project and post these entries as devlogs
- Ship to the “Give Your Website a Pulse” mission

