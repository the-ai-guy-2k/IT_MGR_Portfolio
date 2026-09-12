# Content / Data Model — Professional Portfolio Website V1

**ACI that established this document:** ACI-001  
**Authoritative source:** `docs/nebula/artifacts/source/Sanil_D_Tison_IT_Management_Leadership_Portfolio_V3.pdf`

The V1 website is static. There is no database. The content model is the section map encoded in `public/index.html`.

## Entities

| Entity | Source in V3 | Website location |
|--------|----------------|------------------|
| Candidate identity | Cover / executive positioning | `#overview`, `#contact` |
| Leadership doctrine | ADVANCE THE TRUTH TILL MISSION COMPLETION | `#overview` quote, `#philosophy` |
| Executive biography | Section 2 | `#biography` |
| Leadership case studies | Section 4 | `#leadership-work` |
| IT management domains | Section 5 | `#expertise` |
| 30 / 60 / 90-day framework | Section 6 | `#ninety-day-plan` |
| Employment history | Section 1 career snapshot | `#experience` |
| Certifications | Sections 1 and 7 | `#credentials` |
| Technical evidence | Section 7 | `#credentials` |
| Open evidence harvest items | Sections 4 and 7 | `#credentials` harvest note; case-study evidence lines |

## Evidence rules encoded in the model

- Contact values and external URLs are only those present in Portfolio V3.
- LinkedIn is not present in V3 and is not on the website.
- Team size, budget/spend authority, and quantified operational outcomes are not stored as facts.
- American Tower (2021 – 2022) and AUSGAR (2018 – 2020) retain an explicit date-validation-open marker.
- TAIG start date is not present in V3 and is not invented; the role is shown as Current.
- No testimonials, client logos, or invented certifications.

## Update path

To change professional claims after launch, edit `public/index.html` only after the source evidence is updated. Do not strengthen copy in CSS/JS. JS provides navigation behavior only.
