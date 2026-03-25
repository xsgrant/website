import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section className="bg-slate-50 border-y border-slate-200/70 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-500">
            xsGrant foundation
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-0"
          >
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Security and compliance expectations increasingly focus on
              reducing unnecessary privileged access.{" "}
              <span className="font-semibold text-slate-800">xsGrant</span>{" "}
              helps you put that into practice by making privileged access
              temporary, controlled, and visible.
            </p>

            <div className="mb-8 border-l-4 border-accent-500 bg-white p-5 shadow-sm rounded-r-xl">
              <p className="text-lg font-medium text-slate-900 leading-relaxed">
                Instead of relying on permanent elevated permissions, you can
                give access for a clear purpose, for a limited time, with a
                record of every decision.
              </p>
            </div>

            <a
              href="https://www.ncsc.gov.uk/collection/secure-system-administration/use-privileged-access-management"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-semibold text-accent-600 hover:text-accent-500 transition-colors group"
            >
              Read the NCSC guidance on privileged access management
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-100 to-accent-50 rounded-2xl transform rotate-3 scale-105 opacity-50" />
            <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="absolute -left-4 -top-4 w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                <span className="text-accent-600 text-2xl font-serif leading-none">
                  "
                </span>
              </div>
              <blockquote className="text-slate-700 text-lg leading-relaxed italic mb-6">
                Full, system-wide access should be the exception, not the
                norm... When an administrator connects to a management
                interface, it’s best to have a specific function or purpose in
                mind. The administrator should be granted 'just enough'
                permissions to perform this job.
              </blockquote>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="/logos/ncsc-logo.svg"
                    alt="NCSC UK Logo"
                    className="w-full h-full object-cover p-1 opacity-80"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML =
                        '<span class="text-xs font-bold text-slate-400">UK</span>';
                    }}
                  />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    National Cyber Security Centre
                  </div>
                  <div className="text-sm text-slate-500">
                    Secure System Administration Guidance
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
