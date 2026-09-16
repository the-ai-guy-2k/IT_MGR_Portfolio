# Content / Data Model — Professional Portfolio Website

**ACI that established this document:** ACI-001  
**ACI that repositioned public content:** ACI-003  
**Authoritative source:** `docs/nebula/artifacts/source/Sanil_D_Tison_IT_Management_Leadership_Portfolio_V3.pdf`  
**Positioning overlay:** ACI-003 (Desktop Support / EUC / IT Support Operations Leadership)

The website is static. There is no database. The content model is the section map encoded in `public/index.html`.

## Entities

| Entity | Source | Website location |
|--------|--------|------------------|
| Candidate identity | V3 cover + ACI-003 primary positioning | `#overview`, `#contact` |
| Four-glance (who / origin / now / next) | ACI-003 first-screen requirement | `#overview` |
| Leadership doctrine | ADVANCE THE TRUTH TILL MISSION COMPLETION | `#overview` quote, `#philosophy` |
| Full-circle career path | ACI-003 journey | `#journey` |
| Executive biography | V3 §2, reframed by ACI-003 | `#biography` |
| Leadership case studies | V3 §4, harvest language removed | `#leadership-work` |
| Four capability lenses | ACI-003 management capability | `#expertise` |
| AI-assisted method | ACI-003 AI truth | `#ai-method` |
| 30 / 60 / 90-day framework | V3 §6, adapted to Desktop Support / EUC | `#ninety-day-plan` |
| Possible future applications | ACI-003 possibilities (not implemented claims) | `#future-work` |
| Employment history | V3 §1 career snapshot | `#experience` |
| Certifications | V3 §§1 and 7 | `#credentials` |
| Transferable project evidence | V3 / existing validated projects | `#credentials` |

## Evidence rules encoded in the model

- Contact values and external URLs are only those present in Portfolio V3 (email, phone, GitHub, Docker Hub). LinkedIn is not on the website.
- Team size, budget/spend authority, ticket volumes, SLAs, and quantified operational outcomes are not stored as facts.
- No previous Desktop Support Manager or End-User Computing Manager title is stored.
- ServiceNow administration and Intune expertise are not stored.
- American Tower (2021 – 2022) and AUSGAR (2018 – 2020) remain year-range only; month precision is not invented on the public site.
- TAIG start date is not present in V3 and is not invented; the role is shown as Current.
- Desktop-technician origin is career narrative and a journey step, not a dated employer row.
- Duration language is “more than two decades,” not an unverified “26 years.”
- TAIG Service Portal, Nebula, and PSIS / Diamond IQ are transferable capability evidence, not desktop-support applications.
- Future desktop-support tooling items are investigation possibilities only.
- No testimonials, client logos, or invented certifications.
- Public pages do not carry harvest notes, date-validation badges, unresolved portfolio-link notes, or QEN terminology.

## Update path

To change professional claims after launch, edit `public/index.html` only after the source evidence is updated. Do not strengthen copy in CSS/JS. JS provides navigation behavior only.
