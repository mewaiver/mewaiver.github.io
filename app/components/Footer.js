import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-3">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Tech Chain. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
