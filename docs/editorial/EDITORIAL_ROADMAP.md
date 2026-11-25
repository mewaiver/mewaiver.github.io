# TechChain editorial roadmap

This roadmap starts from the 2026-11-25 audit. Publication depends on evidence and technical review, not a calendar quota. The backlog records article-level work; this document records sequence and new opportunities.

## Phase 1 — Editorial cleanup (completed locally; not deployed)

- Inventory and score all 80 original Markdown articles, including two drafts.
- Remove confirmed redundancy and unsuitable pieces only after preserving unique consolidation points.
- Archive five historically useful pieces outside `app/content/posts/`.
- Unpublish three technically concerning articles pending verification.
- Repair links, archive/navigation behavior and sitemap generation; validate the static build.
- Track the hosting limitation: GitHub Pages can serve HTML redirect pages for equivalent old routes, but this repository cannot issue HTTP 301 responses. Do not call these permanent redirects.

## Phase 2 — Editorial standardization

- Address P0 items first: verify CANIS KMS implementation claims, correct modular-monolith deployment semantics, and test the Java thread-dump article against a named JDK.
- Resolve the mismatch between the edited distributed-diagnosis article's title and its old quantum-computing filename without silently changing its URL; plan a deliberate URL strategy.
- Complete P1 revisions for retries, distributed diagnosis, microservices complexity, cloud economics and testing claims.
- Verify author identities behind collective and first-person bylines. Keep original publication dates and disclose substantive updates.
- Add source-specific citations, versioned examples, limitations, publication-format metadata and technical review records only after the work is real.
- Evaluate category and tag migration from legacy `engineering`, `cloud-computing`, `security`, `ai` and `iot` to the seven core domains. Preserve existing routes until redirects can be reviewed.

## Phase 3 — Original technical contributions

- Develop new articles only when they answer an engineering question absent from the retained collection.
- Run reproducible experiments before publishing experimental conclusions. Publish code, data and environment details where lawful.
- Obtain genuine records and author confirmation before any CANIS or BMW case study; otherwise use an engineering perspective or leave unpublished.
- Use declared source-selection methods for technical surveys and clear validity limitations for research.
- Consider narrow technical notes when a single mechanism is the contribution.

## Phase 4 — Editorial maturity

- Introduce a documented technical review log, editorial approval register and contributor guidelines. Do not call existing posts peer-reviewed.
- Implement visible correction, retraction and version-history procedures and a post-publication challenge process.
- Evaluate persistent identifiers, ORCID integration, bibliographic metadata, and eventually ISSN/DOI registration only if governance and publication practice warrant them. No identifier is a substitute for evidence.
- Consider an advisory board only when qualified, willing contributors and clear responsibilities exist.

## Gaps and proposed original publications

These are commissions to investigate, not article drafts or claims of completed results. `P1` denotes strategic value; `P2` denotes a useful next layer after the current backlog.

### TC-NEW-01 — Deadline Propagation and Failure Containment in Request Chains

- **Type / domain / priority / complexity:** `TECHNICAL_ARTICLE`; Distributed Systems; `P1`; Large.
- **Problem:** When should a downstream operation stop after the caller's deadline has expired, and how should ambiguous side effects be reconciled?
- **Contribution:** A decision model for deadline budgets, cancellation, retry eligibility and reconciliation across a multi-hop request.
- **Method / evidence / datasets / experiments:** Derive constraints from gRPC deadline and retry specifications and primary reliability engineering accounts; implement a small reference service with explicit clocks and an instrumented failure-injection harness. No production dataset required. Run controlled delay and cancellation scenarios only if quantitative conclusions are proposed.
- **Primary literature:** gRPC deadline and retry documentation; AWS Builders Library on retries and idempotent APIs; Google SRE chapters on overload and cascading failures.
- **Dependencies / relation:** Build on `TC-ED-080` without repeating retry amplification. Confirm the payment example remains hypothetical unless authentic records arrive.
- **Acceptance:** Show deadline arithmetic, trace state transitions, distinguish cancellation from undoing a side effect, publish code and limitations.

### TC-NEW-02 — Consistency Under Network Partitions: A Reproducible Database Comparison

- **Type / domain / priority / complexity:** `EXPERIMENTAL_STUDY`; Distributed Systems; `P1`; Research-intensive.
- **Question:** What client-visible read and write behavior follows a controlled partition under explicitly chosen consistency settings?
- **Contribution:** Reproducible behavior traces and a careful distinction between documented guarantees and observed runs.
- **Method / evidence / datasets / experiments:** Pick two versioned systems only after verifying comparability; document topology, workload generator, partition mechanism, clocks, baseline and repeated runs. Dataset is a synthetic, published operation history with seeds; no customer data. Release raw histories and analysis script.
- **Primary literature:** Original consistency and partition-tolerance papers; each system's official consistency and failure documentation; Jepsen methodology as an engineering reference.
- **Dependencies / relation:** Extends retained database comparisons, which currently lack failure semantics. Infrastructure and reviewer with distributed-systems expertise required.
- **Acceptance:** No unsupported generalization from one workload; reproducible scripts, version matrix, histories and validity threats.

### TC-NEW-03 — JVM Memory Behavior Inside Containers

- **Type / domain / priority / complexity:** `EXPERIMENTAL_STUDY`; Computing Infrastructure; `P2`; Research-intensive.
- **Question:** How do selected JDK versions and heap settings affect memory headroom and termination under a container limit?
- **Contribution:** A bounded, reproducible comparison of JVM configuration behavior and the gap between heap and process memory.
- **Method / evidence / datasets / experiments:** Pin JDK and container-runtime versions, host details, cgroup version, image and workload. Sweep memory limits and heap settings with repeated runs; collect process memory, GC logs and exit status. Publish synthetic workload and raw CSV.
- **Primary literature:** Official OpenJDK/JDK container-awareness and GC documentation; container-runtime and cgroup specifications.
- **Dependencies / relation:** Complements `TC-ED-008` and `TC-ED-079`; do not infer production sizing from synthetic runs.
- **Acceptance:** Complete environment, reproducible commands, baselines and explicit limitations.

### TC-NEW-04 — Architectural Decomposition Economics

- **Type / domain / priority / complexity:** `ENGINEERING_PERSPECTIVE`; Software Architecture; `P1`; Large.
- **Problem:** Which measurable ownership, deployment and scaling benefits justify a new service boundary?
- **Contribution:** A transparent decision worksheet that includes migration and recurring operational costs, with counterexamples.
- **Method / evidence / datasets / experiments:** Synthesize primary architecture and operations literature; apply worksheet to explicitly hypothetical scenarios unless a genuine organization supplies records. No dataset or experiment required for a perspective; do not present scenario values as measured outcomes.
- **Primary literature:** Original microservices writing, software architecture decision records and primary SRE operational accounts.
- **Dependencies / relation:** Follows `TC-ED-077`, `TC-ED-069` and `TC-ED-070`, keeping distinct module and service questions separate.
- **Acceptance:** Declare assumptions, sensitivity to changing team size and load, and conditions under which the recommendation reverses.

### TC-NEW-05 — What Mutation Testing Adds to Coverage Metrics

- **Type / domain / priority / complexity:** `EXPERIMENTAL_STUDY`; Software Engineering; `P1`; Research-intensive.
- **Question:** Can tests with similar line coverage detect different injected faults in a chosen codebase?
- **Contribution:** Reproducible test-set comparison, with coverage and mutation scores interpreted as imperfect proxies.
- **Method / evidence / datasets / experiments:** Choose licensed reference programs, fixed test sets and pinned tooling; record mutation operator configuration, equivalent-mutant handling, repeated runs and raw reports. Dataset is the published code, tests and mutant results.
- **Primary literature:** Original mutation-testing research; official JaCoCo and PIT documentation; peer-reviewed empirical testing studies.
- **Dependencies / relation:** Extends `TC-ED-071` without declaring coverage universally bad.
- **Acceptance:** Baselines, tool versions, raw reports, limitations and no quality claim beyond observed programs.

### TC-NEW-06 — Evaluating AI-Assisted Code Review

- **Type / domain / priority / complexity:** `RESEARCH_ARTICLE`; Artificial Intelligence; `P2`; Research-intensive.
- **Question:** Under a defined task set, which defect classes are found or missed when an AI assistant is available to reviewers?
- **Contribution:** A transparent study protocol and observed results, with human-review and privacy limitations.
- **Method / evidence / datasets / experiments:** Design a consented study only after ethics and licensing review; predefine tasks, defect ground truth, assignment, baseline, scoring and analysis. Use licensed seeded repositories; collect consented review records. Pilot first; no results are presumed.
- **Primary literature:** Peer-reviewed AI coding evaluation and code-review studies; official model/tool documentation; applicable human-participant research policy.
- **Dependencies / relation:** Builds on `TC-ED-075`. Requires qualified study design and author/reviewer access.
- **Acceptance:** Ethics basis, preregistered protocol, dataset provenance, raw or shareable derived data, uncertainty and threats to validity.

### TC-NEW-07 — Cryptographic Key Rotation Failure Modes

- **Type / domain / priority / complexity:** `TECHNICAL_ARTICLE`; Cybersecurity; `P1`; Large.
- **Problem:** How can rotation, revocation and backup fail even when cryptographic primitives are sound?
- **Contribution:** A key-lifecycle state machine and failure analysis with testable invariants.
- **Method / evidence / datasets / experiments:** Study NIST key-management guidance, JCA provider contracts and official KMS documentation; build a small synthetic demonstration, not a claimed CANIS deployment. No real key material or production dataset needed. Test concurrency and recovery paths in a controlled harness.
- **Primary literature:** NIST SP 800-57 series; official JCA specifications; relevant key-management standards and vendor docs.
- **Dependencies / relation:** Complements `TC-ED-040`; never use its unverified CANIS outcomes as evidence.
- **Acceptance:** Threat model, key states, crash and rollback cases, working example and explicit limits.

### TC-NEW-08 — When Observability Data Misleads

- **Type / domain / priority / complexity:** `TECHNICAL_ARTICLE`; Distributed Systems; `P2`; Medium.
- **Problem:** How do sampling, missing context, cardinality and client-span boundaries distort an incident diagnosis?
- **Contribution:** A checklist of falsifiable alternative explanations for a slow trace, centered on inference limits.
- **Method / evidence / datasets / experiments:** Use OpenTelemetry and Prometheus specifications plus a small instrumented demonstration. No production dataset required. Inject context loss and export loss if making observed claims.
- **Primary literature:** OpenTelemetry trace, context and sampling specifications; W3C Trace Context; Prometheus label guidance.
- **Dependencies / relation:** Wait for consolidation into `TC-ED-001` so this article contributes a distinct diagnostic method.
- **Acceptance:** Demonstrate each claimed blind spot, separate absence of a span from absence of work, publish reproducible configuration.

## Decisions requiring human editorial judgment

- Verify the actual author and project records behind the CANIS KMS and BMW blockchain pieces. If evidence cannot be supplied, keep them unpublished or reclassify without case claims.
- Decide whether to rename the old quantum-computing slug after the pre-existing rewrite; preserve discoverability with a host-supported strategy.
- Decide whether broad security and IoT pieces merit investment after primary-source research. Their backlog statuses deliberately withhold publication approval.
- Prioritize a real review workflow before applying academic metadata or identifiers.
