const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const directory = path.join(process.cwd(), 'app', 'content', 'posts');
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const baseUrl = 'https://www.techchain.com.br';

function xmlEscape(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  })[char]);
}

function formatDate(value) {
  return value instanceof Date ? value.toISOString().slice(0, 10) : String(value).slice(0, 10);
}

const publishedPosts = fs.readdirSync(directory)
  .filter(name => name.endsWith('.md'))
  .map(name => {
    const { data } = matter(fs.readFileSync(path.join(directory, name), 'utf8'));
    return { slug: name.slice(0, -3), ...data };
  })
  .filter(post => !post.draft);
const entries = publishedPosts.map(post => {
    const location = `${baseUrl}/posts/${encodeURIComponent(post.slug)}`;
    const modified = post.updated || post.date;
    return `<url><loc>${xmlEscape(location)}</loc>${modified ? `<lastmod>${xmlEscape(formatDate(modified))}</lastmod>` : ''}</url>`;
  });

entries.unshift(`<url><loc>${baseUrl}/</loc></url>`);
for (const route of ['/artigos', '/editorial', '/about', '/contact']) entries.push(`<url><loc>${baseUrl}${route}</loc></url>`);
for (const category of new Set(publishedPosts.map(post => post.category).filter(Boolean))) {
  entries.push(`<url><loc>${baseUrl}/categories/${encodeURIComponent(category)}</loc></url>`);
}
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
fs.writeFileSync(sitemapPath, xml);
console.log(`Sitemap generated with ${entries.length} URLs at ${sitemapPath}`);
