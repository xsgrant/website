type TermsPageProps = {
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
};

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: LegalSection[] = [
  {
    title: '1. Definitions',
    paragraphs: ['For the purposes of this Agreement:'],
    bullets: [
      '**xsGrant** means the software product known as xsGrant, including object code, documentation, updates, patches, and related materials supplied by Licensor.',
      '**Commercial License** means the internal-use license granted under this Agreement for use of xsGrant in organizational environments.',
      '**Production Instance** means an operational deployment of xsGrant used in a live environment for Licensee\'s internal purposes.',
      '**Source Code** means human-readable software code that Licensor may make available under a separate license, including the PolyForm Noncommercial License **1.0.0** where applicable.',
    ],
  },
  {
    title: '2. License Grant',
    paragraphs: [
      'Subject to full compliance with this Agreement, Licensor grants Licensee a limited, non-exclusive, non-transferable, non-sublicensable, revocable Commercial License to install and use xsGrant solely for Licensee\'s own internal purposes.',
      'Organizations with fewer than **ten (10)** users with access to xsGrant may use xsGrant free of charge on an unsupported basis.',
      'Organizations with more than **ten (10)** users with access to xsGrant must obtain a paid license and receive next business day support.',
      'A paid license covers **one (1)** organization and the number of users within that organization who have access to xsGrant, and may be used for Production and all non-production environments, including Dev, TST, and ACC.',
      'Licensee may run xsGrant in as many instances as Licensee requires, provided that the total number of users with access to xsGrant does not exceed the number of users covered by the applicable license.',
      'Each license may be used with only **one (1)** IDM solution. If Licensee uses multiple IDM solutions, Licensee must purchase an additional license and run a separate xsGrant instance for each additional IDM solution.',
      'xsGrant is licensed, not sold.',
      'No rights are granted except those expressly stated in this Agreement.',
    ],
  },
  {
    title: '3. Source-Available Access',
    paragraphs: [
      'Licensor may make Source Code available under a separate license, including the PolyForm Noncommercial License **1.0.0**, for the specific source code copies distributed with that license.',
      'Any rights to use, copy, modify, create derivative works from, or distribute those Source Code copies are governed by that separate source code license and not by this Agreement.',
      'This Agreement governs Commercial License rights for deployment, support, user limits, and paid use of xsGrant.',
      'If there is any conflict between this Agreement and the license accompanying a particular Source Code copy, the license accompanying that Source Code copy controls for that Source Code copy.',
    ],
  },
  {
    title: '4. Restrictions',
    paragraphs: ['Licensee shall not:'],
    bullets: [
      'use xsGrant in excess of the number of users covered by the applicable license',
      'use **one (1)** license for more than **one (1)** IDM solution',
      'provide xsGrant as a hosted service, managed service, or software-as-a-service offering to third parties',
      'use xsGrant on behalf of third parties',
      'transfer, sublicense, resell, or assign the Commercial License except as expressly authorized in writing by Licensor',
      'remove, alter, or obscure proprietary notices, copyright notices, trademarks, or license identifiers',
      'reverse engineer, decompile, or disassemble xsGrant except where mandatory law expressly permits',
      'exercise any commercial rights beyond the scope of this Agreement or any separate license granted by Licensor',
    ],
  },
  {
    title: '5. Permitted Internal Use',
    paragraphs: [
      'Licensee may use xsGrant solely for its own internal business or organizational purposes.',
      'Licensee may not host, operate, administer, or provide xsGrant for clients, customers, affiliates, subsidiaries, or third parties unless expressly authorized in writing by Licensor.',
    ],
  },
  {
    title: '6. Ownership and Intellectual Property',
    paragraphs: [
      'All rights, title, and interest in xsGrant remain exclusively vested in Licensor, subject only to the licenses expressly granted under this Agreement or under any separate license accompanying Source Code.',
      'This includes all rights relating to:',
    ],
    bullets: ['source code', 'object code', 'architecture', 'design', 'documentation', 'trademarks', 'know-how', 'copyrights', 'trade secrets'],
  },
  {
    title: '7. Updates and Maintenance',
  },
  {
    title: '8. Self-Hosted Environment Responsibility',
      paragraphs: [
        "Licensor is not responsible for failures, losses, or vulnerabilities arising from Licensee's infrastructure or configuration.",
        'For self-hosted deployments, Licensee is solely responsible for all aspects of its hosting environment, including:',
      ],
    bullets: [
      'server administration',
      'infrastructure security',
      'backups',
      'dependency management',
      'operating system maintenance',
      'network security',
      'access controls',
      'disaster recovery',
    ],
  },
  {
    title: '9. Data Responsibility',
    paragraphs: [
      'xsGrant is designed not to require the processing or storage of personal data as part of its intended operation.',
      'Licensee remains solely responsible for any data introduced into its environment and for compliance with all applicable laws relating to such data.',
    ],
  },
  {
    title: '10. Disclaimer of Warranty',
    paragraphs: [
      'xsGrant is provided **"AS IS"** and **"AS AVAILABLE"**, without warranties of any kind, whether express, implied, statutory, or otherwise.',
      'Any support provided is limited to next business day support and is available only for the latest version and the **second (2)** latest version of xsGrant.',
      'To the maximum extent permitted by law, Licensor disclaims all warranties, including:',
    ],
    bullets: ['merchantability', 'fitness for a particular purpose', 'non-infringement', 'uninterrupted availability', 'error-free operation'],
  },
  {
    title: '11. Limitation of Liability',
    paragraphs: [
      'Licensor\'s total aggregate liability under this Agreement shall not exceed the amount paid by Licensee for xsGrant during the **twelve (12)** months preceding the event giving rise to liability.',
      'To the maximum extent permitted by applicable law, Licensor shall not be liable for:',
    ],
    bullets: [
      'indirect damages',
      'incidental damages',
      'consequential damages',
      'special damages',
      'punitive damages',
      'loss of profits',
      'loss of revenue',
      'loss of business opportunity',
      'data loss',
      'business interruption',
    ],
  },
  {
    title: '12. Termination',
    paragraphs: [
      'This Agreement terminates immediately upon breach by Licensee.',
      'Termination of this Agreement does not by itself terminate any separate Source Code license, which remains governed by its own terms.',
      'Upon termination, Licensee shall immediately:',
    ],
    bullets: ['cease all use of xsGrant under this Agreement', 'remove all installed xsGrant instances governed by this Agreement', 'destroy all backups and related materials governed by this Agreement'],
  },
  {
    title: '13. Governing Law and Jurisdiction',
    paragraphs: [
      'This Agreement shall be governed exclusively by the laws of **the Netherlands**, excluding conflict-of-law principles.',
      'Any dispute arising from or relating to this Agreement shall be submitted exclusively to the competent courts of the Netherlands.',
    ],
  },
  {
    title: '14. Severability',
    paragraphs: ['If any provision of this Agreement is found unenforceable or invalid, the remaining provisions shall remain in full force and effect.'],
  },
  {
    title: '15. Entire Agreement',
    paragraphs: [
      'This Agreement constitutes the complete and exclusive agreement between Licensor and Licensee concerning the Commercial License for xsGrant and supersedes all prior proposals, discussions, understandings, or agreements relating to that Commercial License.',
      'Any separate license accompanying Source Code, including the PolyForm Noncommercial License **1.0.0** where applicable, remains separate and is not superseded by this Agreement.',
    ],
  },
  {
    title: '16. Contact',
    paragraphs: ['Licensing inquiries: **info@xsgrant.com**'],
  },
];

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export function TermsPage({ onNavigateHome, onNavigateSection }: TermsPageProps) {
  return (
    <div className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top,_rgba(38,71,154,0.18),_transparent_58%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.28)] backdrop-blur-sm">
          <div className="border-b border-slate-200/70 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(38,71,154,0.94))] px-6 py-10 text-white sm:px-10 sm:py-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100/90">Legal &amp; Licensing</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">End-User License Agreement</h1>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                The same straightforward approach behind xsGrant carries into the legal terms: clear commercial scope,
                licensed user-based access, separate source-code licensing, and transparent self-hosting responsibilities.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigateHome();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Back to Homepage
              </a>
              <a
                href="/#pricing"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigateSection('pricing');
                }}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                View Pricing
              </a>
              <a
                href="/#install"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigateSection('install');
                }}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/75">Product</p>
                <p className="mt-2 text-lg font-semibold">xsGrant</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/75">Version</p>
                <p className="mt-2 text-lg font-semibold">1.0</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/75">Effective Date</p>
                <p className="mt-2 text-lg font-semibold">23-03-2026</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/80 px-6 py-6 text-slate-700 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">Copyright Notice</p>
                <p className="mt-3 text-base leading-7">Copyright &copy; {new Date().getFullYear()} iJam IT Solutions. All rights reserved.</p>
                <p className="mt-4 text-base leading-7">
                  This End-User License Agreement ("Agreement") is a legal agreement between{' '}
                  <strong>iJam IT Solutions</strong> ("Licensor") and the individual or legal entity installing,
                  accessing, deploying, or using <strong>xsGrant</strong> ("Licensee").
                </p>
                <p className="mt-4 text-base leading-7">
                  If Licensee does not agree to these terms, Licensee receives no rights under this Agreement. Any
                  separately licensed Source Code remains governed by its own accompanying license.
                </p>
              </div>

              <div className="rounded-3xl border border-accent-100 bg-accent-50/70 px-6 py-6 text-slate-700 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent-500">At a glance</p>
                <div className="mt-4 space-y-4 text-sm leading-7 sm:text-base">
                  <p>
                    <strong>Deployment:</strong> unlimited instances within your licensed user count.
                  </p>
                  <p>
                    <strong>Use case:</strong> internal use only unless separately authorized.
                  </p>
                  <p>
                    <strong>Hosting:</strong> you operate and secure your own environment.
                  </p>
                  <p>
                    <strong>Source code:</strong> separately licensed where provided, including under PolyForm Noncommercial.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {sections.map((legalSection) => (
                <div key={legalSection.title} className="rounded-3xl border border-slate-200/80 bg-white px-6 py-6 shadow-sm sm:px-8">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950">{legalSection.title}</h2>

                  {legalSection.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                      {renderInlineBold(paragraph)}
                    </p>
                  ))}

                  {legalSection.title === '7. Updates and Maintenance' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Functional enhancements, feature upgrades, or major releases may be offered separately and may
                      require additional licensing terms or fees.
                    </p>
                  )}

                  {legalSection.title === '7. Updates and Maintenance' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Licensor is under no obligation to provide updates beyond those expressly offered.
                    </p>
                  )}

                  {legalSection.title === '7. Updates and Maintenance' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Licensor aims to provide <strong>three (3)</strong> releases per year. Security patches may be released separately
                      as needed.
                    </p>
                  )}

                  {legalSection.title === '6. Ownership and Intellectual Property' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">No ownership rights are transferred under this Agreement.</p>
                  )}

                  {legalSection.title === '10. Disclaimer of Warranty' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Licensor does not warrant that xsGrant will meet Licensee&apos;s requirements or operate without
                      interruption.
                    </p>
                  )}

                  {legalSection.bullets && (
                    <ul className="mt-4 space-y-2 text-slate-700">
                      {legalSection.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 leading-8">
                          <span className="mt-3 h-2 w-2 flex-none rounded-full bg-accent-500" />
                          <span>{renderInlineBold(bullet)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {legalSection.title === '12. Termination' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Termination does not limit Licensor&apos;s right to pursue legal remedies.
                    </p>
                  )}
                </div>
              ))}
            </div>

            <footer className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 px-6 py-6 text-slate-200 shadow-sm sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Licensor</p>
              <p className="mt-3 text-xl font-semibold text-white">iJam IT Solutions</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
