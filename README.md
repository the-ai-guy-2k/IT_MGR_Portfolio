# Sanil D Tison — IT Management Leadership Portfolio

Professional portfolio website presenting **Sanil D Tison** as an IT Management / Technology & Operations Leader.

This repository is the governed working copy for **Professional Portfolio Website V1** (ACI-001).

Authoritative professional-content baseline:

`docs/nebula/artifacts/source/Sanil_D_Tison_IT_Management_Leadership_Portfolio_V3.pdf`

Engineering experience is supporting evidence. It is not the primary positioning of the site.

## Current implementation state

**ACI-001 — Deployable Professional Portfolio Website V1.** Static site, locally runnable, Replit-compatible. Implementation on `feature/aci-001`. Validated release on `deployable`.

## Prerequisites

- Python 3 (used only to serve static files locally)
- A current web browser

No Node.js, package manager, database, or application backend is required.

Confirm Python:

```text
python --version
```

## Dependency installation

No package install is required. The site is static HTML, CSS, and JavaScript in `public/`.

## Local startup

From the repository root:

```text
python -m http.server 8080 --directory public
```

Open:

```text
http://127.0.0.1:8080
```

Stop the server with Ctrl+C.

## Production build

There is no separate production build step. The files in `public/` are the production website.

## Local preview

Use the local startup command above. The same `public/` directory is what Replit should serve.

## Replit execution / deployment assumptions

Operator-controlled Replit account actions, credentials, custom domains, and publish decisions are outside ACI-001.

If this repository is imported or pulled into a Replit App:

1. Run command: `python -m http.server 8080 --directory public`
2. Publish as **Static**, serving the `public` directory (see `.replit`)
3. No secrets, database, or backend services are required for the portfolio to render

Remote Git URL, Replit project name, and whether this site replaces the existing public portfolio URL remain Operator handoff items.

## Project layout

```text
.
├── public/                      # Served website files
│   ├── index.html
│   ├── css/styles.css
│   └── js/main.js
├── docs/nebula/                 # NSA / Nebula engineering memory
│   ├── aci/ACI-001.md
│   ├── acr/ACR-001.md
│   ├── architecture/
│   ├── data-model/
│   ├── artifacts/
│   ├── passdowns/
│   └── reports/
├── .replit
├── replit.nix
├── README.md
└── .gitignore
```

## Content rule

Do not invent metrics, team sizes, budgets, authority, employment dates, outcomes, testimonials, or certifications. Open evidence items from Portfolio V3 remain open on the website.
