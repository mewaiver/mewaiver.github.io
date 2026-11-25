# Content consolidation

The following records preserve unique points before deletion. Source text remains recoverable at the baseline Git commit; do not assume a future article has already incorporated it. Six equivalent old routes have `public/posts/*.html` client-side redirect fallbacks. Static GitHub Pages/Next export cannot issue HTTP 301 responses; the fallbacks are not permanent HTTP redirects.

## TC-CG-01 — Microservices and observability

- **Articles:** TC-A-001 “Why Distributed Systems Remain Hard to Diagnose” (/posts/2020-01-04-the-rise-of-quantum-computing); TC-A-078 “Observability in Microservices: Beyond the Data” (/posts/2026-03-08); TC-A-077 “Microservices: When the Complexity Isn't Worth It” (/posts/2026-02-08); TC-A-011 “Microsserviços: benefícios e desvantagens” (/posts/2020-07-04-microservices-pros-cons)
- **Confirmed overlap:** Order-service latency scenario, traces, context propagation, sampling and local-versus-partner wait.
- **Canonical:** Why Distributed Systems Remain Hard to Diagnose (/posts/2020-01-04-the-rise-of-quantum-computing). It has the strongest applicable technical foundation or the most coherent scope; the pre-existing user edit in the canonical file is preserved.
- **Deleted:** TC-A-078 app/content/posts/2026-03-08.md
- **Unique contributions preserved:** From 2026-03-08: trace context at trust boundaries; head versus tail sampling and added state cost; distinction between Collector health and instrumentation coverage.
- **Original excerpts:** TC-A-078: “The three common signals operate at different scales. Metrics aggregate many operations and reveal the scope and progression of a symptom; they do not, on their own, recount a particular request's path. Logs record local events and decisions, such as a retry o”
- **References worth preserving:** https://sre.google/sre-book/monitoring-distributed-systems/; https://opentelemetry.io/docs/specs/otel/trace/data-model/; https://opentelemetry.io/docs/concepts/context-propagation/; https://research.google/pubs/dapper-a-large-scale-distributed-systems-tracing-infrastructure/; https://opentelemetry.io/docs/specs/otel/logs/; https://opentelemetry.io/docs/collector/; https://prometheus.io/docs/practices/naming/; https://opentelemetry.io/docs/concepts/signals/metrics/; https://opentelemetry.io/docs/concepts/sampling/; https://opentelemetry.io/docs/security/handling-sensitive-data/
- **Proposed structure:** Symptoms and competing hypotheses; trace limits; correlation and propagation; controlled boundary measurements; telemetry cost and privacy; limitations.
- **Additional research:** OpenTelemetry trace and SDK specifications; W3C Trace Context; current Collector sampling docs.
- **Backlog:** TC-ED-001
- **Redirect mapping:** /posts/2026-03-08 → /posts/2020-01-04-the-rise-of-quantum-computing; HTTP 301 unavailable in current static host.
- **Status:** Sources deleted after this record; integration pending.

## TC-CG-02 — Microservices trade-offs

- **Articles:** TC-A-077 “Microservices: When the Complexity Isn't Worth It” (/posts/2026-02-08); TC-A-011 “Microsserviços: benefícios e desvantagens” (/posts/2020-07-04-microservices-pros-cons); TC-A-069 “Monolith First: quando começar simples” (/posts/2025-01-24-monolith_first_approach); TC-A-070 “Arquitetura de Software: O Modular Monolith” (/posts/2025-02-04-modular_monolith_architecture); TC-A-027 “Código e complexidade: como manter o controle” (/posts/2021-08-08-code_is_not_the_problem_controling_complexity_is)
- **Confirmed overlap:** Microservice benefits, independent scaling and deployment versus operational and distributed-transaction cost.
- **Canonical:** Microservices: When the Complexity Isn't Worth It (/posts/2026-02-08). It has the strongest applicable technical foundation or the most coherent scope; the pre-existing user edit in unrelated files is untouched.
- **Deleted:** TC-A-011 app/content/posts/2020-07-04-microservices-pros-cons.md
- **Unique contributions preserved:** From 2020-07-04: service sizing and ownership, independent deployment, failure isolation caveat, and coordination of cross-service features.
- **Original excerpts:** TC-A-011: “O benefício mais importante da arquitetura de microsserviços é que ela permite a entrega e a implantação contínuas de aplicativos grandes e complexos. A entrega contínua faz parte do DevOps, um conjunto de práticas para a”
- **References worth preserving:** No explicit external references in deleted source; primary-source research required.
- **Proposed structure:** Decision context; boundary costs; deployment and scaling benefits; transactions and failure isolation; extraction threshold; counterexamples.
- **Additional research:** Original microservices literature; distributed transaction specifications and operational case evidence.
- **Backlog:** TC-ED-077
- **Redirect mapping:** /posts/2020-07-04-microservices-pros-cons → /posts/2026-02-08; HTTP 301 unavailable in current static host.
- **Status:** Sources deleted after this record; integration pending.

## TC-CG-03 — Engineering operations roles

- **Articles:** TC-A-066 “SRE vs DevOps vs engenharia de plataforma” (/posts/2025-01-04-sre_vs_devops_vs_platform_engineering); TC-A-025 “Cultura DevOps: benefícios e mal-entendidos” (/posts/2021-07-04-devops-culture-misunderstandings); TC-A-065 “DevOps vs engenharia de plataforma” (/posts/2024-12-24-devops-plataform-engineering); TC-A-068 “Engenheiro de plataforma vs software” (/posts/2025-01-16-platform_engineer_vs_software_engineer)
- **Confirmed overlap:** DevOps culture and platform engineering definitions, benefits and delivery responsibilities.
- **Canonical:** SRE vs DevOps vs engenharia de plataforma (/posts/2025-01-04-sre_vs_devops_vs_platform_engineering). It has the strongest applicable technical foundation or the most coherent scope; the pre-existing user edit in unrelated files is untouched.
- **Deleted:** TC-A-025 app/content/posts/2021-07-04-devops-culture-misunderstandings.md; TC-A-065 app/content/posts/2024-12-24-devops-plataform-engineering.md
- **Unique contributions preserved:** From 2021-07-04: DevOps is a collaboration practice, not simply a job title. From 2024-12-24: a platform should expose self-service capabilities to product teams.
- **Original excerpts:** TC-A-025: “O que a cultura DevOps realmente muda no trabalho de engenharia? Este texto discute benefícios e interpretações que atrapalham sua adoção.” ; TC-A-065: “Como DevOps e engenharia de plataforma se relacionam na entrega de software? Veja responsabilidades e benefícios de cada abordagem.”
- **References worth preserving:** No explicit external references in deleted source; primary-source research required.
- **Proposed structure:** One delivery problem; DevOps collaboration; SRE service objectives; platform interface; ownership matrix; limits.
- **Additional research:** Google SRE materials; DORA research; primary platform engineering case reports.
- **Backlog:** TC-ED-066
- **Redirect mapping:** /posts/2021-07-04-devops-culture-misunderstandings → /posts/2025-01-04-sre_vs_devops_vs_platform_engineering; /posts/2024-12-24-devops-plataform-engineering → /posts/2025-01-04-sre_vs_devops_vs_platform_engineering; HTTP 301 unavailable in current static host.
- **Status:** Sources deleted after this record; integration pending.

## TC-CG-04 — Agricultural IoT

- **Articles:** TC-A-043 “Tecnologias Emergentes para a Agricultura Inteligente” (/posts/2022-09-04-emerging-technologies-in-smart-agriculture-iot); TC-A-044 “Agricultura inteligente com IoT” (/posts/2022-10-04-smart-agriculture-using-iot)
- **Confirmed overlap:** Sensor monitoring, wireless connectivity, irrigation and predictive decisions.
- **Canonical:** Tecnologias Emergentes para a Agricultura Inteligente (/posts/2022-09-04-emerging-technologies-in-smart-agriculture-iot). It has the strongest applicable technical foundation or the most coherent scope; the pre-existing user edit in unrelated files is untouched.
- **Deleted:** TC-A-044 app/content/posts/2022-10-04-smart-agriculture-using-iot.md
- **Unique contributions preserved:** From 2022-10-04: connect soil readings to irrigation actuation and evaluate device maintenance, connectivity and data-quality constraints.
- **Original excerpts:** TC-A-044: “Como a IoT pode apoiar a agricultura inteligente? Veja dispositivos, dados e usos que conectam monitoramento a decisões no campo.”
- **References worth preserving:** No explicit external references in deleted source; primary-source research required.
- **Proposed structure:** Scope and source selection; sensor architecture; network selection; edge/cloud split; irrigation loop; field limitations.
- **Additional research:** Primary agronomy/IoT field studies and protocol specifications.
- **Backlog:** TC-ED-043
- **Redirect mapping:** /posts/2022-10-04-smart-agriculture-using-iot → /posts/2022-09-04-emerging-technologies-in-smart-agriculture-iot; HTTP 301 unavailable in current static host.
- **Status:** Sources deleted after this record; integration pending.

## TC-CG-05 — Kanban and incremental improvement

- **Articles:** TC-A-053 “Kanban: Um Processo Prático no Desenvolvimento de Software” (/posts/2023-12-04-kanban-process-in-software-development); TC-A-058 “Kanban Kaizen: práticas e benefícios” (/posts/2024-08-04-kaizen-process-in-software-development); TC-A-054 “Scrum vs Kanban Kaizen: diferenças práticas” (/posts/2024-01-04-scrum-process-in-software-development)
- **Confirmed overlap:** Visualization, WIP limits, bottlenecks and continuous adjustment.
- **Canonical:** Kanban: Um Processo Prático no Desenvolvimento de Software (/posts/2023-12-04-kanban-process-in-software-development). It has the strongest applicable technical foundation or the most coherent scope; the pre-existing user edit in unrelated files is untouched.
- **Deleted:** TC-A-058 app/content/posts/2024-08-04-kaizen-process-in-software-development.md
- **Unique contributions preserved:** From 2024-08-04: treat a visible bottleneck as a testable small change with a feedback cycle, not a guaranteed productivity gain.
- **Original excerpts:** TC-A-058: “Kanban Kaizen é a combinação de duas metodologias de gestão de processos e melhoria contínua: Kanban e Kaizen. Ambas têm como objetivo melhorar a eficiência e a qualidade nos processos de trabalho, mas de maneiras complementares. Vamos detalhar cada um desses ”
- **References worth preserving:** No explicit external references in deleted source; primary-source research required.
- **Proposed structure:** Defined workflow; WIP policy; flow metrics; bottleneck hypothesis; before/after review; limitations.
- **Additional research:** Official Kanban guidance and empirical software-delivery research.
- **Backlog:** TC-ED-053
- **Redirect mapping:** /posts/2024-08-04-kaizen-process-in-software-development → /posts/2023-12-04-kanban-process-in-software-development; HTTP 301 unavailable in current static host.
- **Status:** Sources deleted after this record; integration pending.
