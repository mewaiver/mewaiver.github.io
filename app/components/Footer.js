import Link from 'next/link';

export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-main">
      <div><Link href="/" className="footer-wordmark">TECHCHAIN<span>.</span></Link><p>Uma publicação sobre tecnologia, ideias e impacto.</p></div>
      <nav className="footer-links" aria-label="Links do rodapé">
        <Link href="/artigos">Acervo</Link><Link href="/editorial">Sobre / Editorial</Link><Link href="/contact">Contato</Link>
        <Link href="/privacy-policy">Privacidade</Link><Link href="/terms-of-service">Termos</Link><Link href="/credits">Créditos</Link>
      </nav>
    </div>
    <div className="footer-lower"><span>© {new Date().getFullYear()} Tech Chain</span><span>Artigos, análises e perspectivas sobre tecnologia.</span></div>
  </div></footer>;
}
