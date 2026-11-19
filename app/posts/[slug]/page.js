
import { getPostBySlug, getAllPosts } from '../../services/posts';
import markdownToHtml from '../../services/markdownToHtml';
import Post from '@/app/components/Post';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

const BlogPost = async ({ params }) => {

  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <p>Post not found!</p>;
  }

  const { content, headings } = await markdownToHtml(post.content);

  return (
    <Post post={post} content={content} headings={headings} />
  );
}

export default BlogPost;
