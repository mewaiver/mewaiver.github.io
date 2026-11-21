'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Início' },
  { href: '/artigos', label: 'Artigos' },
  { href: '/editorial', label: 'Sobre / Editorial' },
  { href: '/contact', label: 'Contato' },
];

export default function TopBar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(theme === 'dark');
    document.body.setAttribute('data-bs-theme', theme);
  }, []);
  useEffect(() => setMenuOpen(false), [pathname]);

  function toggleTheme() {
    const theme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }

  return <header className="site-header">
    <div className="topline"><div className="container topline-inner"><span>Tech Chain / Publicação sobre tecnologia</span><span>Engenharia · Ideias · Pessoas</span></div></div>
    <div className="container masthead">
      <Link href="/" className="wordmark" aria-label="Tech Chain — página inicial">TECHCHAIN<span className="mark">.</span></Link>
      <div className="masthead-note">Ideias, pessoas e o trabalho por trás da tecnologia.</div>
    </div>
    <div className="nav-border"><div className="container nav-row">
      <button className="menu-toggle" type="button" aria-controls="main-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}><span aria-hidden="true">☰</span> Menu</button>
      <nav id="main-nav" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Navegação principal">
        {links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={isDarkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}>{isDarkMode ? 'Tema claro' : 'Tema escuro'}</button>
      </nav>
      <div className="nav-right"><Link href="/artigos">Explorar acervo <span className="small-arrow" aria-hidden="true">↗</span></Link></div>
    </div></div>
  </header>;
}
