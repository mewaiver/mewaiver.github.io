import Link from 'next/link';

export default function PostList({ posts, headingLevel = 'h2' }) {
  const Heading = headingLevel;
  return (
    <div className="post-list">
      {posts.map((post) => (
        <article className="post-list-item" key={post.slug}>
          <div className="post-meta">
            <time dateTime={post.date}>{post.date}</time>
            {post.category && (
              <>
                <span className="meta-divider" aria-hidden="true">/</span>
                <Link href={`/categories/${post.category}`}>{post.category}</Link>
              </>
            )}
          </div>
          <Heading><Link href={`/posts/${post.slug}`}>{post.title}</Link></Heading>
          {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
        </article>
      ))}
    </div>
  );
}
