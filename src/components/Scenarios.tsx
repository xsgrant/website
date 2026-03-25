import { AlertTriangle, ClipboardCheck, MessagesSquare } from "lucide-react";
import { motion } from "framer-motion";

const scenarios = [
  {
    name: "Sophie, Finance Director",
    title: "Audit evidence without the scramble",
    icon: ClipboardCheck,
    withoutXsGrant:
      "When an audit or internal review starts, her team has to piece together approvals from email, chat, tickets, and memory. It takes time, creates stress, and still leaves uncertainty about who had privileged access and why.",
    withXsGrant:
      "Every privileged access request, approval, reason, and expiry is recorded automatically in one place, ready when leadership or auditors ask for evidence.",
    outcome:
      "Less audit preparation, less uncertainty, and better evidence when leadership needs answers.",
  },
  {
    name: "Daniel, Head of Engineering",
    title: "Urgent access during an incident",
    icon: AlertTriangle,
    withoutXsGrant:
      "During a production incident, teams either wait on manual approvals at exactly the wrong moment or keep permanent privileged access in place 'just in case,' increasing risk every day outside the incident.",
    withXsGrant:
      "Emergency privileged access can be granted quickly, for a limited time, with full accountability and a clear record afterward.",
    outcome:
      "Faster incident response without relying on risky permanent elevated access.",
  },
  {
    name: "Priya, Team Lead",
    title: "Approvals without the admin burden",
    icon: MessagesSquare,
    withoutXsGrant:
      "Access approvals happen informally in Slack or email, often with little context, no standard process, and no reliable record of what was approved.",
    withXsGrant:
      "Requests follow a consistent workflow with a clear purpose, defined scope, and automatic expiry, so approvers can review and grant access with confidence.",
    outcome:
      "Clearer approvals and less manual coordination across the approval process.",
  },
];

export function Scenarios() {
  return (
    <section
      id="scenarios"
      className="py-24 bg-white border-y border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-500">
            xsGrant value
          </h2>
        </div>

        <div className="mb-6 hidden lg:grid lg:grid-cols-[1.1fr_1.5fr_1.35fr_1fr] lg:gap-0">
          <p className="pr-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent-500">
            Scenario
          </p>
          <p className="border-l border-slate-200 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Before
          </p>
          <p className="border-l border-slate-200 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent-700">
            With xsGrant
          </p>
          <p className="border-l border-slate-200 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent-500">
            Value
          </p>
        </div>

        <div className="space-y-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="grid grid-cols-1 gap-0 border-t border-slate-200 pt-6 first:border-t-0 first:pt-0 lg:grid-cols-[1.1fr_1.5fr_1.35fr_1fr]"
            >
              <div className="pb-5 lg:pb-0 lg:pr-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-500 lg:hidden">
                  Scenario
                </p>
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-50 text-accent-500">
                    <scenario.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {scenario.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                  {scenario.title}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5 lg:border-t-0 lg:border-l lg:border-slate-200 lg:px-8 lg:pt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 lg:hidden">
                  Before
                </p>
                <span className="sr-only">Before</span>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {scenario.withoutXsGrant}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5 lg:border-t-0 lg:border-l lg:border-slate-200 lg:px-8 lg:pt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700 lg:hidden">
                  With xsGrant
                </p>
                <span className="sr-only">With xsGrant</span>
                <p className="mt-2 leading-relaxed text-slate-700">
                  {scenario.withXsGrant}
                </p>
              </div>

              <div className="mt-5 border-l-4 border-accent-500 pl-4 lg:mt-0 lg:border-l lg:border-slate-200 lg:pl-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500 lg:hidden">
                  Value
                </p>
                <span className="sr-only">Value</span>
                <p className="mt-2 leading-relaxed text-slate-700">
                  {scenario.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
