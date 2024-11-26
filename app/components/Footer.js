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
            <a href="/privacy-policy" className="text-light mx-2">Privacy Policy</a>
            <a href="/terms-of-service" className="text-light mx-2">Terms of Service</a>
            <a href="/contact" className="text-light mx-2">Contact Us</a>
            <Link href="/credits">Créditos</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
