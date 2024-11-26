import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import TopBar from "./components/TopBar";
import "./styles/globals.css";
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata = {
  title: "Tech Chain",
  description: "Chaining technology throught the time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400&family=Montserrat:wght@700&family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />

      </head>
      <GoogleAnalytics />
      <body>
        <TopBar />
        <Container fluid='md'>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
