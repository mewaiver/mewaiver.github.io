import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-3 mt-4 bg-dark text-light">
      <Container className="text-center">
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Tech Chain. All rights reserved.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href="/privacy-policy" className="text-light mx-2">Política de Privacidade</Link>
            <Link href="/terms-of-service" className="text-light mx-2">Termos de serviço</Link>
            <Link href="/contact" className="text-light mx-2">Contato</Link>
            <Link href="/credits" className="text-light mx-2">Créditos</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
