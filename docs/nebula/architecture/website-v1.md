# Website Architecture — Professional Portfolio Website V1

**ACI that established this document:** ACI-001  
**Status:** Validated V1 architecture. Reversible by a later authorized ACI.

## Decision

The website is a static frontend:

- `public/index.html`
- `public/css/tokens.css`
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

ACI-003 repositioned the public narrative to Desktop Support / EUC / IT Support Operations Leadership. The static architecture is unchanged. Management leadership remains primary; engineering depth is reframed, not removed.

1. Overview / four-glance positioning
2. Full-circle career journey
3. Executive biography
4. Leadership philosophy
5. Leadership accomplishments / case studies
6. Four capability lenses (people, technology, improvement, AI-assisted)
7. AI-assisted engineering method
8. 30 / 60 / 90-day framework (Desktop Support / EUC)
9. Possible future applications (investigation only)
10. Career snapshot (executive resume facts)
11. Credentials and transferable project evidence
12. Contact

## What this does not lock

A later ACI may replace this with a framework, bundler, or hosting-specific layout. ACI-001 does not treat static HTML as a final forever architecture.

## Non-decisions

The following remain Operator handoff items and were not invented:

- Git remote URL / repository name
- Replit project name
- Whether this site replaces `sanil-tison-portfolio.replit.app`
- Custom domain
