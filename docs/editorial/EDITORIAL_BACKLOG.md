# TechChain editorial backlog

Operational source of truth. The JSON file mirrors these item records for automation. Status denotes unmet evidence, never implied publication readiness.

## TC-ED-001 — Why Distributed Systems Remain Hard to Diagnose

- **Article:** TC-A-001; `app/content/posts/2020-01-04-quantum-computings-promise-depends-on-the-problem.md`; `/posts/2020-01-04-quantum-computings-promise-depends-on-the-problem`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 81; `MINOR_REVISION`; current `article`; target `TECHNICAL_ARTICLE`
- **Priority, status, complexity:** `P1`; `READY_FOR_REVISION`; Small
- **Domain:** Distributed Systems

**Editorial objective.** Separate trace mechanics from architectural implications; check sampling and clock caveats.

**Weaknesses.** Trace diagnosis is detailed and sourced; the hypothetical order incident overlaps the observability essay.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Why Distributed Systems Remain Hard to Diagnose”: Separate trace mechanics from architectural implications; check sampling and clock caveats.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Detection is the start of diagnosis”, “The trace is a map of recorded operations”, “A slow order, investigated without a shortcut”, “OpenTelemetry standardizes the evidence pipeline” for claims to keep or remove.

**Technical changes.** Separate trace mechanics from architectural implications; check sampling and clock caveats.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** OpenTelemetry trace data model; W3C Trace Context; Google SRE monitoring chapter. ; Original protocol specifications; Google SRE and AWS Builders Library engineering accounts; OpenTelemetry specifications. ; https://sre.google/sre-book/monitoring-distributed-systems/ ; https://opentelemetry.io/docs/specs/otel/trace/data-model/ ; https://www.w3.org/TR/trace-context/

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** Observability in Microservices: Beyond the Data: From 2026-03-08: trace context at trust boundaries; head versus tail sampling and added state cost; distinction between Collector health and instrumentation coverage.

**Dependencies.** Consolidation TC-CG-01 ; Technical review

**Known limitations.** Original body has 11 explicit external links and 1973 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Map every claimed diagnosis step to a specific trace, metric or log signal.
- Show the effect of a missing span and of head sampling on the hypothetical order trace.
- Separate local connection acquisition from remote partner processing in the decision table.

**Acceptance criteria.**

- Demonstrate: Map every claimed diagnosis step to a specific trace, metric or log signal.
- Demonstrate: Show the effect of a missing span and of head sampling on the hypothetical order trace.
- Demonstrate: Separate local connection acquisition from remote partner processing in the decision table.
- Separate trace mechanics from architectural implications; check sampling and clock caveats.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-004 — Comunicação entre stakeholders técnicos e de negócio

- **Article:** TC-A-004; `app/content/posts/2020-02-04-stakeholders-communication-challenge.md`; `/posts/2020-02-04-stakeholders-communication-challenge`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 40; `REWRITE`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Large
- **Domain:** Engineering Practice

**Editorial objective.** Replace generic practices with a concrete requirements ambiguity and decision record.

**Weaknesses.** Requirements-communication checklist and invented transfer example lack evidence, but domain-language issue is valuable.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Comunicação entre stakeholders técnicos e de negócio”: Replace generic practices with a concrete requirements ambiguity and decision record.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Fatores que Contribuem para o Desafio”, “Lacunas de Comunicação”, “Requisitos Vagos”, “Necessidades em Evolução” for claims to keep or remove.

**Technical changes.** Replace generic practices with a concrete requirements ambiguity and decision record.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Original domain-driven design and requirements-engineering literature. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 993 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Rewrite the money-transfer example as a labeled hypothetical requirement with preconditions and failure paths.
- Compare a user story, a use case and a domain vocabulary on the same ambiguity.
- Specify how a stakeholder would verify the resulting acceptance criteria.

**Acceptance criteria.**

- Demonstrate: Rewrite the money-transfer example as a labeled hypothetical requirement with preconditions and failure paths.
- Demonstrate: Compare a user story, a use case and a domain vocabulary on the same ambiguity.
- Demonstrate: Specify how a stakeholder would verify the resulting acceptance criteria.
- Replace generic practices with a concrete requirements ambiguity and decision record.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-006 — PostgreSQL vs MySQL: Benefícios e Contras de Cada Um

- **Article:** TC-A-006; `app/content/posts/2020-03-08-postgres-vs-mysql-benefits.md`; `/posts/2020-03-08-postgres-vs-mysql-benefits`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 39; `REWRITE`; current `article`; target `TECHNICAL_SURVEY`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Large
- **Domain:** Computing Infrastructure

**Editorial objective.** Build a versioned capability matrix and reproducible query examples.

**Weaknesses.** PostgreSQL/MySQL comparison is unsourced and does not pin versions or workload assumptions.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “PostgreSQL vs MySQL: Benefícios e Contras de Cada Um”: Build a versioned capability matrix and reproducible query examples.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review the lead and closing recommendation for claims to keep or remove.

**Technical changes.** Build a versioned capability matrix and reproducible query examples.

**Research and methodology.** Define the scope and source-selection rules for PostgreSQL vs MySQL: Benefícios e Contras de Cada Um; compare approaches on declared axes; record exclusions and unresolved disagreements.

**Primary sources to investigate.** PostgreSQL and MySQL official manuals for the pinned releases. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** Define the scope and source-selection rules for PostgreSQL vs MySQL: Benefícios e Contras de Cada Um; compare approaches on declared axes; record exclusions and unresolved disagreements.

**Diagrams, tables and code.** Source-selection table and versioned comparison matrix.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 654 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Pin PostgreSQL and MySQL release lines before comparing behavior.
- Choose a transaction, indexing and JSON-query workload and document the schema.
- Mark configuration-dependent behavior instead of declaring a universal winner.

**Acceptance criteria.**

- Demonstrate: Pin PostgreSQL and MySQL release lines before comparing behavior.
- Demonstrate: Choose a transaction, indexing and JSON-query workload and document the schema.
- Demonstrate: Mark configuration-dependent behavior instead of declaring a universal winner.
- Build a versioned capability matrix and reproducible query examples.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-007 — Serverless Functions: vantagens e desafios

- **Article:** TC-A-007; `app/content/posts/2020-04-04-serverless-pros-cons.md`; `/posts/2020-04-04-serverless-pros-cons`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 51; `MAJOR_REVISION`; current `article`; target `TECHNICAL_ARTICLE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Computing Infrastructure

**Editorial objective.** Choose one event workload and compare concrete runtime limits.

**Weaknesses.** Serverless benefits and limits are generic; cold starts, quotas and billing lack platform-specific evidence.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Serverless Functions: vantagens e desafios”: Choose one event workload and compare concrete runtime limits.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “O que é Serverless Function?”, “Benefícios das Serverless Functions”, “Malefícios das Serverless Functions” for claims to keep or remove.

**Technical changes.** Choose one event workload and compare concrete runtime limits.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Official provider function quotas, billing and event-delivery contracts. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 669 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Select a named provider and runtime, then record timeout, concurrency and payload limits.
- Trace one event through retries, duplicate delivery and idempotency requirements.
- Show a cost model with invocation, duration and idle-capacity assumptions.

**Acceptance criteria.**

- Demonstrate: Select a named provider and runtime, then record timeout, concurrency and payload limits.
- Demonstrate: Trace one event through retries, duplicate delivery and idempotency requirements.
- Demonstrate: Show a cost model with invocation, duration and idle-capacity assumptions.
- Choose one event workload and compare concrete runtime limits.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-008 — JVM vs GraalVM: diferenças de execução

- **Article:** TC-A-008; `app/content/posts/2020-04-08-jvm_vs_graalvm_differences.md`; `/posts/2020-04-08-jvm_vs_graalvm_differences`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 41; `REWRITE`; current `article`; target `TECHNICAL_ARTICLE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Large
- **Domain:** Computing Infrastructure

**Editorial objective.** Correct execution-model taxonomy and benchmark only defined workloads.

**Weaknesses.** JVM/GraalVM comparison conflates a runtime, JIT and native-image deployment and asserts performance without benchmarks.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “JVM vs GraalVM: diferenças de execução”: Correct execution-model taxonomy and benchmark only defined workloads.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “1. Origem e Objetivo”, “2. Linguagens Suportadas”, “3. Compilação Just-In-Time (JIT) vs AOT (Ahead-Of-Time)”, “4. Performance e Otimizações” for claims to keep or remove.

**Technical changes.** Correct execution-model taxonomy and benchmark only defined workloads.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** OpenJDK/Oracle JDK and GraalVM official documentation. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 1425 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Distinguish HotSpot JVM execution, GraalVM JIT and Native Image ahead-of-time deployment.
- Verify startup, steady-state and memory claims under one pinned JDK and workload.
- Document reflection and dynamic-proxy configuration needed by the example.

**Acceptance criteria.**

- Demonstrate: Distinguish HotSpot JVM execution, GraalVM JIT and Native Image ahead-of-time deployment.
- Demonstrate: Verify startup, steady-state and memory claims under one pinned JDK and workload.
- Demonstrate: Document reflection and dynamic-proxy configuration needed by the example.
- Correct execution-model taxonomy and benchmark only defined workloads.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-013 — LeetCode em entrevistas técnicas: limites

- **Article:** TC-A-013; `app/content/posts/2020-09-04-leetcode-do-not-work.md`; `/posts/2020-09-04-leetcode-do-not-work`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 51; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Engineering Practice

**Editorial objective.** Specify job criteria, alternatives and validity limits.

**Weaknesses.** Interview-puzzle critique has a coherent thesis but repeats limitations and has no hiring-outcome evidence.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “LeetCode em entrevistas técnicas: limites”: Specify job criteria, alternatives and validity limits.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Riscos e limites”, “Riscos e limites”, “Riscos e limites” for claims to keep or remove.

**Technical changes.** Specify job criteria, alternatives and validity limits.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Peer-reviewed hiring and job-sample validity research. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 1114 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Define the software-engineering abilities the interview is meant to measure.
- Compare a timed puzzle with a job-sample task using the same scoring rubric.
- Separate personal judgment from measured predictive-validity research.

**Acceptance criteria.**

- Demonstrate: Define the software-engineering abilities the interview is meant to measure.
- Demonstrate: Compare a timed puzzle with a job-sample task using the same scoring rubric.
- Demonstrate: Separate personal judgment from measured predictive-validity research.
- Specify job criteria, alternatives and validity limits.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-015 — Internet das Coisas com Java

- **Article:** TC-A-015; `app/content/posts/2020-11-04-internet-das-coisas-com-java.md`; `/posts/2020-11-04-internet-das-coisas-com-java`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `TUTORIAL`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Computing Infrastructure

**Editorial objective.** Make the sample executable and specify protocol and hardware assumptions.

**Weaknesses.** Java IoT article includes code but omits versions, build steps, failure cases and device constraints.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Internet das Coisas com Java”: Make the sample executable and specify protocol and hardware assumptions.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Aplicações práticas”, “Exemplo: Monitoramento de Temperatura com Java”, “1. Configuração do Ambiente”, “2. Código do Sensor de Temperatura” for claims to keep or remove.

**Technical changes.** Make the sample executable and specify protocol and hardware assumptions.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Official JDK, device SDK and transport protocol documentation. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 886 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Provide a buildable repository or complete source for the sensor and server.
- Pin JDK, board or simulator, transport protocol and library versions.
- Demonstrate reconnection, malformed readings and device-credential handling.

**Acceptance criteria.**

- Demonstrate: Provide a buildable repository or complete source for the sensor and server.
- Demonstrate: Pin JDK, board or simulator, transport protocol and library versions.
- Demonstrate: Demonstrate reconnection, malformed readings and device-credential handling.
- Make the sample executable and specify protocol and hardware assumptions.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-022 — Refatoração de código: práticas e exemplos

- **Article:** TC-A-022; `app/content/posts/2021-04-04-best-practices-for-code-refactoring.md`; `/posts/2021-04-04-best-practices-for-code-refactoring`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `TUTORIAL`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Software Engineering

**Editorial objective.** Create a compiling example with characterization tests and incremental commits.

**Weaknesses.** Refactoring advice and Java examples have a useful practical direction but no verified before/after behavior.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Refatoração de código: práticas e exemplos”: Create a compiling example with characterization tests and incremental commits.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “1. Mantenha os Testes”, “2. Refatore em Pequenos Passos”, “3. Não Faça Mudanças Desnecessárias”, “4. Aplicar os Princípios de Design de Software” for claims to keep or remove.

**Technical changes.** Create a compiling example with characterization tests and incremental commits.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Original refactoring literature and Java language/tool documentation. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 945 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Choose one Java method with a real code smell and compile its before state.
- Write characterization tests before each small refactor.
- Show how behavior and public API remain stable across the steps.

**Acceptance criteria.**

- Demonstrate: Choose one Java method with a real code smell and compile its before state.
- Demonstrate: Write characterization tests before each small refactor.
- Demonstrate: Show how behavior and public API remain stable across the steps.
- Create a compiling example with characterization tests and incremental commits.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-023 — Avaliando soluções de blockchain na BMW

- **Article:** TC-A-023; `app/content/posts/2021-05-04-evaluating-the-feasibility-of-blockchain-solutions.md`; `/posts/2021-05-04-evaluating-the-feasibility-of-blockchain-solutions`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 41; `REWRITE`; current `article`; target `CASE_STUDY`
- **Priority, status, complexity:** `P1`; `DATA_REQUIRED`; Research-intensive
- **Domain:** Cybersecurity

**Editorial objective.** Keep unpublished until author supplies authentic constraints, artifacts and outcomes.

**Weaknesses.** Draft BMW blockchain assessment claims methodology and outcomes without linked primary project evidence.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Avaliando soluções de blockchain na BMW”: Keep unpublished until author supplies authentic constraints, artifacts and outcomes.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Resumo”, “O que é o blockchain ?”, “Sobre as tecnologias utilizadas”, “Ethereum” for claims to keep or remove.

**Technical changes.** Keep unpublished until author supplies authentic constraints, artifacts and outcomes.

**Research and methodology.** Obtain consent and authentic design records; reconstruct context, constraints, alternatives, decisions and observed outcomes; label any unavailable data.

**Primary sources to investigate.** BMW/project primary records and original AWS QLDB/Ethereum documentation. ; NIST or relevant official security standards; vendor advisories; original protocol specifications.

**Evidence.** Author-verified implementation artifacts, constraints, decision records and observed outcomes; otherwise reclassify or leave unpublished.

**Datasets.** Authentic project records if available; redact confidential material with an explicit omission note.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** Obtain consent and authentic design records; reconstruct context, constraints, alternatives, decisions and observed outcomes; label any unavailable data.

**Diagrams, tables and code.** Verified system boundary diagram and decision timeline; no invented metrics.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Author-supplied authentic implementation evidence

**Known limitations.** Original body has 0 explicit external links and 2129 words; source presence alone does not verify accuracy. Keep unpublished until the publication gate is met.

**Open questions.** Which original author can verify the implementation and share records? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Request BMW/project records, author identity and permission to describe the work.
- Separate actual evaluation data from explanatory Ethereum and QLDB background.
- If decision records or outcomes are unavailable, remove case-study claims and reclassify.

**Acceptance criteria.**

- Demonstrate: Request BMW/project records, author identity and permission to describe the work.
- Demonstrate: Separate actual evaluation data from explanatory Ethereum and QLDB background.
- Demonstrate: If decision records or outcomes are unavailable, remove case-study claims and reclassify.
- Keep unpublished until author supplies authentic constraints, artifacts and outcomes.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- Author verifies context, decisions and observed outcomes; no simulated case results.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-026 — Descontinuação de serviços AWS: como reagir

- **Article:** TC-A-026; `app/content/posts/2021-08-04-deprecation-services-challenges-and-strategies.md`; `/posts/2021-08-04-deprecation-services-challenges-and-strategies`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `TECHNICAL_NOTE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Computing Infrastructure

**Editorial objective.** Choose one documented deprecation and trace dependency inventory to migration.

**Weaknesses.** AWS service-deprecation checklist names real operational concerns but no specific API or migration path.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Descontinuação de serviços AWS: como reagir”: Choose one documented deprecation and trace dependency inventory to migration.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “1. Interrupção nas operações e planejamento estratégico”, “2. Custos adicionais com migração e adaptação”, “3. Impacto na produtividade da equipe”, “4. Risco de perda de dados e downtime” for claims to keep or remove.

**Technical changes.** Choose one documented deprecation and trace dependency inventory to migration.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** AWS deprecation notice, service API documentation and migration guide. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 829 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Identify one specific AWS deprecation notice and exact end-of-support date from official documentation.
- List API consumers, data formats and operational dependencies.
- Lay out migration verification, rollback and customer-communication steps.

**Acceptance criteria.**

- Demonstrate: Identify one specific AWS deprecation notice and exact end-of-support date from official documentation.
- Demonstrate: List API consumers, data formats and operational dependencies.
- Demonstrate: Lay out migration verification, rollback and customer-communication steps.
- Choose one documented deprecation and trace dependency inventory to migration.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-027 — Código e complexidade: como manter o controle

- **Article:** TC-A-027; `app/content/posts/2021-08-08-code_is_not_the_problem_controling_complexity_is.md`; `/posts/2021-08-08-code_is_not_the_problem_controling_complexity_is`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 53; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Software Architecture

**Editorial objective.** Build a decision model with change coupling and counterexamples.

**Weaknesses.** Complexity article identifies coupling and change cost but asserts remedies as universal best practices.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Código e complexidade: como manter o controle”: Build a decision model with change coupling and counterexamples.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “O que é complexidade de software?”, “Como a complexidade afeta o desenvolvimento de software?”, “Causas da complexidade”, “1. Falta de Planejamento” for claims to keep or remove.

**Technical changes.** Build a decision model with change coupling and counterexamples.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Original software architecture and maintainability research. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 1309 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Define complexity as separate code, coordination and runtime costs.
- Use a change scenario to expose coupling between modules.
- Offer a counterexample where an abstraction or service split reduces total cost.

**Acceptance criteria.**

- Demonstrate: Define complexity as separate code, coordination and runtime costs.
- Demonstrate: Use a change scenario to expose coupling between modules.
- Demonstrate: Offer a counterexample where an abstraction or service split reduces total cost.
- Build a decision model with change coupling and counterexamples.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-028 — MongoDB vs Couchbase: Prós e Contras

- **Article:** TC-A-028; `app/content/posts/2021-08-16-mongodb_vs_couchbase_pros_and_cons.md`; `/posts/2021-08-16-mongodb_vs_couchbase_pros_and_cons`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 39; `REWRITE`; current `article`; target `TECHNICAL_SURVEY`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Large
- **Domain:** Computing Infrastructure

**Editorial objective.** Define comparison axes and verify current product documentation.

**Weaknesses.** MongoDB/Couchbase comparison lacks product versions, workload, consistency model and sources.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “MongoDB vs Couchbase: Prós e Contras”: Define comparison axes and verify current product documentation.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “MongoDB”, “Couchbase” for claims to keep or remove.

**Technical changes.** Define comparison axes and verify current product documentation.

**Research and methodology.** Define the scope and source-selection rules for MongoDB vs Couchbase: Prós e Contras; compare approaches on declared axes; record exclusions and unresolved disagreements.

**Primary sources to investigate.** MongoDB and Couchbase official versioned manuals. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** Define the scope and source-selection rules for MongoDB vs Couchbase: Prós e Contras; compare approaches on declared axes; record exclusions and unresolved disagreements.

**Diagrams, tables and code.** Source-selection table and versioned comparison matrix.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 669 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Pin MongoDB and Couchbase release lines and licensing/deployment assumptions.
- Compare query model, indexing, consistency and failure behavior using official docs.
- Specify a workload before discussing latency or throughput.

**Acceptance criteria.**

- Demonstrate: Pin MongoDB and Couchbase release lines and licensing/deployment assumptions.
- Demonstrate: Compare query model, indexing, consistency and failure behavior using official docs.
- Demonstrate: Specify a workload before discussing latency or throughput.
- Define comparison axes and verify current product documentation.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-034 — Zero Trust: Uma Abordagem de Segurança em Evolução

- **Article:** TC-A-034; `app/content/posts/2022-02-04-zero_trust.md`; `/posts/2022-02-04-zero_trust`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 51; `MAJOR_REVISION`; current `article`; target `TECHNICAL_ARTICLE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Cybersecurity

**Editorial objective.** Model one access path and map controls to NIST guidance.

**Weaknesses.** Zero Trust principles are relevant but treated as generic advice without identity, policy or enforcement design.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Zero Trust: Uma Abordagem de Segurança em Evolução”: Model one access path and map controls to NIST guidance.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review the lead and closing recommendation for claims to keep or remove.

**Technical changes.** Model one access path and map controls to NIST guidance.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** NIST SP 800-207 and applicable identity protocol specifications. ; NIST or relevant official security standards; vendor advisories; original protocol specifications.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 619 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Draw identity, device, policy decision and enforcement boundaries for one access request.
- Map each control to NIST SP 800-207 concepts and explain residual trust.
- Test an expired token, compromised device and service-to-service access path.

**Acceptance criteria.**

- Demonstrate: Draw identity, device, policy decision and enforcement boundaries for one access request.
- Demonstrate: Map each control to NIST SP 800-207 concepts and explain residual trust.
- Demonstrate: Test an expired token, compromised device and service-to-service access path.
- Model one access path and map controls to NIST guidance.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-036 — Redis vs Memcached: Compreendendo as Diferenças

- **Article:** TC-A-036; `app/content/posts/2022-03-08-redis-vs-memcached-understanding-the-differences.md`; `/posts/2022-03-08-redis-vs-memcached-understanding-the-differences`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `TECHNICAL_SURVEY`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Computing Infrastructure

**Editorial objective.** Verify persistence and eviction behavior against current docs; benchmark only if claimed.

**Weaknesses.** Redis/Memcached comparison has useful feature axes but unqualified performance claims and no versions.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Redis vs Memcached: Compreendendo as Diferenças”: Verify persistence and eviction behavior against current docs; benchmark only if claimed.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “O que é Cache?”, “O que é o Redis?”, “O que é o Memcached?”, “Principais Diferenças entre Redis e Memcached” for claims to keep or remove.

**Technical changes.** Verify persistence and eviction behavior against current docs; benchmark only if claimed.

**Research and methodology.** Define the scope and source-selection rules for Redis vs Memcached: Compreendendo as Diferenças; compare approaches on declared axes; record exclusions and unresolved disagreements.

**Primary sources to investigate.** Redis and Memcached official manuals and release notes. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** Define the scope and source-selection rules for Redis vs Memcached: Compreendendo as Diferenças; compare approaches on declared axes; record exclusions and unresolved disagreements.

**Diagrams, tables and code.** Source-selection table and versioned comparison matrix.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 1298 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Pin Redis and Memcached versions and supported persistence modes.
- Separate cache-only operation from Redis-as-database claims.
- Describe eviction, failover and consistency behavior under one concrete workload.

**Acceptance criteria.**

- Demonstrate: Pin Redis and Memcached versions and supported persistence modes.
- Demonstrate: Separate cache-only operation from Redis-as-database claims.
- Demonstrate: Describe eviction, failover and consistency behavior under one concrete workload.
- Verify persistence and eviction behavior against current docs; benchmark only if claimed.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-039 — A virtualização é um risco à segurança ?

- **Article:** TC-A-039; `app/content/posts/2022-06-04-risks-of-virtualization.md`; `/posts/2022-06-04-risks-of-virtualization`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 51; `MAJOR_REVISION`; current `article`; target `TECHNICAL_NOTE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Cybersecurity

**Editorial objective.** Map guest, host and hypervisor trust boundaries with primary advisories.

**Weaknesses.** Virtualization risks are a focused topic but currently lack isolation boundary and exploit conditions.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “A virtualização é um risco à segurança ?”: Map guest, host and hypervisor trust boundaries with primary advisories.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review the lead and closing recommendation for claims to keep or remove.

**Technical changes.** Map guest, host and hypervisor trust boundaries with primary advisories.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Hypervisor vendor security advisories and isolation documentation. ; NIST or relevant official security standards; vendor advisories; original protocol specifications.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 715 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Define guest-to-host and tenant-to-tenant threat models separately.
- Use a primary hypervisor advisory to trace one plausible escape path.
- Distinguish configuration hardening from guarantees supplied by isolation.

**Acceptance criteria.**

- Demonstrate: Define guest-to-host and tenant-to-tenant threat models separately.
- Demonstrate: Use a primary hypervisor advisory to trace one plausible escape path.
- Demonstrate: Distinguish configuration hardening from guarantees supplied by isolation.
- Map guest, host and hypervisor trust boundaries with primary advisories.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-040 — Java e JCA no CANIS KMS

- **Article:** TC-A-040; `app/content/posts/2022-06-08-java-and-jca-in-the-development-of-canis-key-management-system-kms-a-technical-perspective.md.md`; `/posts/2022-06-08-java-and-jca-in-the-development-of-canis-key-management-system-kms-a-technical-perspective.md`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 37; `REWRITE`; current `article`; target `CASE_STUDY`
- **Priority, status, complexity:** `P0`; `DATA_REQUIRED`; Research-intensive
- **Domain:** Cybersecurity

**Editorial objective.** Unpublish pending authentic implementation evidence and key-lifecycle review.

**Weaknesses.** CANIS KMS article asserts a real implementation and secure outcomes without code, design artifacts or author validation.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Java e JCA no CANIS KMS”: Unpublish pending authentic implementation evidence and key-lifecycle review.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “1. Java como Linguagem de Programação”, “Portabilidade e Desempenho”, “Gerenciamento de Exceções e Robustez”, “2. JCA (Java Cryptography Architecture)” for claims to keep or remove.

**Technical changes.** Unpublish pending authentic implementation evidence and key-lifecycle review.

**Research and methodology.** Obtain consent and authentic design records; reconstruct context, constraints, alternatives, decisions and observed outcomes; label any unavailable data.

**Primary sources to investigate.** Original CANIS code/design artifacts; JCA reference guide; NIST key-management guidance. ; NIST or relevant official security standards; vendor advisories; original protocol specifications.

**Evidence.** Author-verified implementation artifacts, constraints, decision records and observed outcomes; otherwise reclassify or leave unpublished.

**Datasets.** Authentic project records if available; redact confidential material with an explicit omission note.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** Obtain consent and authentic design records; reconstruct context, constraints, alternatives, decisions and observed outcomes; label any unavailable data.

**Diagrams, tables and code.** Verified system boundary diagram and decision timeline; no invented metrics.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Author-supplied authentic implementation evidence

**Known limitations.** Original body has 0 explicit external links and 1211 words; source presence alone does not verify accuracy. Keep unpublished until the publication gate is met.

**Open questions.** Which original author can verify the implementation and share records? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Obtain original CANIS architecture, code or design records and the responsible author’s confirmation.
- Map key creation, storage, rotation, revocation and backup to actual implementation.
- Remove statements that JCA alone guarantees secure storage or successful deployment.

**Acceptance criteria.**

- Demonstrate: Obtain original CANIS architecture, code or design records and the responsible author’s confirmation.
- Demonstrate: Map key creation, storage, rotation, revocation and backup to actual implementation.
- Demonstrate: Remove statements that JCA alone guarantees secure storage or successful deployment.
- Unpublish pending authentic implementation evidence and key-lifecycle review.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- Author verifies context, decisions and observed outcomes; no simulated case results.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-041 — Desafios e Práticas de Segurança em um SaaS

- **Article:** TC-A-041; `app/content/posts/2022-07-04-security-challenges-and-practices.md`; `/posts/2022-07-04-security-challenges-and-practices`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 51; `MAJOR_REVISION`; current `article`; target `TECHNICAL_ARTICLE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Cybersecurity

**Editorial objective.** Develop tenant-isolation and authorization failure paths.

**Weaknesses.** SaaS security piece has a useful deployment context but only a general control checklist.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Desafios e Práticas de Segurança em um SaaS”: Develop tenant-isolation and authorization failure paths.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Desafios de Segurança”, “Práticas de Segurança” for claims to keep or remove.

**Technical changes.** Develop tenant-isolation and authorization failure paths.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** OWASP ASVS and relevant SaaS tenant-isolation primary reports. ; NIST or relevant official security standards; vendor advisories; original protocol specifications.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 745 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Define a SaaS tenant-isolation boundary and authentication flow.
- Show how a cross-tenant object-reference bug would be detected and prevented.
- Separate provider responsibility from application responsibility.

**Acceptance criteria.**

- Demonstrate: Define a SaaS tenant-isolation boundary and authentication flow.
- Demonstrate: Show how a cross-tenant object-reference bug would be detected and prevented.
- Demonstrate: Separate provider responsibility from application responsibility.
- Develop tenant-isolation and authorization failure paths.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-043 — Tecnologias Emergentes para a Agricultura Inteligente

- **Article:** TC-A-043; `app/content/posts/2022-09-04-emerging-technologies-in-smart-agriculture-iot.md`; `/posts/2022-09-04-emerging-technologies-in-smart-agriculture-iot`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 53; `MAJOR_REVISION`; current `article`; target `TECHNICAL_SURVEY`
- **Priority, status, complexity:** `P1`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Computing Infrastructure

**Editorial objective.** Narrow to sensor-network design, source selection and field constraints.

**Weaknesses.** Agriculture IoT survey has connectivity and edge-processing material but mixes applications and unverified outcome claims.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Tecnologias Emergentes para a Agricultura Inteligente”: Narrow to sensor-network design, source selection and field constraints.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Sensores e conectividade”, “Rede e processamento”, “Aplicações práticas”, “Gestão da produção” for claims to keep or remove.

**Technical changes.** Narrow to sensor-network design, source selection and field constraints.

**Research and methodology.** Define the scope and source-selection rules for Tecnologias Emergentes para a Agricultura Inteligente; compare approaches on declared axes; record exclusions and unresolved disagreements.

**Primary sources to investigate.** Peer-reviewed field trials and LoRa/cellular protocol specifications. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** Define the scope and source-selection rules for Tecnologias Emergentes para a Agricultura Inteligente; compare approaches on declared axes; record exclusions and unresolved disagreements.

**Diagrams, tables and code.** Source-selection table and versioned comparison matrix.

**Deleted-source contributions.** Agricultura inteligente com IoT: From 2022-10-04: connect soil readings to irrigation actuation and evaluate device maintenance, connectivity and data-quality constraints.

**Dependencies.** Consolidation TC-CG-04 ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 1407 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Set source-selection criteria for field studies and wireless specifications.
- Compare LoRa, cellular and local mesh on range, power, payload and outage tolerance.
- Separate observed agricultural results from proposed sensor-network benefits.

**Acceptance criteria.**

- Demonstrate: Set source-selection criteria for field studies and wireless specifications.
- Demonstrate: Compare LoRa, cellular and local mesh on range, power, payload and outage tolerance.
- Demonstrate: Separate observed agricultural results from proposed sensor-network benefits.
- Narrow to sensor-network design, source selection and field constraints.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-050 — Nuvem pública vs infraestrutura interna: custos

- **Article:** TC-A-050; `app/content/posts/2023-08-04-public-cloud-vs-internal-infrastructure-cost-comparison.md`; `/posts/2023-08-04-public-cloud-vs-internal-infrastructure-cost-comparison`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P1`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Computing Infrastructure

**Editorial objective.** Build a transparent TCO worksheet and sensitivity analysis.

**Weaknesses.** Cloud/on-premises cost axes are useful but the text has no workload, horizon or cost model.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Nuvem pública vs infraestrutura interna: custos”: Build a transparent TCO worksheet and sensitivity analysis.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Custos Iniciais: Investimento de Capital versus Custos Operacionais”, “Custos Operacionais: Manutenção e Escalabilidade”, “Escalabilidade e Flexibilidade”, “Custos de Longo Prazo: Previsibilidade versus Incerteza” for claims to keep or remove.

**Technical changes.** Build a transparent TCO worksheet and sensitivity analysis.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Actual provider price sheets and infrastructure purchase/operations records. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 770 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Build a cost worksheet with hardware amortization, labor, egress, reserved capacity and utilization.
- Choose a workload and multi-year horizon before comparing cloud and local hosting.
- Run sensitivity analysis for traffic, failure recovery and price changes.

**Acceptance criteria.**

- Demonstrate: Build a cost worksheet with hardware amortization, labor, egress, reserved capacity and utilization.
- Demonstrate: Choose a workload and multi-year horizon before comparing cloud and local hosting.
- Demonstrate: Run sensitivity analysis for traffic, failure recovery and price changes.
- Build a transparent TCO worksheet and sensitivity analysis.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-053 — Kanban: Um Processo Prático no Desenvolvimento de Software

- **Article:** TC-A-053; `app/content/posts/2023-12-04-kanban-process-in-software-development.md`; `/posts/2023-12-04-kanban-process-in-software-development`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `TECHNICAL_NOTE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Engineering Practice

**Editorial objective.** Measure cycle time and blocked work in a defined delivery workflow.

**Weaknesses.** Kanban walkthrough contains a usable WIP example but prescribes ceremonies without flow evidence.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Kanban: Um Processo Prático no Desenvolvimento de Software”: Measure cycle time and blocked work in a defined delivery workflow.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Riscos e limites”, “Exemplo de um processo Kanban no desenvolvimento de software”, “1. Defina os estágios do processo de desenvolvimento:”, “2. Crie cartões de tarefa:” for claims to keep or remove.

**Technical changes.** Measure cycle time and blocked work in a defined delivery workflow.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Official Kanban guidance and empirical flow-metric studies. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** Kanban Kaizen: práticas e benefícios: From 2024-08-04: treat a visible bottleneck as a testable small change with a feedback cycle, not a guaranteed productivity gain.

**Dependencies.** Consolidation TC-CG-05 ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 818 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Specify a software-delivery workflow and explicit WIP policy.
- Collect lead time, cycle time and blocked-work data before and after one policy change.
- Explain why a daily stand-up is optional rather than a defining Kanban rule.

**Acceptance criteria.**

- Demonstrate: Specify a software-delivery workflow and explicit WIP policy.
- Demonstrate: Collect lead time, cycle time and blocked-work data before and after one policy change.
- Demonstrate: Explain why a daily stand-up is optional rather than a defining Kanban rule.
- Measure cycle time and blocked work in a defined delivery workflow.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-054 — Scrum vs Kanban Kaizen: diferenças práticas

- **Article:** TC-A-054; `app/content/posts/2024-01-04-scrum-process-in-software-development.md`; `/posts/2024-01-04-scrum-process-in-software-development`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Engineering Practice

**Editorial objective.** Use official method definitions and explicit team constraints.

**Weaknesses.** Scrum/Kanban comparison is useful but conflates Kaizen with a single method and has no decision conditions.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Scrum vs Kanban Kaizen: diferenças práticas”: Use official method definitions and explicit team constraints.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “O Processo Scrum”, “Desvantagens do Scrum”, “Kanban Kaizen: A Abordagem Fluida”, “Desvantagens do Scrum em relação ao Kanban Kaizen” for claims to keep or remove.

**Technical changes.** Use official method definitions and explicit team constraints.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** The Scrum Guide and official Kanban guidance. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 826 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Check Scrum terminology against the current Scrum Guide.
- Distinguish Kanban flow policy from Kaizen improvement philosophy.
- Compare the methods using work arrival, planning horizon and coordination constraints.

**Acceptance criteria.**

- Demonstrate: Check Scrum terminology against the current Scrum Guide.
- Demonstrate: Distinguish Kanban flow policy from Kaizen improvement philosophy.
- Demonstrate: Compare the methods using work arrival, planning horizon and coordination constraints.
- Use official method definitions and explicit team constraints.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-056 — Waterfall voltou? Quando o modelo faz sentido

- **Article:** TC-A-056; `app/content/posts/2024-04-04-waterfall-is-back.md`; `/posts/2024-04-04-waterfall-is-back`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Engineering Practice

**Editorial objective.** Compare delivery risk under stable versus changing requirements.

**Weaknesses.** Waterfall essay raises a valid choice question but its return narrative and regulatory claims are unsubstantiated.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Waterfall voltou? Quando o modelo faz sentido”: Compare delivery risk under stable versus changing requirements.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “O que é o modelo Waterfall?”, “Por que o Waterfall foi substituído pelo Agile?”, “O que está impulsionando o retorno do Waterfall?”, “1. Projetos com requisitos bem definidos e estáveis” for claims to keep or remove.

**Technical changes.** Compare delivery risk under stable versus changing requirements.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Original software life-cycle research and applicable regulatory text. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 861 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Define which requirement stability and regulatory evidence would favor sequential delivery.
- Compare rework and validation risk in two bounded scenarios.
- Remove unsupported claims that Waterfall has returned as a general trend.

**Acceptance criteria.**

- Demonstrate: Define which requirement stability and regulatory evidence would favor sequential delivery.
- Demonstrate: Compare rework and validation risk in two bounded scenarios.
- Demonstrate: Remove unsupported claims that Waterfall has returned as a general trend.
- Compare delivery risk under stable versus changing requirements.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-057 — Linux Kernel: impacto nos sistemas operacionais

- **Article:** TC-A-057; `app/content/posts/2024-05-04-how-linux-kernel-changed-technology.md`; `/posts/2024-05-04-how-linux-kernel-changed-technology`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 40; `REWRITE`; current `article`; target `TECHNICAL_NOTE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Large
- **Domain:** Computing Infrastructure

**Editorial objective.** Select one concrete mechanism such as namespaces and show its effect.

**Weaknesses.** Linux kernel article is an impact list without a kernel mechanism or primary source.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Linux Kernel: impacto nos sistemas operacionais”: Select one concrete mechanism such as namespaces and show its effect.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “1. Código Aberto e Colaboração Global”, “2. Desempenho e Eficiência”, “3. Segurança”, “4. Diversidade de Ambientes e Aplicações” for claims to keep or remove.

**Technical changes.** Select one concrete mechanism such as namespaces and show its effect.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Linux kernel documentation and source for the chosen mechanism. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 955 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Choose one kernel mechanism such as namespaces, cgroups or the scheduler.
- Trace its interface and a specific use in containers or performance engineering.
- Replace the broad impact list with a versioned, reproducible example.

**Acceptance criteria.**

- Demonstrate: Choose one kernel mechanism such as namespaces, cgroups or the scheduler.
- Demonstrate: Trace its interface and a specific use in containers or performance engineering.
- Demonstrate: Replace the broad impact list with a versioned, reproducible example.
- Select one concrete mechanism such as namespaces and show its effect.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-061 — Open Source Maintenance Is an Engineering Responsibility

- **Article:** TC-A-061; `app/content/posts/2024-11-04-open-source-struggles.md`; `/posts/2024-11-04-open-source-struggles`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 78; `MINOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P1`; `READY_FOR_REVISION`; Small
- **Domain:** Engineering Practice

**Editorial objective.** Add a reproducible dependency-review checklist and bound the xz lesson.

**Weaknesses.** Open-source maintenance essay makes a concrete dependency-risk argument and cites the xz case and primary guidance.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Open Source Maintenance Is an Engineering Responsibility”: Add a reproducible dependency-review checklist and bound the xz lesson.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “A dependency includes its release process”, “Maintenance signals are evidence, not verdicts”, “The cost appears when something changes”, “Adopt according to consequence” for claims to keep or remove.

**Technical changes.** Add a reproducible dependency-review checklist and bound the xz lesson.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Original xz advisory and source project release records. ; Original research on the named practice; official framework documentation; authentic implementation reports. ; https://access.redhat.com/security/cve/cve-2024-3094 ; https://openssf.org/blog/2024/03/30/xz-backdoor-cve-2024-3094/ ; https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Technical review

**Known limitations.** Original body has 4 explicit external links and 884 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Verify the xz timeline against the original security advisory and project records.
- Define observable maintenance signals: release process, maintainer access and response time.
- Show how a dependency review changes for a high-consequence package.

**Acceptance criteria.**

- Demonstrate: Verify the xz timeline against the original security advisory and project records.
- Demonstrate: Define observable maintenance signals: release process, maintainer access and response time.
- Demonstrate: Show how a dependency review changes for a high-consequence package.
- Add a reproducible dependency-review checklist and bound the xz lesson.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-063 — Duplicação de código vs flexibilidade

- **Article:** TC-A-063; `app/content/posts/2024-12-08-code-duplication-vs-flexibility.md`; `/posts/2024-12-08-code-duplication-vs-flexibility`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Software Engineering

**Editorial objective.** Show two evolving code paths and measure change coupling.

**Weaknesses.** Duplication-versus-abstraction trade-off has a useful thesis but examples and evidence are thin.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Duplicação de código vs flexibilidade”: Show two evolving code paths and measure change coupling.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “O Conceito de Duplicação de Código”, “A Filosofia de Evitar a Duplicação: O Princípio DRY”, “Duplicação de Código: Uma Solução Estratégica”, “1. Simplicidade e Clareza” for claims to keep or remove.

**Technical changes.** Show two evolving code paths and measure change coupling.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Original abstraction and software-change research; versioned code example. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 1204 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Create two evolving code paths with initially duplicated logic.
- Show the cost of a shared abstraction when requirements diverge.
- Name the change pattern that would justify extracting a common component later.

**Acceptance criteria.**

- Demonstrate: Create two evolving code paths with initially duplicated logic.
- Demonstrate: Show the cost of a shared abstraction when requirements diverge.
- Demonstrate: Name the change pattern that would justify extracting a common component later.
- Show two evolving code paths and measure change coupling.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-064 — Novas tecnologias: quando adotar

- **Article:** TC-A-064; `app/content/posts/2024-12-16-adopting-new-technologies-in-software-engineering.md`; `/posts/2024-12-16-adopting-new-technologies-in-software-engineering`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 51; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Engineering Practice

**Editorial objective.** Create a decision record with cost, reversibility and exit criteria.

**Weaknesses.** Technology-adoption essay offers decision criteria but repeats generic risks without a worked case.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Novas tecnologias: quando adotar”: Create a decision record with cost, reversibility and exit criteria.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Riscos e limites”, “Pontos de atenção”, “Pontos de atenção” for claims to keep or remove.

**Technical changes.** Create a decision record with cost, reversibility and exit criteria.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Architecture decision-record literature and original technology documentation. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 1164 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Create an architecture decision record for a named technology adoption question.
- Estimate migration, training, lock-in and rollback costs.
- Define a bounded pilot and success/failure criteria before recommending adoption.

**Acceptance criteria.**

- Demonstrate: Create an architecture decision record for a named technology adoption question.
- Demonstrate: Estimate migration, training, lock-in and rollback costs.
- Demonstrate: Define a bounded pilot and success/failure criteria before recommending adoption.
- Create a decision record with cost, reversibility and exit criteria.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-066 — SRE vs DevOps vs engenharia de plataforma

- **Article:** TC-A-066; `app/content/posts/2025-01-04-sre_vs_devops_vs_platform_engineering.md`; `/posts/2025-01-04-sre_vs_devops_vs_platform_engineering`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P1`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Engineering Practice

**Editorial objective.** Ground each practice in one delivery or reliability decision and official sources.

**Weaknesses.** SRE/DevOps/platform comparison is the strongest operations overview but remains a broad role taxonomy.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “SRE vs DevOps vs engenharia de plataforma”: Ground each practice in one delivery or reliability decision and official sources.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “O que é DevOps?”, “O que é SRE (Site Reliability Engineering)?”, “O que é Engenharia de Plataforma?”, “Diferenças entre SRE, DevOps e Engenharia de Plataforma” for claims to keep or remove.

**Technical changes.** Ground each practice in one delivery or reliability decision and official sources.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Google SRE materials, DORA research and authentic platform case reports. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** Cultura DevOps: benefícios e mal-entendidos: From 2021-07-04: DevOps is a collaboration practice, not simply a job title. From 2024-12-24: a platform should expose self-service capabilities to product teams. ; DevOps vs engenharia de plataforma: From 2021-07-04: DevOps is a collaboration practice, not simply a job title. From 2024-12-24: a platform should expose self-service capabilities to product teams.

**Dependencies.** Consolidation TC-CG-03 ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 1223 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Use one service-delivery problem to compare DevOps collaboration, SRE SLOs and a platform interface.
- Clarify that roles overlap by organization rather than implying universal job boundaries.
- Add an ownership matrix and the cost of introducing a platform team.

**Acceptance criteria.**

- Demonstrate: Use one service-delivery problem to compare DevOps collaboration, SRE SLOs and a platform interface.
- Demonstrate: Clarify that roles overlap by organization rather than implying universal job boundaries.
- Demonstrate: Add an ownership matrix and the cost of introducing a platform team.
- Ground each practice in one delivery or reliability decision and official sources.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-067 — Segurança em inteligência artificial: riscos

- **Article:** TC-A-067; `app/content/posts/2025-01-08-security-challenges-in-artificial-intelligence.md`; `/posts/2025-01-08-security-challenges-in-artificial-intelligence`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 51; `MAJOR_REVISION`; current `article`; target `TECHNICAL_SURVEY`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Artificial Intelligence

**Editorial objective.** Compare prompt injection, data leakage and model-supply-chain controls.

**Weaknesses.** AI-security overview identifies risk classes but has no system boundary or source-selection method.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Segurança em inteligência artificial: riscos”: Compare prompt injection, data leakage and model-supply-chain controls.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Riscos e limites”, “Aplicações práticas” for claims to keep or remove.

**Technical changes.** Compare prompt injection, data leakage and model-supply-chain controls.

**Research and methodology.** Define the scope and source-selection rules for Segurança em inteligência artificial: riscos; compare approaches on declared axes; record exclusions and unresolved disagreements.

**Primary sources to investigate.** NIST AI RMF, OWASP LLM guidance and original attack research. ; Original AI evaluation and security papers; model and tool documentation; reproducible benchmark protocols.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** Define the scope and source-selection rules for Segurança em inteligência artificial: riscos; compare approaches on declared axes; record exclusions and unresolved disagreements.

**Diagrams, tables and code.** Source-selection table and versioned comparison matrix.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 859 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Define an AI application boundary and attacker capabilities.
- Compare prompt injection, training-data poisoning and model-supply-chain compromise separately.
- Map controls to the NIST AI RMF and OWASP guidance, noting evidence gaps.

**Acceptance criteria.**

- Demonstrate: Define an AI application boundary and attacker capabilities.
- Demonstrate: Compare prompt injection, training-data poisoning and model-supply-chain compromise separately.
- Demonstrate: Map controls to the NIST AI RMF and OWASP guidance, noting evidence gaps.
- Compare prompt injection, data leakage and model-supply-chain controls.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-068 — Engenheiro de plataforma vs software

- **Article:** TC-A-068; `app/content/posts/2025-01-16-platform_engineer_vs_software_engineer.md`; `/posts/2025-01-16-platform_engineer_vs_software_engineer`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Engineering Practice

**Editorial objective.** Describe ownership interfaces and handoff failure modes.

**Weaknesses.** Platform/software engineer comparison has a distinct role-boundary question but no organizational evidence.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Engenheiro de plataforma vs software”: Describe ownership interfaces and handoff failure modes.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “O que é um Engenheiro de Plataforma?”, “O que é um Engenheiro de Software?”, “Diferenças Chave entre Engenheiro de Plataforma e Engenheiro de Software”, “1. Foco e Responsabilidades” for claims to keep or remove.

**Technical changes.** Describe ownership interfaces and handoff failure modes.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Primary platform engineering case reports and service ownership records. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 1161 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Specify a platform product interface and service-level expectations.
- Contrast product-team and platform-team responsibilities during an incident.
- Document failure modes of unclear ownership and an escalation path.

**Acceptance criteria.**

- Demonstrate: Specify a platform product interface and service-level expectations.
- Demonstrate: Contrast product-team and platform-team responsibilities during an incident.
- Demonstrate: Document failure modes of unclear ownership and an escalation path.
- Describe ownership interfaces and handoff failure modes.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-069 — Monolith First: quando começar simples

- **Article:** TC-A-069; `app/content/posts/2025-01-24-monolith_first_approach.md`; `/posts/2025-01-24-monolith_first_approach`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Software Architecture

**Editorial objective.** Define extraction triggers, module boundaries and reversibility costs.

**Weaknesses.** Monolith First has a useful sequencing thesis but broad claims about monolith coupling and scalability.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Monolith First: quando começar simples”: Define extraction triggers, module boundaries and reversibility costs.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “O que é "Monolith First"?”, “Vantagens do "Monolith First"”, “Desvantagens do "Monolith First"”, “Quando usar o "Monolith First"?” for claims to keep or remove.

**Technical changes.** Define extraction triggers, module boundaries and reversibility costs.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Original microservices and modular-monolith architecture literature. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 570 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Define a module boundary and the trigger for extracting it as a service.
- Compare deployment coupling with runtime coupling.
- Replace blanket monolith scalability claims with workload-conditional analysis.

**Acceptance criteria.**

- Demonstrate: Define a module boundary and the trigger for extracting it as a service.
- Demonstrate: Compare deployment coupling with runtime coupling.
- Demonstrate: Replace blanket monolith scalability claims with workload-conditional analysis.
- Define extraction triggers, module boundaries and reversibility costs.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-070 — Arquitetura de Software: O Modular Monolith

- **Article:** TC-A-070; `app/content/posts/2025-02-04-modular_monolith_architecture.md`; `/posts/2025-02-04-modular_monolith_architecture`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 36; `REWRITE`; current `article`; target `TECHNICAL_ARTICLE`
- **Priority, status, complexity:** `P0`; `RESEARCH_REQUIRED`; Large
- **Domain:** Software Architecture

**Editorial objective.** Unpublish and correct deployment semantics before adding boundary examples.

**Weaknesses.** Modular-monolith text incorrectly says modules can be deployed independently while remaining one deployment.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Arquitetura de Software: O Modular Monolith”: Unpublish and correct deployment semantics before adding boundary examples.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review the lead and closing recommendation for claims to keep or remove.

**Technical changes.** Unpublish and correct deployment semantics before adding boundary examples.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Official module/build-tool documentation and actual deployment model. ; Original research on the named practice; official framework documentation; authentic implementation reports.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 472 words; source presence alone does not verify accuracy. Keep unpublished until the publication gate is met.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Correct the false assertion that modules of a single deployable can be independently deployed.
- Provide a build-boundary and dependency-rule example.
- Explain which changes require the whole application to be released.

**Acceptance criteria.**

- Demonstrate: Correct the false assertion that modules of a single deployable can be independently deployed.
- Demonstrate: Provide a build-boundary and dependency-rule example.
- Demonstrate: Explain which changes require the whole application to be released.
- Unpublish and correct deployment semantics before adding boundary examples.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-071 — SonarQube: limites da cobertura de testes

- **Article:** TC-A-071; `app/content/posts/2025-03-08-why-high-test-coverage-in-sonarqube-is-not-a-good-practice.md`; `/posts/2025-03-08-why-high-test-coverage-in-sonarqube-is-not-a-good-practice`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 40; `REWRITE`; current `article`; target `EXPERIMENTAL_STUDY`
- **Priority, status, complexity:** `P1`; `EXPERIMENT_REQUIRED`; Research-intensive
- **Domain:** Software Engineering

**Editorial objective.** Compare line, branch and mutation measures in controlled code changes.

**Weaknesses.** Coverage article rightly questions a single percentage but treats high coverage itself as bad without evidence.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “SonarQube: limites da cobertura de testes”: Compare line, branch and mutation measures in controlled code changes.

**Structure.** Replace list-like exposition with problem, context, method, results, validity threats and a conclusion supported by evidence. Review “Por que ter uma cobertura de testes muito alta no SonarQube não é uma boa prática?”, “Questões de Satisfação de Testes”, “Foco no Número em vez da Qualidade”, “Custo e Tempo de Desenvolvimento” for claims to keep or remove.

**Technical changes.** Compare line, branch and mutation measures in controlled code changes.

**Research and methodology.** Pre-register a falsifiable objective for SonarQube: limites da cobertura de testes; hold workload and environment constant; compare a baseline; report versions, repetitions, raw observations and threats to validity.

**Primary sources to investigate.** JaCoCo, SonarQube and PIT official docs; original mutation-testing papers. ; Original tool specifications; software-testing research papers; versioned product documentation.

**Evidence.** Actual raw measurements, versioned code and environment logs; no illustrative numbers presented as results.

**Datasets.** Versioned task inputs, test fixtures and raw result files; specify license and privacy constraints.

**Experiments.** Define baseline, treatment, repeated runs and exclusion rules for SonarQube: limites da cobertura de testes; capture raw output and scripts.

**Method.** Pre-register a falsifiable objective for SonarQube: limites da cobertura de testes; hold workload and environment constant; compare a baseline; report versions, repetitions, raw observations and threats to validity.

**Diagrams, tables and code.** Environment table, baseline/result table and reproduction commands; plot only collected data.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Reproducible experiment and raw data

**Known limitations.** Original body has 0 explicit external links and 496 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which reference implementation and sample size can be reproduced?

**Article-specific execution steps.**

- Define a hypothesis comparing tests with similar line coverage but different mutation scores.
- Pin SonarQube, coverage and mutation-testing tool versions.
- Release test sets, mutants, raw reports and equivalent-mutant handling.

**Acceptance criteria.**

- Demonstrate: Define a hypothesis comparing tests with similar line coverage but different mutation scores.
- Demonstrate: Pin SonarQube, coverage and mutation-testing tool versions.
- Demonstrate: Release test sets, mutants, raw reports and equivalent-mutant handling.
- Compare line, branch and mutation measures in controlled code changes.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- Raw data, environment, baseline and reproduction steps are supplied; validity threats are discussed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-073 — Consistência e Confiabilidade em Testes de Integração

- **Article:** TC-A-073; `app/content/posts/2025-05-04-integration-testing-consistency-financial-systems.md`; `/posts/2025-05-04-integration-testing-consistency-financial-systems`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 40; `REWRITE`; current `article`; target `EXPERIMENTAL_STUDY`
- **Priority, status, complexity:** `P1`; `EXPERIMENT_REQUIRED`; Research-intensive
- **Domain:** Software Engineering

**Editorial objective.** Keep unpublished and test transactional behavior on real and substitute DBs.

**Weaknesses.** Draft integration-test claim about in-memory databases is plausible but lacks a reproducible dialect comparison.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Consistência e Confiabilidade em Testes de Integração”: Keep unpublished and test transactional behavior on real and substitute DBs.

**Structure.** Replace list-like exposition with problem, context, method, results, validity threats and a conclusion supported by evidence. Review “Testes de Integração e a Necessidade de Consistência em Sistemas Financeiros”, “A Natureza dos Sistemas Financeiros”, “Desafios do Uso de Bancos em Memória”, “Alternativas para Garantir Consistência” for claims to keep or remove.

**Technical changes.** Keep unpublished and test transactional behavior on real and substitute DBs.

**Research and methodology.** Pre-register a falsifiable objective for Consistência e Confiabilidade em Testes de Integração; hold workload and environment constant; compare a baseline; report versions, repetitions, raw observations and threats to validity.

**Primary sources to investigate.** Production and substitute database manuals; actual SQL test artifacts. ; Original tool specifications; software-testing research papers; versioned product documentation.

**Evidence.** Actual raw measurements, versioned code and environment logs; no illustrative numbers presented as results.

**Datasets.** Versioned task inputs, test fixtures and raw result files; specify license and privacy constraints.

**Experiments.** Define baseline, treatment, repeated runs and exclusion rules for Consistência e Confiabilidade em Testes de Integração; capture raw output and scripts.

**Method.** Pre-register a falsifiable objective for Consistência e Confiabilidade em Testes de Integração; hold workload and environment constant; compare a baseline; report versions, repetitions, raw observations and threats to validity.

**Diagrams, tables and code.** Environment table, baseline/result table and reproduction commands; plot only collected data.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Reproducible experiment and raw data

**Known limitations.** Original body has 0 explicit external links and 671 words; source presence alone does not verify accuracy. Keep unpublished until the publication gate is met.

**Open questions.** Which engineering context makes the decision meaningful? ; Which reference implementation and sample size can be reproduced?

**Article-specific execution steps.**

- Run the same integration tests against the production database and the proposed in-memory substitute.
- Include transaction isolation, constraint, collation and SQL-dialect cases.
- Pin database/container versions and publish failing tests and reproduction commands.

**Acceptance criteria.**

- Demonstrate: Run the same integration tests against the production database and the proposed in-memory substitute.
- Demonstrate: Include transaction isolation, constraint, collation and SQL-dialect cases.
- Demonstrate: Pin database/container versions and publish failing tests and reproduction commands.
- Keep unpublished and test transactional behavior on real and substitute DBs.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- Raw data, environment, baseline and reproduction steps are supplied; validity threats are discussed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-074 — Cloud repatriation: quando trazer cargas de volta

- **Article:** TC-A-074; `app/content/posts/2025-09-04.md`; `/posts/2025-09-04`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 52; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P2`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Computing Infrastructure

**Editorial objective.** Tie location choice to workload cost, latency and control evidence.

**Weaknesses.** Repatriation argument has relevant trade-offs but unsupported cost and compliance generalizations.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Cloud repatriation: quando trazer cargas de volta”: Tie location choice to workload cost, latency and control evidence.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “Por que a nuvem nem sempre é a melhor opção?”, “Segurança, conformidade e controle”, “Cloud repatriation não é um retrocesso”, “Casos comuns de repatriação” for claims to keep or remove.

**Technical changes.** Tie location choice to workload cost, latency and control evidence.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Actual cost records, provider pricing and applicable compliance primary text. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 757 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Choose one workload and record egress, storage, capacity and operations costs.
- Test whether compliance requirements truly demand local hosting in the stated jurisdiction.
- Compare repatriation, hybrid placement and optimization in place with a common horizon.

**Acceptance criteria.**

- Demonstrate: Choose one workload and record egress, storage, capacity and operations costs.
- Demonstrate: Test whether compliance requirements truly demand local hosting in the stated jurisdiction.
- Demonstrate: Compare repatriation, hybrid placement and optimization in place with a common horizon.
- Tie location choice to workload cost, latency and control evidence.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-075 — IA na escrita de código: riscos para seniores

- **Article:** TC-A-075; `app/content/posts/2025-11-04.md`; `/posts/2025-11-04`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 51; `MAJOR_REVISION`; current `article`; target `EXPERIMENTAL_STUDY`
- **Priority, status, complexity:** `P1`; `EXPERIMENT_REQUIRED`; Research-intensive
- **Domain:** Artificial Intelligence

**Editorial objective.** Design a consented task study with review quality and time metrics.

**Weaknesses.** AI coding-risk essay has a useful evaluation question but asserts skill loss and quality effects without data.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “IA na escrita de código: riscos para seniores”: Design a consented task study with review quality and time metrics.

**Structure.** Replace list-like exposition with problem, context, method, results, validity threats and a conclusion supported by evidence. Review the lead and closing recommendation for claims to keep or remove.

**Technical changes.** Design a consented task study with review quality and time metrics.

**Research and methodology.** Pre-register a falsifiable objective for IA na escrita de código: riscos para seniores; hold workload and environment constant; compare a baseline; report versions, repetitions, raw observations and threats to validity.

**Primary sources to investigate.** Peer-reviewed AI-assisted development studies and tool documentation. ; Original tool specifications; software-testing research papers; versioned product documentation.

**Evidence.** Actual raw measurements, versioned code and environment logs; no illustrative numbers presented as results.

**Datasets.** Versioned task inputs, test fixtures and raw result files; specify license and privacy constraints.

**Experiments.** Define baseline, treatment, repeated runs and exclusion rules for IA na escrita de código: riscos para seniores; capture raw output and scripts.

**Method.** Pre-register a falsifiable objective for IA na escrita de código: riscos para seniores; hold workload and environment constant; compare a baseline; report versions, repetitions, raw observations and threats to validity.

**Diagrams, tables and code.** Environment table, baseline/result table and reproduction commands; plot only collected data.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Reproducible experiment and raw data

**Known limitations.** Original body has 0 explicit external links and 777 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which reference implementation and sample size can be reproduced?

**Article-specific execution steps.**

- Separate code-generation speed, defect rate, review effort and maintainability outcomes.
- Design a consented baseline task set and avoid assuming skill loss.
- Pin tool versions and preserve prompts, generated code and reviewer judgments where allowed.

**Acceptance criteria.**

- Demonstrate: Separate code-generation speed, defect rate, review effort and maintainability outcomes.
- Demonstrate: Design a consented baseline task set and avoid assuming skill loss.
- Demonstrate: Pin tool versions and preserve prompts, generated code and reviewer judgments where allowed.
- Design a consented task study with review quality and time metrics.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- Raw data, environment, baseline and reproduction steps are supplied; validity threats are discussed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-077 — Microservices: When the Complexity Isn't Worth It

- **Article:** TC-A-077; `app/content/posts/2026-02-08.md`; `/posts/2026-02-08`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 55; `MAJOR_REVISION`; current `article`; target `ENGINEERING_PERSPECTIVE`
- **Priority, status, complexity:** `P1`; `RESEARCH_REQUIRED`; Medium
- **Domain:** Software Architecture

**Editorial objective.** Refocus on cost of boundaries and the threshold for service extraction.

**Weaknesses.** Microservices-complexity essay is sourced but repeats the observability investigation in another article.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Microservices: When the Complexity Isn't Worth It”: Refocus on cost of boundaries and the threshold for service extraction.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “The dashboard detects the slowdown; the investigation must explain the path”, “What a trace can establish”, “A hypothetical incident, step by step”, “Standardizing collection does not close every gap” for claims to keep or remove.

**Technical changes.** Refocus on cost of boundaries and the threshold for service extraction.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Original microservices writing and primary operational case reports. ; Original research on the named practice; official framework documentation; authentic implementation reports. ; https://sre.google/sre-book/monitoring-distributed-systems/ ; https://opentelemetry.io/docs/specs/otel/trace/data-model/ ; https://opentelemetry.io/docs/concepts/context-propagation/

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** Microsserviços: benefícios e desvantagens: From 2020-07-04: service sizing and ownership, independent deployment, failure isolation caveat, and coordination of cross-service features.

**Dependencies.** Consolidation TC-CG-02 ; Primary-source verification

**Known limitations.** Original body has 8 explicit external links and 1790 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Remove repeated trace tutorial material already covered by the canonical diagnosis article.
- Quantify or explicitly model the recurring cost of a service boundary.
- Contrast modular-monolith and microservice decisions with one coherent ownership scenario.

**Acceptance criteria.**

- Demonstrate: Remove repeated trace tutorial material already covered by the canonical diagnosis article.
- Demonstrate: Quantify or explicitly model the recurring cost of a service boundary.
- Demonstrate: Contrast modular-monolith and microservice decisions with one coherent ownership scenario.
- Refocus on cost of boundaries and the threshold for service extraction.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-079 — Thread dumps em Java com dumpThreads()

- **Article:** TC-A-079; `app/content/posts/2026-06-08.md`; `/posts/2026-06-08`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 37; `REWRITE`; current `article`; target `TECHNICAL_NOTE`
- **Priority, status, complexity:** `P0`; `RESEARCH_REQUIRED`; Large
- **Domain:** Computing Infrastructure

**Editorial objective.** Unpublish until JDK-specific sample output and security/overhead claims are verified.

**Weaknesses.** Thread-dump note has real API code but omits JDK baseline and depicts illustrative JSON and jstack comparison as fact.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “Thread dumps em Java com dumpThreads()”: Unpublish until JDK-specific sample output and security/overhead claims are verified.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “O que é um Thread Dump?”, “A Nova API `dumpThreads()`”, “Criando um Utilitário para Gerar Thread Dumps”, “Atenção ao Caminho do Arquivo” for claims to keep or remove.

**Technical changes.** Unpublish until JDK-specific sample output and security/overhead claims are verified.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** Oracle/OpenJDK API docs for pinned JDK; jcmd and JMX documentation. ; Official product/version documentation; relevant RFCs or JDK specifications; original engineering measurements.

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Primary-source verification

**Known limitations.** Original body has 0 explicit external links and 842 words; source presence alone does not verify accuracy. Keep unpublished until the publication gate is met.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Verify `dumpThreads()` availability and JSON format against a named JDK release.
- Compile and run the sample, then replace illustrative output with real captured output.
- Evaluate dump cost, sensitive data exposure, file permissions and JMX access.

**Acceptance criteria.**

- Demonstrate: Verify `dumpThreads()` availability and JSON format against a named JDK release.
- Demonstrate: Compile and run the sample, then replace illustrative output with real captured output.
- Demonstrate: Evaluate dump cost, sensitive data exposure, file permissions and JMX access.
- Unpublish until JDK-specific sample output and security/overhead claims are verified.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.

## TC-ED-080 — When Retries Make an Outage Worse

- **Article:** TC-A-080; `app/content/posts/2026-11-24-when-retries-make-an-outage-worse.md`; `/posts/2026-11-24-when-retries-make-an-outage-worse`
- **Proposed title:** Retain current title pending editorial review
- **Score, action, format:** 80; `MINOR_REVISION`; current `article`; target `TECHNICAL_ARTICLE`
- **Priority, status, complexity:** `P1`; `READY_FOR_REVISION`; Small
- **Domain:** Distributed Systems

**Editorial objective.** Add explicit retry eligibility matrix and clarify fleet budget implementation.

**Weaknesses.** Retries article bounds its illustrative arithmetic, distinguishes side effects and cites primary operational sources.

**Expected contribution.** A bounded, evidence-backed answer to the engineering question in “When Retries Make an Outage Worse”: Add explicit retry eligibility matrix and clarify fleet budget implementation.

**Structure.** Replace list-like exposition with problem, context, alternatives, trade-offs, limitations and a conclusion supported by evidence. Review “The multiplication happens between layers”, “A timeout leaves the outcome uncertain”, “Deadlines determine whether another attempt can help”, “Containing retries without hiding failure” for claims to keep or remove.

**Technical changes.** Add explicit retry eligibility matrix and clarify fleet budget implementation.

**Research and methodology.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Primary sources to investigate.** AWS Builders Library retries and idempotency; gRPC deadlines and retry docs. ; Original protocol specifications; Google SRE and AWS Builders Library engineering accounts; OpenTelemetry specifications. ; https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/ ; https://sre.google/sre-book/addressing-cascading-failures/ ; https://sre.google/sre-book/handling-overload/

**Evidence.** Traceable primary citations for material claims and a documented worked engineering example.

**Datasets.** None required unless a statistical or comparative claim is retained.

**Experiments.** None required unless a quantitative claim is retained; do not invent measurements.

**Method.** State a bounded engineering question; trace each factual claim to a primary source or a reproducible artifact; test counterexamples and state limits.

**Diagrams, tables and code.** Decision table or boundary diagram grounded in the chosen example; working code only when relevant.

**Deleted-source contributions.** None.

**Dependencies.** No consolidation dependency ; Technical review

**Known limitations.** Original body has 8 explicit external links and 1552 words; source presence alone does not verify accuracy. Current published text predates this revision.

**Open questions.** Which engineering context makes the decision meaningful? ; Which disputed claim can be verified from a primary source?

**Article-specific execution steps.**

- Classify retryable errors and non-retryable side-effect outcomes in a table.
- Show how a local token bucket differs from a fleet-wide retry budget.
- Tie each retry attempt to a remaining deadline and a stable idempotency key.

**Acceptance criteria.**

- Demonstrate: Classify retryable errors and non-retryable side-effect outcomes in a table.
- Demonstrate: Show how a local token bucket differs from a fleet-wide retry budget.
- Demonstrate: Tie each retry attempt to a remaining deadline and a stable idempotency key.
- Add explicit retry eligibility matrix and clarify fleet budget implementation.
- Every material technical claim has a traceable primary source or a reproducible artifact.
- Examples are clearly labeled as hypothetical unless supported by authentic evidence.
- Trade-offs and known limitations are explicit.
- At least one concrete decision or implementation example is technically reviewed.
- Named technical reviewer and editor approve only after actual review; status then advances.
