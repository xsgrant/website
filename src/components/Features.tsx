import { Clock, ShieldAlert, UserCheck, Key, FileText, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Just-in-Time Access',
    description: 'Elevated permissions expire automatically. Grant exactly what is needed, only when it is needed, eliminating standing risk.',
    icon: Clock,
  },
  {
    name: 'Self-Service',
    description: 'Engineers request access through clear workflows. Automated approvals keep your organization moving without compromising security.',
    icon: UserCheck,
  },
  {
    name: 'Break-glass Sessions',
    description: 'Bypass approval bottlenecks during critical incidents. Ensure your organization can respond instantly to emergencies while keeping sessions time-bound and fully auditable.',
    icon: ShieldAlert,
  },
  {
    name: 'Audit Visibility',
    description: 'Audit logs capture who requested access, why, and when it ended. Stay audit-ready by design, with zero manual tracking.',
    icon: FileText,
  },
  {
    name: 'Least-Privilege',
    description: 'Ensure users only get access to the exact systems and environments they need. Maintain strict control over sensitive areas without adding friction to daily work.',
    icon: Lock,
  },
  {
    name: 'IDM Agnostic',
    description: 'Works seamlessly with your existing IDM. Add a strong governance layer without replacing your current setup.',
    icon: Key,
  },
];

export function Features() {
  return (
    <div id="features" className="border-y border-slate-200/70 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/70 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-500">Features</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Faster access. Total control.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-600">
            <span className="font-semibold text-slate-800">xsGrant</span> gives your organization the access it needs to do real work, without leaving unnecessary risk or unclear ownership behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg hover:shadow-accent-100/50"
            >
              <div className="relative z-10 flex items-center gap-4 mb-4">
                <div className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-colors group-hover:border-accent-200 group-hover:bg-accent-50">
                  <feature.icon className="h-6 w-6 text-slate-700 transition-colors group-hover:text-accent-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">{feature.name}</h3>
              </div>
              <p className="relative z-10 leading-relaxed text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
