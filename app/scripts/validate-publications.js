const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const directory = path.join(process.cwd(), 'app', 'content', 'posts');
const domains = new Set([
  'ai', 'blockchain', 'cloud-computing', 'databases', 'digital-commerce',
  'engineering', 'iot', 'security', 'sustainability',
]);
const types = new Set(['whitepaper', 'research-note', 'article', 'profile']);
const requiredSections = [
  /^## 1\. Introdução/m,
  /^## 2\. Fundamentação/m,
  /^## 3\. Metodologia/m,
  /^## 4\. Avaliação/m,
  /^## 5\. Limitações/m,
  /^## 6\. Conclusão/m,
  /^## Referências/m,
];
const errors = [];
const files = fs.readdirSync(directory).filter(name => name.endsWith('.md'));

for (const name of files) {
  const { data, content } = matter(fs.readFileSync(path.join(directory, name), 'utf8'));
  const issue = message => errors.push(`${name}: ${message}`);
  if (typeof data.title !== 'string' || !data.title.trim()) issue('missing title');
  if (typeof data.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) issue('date must be YYYY-MM-DD');
  if (!domains.has(data.category)) issue(`unknown category: ${data.category}`);
  if (data.type && !types.has(data.type)) issue(`unknown type: ${data.type}`);
  if (data.type === 'profile') {
    if (data.profile_format && !['profile', 'interview'].includes(data.profile_format)) issue('profile_format must be profile or interview');
    if (!data.professional_name || typeof data.professional_name !== 'string') issue('profile needs professional_name');
    if (!data.professional_headline || typeof data.professional_headline !== 'string') issue('profile needs professional_headline');
    if (!data.authors?.length && !data.author) issue('profile needs an independent author byline');
    if (!data.image || typeof data.image !== 'string') issue('profile needs image');
    for (const field of ['sources', 'relevant_links']) {
      if (data[field] !== undefined && (!Array.isArray(data[field]) || data[field].some(item => typeof item !== 'string' && (!item || typeof item.label !== 'string' || typeof item.url !== 'string')))) issue(`${field} must contain strings or label/url objects`);
    }
  }
  if (data.authors && (!Array.isArray(data.authors) || data.authors.some(person => !person || typeof person.name !== 'string' || !person.name.trim()))) issue('authors must contain named objects');
  if (data.keywords && (!Array.isArray(data.keywords) || data.keywords.some(word => typeof word !== 'string'))) issue('keywords must be strings');
  if (data.tags && (!Array.isArray(data.tags) || data.tags.some(tag => typeof tag !== 'string' || ['egineering', 'abstract'].includes(tag)))) issue('tags must be named string domains');
  for (const field of ['doi', 'pdf_url', 'code_url', 'bibtex', 'version']) {
    if (data[field] !== undefined && typeof data[field] !== 'string') issue(`${field} must be a string`);
  }
  if (data.type === 'whitepaper') {
    const wordCount = String(data.abstract || '').trim().split(/\s+/).filter(Boolean).length;
    if (wordCount < 150 || wordCount > 250) issue(`abstract has ${wordCount} words; expected 150–250`);
    if (!data.authors?.length) issue('whitepaper needs authors');
    if (!data.keywords?.length) issue('whitepaper needs keywords');
    if (!data.bibtex?.startsWith('@techreport{')) issue('whitepaper needs a @techreport BibTeX entry');
    requiredSections.forEach((pattern, index) => {
      if (!pattern.test(content)) issue(`missing required section ${index + 1}`);
    });
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated ${files.length} articles.`);
}
