
import { getAllPosts } from '@/app/services/posts';
import PostList from '@/app/components/PostList';
import { categoryLabel } from '@/app/services/publicationLabels';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return [...new Set(posts.map(post => post.category).filter(Boolean))].map(category => ({ category }));
}

export default async function CategoryPage({ params }) {

  const { category } = await params;

  const allPosts = await getAllPosts();
  
  const filteredPosts = allPosts.filter(post => !post.draft && post.category === category);

  return (
    <div className="post-list-page">
      <h1>Publicações em {categoryLabel(category)}</h1>
      {filteredPosts.length > 0 ? <PostList posts={filteredPosts} /> : <p>Nenhuma publicação nesta categoria.</p>}
    </div>
  );
}
