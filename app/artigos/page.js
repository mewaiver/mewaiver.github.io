import Link from 'next/link';
import { getAllPosts } from '../services/posts';
import PostList from '../components/PostList';

export const metadata = {
  title: 'Articles | Tech Chain',
  description: 'Explore the Tech Chain archive of articles and analysis.',
  alternates: { canonical: '/artigos' },
  openGraph: { type: 'website', title: 'Articles | Tech Chain', description: 'Explore the Tech Chain archive of articles and analysis.', url: '/artigos' },
};

export default async function ArchivePage() {
  const posts = (await getAllPosts()).filter(post => !post.draft);
  return <div className="container archive-page"><div className="page-kicker"><Link href="/" className="backlink">← Home</Link></div><header className="page-intro"><span className="eyebrow">Publications / Archive</span><h1>Articles and analysis.</h1><p>Browse Tech Chain publications by topic or search the archive.</p></header><PostList posts={posts} searchable /></div>;
}
