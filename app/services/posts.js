import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '/app/content/posts');
const publicationTypes = new Set(['whitepaper', 'research-note', 'article', 'profile']);

function generatedBibtex(post) {
  const entryType = post.type === 'whitepaper' ? 'techreport' : 'article';
  const key = post.slug.replace(/[^a-zA-Z0-9:_-]/g, '-');
  const value = text => String(text || '').replace(/[{}]/g, brace => `\\${brace}`);
  const authors = post.authors.map(person => person.name).join(' and ') || 'Tech Chain';
  const fields = [
    `title = {${value(post.title)}}`,
    `author = {${value(authors)}}`,
    `year = {${String(post.date || '').slice(0, 4)}}`,
    `url = {https://www.techchain.com.br/posts/${encodeURIComponent(post.slug)}}`,
  ];
  if (post.type === 'whitepaper' || post.type === 'research-note' || post.hasExplicitVersion) {
    fields.push(`note = {Version ${value(post.version)}}`);
  }
  return `@${entryType}{${key},\n  ${fields.join(',\n  ')}\n}`;
}

function normalizePost(slug, data) {
  const authors = Array.isArray(data.authors)
    ? data.authors.filter(person => person && typeof person.name === 'string')
    : data.author ? [{ name: data.author }] : [];

  const type = publicationTypes.has(data.type) ? data.type : data.is_whitepaper ? 'whitepaper' : 'article';
  const hasExplicitVersion = typeof data.version === 'string' && Boolean(data.version.trim());
  const hasExplicitBibtex = typeof data.bibtex === 'string' && Boolean(data.bibtex.trim());
  const post = {
    ...data,
    slug,
    authors,
    type,
    version: hasExplicitVersion ? data.version : 'v1.0',
    hasExplicitVersion,
    hasExplicitBibtex,
    keywords: Array.isArray(data.keywords) ? data.keywords.filter(word => typeof word === 'string') : [],
    tags: Array.isArray(data.tags) ? data.tags.filter(tag => typeof tag === 'string') : [],
    is_whitepaper: type === 'whitepaper',
  };
  return { ...post, bibtex: hasExplicitBibtex ? data.bibtex : generatedBibtex(post) };
}

export async function getAllPosts() {
  
  const fileNames = await fs.promises.readdir(postsDirectory);

  const posts = await Promise.all(fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = await fs.promises.readFile(filePath, 'utf8');

      const { data } = matter(fileContents);
      const slug = fileName.replace(/\.md$/, '');

      return normalizePost(slug, data);
    })
  );

  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return sortedPosts;
}

export async function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = await fs.promises.readFile(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  return { ...normalizePost(slug, data), content };
}
