type FooterProps = {
  pathname: string;
  onHomeClick?: () => void;
  onTermsClick?: () => void;
};

export function Footer({ pathname, onHomeClick, onTermsClick }: FooterProps) {
  const isTermsPage = pathname === '/terms';

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logos/shield-key.svg" alt="xsGrant Logo" className="h-6 w-6" />
            <span className="text-lg font-extrabold tracking-tight text-black">xsGrant</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a
              href="/"
              onClick={(event) => {
                if (!onHomeClick) {
                  return;
                }
                event.preventDefault();
                onHomeClick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-black transition-colors"
            >
              Home
            </a>
            <a href="https://github.com/xsgrant/releases" className="hover:text-black transition-colors">GitHub</a>
            <a
              href="/terms"
              onClick={(event) => {
                if (!onTermsClick || isTermsPage) {
                  return;
                }
                event.preventDefault();
                onTermsClick();
              }}
              className={`transition-colors ${isTermsPage ? 'text-black' : 'hover:text-black'}`}
            >
              Terms
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} xsGrant. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Zero Standing Privileges for Everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
