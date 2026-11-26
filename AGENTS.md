# TechChain — Repository and Editorial Instructions

## 1. Purpose

This file defines the permanent working instructions for AI coding and editorial agents operating inside the TechChain repository.

TechChain is an independent engineering and technology publication focused on software engineering, technological innovation, research, and the broader implications of software across industries and society.

Its editorial ambition is to achieve the clarity, technical credibility, analytical rigor, and journalistic quality associated with respected engineering publications such as IEEE Spectrum.

These instructions apply to all automated work involving TechChain source code, article content, editorial metadata, and publication infrastructure.

**The highest priorities are content integrity, technical accuracy, editorial quality, and repository safety.**

Never sacrifice these priorities to complete a task more quickly.

---

## 2. Core Operating Principles

Follow these principles in every task:

1. Understand the requested operation before changing anything.
2. Inspect relevant existing files before proposing modifications.
3. Preserve the identity, subject, and historical context of published articles.
4. Never substitute unrelated content into an existing article.
5. Never duplicate an article unintentionally.
6. Never invent sources, statistics, technical facts, quotations, or historical events.
7. Never modify unrelated files.
8. Preserve existing URLs, publication identifiers, and historical publication dates.
9. Respect the established repository architecture and publishing conventions.
10. Validate changes and report exactly what was modified.

**A successful task is not merely one that produces changes. It is one that produces correct, justified, and appropriately scoped changes.**

---

## 3. Repository Structure and Publication Identity

The TechChain repository uses Markdown article sources and a file-based publishing system.

Known repository conventions include:

- Published article sources: `app/content/posts/`
- Archived editorial materials: `docs/editorial/archive/`
- Editorial audit registry: `docs/editorial/EDITORIAL_AUDIT.json`
- Article loading and routing logic: `app/services/posts.js`

Article URLs are derived from source filenames.

For example:

`app/content/posts/2020-01-04-quantum-computings-promise-depends-on-the-problem.md`

corresponds to:

`/posts/2020-01-04-quantum-computings-promise-depends-on-the-problem`

The source filename is therefore part of the article's publication identity.

The `draft` metadata field controls whether an article is published.

Editorial identifiers stored in audit documentation are not necessarily part of an article's frontmatter.

Before modifying content, verify these conventions against the current repository implementation.

### Publication Identity Rules

For existing articles:

- Do not change source filenames.
- Do not change existing URL slugs.
- Do not silently change publication dates.
- Do not overwrite required metadata.
- Do not change the draft status without explicit authorization.
- Do not create a second file representing the same publication.
- Do not move articles between published, draft, and archived collections without explicit instructions.
- Do not change an article's fundamental subject.
- Do not reuse an existing article's URL for unrelated content.

The title, source filename, publication metadata, and article body must remain logically consistent.

**An article about quantum computing must not become an article about distributed systems while retaining its original URL.**

If an identity mismatch is discovered, report it rather than silently rewriting the article.

---

## 4. Task Classification

Before acting, classify the requested task into one of the following modes.

### A. Editorial Audit — Read Only

Use this mode when asked to inspect, evaluate, compare, diagnose, or audit articles.

Allowed operations:

- Read repository files.
- Inspect frontmatter and content.
- Analyze duplicate articles.
- Compare article versions.
- Inspect Git history.
- Identify grammar and factual problems.
- Produce diagnostic reports.

Prohibited operations:

- Rewriting articles.
- Creating or deleting article files.
- Renaming files.
- Changing metadata.
- Restoring historical content.
- Modifying website code.
- Applying automatic corrections.

**An editorial audit must never modify the repository.**

Provide findings and recommended actions only.

### B. Content Recovery

Use this mode when explicitly asked to recover a corrupted, overwritten, or incorrectly replaced article.

Required procedure:

1. Inspect the current article.
2. Check for pre-existing uncommitted changes.
3. Examine relevant Git history.
4. Identify the last valid version matching the original article's subject.
5. Compare the current and historical versions.
6. Restore only the explicitly authorized article when evidence is sufficient.
7. Preserve its established publication identity.
8. Validate the result.

Do not perform stylistic improvements during recovery.

Do not invent missing content.

Do not restore a version when its historical identity cannot be established reliably.

If the target has conflicting uncommitted changes, do not overwrite them.

### C. Editorial Revision

Use this mode when explicitly asked to improve the writing or editorial quality of an existing article.

Preserve the article's identity and original subject.

Allowed improvements include:

- Grammar and clarity.
- Narrative structure.
- Technical explanations.
- Relevant context.
- Accurate examples.
- Factual corrections.
- Evidence and references.
- Balanced analysis.
- Stronger conclusions.

Do not turn the article into a different publication.

Do not add unrelated technical topics merely to increase depth.

### D. New Article Creation

Use this mode only when explicitly asked to create a new publication.

Before creating an article:

1. Search existing published articles.
2. Search drafts and archived materials when relevant.
3. Identify potentially overlapping publications.
4. Determine whether the proposed article offers a sufficiently distinct editorial contribution.
5. Check for slug and filename conflicts.
6. Follow the existing content schema and publishing conventions.

Do not create a new article if the request is to improve an existing one.

If a likely duplicate exists, report the overlap rather than creating a competing version without authorization.

### E. Website or Engineering Changes

Use this mode when explicitly asked to modify the application, frontend, backend, design, infrastructure, or development tooling.

Respect existing architecture and project conventions.

Keep changes within the authorized scope.

Editorial instructions must not be interpreted as permission to make unrelated application changes.

---

## 5. TechChain Editorial Identity

TechChain publishes engineering-informed journalism about software and technology.

Its editorial scope includes:

### Software Engineering

- Software architecture and system design.
- Programming languages and runtimes.
- Distributed systems.
- Cloud computing and infrastructure.
- Software testing and quality.
- Observability and reliability.
- Application and software supply-chain security.
- Developer tools and engineering practices.
- Software maintenance and technical debt.

### Research and Innovation

- Computer science research.
- Artificial intelligence and software development.
- Programming language research.
- Emerging computing technologies.
- Experimental engineering approaches.
- Scientific discoveries with technological implications.

### Industry and Business

- Software economics.
- Cloud infrastructure costs.
- Technology adoption.
- Enterprise architecture.
- Software in agriculture, healthcare, manufacturing, finance, transportation, and other industries.
- Open-source sustainability.
- Engineering organizations and productivity.

### Technology and Society

- Environmental impact of computing.
- Green software engineering.
- Technology regulation.
- Software's economic and societal implications.
- Engineering careers and professional development.
- The history and evolution of computing.

Articles do not need to be exclusively about programming.

However, they should provide a meaningful connection to engineering, software, computing, technological innovation, or their consequences.

Avoid generic technology commentary without original analysis or a clear editorial contribution.

---

## 6. Editorial Standards

All editorial work must prioritize factual substance over stylistic ornamentation.

### Writing Quality

Use:

- Clear and professional language.
- Natural journalistic prose.
- Accurate technical terminology.
- Logical explanations.
- Meaningful context.
- Evidence-based arguments.
- Cohesive paragraphs.
- Appropriate technical depth.
- Balanced conclusions.

Avoid:

- Generic introductions about technological evolution.
- Promotional or marketing language.
- Sensationalism.
- Unsupported predictions.
- Repetitive paragraphs.
- Unnecessary jargon.
- Artificially complex writing.
- Formulaic conclusions.
- Excessive rhetorical questions.
- Empty statements about innovation.
- Unnecessary pop-culture references.
- Repetitive AI-generated phrasing.

Every substantial paragraph should contribute information, explanation, evidence, analysis, or interpretation.

Do not increase article length merely to make it appear more comprehensive.

### Editorial Voice

TechChain should sound like a professional engineering and technology publication.

Articles should demonstrate informed curiosity, technical credibility, and independent judgment.

Use IEEE Spectrum as a benchmark for editorial quality, not as a source of text, proprietary structure, or distinctive phrasing to imitate.

---

## 7. Article-Specific Editorial Approach

**Never apply the same article structure, technical examples, or central argument to every publication.**

Determine the appropriate editorial approach from the original subject.

Possible formats include:

- Technical investigation.
- Engineering analysis.
- Research reporting.
- Technology industry analysis.
- Historical retrospective.
- Engineering opinion.
- Critical technology assessment.
- Case study.
- Technology and society analysis.

The structure must serve the subject.

For example:

An article about cloud repatriation may examine infrastructure economics, architecture, data transfer, operational constraints, and organizational trade-offs.

An article about programming languages may investigate language design, compiler behavior, type systems, performance, and memory safety.

An article about agricultural technology may examine embedded software, edge computing, data processing, connectivity, and practical adoption challenges.

An article about technology sustainability may investigate energy consumption, software efficiency, measurement methodologies, and environmental consequences.

Do not insert distributed tracing, OpenTelemetry, microservices, artificial intelligence, or cloud infrastructure into an article unless relevant.

**The article's original subject determines its content, not the examples contained in an editing prompt.**

---

## 8. Strict Protection Against Content Corruption

Previous automated editorial operations introduced serious publication integrity problems.

Prevent recurrence by applying the following mandatory safeguards.

### Before Editing

For each target article:

1. Read the entire current file.
2. Identify the article's subject.
3. Identify its central argument.
4. Read its title and metadata.
5. Verify that the body matches its publication identity.
6. Identify relevant existing references.
7. Inspect potentially related articles when duplication is a concern.
8. Check Git working-tree status.

### During Editing

- Remain within the original subject.
- Do not reuse unrelated article bodies.
- Do not copy sections from other publications merely to meet an editorial template.
- Do not introduce unrelated engineering examples.
- Do not overwrite other files.
- Do not silently remove valuable original information.
- Do not introduce new references without verification.
- Do not replace documented events with invented scenarios.

### After Editing

Verify that:

1. The article still addresses its intended subject.
2. The title matches the content.
3. The URL still represents the article.
4. The original argument has not been unintentionally replaced.
5. No unrelated publication was modified.
6. No duplicate article was created.
7. Required metadata remains valid.
8. The article contains no unexplained unrelated sections.

**If the final article no longer represents its original publication identity, the editing task has failed.**

---

## 9. Duplication Prevention

Before creating, substantially rewriting, or consolidating articles, inspect relevant existing publications.

Distinguish:

- Exact duplicates.
- Near-identical duplicates.
- Semantic duplicates.
- Related articles with different editorial perspectives.
- Updated versions.
- Intentional translations.
- Articles sharing terminology but addressing different questions.

Do not consider two publications duplicates simply because they cover the same technology.

For suspected duplication, compare:

- Central questions.
- Core arguments.
- Technical explanations.
- Examples.
- Evidence.
- Conclusions.
- Publication identities.

Do not merge or delete articles automatically.

Do not overwrite one article with another.

When consolidation is explicitly requested, identify unique information to preserve and explain the intended canonical article before modifying files.

Preserve historical URLs unless a redirect or migration is explicitly authorized and supported by the publishing system.

---

## 10. Language Policy

English is the target language for new TechChain editorial content.

For existing articles:

- Preserve the current language unless translation is explicitly requested.
- When translation is requested, produce natural professional English.
- Preserve the original meaning and technical accuracy.
- Avoid literal translations that sound unnatural.
- Do not change the subject during translation.
- Do not silently translate unrelated articles.
- Maintain consistent terminology within each article.
- Do not mix Portuguese and English in editorial prose without a clear reason.

Historical article titles, names, quotations, and official technical terminology may remain in their original language where appropriate.

Recovery operations must preserve the language of the selected historical version unless explicitly instructed otherwise.

---

## 11. Sources, Evidence, and Factual Accuracy

Apply strict factual standards.

Prefer:

1. Primary research.
2. Official documentation.
3. Technical specifications.
4. Peer-reviewed publications.
5. Official incident reports and engineering postmortems.
6. Credible engineering publications.
7. Verifiable industry data.

Never fabricate:

- Citations.
- URLs.
- Research papers.
- Statistics.
- Benchmarks.
- Technical specifications.
- Interviews.
- Expert quotations.
- Production incidents.
- Historical events.

Verify time-sensitive statements before publication.

Distinguish:

- Established facts.
- Documented research results.
- Hypothetical examples.
- Editorial interpretations.
- Predictions and uncertainties.

Do not present hypothetical scenarios as real production incidents.

Do not present illustrative numerical values as measured results.

If a significant claim cannot be verified, qualify it, remove it when appropriate, or report the uncertainty.

Preserve existing accurate references.

Use the repository's established citation and linking conventions.

---

## 12. Metadata and Historical Integrity

Treat publication metadata as part of the historical record.

Do not change:

- Original publication dates without explicit authorization.
- URL slugs.
- Source filenames.
- Draft status.
- Required frontmatter fields.
- Historical identifiers.

An editorial revision does not justify pretending that an article was originally published more recently.

If the content management system supports updated dates, use them only when appropriate, accurate, and authorized.

Do not introduce unsupported metadata fields.

Do not assume that a more attractive headline justifies changing the article's identity.

For historical article recovery, prefer fidelity to the original publication over modernization.

---

## 13. Git Safety and Change Management

Before modifying repository files:

1. Inspect Git working-tree status.
2. Identify existing unrelated changes.
3. Determine the exact files authorized for modification.
4. Inspect relevant history when the task concerns article identity or recovery.

Never overwrite or revert unrelated user changes.

Do not execute destructive Git commands such as reset, clean, or force checkout to resolve editorial problems.

Do not automatically commit, push, rebase, or rewrite repository history.

Do not install dependencies unless the task explicitly requires it.

Do not modify project configuration as a side effect of editorial work.

### Default Modification Scope

For a request to revise one article:

**Modify exactly one existing article source file.**

For an audit:

**Modify zero files.**

For recovery:

**Modify only the explicitly authorized corrupted article.**

For multi-article operations:

Modify only the explicitly identified files after checking for conflicts and dependencies.

For engineering tasks:

Modify only files necessary to implement the requested change.

If additional changes would be required outside the authorized scope, report that limitation rather than silently expanding the task.

---

## 14. Validation Requirements

Use relevant existing validation tools when they can run safely.

For editorial changes, verify:

- Frontmatter validity.
- Markdown compatibility.
- Required metadata.
- Publication identity.
- Filename and URL preservation.
- Internal links when applicable.
- Content consistency.
- Language consistency.
- Absence of unintended duplication.

For application changes, run relevant existing tests or validation commands.

Avoid commands that unexpectedly generate or modify repository files during read-only tasks.

When practical, inspect the final Git diff.

Report any checks that could not be performed.

Do not claim validation succeeded if it was not executed.

---

## 15. Mandatory Final Report

After completing any authorized task, provide a concise report.

For editorial modifications, include:

1. The files inspected.
2. The files actually modified.
3. The article's original subject.
4. The changes implemented.
5. Whether publication identity was preserved.
6. Whether new references were introduced.
7. Any factual uncertainties.
8. Validation results.
9. Any unresolved issues.

For audits, include findings, evidence, severity, and recommended actions.

For content recovery, include the historical Git version used and evidence supporting the recovery.

Explicitly distinguish completed work from recommendations.

Never claim that an article was restored, corrected, or validated unless the corresponding operation was actually performed.

---

## 16. Prohibited Autonomous Actions

Unless explicitly authorized by the user, do not:

- Delete articles.
- Consolidate publications.
- Rename article source files.
- Change publication URLs.
- Rewrite unrelated articles.
- Convert articles to different subjects.
- Restore historical versions.
- Change publication dates.
- Publish drafts.
- Unpublish existing articles.
- Translate entire article collections.
- Modify website design.
- Change frontend or backend implementation.
- Install new dependencies.
- Modify publishing infrastructure.
- Commit or push repository changes.

Do not interpret a request to improve editorial quality as permission to restructure the website or reorganize the complete article collection.

When the requested operation is analysis-only, no repository modifications are permitted.

---

## 17. Decision-Making Under Uncertainty

When evidence is insufficient:

- Do not invent missing information.
- Do not silently make irreversible editorial decisions.
- Do not assume an article should be removed.
- Do not assume similar articles are duplicates.
- Do not assume historical content is outdated merely because it is old.
- Do not overwrite files whose correct identity is uncertain.

Prefer a clearly documented unresolved finding over an unsupported correction.

For routine, reversible improvements within the authorized scope, proceed using the repository's established conventions.

For potentially destructive changes, preserve the existing state and report the decision requiring authorization.

---

## 18. Final Quality Standard

Every TechChain article should be:

- Relevant to the publication's editorial identity.
- Faithful to its original subject.
- Technically and factually defensible.
- Clear and professionally written.
- Supported by appropriate evidence.
- Analytical rather than superficial.
- Distinct from other publications in the archive.
- Compatible with the existing publishing system.

Not every article needs to be extremely technical.

Not every article needs to follow the same narrative structure.

Not every existing article needs to be rewritten.

**Preserve valuable content, improve what genuinely needs improvement, and avoid unnecessary editorial churn.**

### Non-Negotiable Rule

**Never sacrifice an existing article's identity, accuracy, historical integrity, or editorial purpose in pursuit of a more sophisticated rewrite.**

The objective is to build TechChain into a credible, independent engineering and technology publication while protecting the integrity of its existing content and codebase.
