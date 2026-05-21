# DriverScore — Transport Operations Dashboard

A modern, executive-grade logistics & telematics monitoring dashboard built with React + Vite + Tailwind CSS. Covers 4 operational pillars:

- **Driver Behavior & Safety** — Score trends, incident breakdown, driver management table
- **Cost Saving & Efficiency** — Fuel cost per km, cost breakdown, idle time per route
- **Delivery Operations** — Daily delivery performance, live fleet map, active delivery tracker
- **Fleet Utilization** — Vehicle status, weekly utilization, maintenance scheduling

## Features

- Dark / Light mode toggle
- Live map placeholder with animated fleet dots
- KPI summary cards with trend indicators
- Urgent Actions panel with critical/warning alerts
- Search + filter bar (Route, Fleet, Date)
- Recharts (Bar, Line, Pie) throughout
- Fully responsive layout with collapsible sidebar

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Deploy to Vercel

**One-click via Vercel CLI:**
```bash
npm i -g vercel
vercel --prod
```

**Or via GitHub:**
1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo
3. Vercel auto-detects Vite — no config needed (vercel.json is included)
4. Click Deploy ✓

## Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial DriverScore dashboard"
git remote add origin https://github.com/YOUR_USERNAME/driver-score-dashboard.git
git push -u origin main
```

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18.3 |
| Vite | 5.4 |
| Tailwind CSS | 3.4 |
| Recharts | 2.12 |
| Lucide React | 0.383 |
| clsx | 2.1 |
