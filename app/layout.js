import TopBar from "./components/TopBar";
import "./styles/globals.scss";
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata = {
  title: "Tech Chain",
  description: "Articles, analysis, and perspectives on technology and engineering.",
  metadataBase: new URL('https://www.techchain.com.br'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>
        <a className="sr-only skip-link" href="#main-content">Skip to main content</a>
        <TopBar />
        <main className="site-main" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
