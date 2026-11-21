import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from './services/posts';
import { categoryLabel } from './services/publicationLabels';
import { byline, displayDate, plainExcerpt } from './services/editorial';

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: { type: 'website', title: 'Tech Chain', description: 'Artigos, análises e perspectivas sobre tecnologia e engenharia.', url: '/' },
};

export default async function Home() {
  const posts = (await getAllPosts()).filter(post => !post.draft);
  const featured = posts.find(post => post.featured) || posts[0];
  const latest = posts.filter(post => post.slug !== featured?.slug).slice(0, 4);

  return <>
    <div className="container">
      {featured && <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">Em destaque / {categoryLabel(featured.category)}</span>
          <h1 id="hero-title">{featured.title}</h1>
          {(featured.abstract || featured.excerpt) && <p>{plainExcerpt(featured.abstract || featured.excerpt)}</p>}
          <div className="hero-meta">{byline(featured) && <><strong>{byline(featured)}</strong><span aria-hidden="true">·</span></>}<time dateTime={featured.date}>{displayDate(featured.date)}</time><span aria-hidden="true">·</span><span>{featured.type === 'profile' ? 'Perfil profissional' : 'Artigo'}</span></div>
          <Link href={`/posts/${featured.slug}`} className="button-primary">Explorar o artigo <span className="arrow" aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-art"><Image src="/editorial/cover-network.svg" alt="" fill priority sizes="(max-width: 780px) 100vw, 45vw" /><div className="hero-caption"><span>TECH CHAIN / {categoryLabel(featured.category).toUpperCase()}</span><span>EM DESTAQUE</span></div></div>
      </section>}
      <div className="home-below">
        <section aria-labelledby="latest-title"><div className="section-top"><div><span className="eyebrow">O acervo</span><h2 className="section-title" id="latest-title">Últimas publicações.</h2></div><Link href="/artigos" className="button-text">Ver acervo <span className="arrow" aria-hidden="true">↗</span></Link></div>
          <div className="story-list">{latest.map((post, index) => <article className="story-row" key={post.slug}><div className="story-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div><div><span className="eyebrow">{categoryLabel(post.category)} / <time dateTime={post.date}>{displayDate(post.date)}</time></span><h3><Link href={`/posts/${post.slug}`}>{post.title}</Link></h3><div className="meta">{byline(post) && <span>{byline(post)}</span>}</div></div><Link href={`/posts/${post.slug}`} className="story-arrow" aria-label={`Ler ${post.title}`}>↗</Link></article>)}</div>
        </section>
        <aside className="side-statement"><span className="eyebrow">Sobre a publicação</span><h2>Boa tecnologia merece boas histórias.</h2><p>O Tech Chain reúne artigos e análises sobre tecnologia e engenharia. A publicação também está preparada para apresentar perfis profissionais quando houver reportagens próprias para esse formato.</p><Link href="/editorial" className="button-text">Conheça a proposta editorial <span className="arrow" aria-hidden="true">↗</span></Link></aside>
      </div>
    </div>
    <section className="pillars"><div className="container"><span className="eyebrow">Uma linha editorial simples</span><h2>Profundidade em vez de volume.</h2><div className="pillar-grid"><div className="pillar"><span>01</span><h3>Ideias</h3><p>Artigos e análises técnicas sobre questões reais de engenharia.</p></div><div className="pillar"><span>02</span><h3>Pessoas</h3><p>Espaço futuro para perfis e entrevistas de interesse editorial.</p></div><div className="pillar"><span>03</span><h3>Contexto</h3><p>Clareza sobre autoria, datas, fontes e formato de cada publicação.</p></div></div></div></section>
  </>;
}
