import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Features } from './components/Features';
import { Install } from './components/Install';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { TermsPage } from './components/TermsPage';

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (nextPath: string) => {
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
      setPathname(nextPath);
    }
  };

  if (pathname === '/terms') {
    return <TermsPage onBackHome={() => navigateTo('/')} />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Features />
        <Install />
        <Pricing />
      </main>
      <Footer onTermsClick={() => navigateTo('/terms')} />
    </div>
  );
}

export default App;
