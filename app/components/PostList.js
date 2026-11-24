'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import PublicationActions from './PublicationActions';
import { categoryLabel } from '../services/publicationLabels';
import { byline, displayDate, plainExcerpt } from '../services/editorial';

const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');

export default function PostList({ posts, searchable = false }) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const categories = useMemo(() => [...new Set(posts.map(post => post.category).filter(Boolean))].sort(), [posts]);
  const visiblePosts = posts.filter(post => {
    const searchableText = [post.title, post.abstract, post.excerpt, post.category, categoryLabel(post.category || ''), post.author,
      ...(post.keywords || []), ...(post.tags || []), ...(post.authors || []).flatMap(person => [person.name, person.affiliation])].filter(Boolean).join(' ');
    return (!activeCategory || post.category === activeCategory) && normalize(searchableText).includes(normalize(query.trim()));
  });

  return <div className="publication-index">
    {searchable && <div className="publication-filters">
      <label className="sr-only" htmlFor="publication-search">Search articles</label>
      <div className="searchbar"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg><input id="publication-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by title, summary, topic, or author" autoComplete="off" /></div>
      <div className="filters" role="group" aria-label="Filter by category">
        {['', ...categories].map(category => <button key={category || 'all'} className="filter-button" type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category ? categoryLabel(category) : 'All'}</button>)}
      </div>
      <p className="archive-status" role="status">{visiblePosts.length} {visiblePosts.length === 1 ? 'article shown' : 'articles shown'}</p>
    </div>}
    <div className="archive-list">
      {visiblePosts.map(post => <article className="archive-row" key={post.slug}>
        <time dateTime={post.date}>{displayDate(post.date)}</time>
        <div><span className="eyebrow"><Link href={`/categories/${post.category}`}>{categoryLabel(post.category)}</Link>{post.type === 'profile' ? ' / Profile' : ''}</span><h2><Link href={`/posts/${post.slug}`}>{post.title}</Link></h2>{(post.abstract || post.excerpt) && <p>{plainExcerpt(post.abstract || post.excerpt)}</p>}<div className="archive-byline">{byline(post)}</div><PublicationActions post={post} paper /></div>
        <Link href={`/posts/${post.slug}`} className="archive-arrow" aria-label={`Read ${post.title}`}>↗</Link>
      </article>)}
      {visiblePosts.length === 0 && <p className="archive-empty">No articles found. Try another search term or category.</p>}
    </div>
  </div>;
}
