import TopBar from "./components/TopBar";
import "./styles/globals.scss";
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import Head from "./components/Head";

export const metadata = {
  title: "Tech Chain",
  description: "Chaining technology through the time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head/>
      <GoogleAnalytics />
      <body>
        <TopBar />
        <main className="site-main" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
