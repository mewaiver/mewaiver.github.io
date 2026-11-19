"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function PublicationActions({ post, paper = false }) {
  const [copyState, setCopyState] = useState('');
  const [showCitation, setShowCitation] = useState(false);
  const doi = post.doi?.replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '');

  async function copyCitation() {
    try {
      await navigator.clipboard.writeText(post.bibtex);
      setCopyState('Copied!');
    } catch {
      setCopyState('Selecione a citação abaixo para copiar.');
      setShowCitation(true);
    }
  }

  return <>
    <div className="publication-actions" role="group" aria-label="Links da publicação">
      {!paper && <Link href={`/posts/${post.slug}`}>[{post.type === 'whitepaper' ? 'Read Paper' : 'Read Article'}]</Link>}
      {post.bibtex && <button type="button" onClick={copyCitation}>[Cite BibTeX]</button>}
      {post.pdf_url && <a href={post.pdf_url}>[{paper ? 'Download PDF' : 'PDF'}]</a>}
      {post.code_url && <a href={post.code_url}>[Code]</a>}
      {doi && <a href={`https://doi.org/${doi}`}>[DOI]</a>}
      {post.bibtex && <span className="copy-status" role="status" aria-live="polite">{copyState}</span>}
    </div>
    {showCitation && <pre className="citation-fallback"><code>{post.bibtex}</code></pre>}
  </>;
}
