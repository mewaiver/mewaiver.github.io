const siteUrl = 'https://www.techchain.com.br';

function descriptionFor(post) {
  const source = post.abstract || post.excerpt || post.title;
  const plain = source
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (plain.length <= 160) return plain;
  return `${plain.slice(0, 159).replace(/\s+\S*$/, '')}…`;
}

export function publicationMetadata(post) {
  const title = `${post.title} | Tech Chain`;
  const description = descriptionFor(post);
  const url = `${siteUrl}/posts/${encodeURIComponent(post.slug)}`;
  const authors = post.authors.map(person => person.name);

  return {
    title,
    description,
    ...(post.keywords.length ? { keywords: post.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: 'Tech Chain',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors,
    },
    twitter: { card: 'summary', title, description },
  };
}
