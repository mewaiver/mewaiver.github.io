# Tech Chain

Tech Chain is a technical blog built with Next.js and exported as a static site. The original articles are stored as Markdown in `app/content/posts/`. The CANIS KMS, Java thread dumps, and BMW blockchain posts retain their original titles, publication dates, and article text.

## Articles

Each Markdown file uses YAML frontmatter. Existing `title`, `date`, `category`, `author`, `image`, and `excerpt` fields remain available. Optional fields include `authors` (name, affiliation, ORCID), `abstract`, `keywords`, `version`, `doi`, `pdf_url`, `code_url`, `bibtex`, and `featured: true`. Articles do not need these fields. A citation action appears only when an article supplies its own `bibtex` field; ordinary articles display their original metadata and excerpt.

To add a featured image to an article detail page, set `featuredImage` to a local path such as `/images/example.jpg` or an absolute HTTP(S) URL. `imageAlt`, `imageCaption`, and `imageCredit` are optional text fields. The image appears below the article header, with its proportions preserved and a maximum display height of 420px. Use an image for a technical article only when it adds context. The older `image` field does not create a detail-page featured image. Articles without `featuredImage` use the branded `public/editorial/og-fallback.png` for Open Graph and Twitter metadata; no fallback image appears in the article body. Images embedded in Markdown remain independent of the featured image.

The homepage features one published article and four recent articles. The full searchable, category-filtered archive is at `/artigos`; `/editorial` describes the publication's editorial principles. Existing `/about`, `/categories/[category]`, and `/posts/[slug]` URLs remain available. Article pages support a table of contents, code copying, tables, footnotes, figures, and math. Each page also has its own title, description, canonical URL, social metadata, and structured data.

Future professional profiles use the same Markdown collection and `/posts/[slug]` route. Set `type: profile` and provide `professional_name`, `professional_headline`, a real `author` or `authors` byline, `date`, `category`, and a sourced article body. Use `featuredImage` only for authentic photography of the subject or their work. Optional `profile_format: interview`, `sources`, and `relevant_links` fields are supported. Each link entry can be `{ label, url }`; sources may also be plain strings. No sample profile is published.

Canonical category slugs are `ai`, `blockchain`, `cloud-computing`, `databases`, `digital-commerce`, `engineering`, `iot`, `security`, and `sustainability`. The validation script checks category values and common typos.

## Local development

```sh
npm ci
npm run dev
```

Run `npm run validate:publications` to check post metadata. `npm run build` creates the static export and regenerates the sitemap.
