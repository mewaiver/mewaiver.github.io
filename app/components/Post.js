import Link from 'next/link';
import PublicationActions from './PublicationActions';
import ArticleEnhancements from './ArticleEnhancements';
import FeaturedImage from './FeaturedImage';
import { categoryLabel, shouldShowVersion } from '../services/publicationLabels';
import { displayDate, plainExcerpt } from '../services/editorial';

function TableOfContents({ headings }) {
  return <nav className="toc" aria-label="Nesta página"><ol>{headings.map(heading => <li key={heading.id} className={heading.depth === 3 ? 'toc-subheading' : ''}><a href={`#${heading.id}`}>{heading.title}</a></li>)}</ol></nav>;
}

function AuthorLine({ post, formatLabel }) {
  return <div className="byline-bar">
    <span className="author-initials" aria-hidden="true">{post.authors?.[0]?.name?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || 'TC'}</span>
    <div className="byline-person"><strong>{post.authors?.map(person => person.name).join(', ') || 'Tech Chain'}</strong><span><time dateTime={post.date}>{displayDate(post.date)}</time>{post.updated && <> · Atualizado <time dateTime={post.updated}>{displayDate(post.updated)}</time></>}</span></div>
    <span className="byline-type">{formatLabel}</span>
  </div>;
}

export default function Post({ post, content, headings, adjacent = {} }) {
  const doi = post.doi?.replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '');
  const isProfile = post.type === 'profile';
  const formatLabel = isProfile ? (post.profile_format === 'interview' ? 'Entrevista' : 'Perfil profissional') : post.type === 'whitepaper' ? 'Whitepaper' : post.type === 'research-note' ? 'Nota de pesquisa' : 'Artigo técnico';
  return <div className="container article-container"><article className={`editorial-article ${isProfile ? 'professional-profile' : ''}`}>
    <header className="article-heading">
      <div className="breadcrumbs"><Link href="/">Início</Link> / <Link href="/artigos">Artigos</Link> / <Link href={`/categories/${post.category}`}>{categoryLabel(post.category)}</Link></div>
      <span className="eyebrow">{categoryLabel(post.category)} / {formatLabel}</span>
      <h1>{post.title}</h1>
      {isProfile && post.professional_name && <p className="profile-name">{post.professional_name}</p>}
      {isProfile && post.professional_headline && <p className="profile-headline">{post.professional_headline}</p>}
      {(post.abstract || post.excerpt) && <p className="article-deck">{plainExcerpt(post.abstract || post.excerpt)}</p>}
      <AuthorLine post={post} formatLabel={formatLabel} />
      {post.authors?.some(person => person.affiliation || person.orcid) && <div className="author-details">{post.authors.map((person, index) => <span key={`${person.name}-${index}`}>{person.name}{person.affiliation && <> · {person.affiliation_url ? <a href={person.affiliation_url}>{person.affiliation}</a> : person.affiliation}</>}{person.orcid && <> · <a href={`https://orcid.org/${person.orcid.replace(/^https?:\/\/orcid\.org\//i, '')}`}>ORCID</a></>}</span>)}</div>}
      {post.keywords?.length > 0 && <p className="paper-keywords"><strong>Palavras-chave:</strong> {post.keywords.join(' · ')}</p>}
      {post.tags?.length > 0 && <p className="paper-keywords"><strong>Marcadores:</strong> {post.tags.join(' · ')}</p>}
      {(shouldShowVersion(post) || doi) && <p className="paper-keywords">{shouldShowVersion(post) && <>Versão {post.version}</>}{doi && <> · <a href={`https://doi.org/${doi}`}>DOI: {doi}</a></>}</p>}
      <PublicationActions post={post} paper />
    </header>
    <FeaturedImage post={post} />
    <div className="article-shell"><div className="reading-column">
      {headings.length > 0 && <details className="article-mobile-toc"><summary>Nesta página</summary><TableOfContents headings={headings} /></details>}
      <div className="article-body" dangerouslySetInnerHTML={{ __html: content }} />
      <ArticleEnhancements />
      {isProfile && (post.sources?.length > 0 || post.relevant_links?.length > 0) && <section className="profile-resources"><h2>Fontes e links</h2>{post.sources?.length > 0 && <ul>{post.sources.map((source, index) => <li key={index}>{typeof source === 'string' ? source : <a href={source.url}>{source.label}</a>}</li>)}</ul>}{post.relevant_links?.length > 0 && <ul>{post.relevant_links.map((link, index) => <li key={index}><a href={link.url}>{link.label}</a></li>)}</ul>}</section>}
      <div className="reading-end"><Link href="/artigos" className="button-text">← Voltar ao acervo</Link><div className="article-neighbors">{adjacent.newer && <Link href={`/posts/${adjacent.newer.slug}`}>← Mais recente</Link>}{adjacent.older && <Link href={`/posts/${adjacent.older.slug}`}>Anterior →</Link>}</div></div>
    </div>{headings.length > 0 && <aside className="article-rail"><p className="rail-label">Nesta página</p><TableOfContents headings={headings} /><div className="rail-divider" /><p className="rail-label">Sobre o artigo</p><div className="rail-fact">Publicado<strong>{displayDate(post.date)}</strong></div><div className="rail-fact">Categoria<strong>{categoryLabel(post.category)}</strong></div></aside>}</div>
  </article></div>;
}
