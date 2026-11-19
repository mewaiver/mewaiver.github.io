# Tech Chain publication repository

The repository contains 84 Markdown publications in `app/content/posts/`. The site is a static Next.js export. Existing `author`, `excerpt`, and `category` fields remain valid; older articles render with their existing content and receive generated citation metadata at load time.

## Frontmatter

New papers can use these fields:

```yaml
---
title: "Example paper"
date: "2026-11-19"
category: "engineering"
type: "whitepaper" # whitepaper | research-note | article
tags: ["ai", "security"]
keywords: ["distributed systems", "security"]
abstract: "A structured 150–250 word abstract for a converted paper."
authors:
  - name: "Ada Example"
    affiliation: "Example Lab"
    affiliation_url: "https://example.org/lab" # optional
    orcid: "0000-0000-0000-0000"
pdf_url: "/papers/example.pdf"
code_url: "https://github.com/example/repository"
doi: "10.1234/example"
bibtex: |
  @article{example2026,
    title = {Example paper},
    author = {Example, Ada},
    year = {2026}
  }
version: "v1.2"
updated: "2026-11-19" # optional revision date
is_whitepaper: true
---
```

`type` defaults to `article` (or `whitepaper` when the legacy `is_whitepaper: true` is set). `version` defaults to `v1.0`. The `authors` array falls back to the legacy `author` value. `bibtex` is generated as `@techreport` for white papers or `@article` for other types when absent; an explicit citation overrides it. Use the real post URL `/posts/<slug>` and do not invent a DOI, PDF, code repository, ORCID, affiliation, or experimental result. Only supplied external links appear.

Canonical category slugs are `ai`, `blockchain`, `cloud-computing`, `databases`, `digital-commerce`, `engineering`, `iot`, `security`, and `sustainability`. The validation script rejects unknown categories and generic or misspelled tags.

The index searches title, abstract, keywords, and authors, and filters by the `category` domain. Markdown supports GFM tables and footnotes, fenced code with copy buttons, and `$inline$` or `$$display$$` KaTeX math. Repository-authored HTML can be used for `<figure>` and `<figcaption>`; the reading view numbers figures automatically. Level 2 and 3 Markdown headings populate the table of contents.

## Editorial baseline

The CANIS KMS, HotSpot thread dump API, and Ethereum/QLDB articles are reference conversions. Each has a 150–250 word structured abstract, explicit scope and limitations, an evaluation plan, and numbered references to primary documentation. Their original publication dates are retained, while `updated` records the editorial revision. Claims without measurements are presented as design analysis and marked with `[TODO: Insert Benchmark Metric / Diagram]` where validation remains necessary. The remaining archive is still in article form and can be converted individually using this baseline.
