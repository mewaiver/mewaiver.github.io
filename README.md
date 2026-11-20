# Tech Chain

Tech Chain is a technical blog built with Next.js and exported as a static site. The original articles are stored as Markdown in `app/content/posts/`. The CANIS KMS, Java thread dumps, and BMW blockchain posts retain their original titles, publication dates, and article text.

## Articles

Each Markdown file uses YAML frontmatter. Existing `title`, `date`, `category`, `author`, and `excerpt` fields continue to work. Optional fields include `authors` (name, affiliation, ORCID), `abstract`, `keywords`, `version`, `doi`, `pdf_url`, `code_url`, and `bibtex`. Articles do not need these fields. A citation action appears only when an article supplies its own `bibtex` field; ordinary articles display their original metadata and excerpt.

The home page supports text search and category filters. Article pages support a table of contents, code copying, tables, footnotes, figures, and math. Each page also has its own title, description, canonical URL, and social metadata.

Canonical category slugs are `ai`, `blockchain`, `cloud-computing`, `databases`, `digital-commerce`, `engineering`, `iot`, `security`, and `sustainability`. The validation script checks category values and common typos.

## Local development

```sh
npm ci
npm run dev
```

Run `npm run validate:publications` to check post metadata. `npm run build` creates the static export and regenerates the sitemap.
