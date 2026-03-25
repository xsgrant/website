import {
  Clock,
  ShieldAlert,
  UserCheck,
  Key,
  FileText,
  Lock,
} from "lucide-react";

const features = [
  {
    name: "Privileged access only when needed",
    description:
      "Give people elevated access for a limited time instead of leaving sensitive permissions in place permanently.",
    icon: Clock,
  },
  {
    name: "Faster requests, less chasing",
    description:
      "Let teams request access through a structured workflow instead of relying on messages, tickets, and manual follow-up.",
    icon: UserCheck,
  },
  {
    name: "Emergency access with accountability",
    description:
      "Handle urgent situations quickly while keeping emergency privileged access time-bound and fully traceable.",
    icon: ShieldAlert,
  },
  {
    name: "Clear audit records",
    description:
      "See who requested access, who approved it, why it was needed, and when it ended.",
    icon: FileText,
  },
  {
    name: "Only the access needed for the task",
    description:
      "Limit access to the right systems and environments so control stays tight without blocking work.",
    icon: Lock,
  },
  {
    name: "Works with your current setup",
    description:
      "Use xsGrant alongside your existing identity and access tools rather than replacing them.",
    icon: Key,
  },
];

export function Features() {
  return (
    <div
      id="features"
      className="border-y border-slate-200/70 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/70 py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-500">
            xsGrant features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg hover:shadow-accent-100/50"
            >
              <div className="relative z-10 flex items-center gap-4 mb-4">
                <div className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-colors group-hover:border-accent-200 group-hover:bg-accent-50">
                  <feature.icon
                    className="h-6 w-6 text-slate-700 transition-colors group-hover:text-accent-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  {feature.name}
                </h3>
              </div>
              <p className="relative z-10 leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
