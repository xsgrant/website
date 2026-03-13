type TermsPageProps = {
  onBackHome: () => void;
};

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: Section[] = [
  {
    title: '1. Definitions',
    paragraphs: ['For the purposes of this Agreement:'],
    bullets: [
      '**xsGrant** means the software product known as xsGrant, including source code made available for inspection, object code, documentation, updates, patches, and related materials supplied by Licensor.',
      '**Production Instance** means one operational deployment of xsGrant used in a live environment for Licensee\'s internal purposes.',
      '**Source Code** means human-readable software code provided by Licensor solely for inspection under this Agreement.',
    ],
  },
  {
    title: '2. License Grant',
    paragraphs: [
      'Subject to full compliance with this Agreement, Licensor grants Licensee a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to install and use xsGrant solely for Licensee\'s own internal purposes.',
      'This license permits deployment of **one (1) production instance** of xsGrant on infrastructure controlled by Licensee.',
      'xsGrant is licensed, not sold.',
      'No rights are granted except those expressly stated in this Agreement.',
    ],
  },
  {
    title: '3. Source-Available Access',
    paragraphs: [
      'Licensor may provide access to xsGrant source code solely for Licensee\'s internal inspection, security review, and technical understanding in connection with authorized use of xsGrant.',
      'Source code access does not grant Licensee any right to:',
    ],
    bullets: ['modify', 'adapt', 'alter', 'translate', 'create derivative works', 'redistribute', 'sublicense', 'publish', 'commercially exploit'],
  },
  {
    title: '4. Restrictions',
    paragraphs: ['Licensee shall not:'],
    bullets: [
      'modify, adapt, alter, translate, or create derivative works of xsGrant or its source code',
      'distribute, sublicense, lease, rent, sell, assign, or otherwise transfer xsGrant',
      'provide xsGrant as a hosted service, managed service, or software-as-a-service offering to third parties',
      'deploy more than one production instance without prior written authorization from Licensor',
      'use xsGrant on behalf of third parties',
      'remove, alter, or obscure proprietary notices, copyright notices, trademarks, or license identifiers',
      'reverse engineer, decompile, or disassemble xsGrant except where mandatory law expressly permits',
      'use knowledge obtained from inspection of xsGrant source code to develop, commission, or assist in developing software substantially similar to xsGrant or competing software',
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
    paragraphs: ['All rights, title, and interest in xsGrant remain exclusively vested in Licensor.', 'This includes all rights relating to:'],
    bullets: ['source code', 'object code', 'architecture', 'design', 'documentation', 'trademarks', 'know-how', 'copyrights', 'trade secrets'],
  },
  {
    title: '7. Updates and Maintenance',
    paragraphs: ['Licensor may provide:'],
    bullets: ['security updates', 'bug fixes', 'maintenance patches'],
  },
  {
    title: '8. Self-Hosted Environment Responsibility',
    paragraphs: ['Licensee is solely responsible for all aspects of its hosting environment, including:'],
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
      'To the maximum extent permitted by law, Licensor disclaims all warranties, including:',
    ],
    bullets: ['merchantability', 'fitness for a particular purpose', 'non-infringement', 'uninterrupted availability', 'error-free operation'],
  },
  {
    title: '11. Limitation of Liability',
    paragraphs: [
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
    paragraphs: ['This Agreement terminates immediately upon breach by Licensee.', 'Upon termination, Licensee shall immediately:'],
    bullets: ['cease all use of xsGrant', 'remove all installations', 'destroy all copies of software, source code, backups, and related materials'],
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
    paragraphs: ['This Agreement constitutes the complete and exclusive agreement between Licensor and Licensee concerning xsGrant and supersedes all prior proposals, discussions, understandings, or agreements relating to xsGrant.'],
  },
  {
    title: '16. Contact',
    paragraphs: ['Licensing inquiries: **[Insert Contact Email]**'],
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

export function TermsPage({ onBackHome }: TermsPageProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(38,71,154,0.12),_transparent_32%),linear-gradient(180deg,_#f8fbff_0%,_#ffffff_30%,_#f3f6fb_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onBackHome();
          }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:text-slate-950"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Back to xsGrant</span>
        </a>

        <section className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.28)] backdrop-blur-sm">
          <div className="border-b border-slate-200/70 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(38,71,154,0.94))] px-6 py-10 text-white sm:px-10 sm:py-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100/90">Legal</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">End-User License Agreement</h1>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                This page sets out the license terms for xsGrant. By downloading, installing, accessing, deploying,
                copying, or using xsGrant, Licensee acknowledges that it has read, understood, and agrees to be bound
                by this Agreement.
              </p>
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
                <p className="mt-2 text-lg font-semibold">[Insert Date]</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 px-6 py-6 text-slate-700 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">Copyright Notice</p>
              <p className="mt-3 text-base leading-7">Copyright &copy; [Year] iJam IT Solutions. All rights reserved.</p>
              <p className="mt-4 text-base leading-7">
                This End-User License Agreement ("Agreement") is a legal agreement between{' '}
                <strong>iJam IT Solutions</strong> ("Licensor") and the individual or legal entity installing,
                accessing, deploying, or using <strong>xsGrant</strong> ("Licensee").
              </p>
              <p className="mt-4 text-base leading-7">
                If Licensee does not agree to these terms, Licensee must not install or use xsGrant.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {sections.map((section) => (
                <section key={section.title} className="rounded-3xl border border-slate-200/80 bg-white px-6 py-6 shadow-sm sm:px-8">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950">{section.title}</h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                      {renderInlineBold(paragraph)}
                    </p>
                  ))}

                  {section.title === '7. Updates and Maintenance' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Functional enhancements, feature upgrades, or major releases may be offered separately and may
                      require additional licensing terms or fees.
                    </p>
                  )}

                  {section.title === '7. Updates and Maintenance' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Licensor is under no obligation to provide updates beyond those expressly offered.
                    </p>
                  )}

                  {section.title === '6. Ownership and Intellectual Property' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">No ownership rights are transferred under this Agreement.</p>
                  )}

                  {section.title === '8. Self-Hosted Environment Responsibility' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Licensor is not responsible for failures, losses, or vulnerabilities arising from Licensee&apos;s
                      infrastructure or configuration.
                    </p>
                  )}

                  {section.title === '10. Disclaimer of Warranty' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Licensor does not warrant that xsGrant will meet Licensee&apos;s requirements or operate without
                      interruption.
                    </p>
                  )}

                  {section.title === '11. Limitation of Liability' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Licensor&apos;s total aggregate liability under this Agreement shall not exceed the amount paid by
                      Licensee for xsGrant during the twelve (12) months preceding the event giving rise to liability.
                    </p>
                  )}

                  {section.title === '12. Termination' && (
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      Termination does not limit Licensor&apos;s right to pursue legal remedies.
                    </p>
                  )}

                  {section.bullets && (
                    <ul className="mt-4 space-y-2 text-slate-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 leading-8">
                          <span className="mt-3 h-2 w-2 flex-none rounded-full bg-accent-500" />
                          <span>{renderInlineBold(bullet)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <footer className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 px-6 py-6 text-slate-200 shadow-sm sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Licensor</p>
              <p className="mt-3 text-xl font-semibold text-white">iJam IT Solutions</p>
              <p className="mt-3 text-base leading-7">[Insert Business Address]</p>
              <p className="text-base leading-7">[Insert Country]</p>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
