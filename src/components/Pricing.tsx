import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Free",
    price: "€0",
    frequency: "Forever",
    description: "Perfect for testing and small organisations.",
    users: "Up to 10 users",
    support: "No support",
    buttonText: "See How It Works",
    buttonLink: "#install",
    buttonDisabled: false,
    popular: false,
  },
  {
    name: "Growth",
    price: "€500",
    frequency: "/ year",
    description: "For growing organizations requiring structured access.",
    users: "With a maximum of 50 users",
    support: "Support included",
    buttonText: "Available Soon",
    buttonLink: "#", // Stripe link goes here later
    buttonDisabled: true,
    popular: true,
  },
  {
    name: "Scale",
    price: "€5,50",
    frequency: "per user / year",
    description: "For larger organizations with robust PAM needs.",
    users: "Minimum order size of 100 users",
    support: "Support included",
    buttonText: "Available Soon",
    buttonLink: "#", // Stripe link goes here later
    buttonDisabled: true,
    popular: false,
  },
];

export function Pricing() {
  return (
    <div
      id="pricing"
      className="py-24 bg-slate-50/50 border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent-500 uppercase tracking-[0.24em]">
            xsGrant Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col p-8 rounded-3xl ${
                tier.popular
                  ? "bg-white border-2 border-accent-400 shadow-xl shadow-accent-200/20 transform md:-translate-y-2"
                  : "bg-white border border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 -mt-4 mr-6">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-100 text-accent-600 shadow-sm border border-accent-200">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-950 mb-2">
                  {tier.name}
                </h3>
                <p className="text-slate-500 text-sm h-10">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6 flex items-baseline text-slate-950">
                <span className="text-5xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
                <span className="ml-1 text-lg font-medium text-slate-500">
                  {tier.frequency}
                </span>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                <li className="flex gap-3 items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    {tier.users}
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    {tier.support}
                  </span>
                </li>
              </ul>

              {tier.buttonDisabled ? (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className={`block w-full py-3.5 px-4 rounded-xl text-center font-medium transition-all cursor-not-allowed opacity-70 ${
                    tier.popular
                      ? "bg-slate-950 text-white shadow-md"
                      : "bg-slate-50 text-slate-700 border border-slate-200"
                  }`}
                >
                  {tier.buttonText}
                </button>
              ) : (
                <a
                  href={tier.buttonLink}
                  className={`block w-full py-3.5 px-4 rounded-xl text-center font-medium transition-all ${
                    tier.popular
                      ? "bg-slate-950 text-white shadow-md hover:bg-slate-800"
                      : "bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  {tier.buttonText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
