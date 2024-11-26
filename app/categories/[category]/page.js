
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { getAllPosts } from '@/app/services/posts';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ category: post.category }));
}

export default async function CategoryPage({ params }) {

  const { category } = await params;

  const allPosts = await getAllPosts();
  
  const filteredPosts = allPosts.filter(post => post.category === category);

  return (
    <Row>
      <Col className="col-12">
        <h1>Posts in {category}</h1>
        <Row>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Col key={post.slug} md={6} lg={4} className="mb-4">
                <div className="card d-flex flex-column h-100">
                  <div className="card-body">
                    <Link href={`/posts/${post.slug}`} className="text-decoration-none">
                      <h5 className="card-title">{post.title}</h5>
                    </Link>
                    <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
                    <p className="card-text">{post.excerpt}</p>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <p>No posts found in this category.</p>
          )}
        </Row>
      </Col>
    </Row>
  );
}
