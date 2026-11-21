# Tech Chain — Editorial Design Reference

A fully static, responsive **HTML + CSS + tiny vanilla JavaScript** design reference for upgrading [techchain.com.br](https://www.techchain.com.br/) without redesigning its publishing backend or inventing a large catalog of stories.

**This is not a Next.js application or a production deployment.** It is a UI reference package for Codex to translate into the existing repository: https://github.com/mewaiver/mewaiver.github.io

## Open the preview

Unzip the archive and open `index.html` in a browser. All styles, scripts, and illustrations are local. No install, build step, internet connection, or external fonts are required.

For consistent browser behavior, you may also serve the folder with:

```bash
python3 -m http.server 8000
```

Then browse http://localhost:8000/

## Pages included

| File | Purpose | Content status |
| --- | --- | --- |
| `index.html` | Compact editorial homepage with **one real existing article** featured and a short latest list | Uses actual existing Tech Chain titles, publication dates, and bylines |
| `article.html` | Technical article template: header, content typography, code, mobile/desktop table of contents, print styling | Existing article title/date/author; **body text mostly a layout demonstration**, not a transcription |
| `profile-template.html` | Future reported professional-profile detail layout | **Clearly marked fictional structure, not an actual story** |
| `archive.html` | Searchable, filterable articles archive | Twelve actual titles/dates/authors from Tech Chain; excerpts shortened for this mockup. It is **not** the full archive. |
| `editorial-standards.html` | Proposed editorial policy layout | **Proposal only**, not a statement of current editorial operations |
| `assets/css/styles.css` | Layout, typography, responsive styles, design tokens, print CSS | Pure CSS |
| `assets/js/site.js` | Mobile menu, search/category filters, code-copy, active TOC | Progressive enhancement; no framework |
| `assets/img/*.svg` | Original editable cover art and favicon | No stock photos or fabricated real-person portraits |

## Design direction

- Serious, quiet, independent technology journal rather than a high-volume magazine.
- Looks finished with **zero new professional profiles** and the site's existing articles.
- One large featured story, a small latest-articles list, and a restrained About callout.
- Professional profiles can be introduced gradually without changing the overall hierarchy.
- Serif editorial headings, system sans-serif UI text, forest-green accent, warm off-white backgrounds, generous whitespace.
- Mobile-first considerations: collapsible menu, touch-friendly controls, single-column reading, collapsible TOC, horizontally scrollable code and tables.
- No fabricated publication scale, fake audience statistics, fake editorial team, or false media status.

## Important fidelity / compliance notes

1. **Do not overwrite published article copy with demo body text.** `article.html` deliberately shows a short layout sample. The current Markdown content is the source of truth.
2. **Do not publish `profile-template.html` as a real feature.** Its person-free sample narrative is illustrative. Real reported stories require real facts, independent editorial review, proper authorship, sources, and disclosures.
3. **Do not publish the policy as an existing operational fact** until the process is actually adopted, contact channels exist, and the team can fulfill it.
4. **Do not market the site as qualifying O-1A / EB-1A media.** Whether a piece of evidence satisfies an immigration criterion is a context-specific legal question; attractive layouts and published profiles alone do not guarantee eligibility.
5. The archive intentionally links rows to the same design template as a **visual/navigation demonstration**. Replace with each real post slug in Next.js.
6. `archive.html` uses category groupings solely to demonstrate the filter interface. The production app should derive its true categories from Markdown frontmatter.

## Suggested integration

See [CODEX_IMPLEMENTATION_BRIEF.md](CODEX_IMPLEMENTATION_BRIEF.md) for a ready-to-copy implementation prompt, file mapping, and acceptance checklist. Keep existing routes, Markdown, metadata, publication actions, category URLs, RSS/SEO, and current static export working.

## Visual check

Open the page at mobile widths (~375px) and desktop widths (~1440px); try archive search/filter, mobile navigation, the technical article's code-copy button, and print preview.
