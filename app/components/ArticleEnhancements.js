'use client';

import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('java', java);

export default function ArticleEnhancements() {
  useEffect(() => {
    const buttons = [];
    document.querySelectorAll('.article-body pre code').forEach(block => {
      if (block.className.includes('language-')) {
        try { hljs.highlightElement(block); } catch { /* Preserve the original code for unsupported languages. */ }
      }
      const pre = block.closest('pre');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'code-copy';
      button.textContent = 'Copy code';
      button.setAttribute('aria-label', 'Copy code');
      button.setAttribute('aria-live', 'polite');
      button.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(block.textContent); button.textContent = 'Copied!'; }
        catch { button.textContent = 'Select and copy'; }
      });
      pre.appendChild(button);
      buttons.push(button);
    });
    return () => buttons.forEach(button => button.remove());
  }, []);
  return null;
}
