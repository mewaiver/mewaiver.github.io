import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import katex from 'katex';

function plainText(node) {
  if (typeof node.value === 'string') return node.value;
  return (node.children || []).map(plainText).join('');
}

export default async function markdownToHtml(markdown) {
  const headings = [];
  const usedIds = new Map();
  const result = await remark()
    .use(remarkGfm)
    .use(remarkMath)
    .use(() => tree => {
      for (const node of tree.children) {
        if (node.type === 'heading' && node.depth >= 2 && node.depth <= 3) {
          const title = plainText(node).trim();
          const base = title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
          const count = usedIds.get(base) || 0;
          usedIds.set(base, count + 1);
          const id = count ? `${base}-${count + 1}` : base;
          node.data = { ...node.data, hProperties: { id } };
          headings.push({ id, title, depth: node.depth });
        }
      }
      function renderMath(node) {
        if (node.type === 'math' || node.type === 'inlineMath') {
          const displayMode = node.type === 'math';
          node.type = 'html';
          delete node.data;
          node.value = katex.renderToString(node.value, {
            displayMode,
            throwOnError: false,
            trust: false,
          });
        } else if (node.children) node.children.forEach(renderMath);
      }
      tree.children.forEach(renderMath);
    })
    // Paper content is maintained in this repository; raw HTML supports figures and captions.
    .use(html, { sanitize: false })
    .process(markdown);
  return { content: result.toString(), headings };
}
