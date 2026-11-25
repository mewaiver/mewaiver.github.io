const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const root = process.cwd();
const postDir = path.join(root, 'app/content/posts');
const files = fs.readdirSync(postDir).filter(name => name.endsWith('.md'));
const posts = new Map(files.map(name => {
  const slug = name.slice(0, -3);
  const { data, content } = matter(fs.readFileSync(path.join(postDir, name), 'utf8'));
  return [slug, { data, content, name }];
}));
const errors = [];
const publicSlugs = new Set([...posts].filter(([, p]) => !p.data.draft).map(([slug]) => slug));

for (const [slug, post] of posts) {
  if (!post.content.trim()) errors.push(`${post.name}: empty Markdown body`);
  const fences = [...post.content.matchAll(/^\s*```/gm)].length;
  if (fences % 2) errors.push(`${post.name}: unbalanced code fences`);
  for (const match of post.content.matchAll(/\[[^\]]+\]\(\/posts\/([^)#?]+)(?:[?#][^)]*)?\)/g)) {
    if (!publicSlugs.has(match[1])) errors.push(`${post.name}: broken or unpublished post link /posts/${match[1]}`);
  }
  for (const match of post.content.matchAll(/\[[^\]]+\]\((\/[^)#?]+)(?:[?#][^)]*)?\)/g)) {
    const url = match[1];
    if (url.startsWith('/posts/')) continue;
    if (url.startsWith('/images/') || url.startsWith('/editorial/')) {
      if (!fs.existsSync(path.join(root, 'public', url.slice(1)))) errors.push(`${post.name}: missing local asset ${url}`);
    }
  }
  if (post.data.category === 'digital-commerce' || post.data.category === 'sustainability') errors.push(`${post.name}: category should have been removed from collection`);
}

const redirects = fs.existsSync(path.join(root, 'public/posts')) ? fs.readdirSync(path.join(root, 'public/posts')).filter(name => name.endsWith('.html')) : [];
const destinations = new Map();
for (const name of redirects) {
  const slug = name.slice(0, -5);
  const html = fs.readFileSync(path.join(root, 'public/posts', name), 'utf8');
  const target = html.match(/<link rel="canonical" href="https:\/\/www\.techchain\.com\.br\/posts\/([^"]+)"/);
  if (!target) errors.push(`${name}: missing canonical target`);
  else {
    destinations.set(slug, target[1]);
    if (!publicSlugs.has(target[1])) errors.push(`${name}: destination is not a published article`);
    if (slug === target[1]) errors.push(`${name}: self redirect`);
  }
  if (publicSlugs.has(slug)) errors.push(`${name}: redirect shadows published article`);
}
for (const [start, target] of destinations) {
  if (destinations.has(target)) errors.push(`${start}: redirect chain or loop through ${target}`);
}

const audit = JSON.parse(fs.readFileSync(path.join(root, 'docs/editorial/EDITORIAL_AUDIT.json'), 'utf8')).articles;
const backlog = JSON.parse(fs.readFileSync(path.join(root, 'docs/editorial/EDITORIAL_BACKLOG.json'), 'utf8')).items;
const editorialDir = path.join(root, 'docs/editorial');
for (const name of ['EDITORIAL_AUDIT.md', 'EDITORIAL_BACKLOG.md', 'CONTENT_CONSOLIDATION.md', 'REMOVED_CONTENT.md', 'EDITORIAL_ROADMAP.md', 'EDITORIAL_STANDARDS.md']) {
  const file = path.join(editorialDir, name);
  if (!fs.existsSync(file)) { errors.push(`missing editorial document ${name}`); continue; }
  const body = fs.readFileSync(file, 'utf8');
  if (!body.startsWith('# ')) errors.push(`${name}: missing primary Markdown heading`);
  if ([...body.matchAll(/^\s*```/gm)].length % 2) errors.push(`${name}: unbalanced code fences`);
}
if (audit.length !== 80 || new Set(audit.map(a => a.id)).size !== 80) errors.push('audit inventory does not contain 80 unique IDs');
const auditMd = fs.readFileSync(path.join(editorialDir, 'EDITORIAL_AUDIT.md'), 'utf8');
for (const article of audit) {
  if ((auditMd.match(new RegExp(`^\\| ${article.id} \\|`, 'gm')) || []).length !== 1) errors.push(`${article.id}: expected exactly one primary audit row`);
}
const retained = audit.filter(a => a.finalDisposition.startsWith('RETAINED'));
if (retained.length !== posts.size) errors.push('retained audit count differs from collection size');
if (retained.filter(a => a.finalDisposition === 'RETAINED_PUBLISHED').length !== publicSlugs.size) errors.push('published audit count differs from collection');
if (backlog.length !== retained.filter(a => a.action !== 'KEEP').length) errors.push('backlog count differs from retained revision count');
const md = fs.readFileSync(path.join(root, 'docs/editorial/EDITORIAL_BACKLOG.md'), 'utf8');
for (const item of backlog) {
  if (!md.includes(`## ${item.id} — ${item.currentTitle}`)) errors.push(`${item.id}: missing Markdown backlog item`);
  if (!md.includes(`- **Score, action, format:** ${item.currentScore}; \`${item.editorialAction}\`; current \`${item.currentPublicationType}\`; target \`${item.targetPublicationType}\``)) errors.push(`${item.id}: Markdown/JSON metadata mismatch`);
  if (!item.executionSteps?.length || item.executionSteps.some(step => !md.includes(`- ${step}`))) errors.push(`${item.id}: article-specific execution steps missing from Markdown or JSON`);
  if (!posts.has(item.url.replace('/posts/', ''))) errors.push(`${item.id}: missing retained article`);
  if (!item.acceptanceCriteria?.length || !item.targetPublicationType) errors.push(`${item.id}: incomplete acceptance criteria or target type`);
}

const sitemap = path.join(root, 'public/sitemap.xml');
if (fs.existsSync(sitemap)) {
  const xml = fs.readFileSync(sitemap, 'utf8');
  if (xml.includes('docs/editorial')) errors.push('internal editorial document found in sitemap');
}

if (process.argv.includes('--export')) {
  const exportDir = path.join(root, 'out');
  if (!fs.existsSync(exportDir)) errors.push('static export is missing');
  else {
    const htmlFiles = [];
    const visit = directory => {
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const file = path.join(directory, entry.name);
        if (entry.isDirectory()) visit(file);
        else if (file.endsWith('.html')) htmlFiles.push(file);
      }
    };
    visit(exportDir);
    for (const file of htmlFiles) {
      const html = fs.readFileSync(file, 'utf8');
      for (const match of html.matchAll(/href="\/(posts|categories)\/([^"?#]+)[^"]*"/g)) {
        const target = path.join(exportDir, match[1], `${decodeURIComponent(match[2])}.html`);
        if (!fs.existsSync(target)) errors.push(`${path.relative(root, file)}: missing exported route /${match[1]}/${match[2]}`);
      }
    }
    if (fs.existsSync(path.join(exportDir, 'docs/editorial'))) errors.push('internal editorial documents were exported');
    if (htmlFiles.filter(file => path.dirname(file) === path.join(exportDir, 'posts')).length !== publicSlugs.size + redirects.length) errors.push('exported post and redirect page count mismatch');
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated ${posts.size} Markdown articles, ${publicSlugs.size} published slugs, ${redirects.length} redirect fallbacks, ${audit.length} audit records and ${backlog.length} backlog items.`);
}
