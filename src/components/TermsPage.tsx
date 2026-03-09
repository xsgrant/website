type TermsPageProps = {
  onBackHome: () => void;
};

export function TermsPage({ onBackHome }: TermsPageProps) {
  return (
    <main className="min-h-screen grid place-items-center bg-gradient-to-b from-slate-50 to-white px-6">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">Terms - Coming soon</h1>
        <p className="mt-4 text-lg text-slate-600">We are preparing the terms page.</p>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onBackHome();
          }}
          className="inline-block mt-6 text-slate-800 border-b border-slate-300 hover:border-slate-500 transition-colors"
        >
          Back to xsGrant
        </a>
      </div>
    </main>
  );
}
