# Implementation brief for Codex

## Copy-paste prompt

> Please redesign the existing Next.js Tech Chain site using the static reference files in this folder as a **visual reference, not a replacement application**. Adopt the design tokens, typography, responsive structure, and accessible interaction patterns from `assets/css/styles.css`. Keep the real Markdown article body content, authors, dates, slugs, routes, metadata, TOC, code highlighting, versioning, citations, math, RSS / SEO, and static export functionality intact. Build the new homepage so it works using **only articles already in the repo**: feature one existing article and list a small number of recent posts. Move the full searchable/filterable post list to an archive route rather than rendering all posts on the homepage. Treat `profile-template.html` as a **future content type** and do not render fictional profiles on the live site. Implement an editorial/about route only with factual claims currently true; mark proposed policies as draft until adopted. Use the reference HTML and CSS to guide styling, but preserve and test existing behavior and accessibility. Avoid breaking URLs or existing public content. Confirm the implementation with a production build and desktop/mobile screenshots.

## Repo-aware integration map

The target repo (inspected 2026-11-21): `https://github.com/mewaiver/mewaiver.github.io`

| Current area | Proposed change |
| --- | --- |
| `app/page.js` | Render the compact hero + latest posts + about panel. Choose an existing non-draft post from `getAllPosts()`; do not hardcode a fictitious profile. |
| `app/components/PostList.js` | Preserve searchable/filterable behavior and year groupings for archive use; consider a `variant` prop for condensed list items or a new `ArticleIndex` component. Preserve real category labels. |
| `app/components/Post.js` | Adapt the hero header, reading column, TOC sidebar, code samples, and metadata styles; keep existing React component content and highlight.js functionality. |
| `app/styles/globals.scss` | Integrate CSS variables and styles carefully with existing bootstrap, katex, breakpoints and light/dark tokens. Do not blindly paste global selectors over current typography. |
| `app/services/posts` | Continue using this as the source of truth for Markdown articles and frontmatter. |
| Existing top bar/navigation | Provide Início, Artigos, Sobre / Editorial routes; use an accessible mobile menu. |
| New `/artigos` or `/archive` route | Use existing PostList data, search and filter controls. Keep canonical/category routes consistent. |
| Future `/perfis/[slug]` (optional) | Introduce only when real, independently reported profiles exist. Editorial story type, author and sources should be explicit. |
| About / Editorial route | Include only actual process and contact information. Avoid fabricated operational claims. |

## Layout component ideas

- `SiteMasthead`: topline + wordmark + responsive navigation.
- `FeaturedStory`: featured story header, synopsis, art/optional image, byline.
- `LatestStories`: four or five recent posts with category, author and date.
- `ArticleListing`: compact rows / full archive mode.
- `ArticleHeader`: distinct technical or profile format label, title, deck, byline/date.
- `ArticleBodyLayout`: actual Markdown content + responsive TOC.
- `EditorialPrinciples`: policy cards, only after reviewing factual accuracy.

## Functional constraints

- No external images or invented editorial portrait photos in production.
- Keep the complete archive discoverable; do not remove posts or rewrite Markdown.
- Internal navigation must point to real Next.js routes, not the static demo files.
- Existing links should remain valid (or be redirected if route restructuring is necessary).
- No claims that being profiled guarantees immigration eligibility, no false major-media claims, no invented audience data.
- Any sponsorship or commercial relationships should be disclosed appropriately; interview/reporting and contributed content should be distinguishable.
- Keep text in Portuguese for readers; 'Tech Chain' brand and short editorial tagline can remain bilingual if intentionally chosen.
- Preserve current dark-mode behavior or implement a complete dark theme; do not ship partly unreadable dark UI.
- Use headings in logical order and keyboard-operable navigation/search.

## Acceptance checklist

- [ ] Homepage renders coherently with **0 new profile stories**.
- [ ] At least 5 existing Markdown posts are reachable from homepage/archive.
- [ ] Search/category filtering works and shows a correct empty state.
- [ ] Article pages preserve original Markdown content and metadata without truncation.
- [ ] Code highlighting, copy actions, tables, formulas/KaTeX, TOC and citations still work.
- [ ] 375px, 768px, 1024px, 1440px widths checked.
- [ ] Keyboard focus visible, alt text present, WCAG contrast reviewed.
- [ ] Print view produces readable article pages.
- [ ] SEO canonical URLs and metadata preserved.
- [ ] Next.js build and static export pass without warnings or broken routes.
- [ ] No example profiles/policies presented as real published content.
