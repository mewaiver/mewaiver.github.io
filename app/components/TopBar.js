'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/artigos', label: 'Articles' },
  { href: '/editorial', label: 'About / Editorial' },
  { href: '/contact', label: 'Contact' },
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
    <div className="topline"><div className="container topline-inner"><span>Tech Chain / A technology publication</span><span>Engineering · Ideas · People</span></div></div>
    <div className="container masthead">
      <Link href="/" className="wordmark" aria-label="Tech Chain — home">TECHCHAIN<span className="mark">.</span></Link>
      <div className="masthead-note">Ideas, people, and the work behind technology.</div>
    </div>
    <div className="nav-border"><div className="container nav-row">
      <button className="menu-toggle" type="button" aria-controls="main-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}><span aria-hidden="true">☰</span> Menu</button>
      <nav id="main-nav" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        {links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}>{isDarkMode ? 'Light theme' : 'Dark theme'}</button>
      </nav>
      <div className="nav-right"><Link href="/artigos">Explore articles <span className="small-arrow" aria-hidden="true">↗</span></Link></div>
    </div></div>
  </header>;
}
