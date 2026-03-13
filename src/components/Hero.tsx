import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-32 pb-20 lg:pt-48 lg:pb-32">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.94, 1, 0.94], scale: [1, 1.015, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="absolute inset-x-[-16%] top-[-8%] h-[92%]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(38, 71, 154, 0.18) 0%, rgba(86, 121, 205, 0.14) 22%, rgba(217, 230, 255, 0.32) 48%, rgba(255, 255, 255, 0) 76%)',
          }}
        />
        <div
          className="absolute inset-x-[-6%] top-0 h-[84%]"
          style={{
            background:
              'linear-gradient(180deg, rgba(244, 248, 255, 0.96) 0%, rgba(232, 240, 255, 0.84) 24%, rgba(255, 255, 255, 0.58) 52%, rgba(255, 255, 255, 0) 100%)',
            filter: 'blur(56px)',
          }}
        />
        <div
          className="absolute inset-x-[8%] top-[18%] h-[42%] rounded-[999px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(184, 206, 255, 0.42) 0%, rgba(184, 206, 255, 0.18) 38%, rgba(255, 255, 255, 0) 72%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-200/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Just-in-Time Access. <br className="hidden md:block" />
            <span className="text-accent-500">
              Zero Standing Risk.
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Replace permanent privileges with secure, on-demand access workflows.
            <br />
            <span className="font-semibold text-slate-800">xsGrant</span> sits right on top of your existing IDM.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#install"
              className="inline-flex translate-y-0 items-center justify-center rounded-xl bg-slate-950 px-8 py-3.5 text-base font-medium text-white shadow-sm shadow-accent-200/50 transition-all hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-md hover:shadow-accent-200/60 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-white"
            >
              Try Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-8 py-3.5 text-base font-medium text-slate-700 shadow-sm shadow-slate-200/70 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 hover:shadow-md hover:shadow-accent-100/40 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:ring-offset-2 focus:ring-offset-white"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
