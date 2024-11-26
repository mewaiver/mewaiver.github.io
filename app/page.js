import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { getAllPosts } from './services/posts';

export default async function Home() {
  const posts = await getAllPosts();
  const uniqueCategories = Array.from(new Set(posts.map(post => post.category)));
  const sortedCategories = uniqueCategories.sort((a, b) => a.localeCompare(b));
  return (
    <Row>
      <Col xs={12} md={8}>
          {posts.map((post) => (
              <div key={post.slug} className='card mt-3'>
                <div className="card-body">
                  <Link href={`/posts/${post.slug}`} className="text-decoration-none">
                    <h5 className="card-title">{post.title}</h5>
                  </Link>
                  <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
                  <p className="card-text">{post.excerpt}</p>
                </div>
              </div>
          ))}
      </Col>
      <Col xs={12} md={4}>
        <h4>Categories</h4>
        {sortedCategories.map((category) => (
            <Row key={category}>
              <Link href={`/categories/${category}`} className="text-decoration-none">{category}</Link>
            </Row>
          ))}
      </Col>
    </Row>
  );
}
