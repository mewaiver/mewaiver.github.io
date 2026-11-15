import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>&copy; {new Date().getFullYear()} Tech Chain. All rights reserved.</p>
        <nav aria-label="Links do rodapé">
          <Link href="/privacy-policy">Política de Privacidade</Link>
          <Link href="/terms-of-service">Termos de serviço</Link>
          <Link href="/contact">Contato</Link>
          <Link href="/credits">Créditos</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
