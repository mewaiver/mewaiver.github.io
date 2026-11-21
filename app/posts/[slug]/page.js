
import { getPostBySlug, getAllPosts } from '../../services/posts';
import markdownToHtml from '../../services/markdownToHtml';
import Post from '@/app/components/Post';
import { publicationMetadata } from '../../services/publicationMetadata';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.filter(post => !post.draft).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return publicationMetadata(post);
}

const BlogPost = async ({ params }) => {

  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <p>Post not found!</p>;
  }

  const { content, headings } = await markdownToHtml(post.content);
  const posts = (await getAllPosts()).filter(item => !item.draft);
  const index = posts.findIndex(item => item.slug === slug);
  const adjacent = { newer: posts[index - 1], older: posts[index + 1] };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': post.type === 'profile' ? 'ProfilePage' : 'Article',
    headline: post.title,
    datePublished: post.date,
    ...(post.updated ? { dateModified: post.updated } : {}),
    author: post.authors.map(person => ({ '@type': 'Person', name: person.name })),
    publisher: { '@type': 'Organization', name: 'Tech Chain', url: 'https://www.techchain.com.br' },
    mainEntityOfPage: `https://www.techchain.com.br/posts/${encodeURIComponent(slug)}`,
    ...(post.type === 'profile' ? { mainEntity: { '@type': 'Person', name: post.professional_name } } : {}),
  };

  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} /><Post post={post} content={content} headings={headings} adjacent={adjacent} /></>
  );
}

export default BlogPost;
