import Link from 'next/link';

const principles = [
  ['About Tech Chain', 'Tech Chain publishes articles and analysis on technology and software engineering. Its archive brings together work by different authors across technical fields.'],
  ['Editorial approach', 'We aim to present ideas with context, clear language, and practical value for readers. Future profiles and interviews should be identified by format and supported by verifiable information.'],
  ['Authorship and attribution', 'Every publication should show its author and original publication date. Contributions, interviews, opinions, and any commercial relationships should be clearly identified when applicable.'],
  ['Sources and verification', 'Factual claims, data, and results deserve appropriate sources. In future reported stories, we intend to distinguish interviewees’ statements, documents, and independent analysis.'],
  ['Corrections and transparency', 'Readers can report errors through the contact page. Substantial changes should preserve the publication date and, where relevant, indicate when the text was updated.'],
  ['Story ideas and contact', 'Story ideas and correction requests can be sent through the contact page. Submitting a suggestion does not guarantee publication.'],
];

export default function EditorialPage() {
  return <div className="container editorial-page">
    <div className="page-kicker"><Link href="/" className="backlink">← Home</Link></div><header className="page-intro policy-intro"><span className="eyebrow">Publication / Editorial principles</span><h1>Credibility begins with the details.</h1><p>An introduction to Tech Chain and the principles guiding the publication.</p></header><div className="policy-grid">{principles.map(([title, copy], index) => <section className="policy-card" key={title}><span className="policy-num">{String(index + 1).padStart(2, '0')}</span><h2>{title}</h2><p>{copy}</p></section>)}</div><section className="policy-callout"><span className="eyebrow">Contact and transparency</span><h2>A conversation starts with a message.</h2><p>To suggest a story, report a correction, or ask about an article, use the contact form on this site.</p><Link href="/contact" className="button-primary">Get in touch <span className="arrow" aria-hidden="true">↗</span></Link></section></div>;
}
