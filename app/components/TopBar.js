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
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
            { isDarkMode ? 
              <Image src="/images/dark_logo.png" alt="Logo" className='logo' />
              :
              <Image src="/images/white_logo.png" alt="Logo" className='logo' />
            }
          </Link>
          <ul className="nav nav-pills">
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
            <li className='nav-item'>
              <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
                Contato
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard" className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`}>
                Analítica
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={toggleTheme} aria-label="Toggle theme">
                {isDarkMode ? (
                  <i className="bi bi-sun"></i>
                ) : (
                  <i className="bi bi-moon"></i>
                )}
              </button>
            </li>            
          </ul>
        </header>
      </div>
    </>
  );
}

export default TopBar;
