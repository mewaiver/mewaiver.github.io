import Container from "react-bootstrap/Container";
import TopBar from "./components/TopBar";
import "./styles/globals.scss";
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import Head from "./components/Head";

export const metadata = {
  title: "Tech Chain",
  description: "Chaining technology throught the time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <Head/>
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
