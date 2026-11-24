
import { getAllPosts } from '@/app/services/posts';
import PostList from '@/app/components/PostList';
import { categoryLabel } from '@/app/services/publicationLabels';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return [...new Set(posts.map(post => post.category).filter(Boolean))].map(category => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const label = categoryLabel(category);
  return { title: `${label} | Tech Chain`, description: `${label} articles on Tech Chain.`, alternates: { canonical: `/categories/${category}` }, openGraph: { type: 'website', title: `${label} | Tech Chain`, description: `${label} articles on Tech Chain.`, url: `/categories/${category}` } };
}

export default async function CategoryPage({ params }) {

  const { category } = await params;

  const allPosts = await getAllPosts();
  
  const filteredPosts = allPosts.filter(post => !post.draft && post.category === category);

  return (
    <div className="post-list-page">
      <h1>Articles in {categoryLabel(category)}</h1>
      {filteredPosts.length > 0 ? <PostList posts={filteredPosts} /> : <p>No articles in this category.</p>}
    </div>
  );
}
