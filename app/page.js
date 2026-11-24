import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from './services/posts';
import { categoryLabel } from './services/publicationLabels';
import { byline, displayDate, plainExcerpt } from './services/editorial';

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: { type: 'website', title: 'Tech Chain', description: 'Articles, analysis, and perspectives on technology and engineering.', url: '/' },
};

export default async function Home() {
  const posts = (await getAllPosts()).filter(post => !post.draft);
  const featured = posts.find(post => post.featured) || posts[0];
  const latest = posts.filter(post => post.slug !== featured?.slug).slice(0, 4);

  return <>
    <div className="container">
      {featured && <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">Featured / {categoryLabel(featured.category)}</span>
          <h1 id="hero-title">{featured.title}</h1>
          {(featured.abstract || featured.excerpt) && <p>{plainExcerpt(featured.abstract || featured.excerpt)}</p>}
          <div className="hero-meta">{byline(featured) && <><strong>{byline(featured)}</strong><span aria-hidden="true">·</span></>}<time dateTime={featured.date}>{displayDate(featured.date)}</time><span aria-hidden="true">·</span><span>{featured.type === 'profile' ? 'Professional profile' : 'Article'}</span></div>
          <Link href={`/posts/${featured.slug}`} className="button-primary">Read the article <span className="arrow" aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-art"><Image src="/editorial/cover-network.svg" alt="" fill priority sizes="(max-width: 780px) 100vw, 45vw" /><div className="hero-caption"><span>TECH CHAIN / {categoryLabel(featured.category).toUpperCase()}</span><span>FEATURED</span></div></div>
      </section>}
      <div className="home-below">
        <section aria-labelledby="latest-title"><div className="section-top"><div><span className="eyebrow">The archive</span><h2 className="section-title" id="latest-title">Latest stories.</h2></div><Link href="/artigos" className="button-text">View all articles <span className="arrow" aria-hidden="true">↗</span></Link></div>
          <div className="story-list">{latest.map((post, index) => <article className="story-row" key={post.slug}><div className="story-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div><div><span className="eyebrow">{categoryLabel(post.category)} / <time dateTime={post.date}>{displayDate(post.date)}</time></span><h3><Link href={`/posts/${post.slug}`}>{post.title}</Link></h3><div className="meta">{byline(post) && <span>{byline(post)}</span>}</div></div><Link href={`/posts/${post.slug}`} className="story-arrow" aria-label={`Read ${post.title}`}>↗</Link></article>)}</div>
        </section>
        <aside className="side-statement"><span className="eyebrow">About the publication</span><h2>Good technology deserves good stories.</h2><p>Tech Chain brings together articles and analysis on technology and engineering. The publication is also set up to feature professional profiles when original reporting calls for that format.</p><Link href="/editorial" className="button-text">Explore our editorial approach <span className="arrow" aria-hidden="true">↗</span></Link></aside>
      </div>
    </div>
    <section className="pillars"><div className="container"><span className="eyebrow">A clear editorial focus</span><h2>Depth over volume.</h2><div className="pillar-grid"><div className="pillar"><span>01</span><h3>Ideas</h3><p>Technical articles and analysis of real engineering questions.</p></div><div className="pillar"><span>02</span><h3>People</h3><p>Room for future profiles and interviews of editorial interest.</p></div><div className="pillar"><span>03</span><h3>Context</h3><p>Clear authorship, dates, sources, and formats for every publication.</p></div></div></div></section>
  </>;
}
