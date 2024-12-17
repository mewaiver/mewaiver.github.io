"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import './TopBar.css'

const TopBar = () => {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(currentTheme === 'dark');
    document.body.setAttribute('data-bs-theme', currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.body.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top shadow" style={{ backgroundColor: isDarkMode ? '#121212' : '#FFF' }}>
        <div className="container">
          <Link href="/" className="navbar-brand">
            {isDarkMode ?
              <Image src="/images/dark_logo.png" alt="Logo" className='logo' />
              :
              <Image src="/images/white_logo.png" alt="Logo" className='logo' />
            }
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
                  Quem Somos
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/dashboard" className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`}>
                  Analítica
                </Link>
              </li>
              <li className="nav-item">
                <button className="link btn btn-link" onClick={toggleTheme} aria-label="Toggle theme">
                  {isDarkMode ? (
                    <i className="bi bi-sun"></i>
                  ) : (
                    <i className="bi bi-moon"></i>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopBar;
