"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import PublicationActions from './PublicationActions';
import { categoryLabel } from '../services/publicationLabels';

export default function PostList({ posts, headingLevel = 'h2', searchable = false }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('');
  const Heading = headingLevel;
  const tags = useMemo(() => [...new Set(posts.map(post => post.category).filter(Boolean))].sort(), [posts]);
  const visiblePosts = posts.filter(post => {
    const matchesTag = !activeTag || post.category === activeTag;
    const searchableText = [post.title, post.abstract, post.excerpt, post.author,
      ...(post.keywords || []),
      ...(post.authors || []).flatMap(person => [person.name, person.affiliation])].filter(Boolean).join(' ').toLocaleLowerCase();
    return matchesTag && searchableText.includes(query.trim().toLocaleLowerCase());
  });
  let previousYear;

  return (
    <div className="publication-index">
      {searchable && <div className="publication-filters">
        <label htmlFor="publication-search">Buscar publicações</label>
        <input id="publication-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Título, resumo, palavras-chave ou autor" autoComplete="off" />
        <div className="tag-filters" role="group" aria-label="Filtrar por domínio">
          {['', ...tags].map(tag => <button key={tag || 'all'} type="button" className={activeTag === tag ? 'active' : ''} aria-pressed={activeTag === tag} onClick={() => setActiveTag(tag)}>{tag ? categoryLabel(tag) : 'All'}</button>)}
        </div>
        <p className="filter-count" role="status">{visiblePosts.length} {visiblePosts.length === 1 ? 'publicação' : 'publicações'}</p>
      </div>}
      <div className="post-list">
        {visiblePosts.map(post => {
          const year = String(post.date || '').slice(0, 4);
          const showYear = searchable && year !== previousYear;
          previousYear = year;
          return <div key={post.slug}>
            {showYear && <div className="year-divider" aria-label={`Ano ${year}`}>{year}</div>}
            <article className="post-list-item">
              <div className="post-meta">
                <time dateTime={post.date}>{post.date}</time>
                {post.category && <><span className="meta-divider" aria-hidden="true">/</span><Link href={`/categories/${post.category}`}>{categoryLabel(post.category)}</Link></>}
                <span className="meta-bullet" aria-hidden="true">•</span><span>{post.version}</span>
              </div>
              <Heading><Link href={`/posts/${post.slug}`}>{post.title}</Link></Heading>
              {post.authors?.length > 0 && <p className="publication-authors">{post.authors.map(person => [person.name, person.affiliation].filter(Boolean).join(', ')).join('; ')}</p>}
              {(post.abstract || post.excerpt) && <p className="post-excerpt">{post.abstract || post.excerpt}</p>}
              <PublicationActions post={post} />
            </article>
          </div>;
        })}
        {visiblePosts.length === 0 && <p className="no-results">Nenhuma publicação encontrada.</p>}
      </div>
    </div>
  );
}
