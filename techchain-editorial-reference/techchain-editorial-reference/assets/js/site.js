/* Reference interactions only. Next.js should retain its real data and routing. */
(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const search = document.querySelector('[data-archive-search]');
  const rows = [...document.querySelectorAll('[data-archive-row]')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const status = document.querySelector('[data-archive-status]');
  const empty = document.querySelector('[data-archive-empty]');
  let category = 'all';
  const normalize = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const apply = () => {
    const query = normalize(search?.value.trim() || '');
    let visible = 0;
    rows.forEach(row => {
      const match = (category === 'all' || row.dataset.category === category)
        && (!query || normalize(row.textContent).includes(query));
      row.hidden = !match;
      if (match) visible++;
    });
    if (status) status.textContent = `${visible} ${visible === 1 ? 'artigo exibido' : 'artigos exibidos'} nesta amostra do acervo`;
    if (empty) empty.style.display = visible ? 'none' : 'block';
  };
  if (search) search.addEventListener('input', apply);
  filters.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    filters.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    apply();
  }));
  if (rows.length) apply();

  document.querySelectorAll('[data-copy-code]').forEach(button => {
    button.addEventListener('click', async () => {
      const code = button.closest('pre')?.querySelector('code')?.textContent;
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code);
        const original = button.textContent;
        button.textContent = 'Copiado!';
        window.setTimeout(() => button.textContent = original, 1800);
      } catch {
        button.textContent = 'Selecione e copie';
      }
    });
  });

  const sections = [...document.querySelectorAll('.article-body [id]')];
  if (sections.length && 'IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.toc a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
      });
    }, { rootMargin: '-12% 0px -70% 0px' });
    sections.forEach(section => observer.observe(section));
  }
})();
