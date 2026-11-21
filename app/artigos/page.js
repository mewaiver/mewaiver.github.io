import Link from 'next/link';
import { getAllPosts } from '../services/posts';
import PostList from '../components/PostList';

export const metadata = {
  title: 'Artigos | Tech Chain',
  description: 'Explore o acervo de artigos e análises do Tech Chain.',
  alternates: { canonical: '/artigos' },
  openGraph: { type: 'website', title: 'Artigos | Tech Chain', description: 'Explore o acervo de artigos e análises do Tech Chain.', url: '/artigos' },
};

export default async function ArchivePage() {
  const posts = (await getAllPosts()).filter(post => !post.draft);
  return <div className="container archive-page"><div className="page-kicker"><Link href="/" className="backlink">← Página inicial</Link></div><header className="page-intro"><span className="eyebrow">Publicações / Acervo</span><h1>Artigos e análises.</h1><p>Explore as publicações do Tech Chain por assunto ou pesquise no acervo.</p></header><PostList posts={posts} searchable /></div>;
}
