import Link from 'next/link';

export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-main">
      <div><Link href="/" className="footer-wordmark">TECHCHAIN<span>.</span></Link><p>A publication about technology, ideas, and impact.</p></div>
      <nav className="footer-links" aria-label="Footer links">
        <Link href="/artigos">Articles</Link><Link href="/editorial">About / Editorial</Link><Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-service">Terms</Link><Link href="/credits">Credits</Link>
      </nav>
    </div>
    <div className="footer-lower"><span>© {new Date().getFullYear()} Tech Chain</span><span>Articles, analysis, and perspectives on technology.</span></div>
  </div></footer>;
}
