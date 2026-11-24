# Tech Chain Editorial Backlog

_Planning snapshot: 24 November 2026. This is a proposed editorial sequence, not a record of completed changes._

## Direction and decision rules

Focus Tech Chain on reported, technically specific software engineering: reliability, cloud operations, Java, architecture, and security. Publish two complementary formats: durable investigations of engineering decisions and timely analysis of changes that affect operators. Prefer a demonstrated mechanism and a clear consequence over a broad survey of a technology.

Assess each existing post for factual accuracy, original value, evidence, overlap, reader demand, and fit with this direction. A short or old article is not automatically a deletion candidate. Before retiring a published post, preserve any useful material in a stronger article, inspect internal and inbound links, and decide what to do with its URL. Preserve original publication dates when substantially revising an article and show an update date where the publishing system supports it.

## Phase 1 — Resolve credibility risks

**Goal:** Stop publishing claims that cannot currently be substantiated, and correct version-specific technical guidance.

1. **Verify the subject of [`AI Cloud Code`](app/content/posts/2026-01-08.md).** Identify the project, its repository or official documentation, and evidence for the article's adoption, performance, API-security, and support claims. Remove it from publication while this is checked. If the project or material claims cannot be verified, retire the post; if they can, rewrite it around documented facts and tested behavior.
2. **Correct [`Java thread dumps`](app/content/posts/2026-06-08.md).** State that `HotSpotDiagnosticMXBean.dumpThreads` was introduced in Java 21, test the sample against a stated JDK version, and explain the absolute-path/new-file requirement and the limits of virtual-thread coverage. [Oracle's API documentation](https://docs.oracle.com/en/java/javase/26/docs/api/jdk.management/com/sun/management/HotSpotDiagnosticMXBean.html) says the dump includes all platform threads but may include only some virtual threads. Investigate the file's `2026-06-08` name versus its `2026-06-04` publication date without casually changing its existing URL.
3. **Keep two existing drafts unpublished pending review.** Reframe [`H2 integration testing`](app/content/posts/2025-05-04-integration-testing-consistency-financial-systems.md) around differences between the test and production database; H2 [supports transactions and isolation levels](https://h2database.com/html/features.html), so the current consistency claim needs correction. For [`BMW blockchain`](app/content/posts/2021-05-04-evaluating-the-feasibility-of-blockchain-solutions.md), locate author records or primary sources for the described architecture and results. Retire it if those specifics cannot be substantiated.

**Exit criterion:** Every remaining published, version-specific claim in this group has a primary source or a reproducible check; unresolved drafts remain unpublished.

## Phase 2 — Strengthen the engineering archive

**Goal:** Turn promising but general posts into articles that help an experienced engineer make a decision.

1. **Architecture:** Rewrite [`Modular Monolith`](app/content/posts/2025-02-04-modular_monolith_architecture.md) around module-boundary enforcement, shared-process failure modes, deployment coupling, and scaling trade-offs. Correct its suggestion that modules in one deployable can normally be deployed and scaled independently. Move any distinct insight from [`Monolith First`](app/content/posts/2025-01-24-monolith_first_approach.md) into the stronger article, then assess the latter for retirement. Keep the revised article distinct from the existing [microservices analysis](app/content/posts/2026-02-08.md).
2. **Cloud economics:** Rebuild [`Cloud Repatriation`](app/content/posts/2025-09-04.md) around one explicitly hypothetical workload and a decision model covering utilization, egress, hardware, staffing, availability, recovery, and migration risk. Separate sample assumptions from documented provider pricing.
3. **Software quality:** Rework [`AI-Assisted Coding`](app/content/posts/2025-11-04.md) around specific review and verification failures. Rework [`SonarQube Test Coverage`](app/content/posts/2025-03-08-why-high-test-coverage-in-sonarqube-is-not-a-good-practice.md) around a concrete example of executed code with an untested behavior, plus the limits of the metric. Source claims about measured outcomes.

**Exit criterion:** Each revised article makes a defensible engineering argument, includes a concrete mechanism or example, and cites sources where they materially support factual claims.

## Phase 3 — Publish focused technical news

**Goal:** Report changes that alter operational decisions; avoid undifferentiated release roundups.

1. **Java 27 thread-dump compatibility:** Commission **“Will Java 27 Break Your Thread-Dump Parser?”** Oracle says the JSON output of `dumpThreads` and `jcmd Thread.dump_to_file` now represents thread identifiers, thread counts, and process identifiers as numbers rather than strings, and adds `threadDump.formatVersion` with value 2. Compare actual output from relevant JDK versions, test a parser that expects strings, and show a migration check. Link it to the corrected Java article. [Primary source: Oracle JDK 27 release notes](https://www.oracle.com/java/technologies/javase/27-relnote-issues.html).
2. **Kubernetes 1.37 controller behavior:** Commission **“What Kubernetes 1.37’s Watch-Cache Recovery Means for Custom Controllers.”** Explain when the API server can return HTTP 429 while its watch cache initializes, and test how a sample controller handles `Retry-After` and exponential backoff. State the relevant feature-gate history and affected conditions accurately. [Primary source: Kubernetes 1.37 release announcement](https://kubernetes.io/blog/2026/08/26/kubernetes-v1-37-release/).

Before publication, verify the release and version details again, distinguish upstream documentation from Tech Chain's inference, and include a tested example where practical. Publish at a pace the team can fact-check rather than committing to a volume target.

## Phase 4 — Consolidate and retire weak overlap

**Goal:** Make the archive coherent without discarding useful reporting or breaking readers' paths unnecessarily.

1. Compare [`SRE vs. DevOps vs. Platform Engineering`](app/content/posts/2025-01-04-sre_vs_devops_vs_platform_engineering.md) with [`DevOps and Platform Engineering`](app/content/posts/2024-12-24-devops-plataform-engineering.md). Keep the article that can support a specific, sourced operational distinction; merge unique material before retiring the other.
2. Review [`Web 3.0: A Reflection`](app/content/posts/2024-09-04-web-3-0-a-reflection.md) and older broad AI, remote-work, IoT, and sustainability explainers against the stated editorial direction. Retain any with original evidence, meaningful traffic, or a viable technical revision. Retire unsupported or redundant pieces after a link and traffic review.
3. Check internal links and the sitemap after each retirement. Provide redirects where the publishing system permits them; otherwise record and address links that would lead to missing pages.

**Exit criterion:** No retired post contains unique, unpreserved reporting; affected links and publication metadata have been checked.

## Publication gate for every phase

- Verify product, version, date, and security claims against primary sources.
- Label hypothetical incidents and numbers; never present them as measured production results.
- Explain the mechanism, failure mode, and trade-off behind each recommendation.
- Preserve publication identity and original date; mark substantial updates clearly.
- Check article links, Markdown compatibility, and the existing build/content validation before publishing.
