# Website Architecture — Professional Portfolio Website V1

**ACI that established this document:** ACI-001  
**Status:** Validated V1 architecture. Reversible by a later authorized ACI.

## Decision

The website is a static frontend:

- `public/index.html`
- `public/css/styles.css`
- `public/js/main.js`

Local preview and Replit run use Python’s built-in HTTP server:

```text
python -m http.server 8080 --directory public
```

There is no application backend, database, authentication, CMS, bundler, or Node package.

Replit configuration:

- `.replit` run command serves `public/`
- deployment target is static, `publicDir = "public"`
- `replit.nix` provides Python 3

## Why this was treated as safely determined

ACI-001 requires the simplest professional architecture that satisfies the capability, forbids databases/auth/CMS/AI/backend services, and requires Replit hosting without redesign.

A static HTML/CSS/JS tree:

- starts locally with one documented command;
- has no production build step because `public/` is the production site;
- imports into Replit as a static app without architectural change;
- keeps professional content in one HTML document that can be updated without a CMS.

## Information architecture

Management leadership dominates. Technical evidence is last among the primary sections.

1. Overview / executive positioning
2. Executive biography
3. Leadership philosophy
4. Leadership accomplishments / case studies
5. IT Management expertise
6. 30 / 60 / 90-day framework
7. Career snapshot (executive resume facts)
8. Credentials and supporting technical evidence
9. Contact

## What this does not lock

A later ACI may replace this with a framework, bundler, or hosting-specific layout. ACI-001 does not treat static HTML as a final forever architecture.

## Non-decisions

The following remain Operator handoff items and were not invented:

- Git remote URL / repository name
- Replit project name
- Whether this site replaces `sanil-tison-portfolio.replit.app`
- Custom domain
