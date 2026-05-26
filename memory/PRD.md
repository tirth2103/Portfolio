# Tirth Patel — Cybersecurity/Network Portfolio (PRD)

## Original problem statement
Build a fully functional network/cybersecurity-themed portfolio website with an interactive TCP handshake intro, working contact form, downloadable resume, project & experience sections, and Google Analytics tracking for key button clicks (Resume downloads, LinkedIn clicks, Contact submits).

## Personas
- **Visitor / Recruiter**: Lands on the site → completes TCP handshake intro → browses portfolio → can download resume, view LinkedIn, or contact via the form.

## Core requirements
1. Dark cybersecurity/terminal aesthetic (React + Tailwind).
2. Interactive TCP handshake gate (SYN → SYN-ACK → ACK) on first visit.
3. Sections: Hero, About, Skills, Projects, Experience, Education, Contact.
4. Working contact form (sends email, frontend-only after Feb 2026 switch to Web3Forms).
5. Resume PDF served as a static asset (`/public/resume.pdf`).
6. Google Analytics (GA4 — `G-8ZJ17SKDJ7`) with custom `gtag` events for:
   - `download` → Resume button
   - `click` → LinkedIn link
   - `form_submit` → Contact form
7. Deployable as a **frontend-only static React site** (no backend dependency).

## Architecture (current)
- **Frontend**: React + Tailwind (`/app/frontend`).
  - `src/components/Hero.jsx` — gtag events on Resume + LinkedIn.
  - `src/components/Contact.jsx` — **Web3Forms** direct submission (FormData) + gtag form_submit.
  - `public/resume.pdf` — static resume.
  - `public/index.html` — GA gtag.js base snippet.
- **Backend**: Still present (FastAPI + MongoDB) but **no longer used by the frontend**. The `/api/contact` endpoint is dormant. Site can be deployed as static-only.

## 3rd-party integrations
- **Web3Forms** (contact form) — access key `64c06f19-8715-4adb-9d52-5e01725fca36`, endpoint `https://api.web3forms.com/submit`. Submitted via `FormData` to avoid CORS preflight.
- **Google Analytics 4** — `G-8ZJ17SKDJ7`, custom events on key buttons.

## CHANGELOG
- 2026-02 — Contact form migrated from FastAPI/Gmail SMTP to **Web3Forms** direct submission. Resume confirmed as static asset. Frontend is now backend-independent and deployable as a static site.
- 2025-12 — Initial build: portfolio UI, contact email via Gmail SMTP, resume download, GA + custom button event tracking.

## Backlog / Future
- P2: Add per-project case study pages.
- P2: Add light/dark theme toggle (optional, current dark theme is intentional).
- P2: Add a hosted blog / writeups section for cybersecurity notes.

## Known constraints
- Web3Forms **blocks server/datacenter IPs** (free plan) — testing the form from the Emergent container's Playwright/curl will fail with CORS/403. Real end-user browsers on the deployed domain (`tirthc.in`) work normally.
- Custom GA events only appear after the latest build is **deployed** to the custom domain.
