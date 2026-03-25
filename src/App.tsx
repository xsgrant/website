import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Scenarios } from './components/Scenarios';
import { TrustSection } from './components/TrustSection';
import { Features } from './components/Features';
import { Install } from './components/Install';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { TermsPage } from './components/TermsPage';

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  const scrollToSection = (sectionId: string) => {
    window.requestAnimationFrame(() => {
      const target = document.getElementById(sectionId);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (nextPath: string, scrollToTop = false) => {
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
      setPathname(nextPath);

      if (scrollToTop) {
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
      }
    }
  };

  const navigateToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', `/#${sectionId}`);
      setPathname('/');
      scrollToSection(sectionId);
      return;
    }

    window.history.replaceState({}, '', `/#${sectionId}`);
    scrollToSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200 selection:text-black">
      <Navbar
        onNavigateHome={() => navigateTo('/')}
        onNavigateSection={navigateToSection}
      />
      <main>
        {pathname === '/terms' ? (
          <TermsPage onNavigateHome={() => navigateTo('/')} onNavigateSection={navigateToSection} />
        ) : (
          <>
            <Hero />
            <TrustSection />
            <Scenarios />
            <Features />
            <Install />
            <Pricing />
          </>
        )}
      </main>
      <Footer pathname={pathname} onHomeClick={() => navigateTo('/')} onTermsClick={() => navigateTo('/terms', true)} />
      <Analytics />
    </div>
  );
}

export default App;
