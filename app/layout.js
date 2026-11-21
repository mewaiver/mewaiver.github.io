import TopBar from "./components/TopBar";
import "./styles/globals.scss";
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata = {
  title: "Tech Chain",
  description: "Artigos, análises e perspectivas sobre tecnologia e engenharia.",
  metadataBase: new URL('https://www.techchain.com.br'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <GoogleAnalytics />
      <body>
        <a className="sr-only skip-link" href="#main-content">Ir para o conteúdo principal</a>
        <TopBar />
        <main className="site-main" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
