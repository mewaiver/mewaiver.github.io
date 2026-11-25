# TechChain Editorial Standards v1.0

**Adopted as an editorial target:** 2026-11-25. **Operational status:** the content audit and backlog exist; the review, disclosure, correction and research workflows below are proposed gates for future work. TechChain does not currently claim independent peer review, IEEE or ACM affiliation, DOI registration or an editorial board.

## 1. Mission and scope

TechChain publishes original, useful analysis of computing and engineering decisions. Depth, evidence and intellectual honesty matter more than volume or topical novelty. The core domains are software engineering, software architecture, distributed systems, computing infrastructure, artificial intelligence, cybersecurity and engineering practice. Work outside them needs a clear computing contribution.

The editorial quality benchmarks are IEEE Software, IEEE Computer, IEEE Spectrum, ACM Queue and Communications of the ACM. This is an independent publication; those organizations do not endorse or certify TechChain.

## 2. Publication formats

The target formats are `TECHNICAL_ARTICLE`, `CASE_STUDY`, `RESEARCH_ARTICLE`, `EXPERIMENTAL_STUDY`, `TECHNICAL_SURVEY`, `ENGINEERING_PERSPECTIVE`, `TECHNICAL_NOTE`, `EXPERIENCE_REPORT`, `TUTORIAL`, `INTERVIEW` and `EDITORIAL`. The audit's target label is a development goal, not a present quality claim. An editor selects the shortest format that can carry the contribution.

- A **technical article** defines an engineering problem, alternatives, mechanisms, trade-offs and limitations.
- A **case study** or **experience report** requires authentic, author-verifiable implementation or professional evidence. Hypothetical examples remain hypothetical.
- A **research article** needs an original question, method, data, results, related work and validity discussion. An abstract or bibliography alone does not qualify.
- An **experimental study** needs a baseline, controlled conditions, versions, raw measurements and reproduction procedure.
- A **technical survey** needs a declared scope and source-selection method; an informal selection is not a systematic review.
- An **engineering perspective** states a thesis, separates fact from opinion and addresses counterarguments.
- A **technical note** contributes one narrow technique or observation.
- A **tutorial** defines prerequisites and gives a working, versioned, reproducible procedure and failure cases.
- An **interview** records an actual conversation with a named, consenting subject and verifies factual assertions.
- An **editorial** articulates an institutional position or substantial development in computing, with clear institutional authorship.

## 3. Originality and attribution

An author must identify the question and the contribution beyond existing documentation. Reused text, images, diagrams, code, data or ideas need attribution and appropriate rights. Duplicate publication and disguised promotional copy are not acceptable. A submitted piece must disclose prior versions and overlapping TechChain articles. The editor checks for overlap before commissioning a new article.

## 4. Authorship and accountability

Name real authors who made substantive intellectual contributions and approve the final version. A collective editorial byline is permissible only when the editorial team actually accepts responsibility for the text. Verify any first-person claim against the person who made it. Identify contributors who helped but are not authors. Do not invent affiliations, ORCID IDs, reviewers or case participants. Each author is accountable for factual claims, source permissions, data handling and corrections. Resolve authorship disputes before publication.

## 5. Technical accuracy and evidence

Every substantial technical claim must be reproducible from a cited specification, official documentation, primary paper, authentic engineering record or demonstrated artifact. Pin versions, configuration, environment and dates for behavior that changes. A benchmark must specify workload, hardware, software, baseline, repetitions and uncertainty. Distinguish an illustrative calculation from an observed metric. Label hypotheses, assumptions and opinions. Seek a disconfirming example for broad claims. If a claim cannot be verified, narrow or remove it; do not give it a decorative citation.

## 6. Sources and bibliographic practice

Prefer peer-reviewed research, official standards and specifications, RFCs, original papers, official technical documentation, primary experimental evidence and authoritative engineering accounts. Secondary commentary can add context but does not replace an available primary source. Record author or institution, title, publication date or version, persistent URL and access date when a page is mutable. Check that each link supports the exact claim. Avoid citation inflation and source laundering.

Use numbered in-text references such as `[1]` where a structured reference list helps an in-depth technical article. The list follows order of first citation and identifies the version consulted. For shorter web-native notes, descriptive inline links are acceptable if the source and supported claim remain unambiguous. Do not fabricate a DOI, ISSN, page range or publication venue. The [IEEE Editorial Style Manual](https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/create-the-text-of-your-article/ieee-editorial-style-manual/) and [IEEE Reference Guide](https://journals.ieeeauthorcenter.ieee.org/wp-content/uploads/sites/7/IEEE_Reference_Guide.pdf) inform style, without making TechChain an IEEE publication.

## 7. Research integrity and ethics

No invented experiment, participant, dataset, performance result, deployment outcome or quotation may appear as fact. Keep original and processed data distinct. Document exclusions, missingness, uncertainty, negative results and threats to validity. Human-participant studies require applicable consent, privacy protection and ethics approval where required; publication cannot substitute for that process. Document conflicts of interest, funding, vendor relationships and access that could influence interpretation. Editors may reject work whose evidence cannot be inspected appropriately.

## 8. Editorial independence and AI tools

Editorial judgments are independent of advertising, sponsorship, vendor access and personal relationships. A sponsor cannot buy a conclusion or bypass technical review. Disclose material commercial ties on the article.

Authors may use AI tools for drafting, coding or analysis only with human verification of every claim, citation and artifact. Disclose substantive AI use that affected research design, data selection, experiments, analysis, or published argument; name the tool and the role it played. An AI system cannot be an author or reviewer. Do not place confidential source material or participant data into a tool without authorization. Preserve prompts and outputs when they materially affect reproducibility.

## 9. Reproducibility and artifacts

An experimental article should provide code, data or a lawful access route, version lockfiles, configuration, random seeds when applicable, commands and expected output. When artifacts cannot be shared, explain the restriction and provide the strongest safe substitute. A case study should name which conclusions depend on unavailable private records. Diagrams must reflect observed or verified architecture, not imply an actual deployment from a hypothetical example.

## 10. Review and approval workflow — proposed

1. **Editorial intake:** define contribution, scope, type, author and overlap.
2. **Evidence review:** inspect sources, versions, code, data and factual uncertainties.
3. **Technical review:** a competent independent reviewer checks the technical argument, artifacts and limits; record name, date, findings and disposition internally. This is not described publicly as academic peer review.
4. **Editorial review:** check structure, language, attribution, disclosures, links and metadata.
5. **Approval:** a named editor confirms all required gates and the original publication date. A backlog status alone is not approval.
6. **Post-publication review:** accept correction reports through the site contact page and revisit articles when specifications or evidence change.

This workflow is a target. The repository does not yet record completed independent reviews for existing articles.

## 11. Corrections, retractions and version history — proposed

Keep the original publication date. Record a substantive update date, what changed and why. Correct a bounded error promptly and retain a visible correction note where it affects interpretation. For a serious unsupported or misleading claim, unpublish while investigating. Retract when the central result is unreliable or integrity has been compromised; preserve a public notice with the reason when technically feasible. Record editorial decisions and source versions internally. A removed generic article and a retracted research result are different events and should not be described interchangeably.

## 12. Reference policies

The standards above are TechChain's own. Relevant external benchmarks include the [IEEE Computer Society author resources](https://www.computer.org/publications/author-resources), [IEEE Author Center ethics requirements](https://books.ieeeauthorcenter.ieee.org/book-publishing-at-ieee/publishing-ethics/ethical-requirements/), [ACM Publications Policies](https://www.acm.org/publications/policies/toc), and [ACM authorship policy](https://www.acm.org/publications/policies/new-acm-policy-on-authorship). Consult their current versions rather than assuming TechChain is governed by them.
