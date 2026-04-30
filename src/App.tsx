import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const ShareButton = lazy(() => import('./components/ShareButton'));

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Encyclopedia = lazy(() => import('./pages/Encyclopedia'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ShorinjiKempoMarseille = lazy(() => import('./pages/ShorinjiKempoMarseille'));
const ShorinjiKempoVsKarate = lazy(() => import('./pages/encyclopedie/ShorinjiKempoVsKarate'));
const ShorinjiKempoVsJudo = lazy(() => import('./pages/encyclopedie/ShorinjiKempoVsJudo'));
const ShorinjiKempoVsAikido = lazy(() => import('./pages/encyclopedie/ShorinjiKempoVsAikido'));
const ShorinjiKempoVsKungFu = lazy(() => import('./pages/encyclopedie/ShorinjiKempoVsKungFu'));
const SelfDefenseMarseille = lazy(() => import('./pages/SelfDefenseMarseille'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component for Suspense fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-main">
      <div className="w-12 h-12 border-4 border-primary-gold/20 border-t-primary-gold rounded-full animate-spin"></div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/encyclopedia" element={<Encyclopedia />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
              <Route path="/shorinji-kempo-marseille" element={<ShorinjiKempoMarseille />} />
              <Route path="/encyclopedie/shorinji-kempo-vs-karate" element={<ShorinjiKempoVsKarate />} />
              <Route path="/encyclopedie/shorinji-kempo-vs-judo" element={<ShorinjiKempoVsJudo />} />
              <Route path="/encyclopedie/shorinji-kempo-vs-aikido" element={<ShorinjiKempoVsAikido />} />
              <Route path="/encyclopedie/shorinji-kempo-vs-kung-fu" element={<ShorinjiKempoVsKungFu />} />
              <Route path="/self-defense-marseille" element={<SelfDefenseMarseille />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Suspense fallback={null}>
          <ShareButton />
        </Suspense>
      </div>
    </Router>
  );
}
