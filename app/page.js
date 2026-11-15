import PostList from './components/PostList';
import { getAllPosts } from './services/posts';

export default async function Home() {
  const posts = (await getAllPosts()).filter(post => !post?.draft);

  return (
    <div className="home-page">
      <header className="home-intro">
        <h1>Tech Chain</h1>
        <p>Chaining technology through the time.</p>
      </header>
      <section className="section-heading" aria-labelledby="articles-heading">
        <h2 id="articles-heading">Artigos</h2>
        <PostList posts={posts} headingLevel="h3" />
      </section>
    </div>
  );
}
