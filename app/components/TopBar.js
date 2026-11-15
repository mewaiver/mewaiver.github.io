"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './TopBar.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Quem Somos' },
  { href: '/contact', label: 'Contato' },
  { href: '/dashboard', label: 'Analítica' },
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

  const toggleTheme = () => {
    const theme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(theme === 'dark');
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-brand">Tech Chain</Link>
        <button
          className="menu-toggle"
          type="button"
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          Menu
        </button>
        <nav id="site-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined}>
                {label}
              </Link>
            );
          })}
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={isDarkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}>
            {isDarkMode ? 'Tema claro' : 'Tema escuro'}
          </button>
        </nav>
      </div>
    </header>
  );
}
