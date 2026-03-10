import { Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Install() {
  const [copied, setCopied] = useState(false);
  const installCode = `curl -O https://raw.githubusercontent.com/xsgrant/releases/refs/heads/main/docker-compose.yml\ndocker compose up -d`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="install" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-sm font-semibold text-accent-500 uppercase tracking-[0.24em]">
              Local Demo
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl mb-6">
              Experience the full feature set in 5 minutes.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              See for yourself how{" "}
              <span className="font-semibold text-slate-800">xsGrant</span>{" "}
              transforms privileged access. Watch a quick product walkthrough,
              or spin up a local instance using Docker Compose to explore
              request workflows, break-glass emergencies, and audit logs
              hands-on.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-accent-50 border border-accent-100 flex items-center justify-center text-accent-500 font-bold shadow-sm">
                  1
                </div>
                <span>Download the configuration</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-accent-50 border border-accent-100 flex items-center justify-center text-accent-500 font-bold shadow-sm">
                  2
                </div>
                <span>Start xsGrant locally</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-accent-50 border border-accent-100 flex items-center justify-center text-accent-500 font-bold shadow-sm">
                  3
                </div>
                <span>Test workflows via localhost:3000</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xl p-4"
            >
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Watch the product demo
              </div>
              <video
                className="w-full rounded-xl border border-slate-200 bg-black"
                controls
                preload="metadata"
              >
                <source src="/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xl relative overflow-hidden group/terminal"
            >
              <div className="h-12 border-b border-slate-200/80 flex items-center px-4 justify-between bg-white/50 backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
                <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
                  <Terminal className="h-3 w-3" />
                  bash
                </div>
              </div>

              <div className="p-6 relative">
                <button
                  onClick={copyToClipboard}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-accent-500 hover:border-accent-200 hover:shadow-sm opacity-0 group-hover/terminal:opacity-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-1 focus:ring-offset-slate-50"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
                <pre className="text-sm font-mono text-slate-800 overflow-x-auto whitespace-pre">
                  <code className="block mb-2">
                    <span className="text-slate-400">#</span>{" "}
                    <span className="text-slate-500">
                      Download the configuration
                    </span>
                  </code>
                  <code className="block mb-4">
                    <span className="font-bold text-slate-900">curl</span>{" "}
                    <span className="text-slate-500">-O</span>{" "}
                    <span className="text-accent-500">
                      https://raw.githubusercontent.com/xsgrant/releases/refs/heads/main/docker-compose.yml
                    </span>
                  </code>
                  <code className="block mb-2">
                    <span className="text-slate-400">#</span>{" "}
                    <span className="text-slate-500">
                      Start xsGrant locally
                    </span>
                  </code>
                  <code className="block">
                    <span className="font-bold text-slate-900">docker</span>{" "}
                    compose up -d
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
