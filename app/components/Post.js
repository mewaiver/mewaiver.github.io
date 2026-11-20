"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import 'highlight.js/styles/github.css';
import PublicationActions from './PublicationActions';
import { categoryLabel, shouldShowVersion } from '../services/publicationLabels';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('java', java);

function TableOfContents({ headings }) {
  return <nav aria-label="Nesta página"><ol>{headings.map(heading =>
    <li key={heading.id} className={heading.depth === 3 ? 'toc-subheading' : ''}>
      <a href={`#${heading.id}`}>{heading.title}</a>
    </li>)}</ol></nav>;
}

export default function Post({ post, content, headings }) {
  useEffect(() => {
    const blocks = document.querySelectorAll('.article-page .content pre code');
    const buttons = [];
    blocks.forEach(block => {
      if (block.className.includes('language-')) hljs.highlightElement(block);
      const pre = block.closest('pre');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'code-copy';
      button.textContent = 'Copiar código';
      button.setAttribute('aria-label', 'Copiar código');
      button.setAttribute('aria-live', 'polite');
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(block.textContent);
          button.textContent = 'Copiado!';
        } catch {
          button.textContent = 'Falha ao copiar';
        }
      });
      pre.appendChild(button);
      buttons.push(button);
    });
    return () => buttons.forEach(button => button.remove());
  }, [content]);

  const doi = post.doi?.replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '');

  return <div className="paper-layout">
    <article className="article-page">
      <header className="article-header">
        <h1>{post.title}</h1>
        {post.authors?.length > 0 && <div className="paper-authors" role="group" aria-label="Autores">
          {post.authors.map((person, index) => <span key={`${person.name}-${index}`}>
            {person.name}{person.affiliation && <span className="author-affiliation">, {person.affiliation_url ? <a href={person.affiliation_url}>{person.affiliation}</a> : person.affiliation}</span>}
            {person.orcid && <> <a href={`https://orcid.org/${person.orcid.replace(/^https?:\/\/orcid\.org\//i, '')}`} aria-label={`ORCID de ${person.name}`}>ORCID</a></>}
            {index < post.authors.length - 1 && '; '}
          </span>)}
        </div>}
        <div className="post-meta paper-meta">
          <time dateTime={post.date}>{post.date}</time>
          {post.category && <><span className="meta-divider" aria-hidden="true">/</span><Link href={`/categories/${post.category}`}>{categoryLabel(post.category)}</Link></>}
          {shouldShowVersion(post) && <><span className="meta-divider" aria-hidden="true">/</span><span>Versão {post.version}</span></>}
          {post.updated && <><span className="meta-divider" aria-hidden="true">/</span><span>Atualizado <time dateTime={post.updated}>{post.updated}</time></span></>}
          {doi && <><span className="meta-divider" aria-hidden="true">/</span><a href={`https://doi.org/${doi}`}>DOI: {doi}</a></>}
        </div>
        {post.keywords?.length > 0 && <p className="paper-keywords"><strong>Palavras-chave:</strong> {post.keywords.join(' · ')}</p>}
        {post.abstract && <div className="paper-abstract"><h2>Resumo</h2><p>{post.abstract}</p></div>}
        <PublicationActions post={post} paper />
      </header>
      {headings.length > 0 && <details className="mobile-toc"><summary>Nesta página</summary><TableOfContents headings={headings} /></details>}
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
    {headings.length > 0 && <aside className="desktop-toc"><p>On This Page</p><TableOfContents headings={headings} /></aside>}
  </div>;
}
