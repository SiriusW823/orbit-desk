# Orbit Desk

Orbit Desk turns a blank browser tab into a calm personal mission-control dashboard. It keeps the next useful action visible without becoming another noisy productivity app.

## Features

- Live local clock and time-aware greeting
- 25-minute focus timer with pause and reset controls
- Priority list saved locally between visits
- Web search and useful launch-pad links
- Responsive, keyboard-friendly interface with reduced-motion support

## Why I built it

New tabs are opened dozens of times a day. I wanted each one to offer a small reset: see the time, choose one priority, and start a focused work window. The visual direction borrows from mission-control displays while staying warm and readable.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server.

## How it works

This project uses only HTML, CSS, and JavaScript. The focus timer is driven by a one-second interval. Priorities use `localStorage`, so they survive reloads without an account or server. Everything else is deliberately lightweight and works without an API key.

## Stardance submission checklist

- [x] Custom UI built with HTML, CSS, and JavaScript
- [x] Real interactive features: timer, persistent tasks, live clock, and search
- [x] Responsive layout and accessible controls
- [ ] Public GitHub repository
- [ ] Deployed production URL
- [ ] Stardance devlogs and final project submission

## License

MIT

