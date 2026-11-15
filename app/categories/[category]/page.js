
import { getAllPosts } from '@/app/services/posts';
import PostList from '@/app/components/PostList';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ category: post.category }));
}

export default async function CategoryPage({ params }) {

  const { category } = await params;

  const allPosts = await getAllPosts();
  
  const filteredPosts = allPosts.filter(post => post.category === category);

  return (
    <div className="post-list-page">
      <h1>Posts in {category}</h1>
      {filteredPosts.length > 0 ? <PostList posts={filteredPosts} /> : <p>No posts found in this category.</p>}
    </div>
  );
}
