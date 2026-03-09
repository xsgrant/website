import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '€0',
    frequency: 'Forever',
    description: 'Perfect for testing and small organizations.',
    users: 'Up to 5 users',
    buttonText: 'Run Locally',
    buttonLink: '#install',
    popular: false,
  },
  {
    name: 'Growth',
    pricePending: true,
    frequencyLabel: 'per year',
    description: 'For growing organizations requiring structured access.',
    users: 'Up to 50 users',
    buttonText: 'Subscribe Now',
    buttonLink: '#', // Stripe link goes here later
    popular: true,
  },
  {
    name: 'Scale',
    pricePending: true,
    frequencyLabel: 'per person / year',
    description: 'For larger organizations with robust IAM needs.',
    users: '50+ users',
    buttonText: 'Subscribe Now',
    buttonLink: '#', // Stripe link goes here later
    popular: false,
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="py-24 bg-slate-50/50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent-500 uppercase tracking-[0.24em]">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl">
            Get started with xsGrant today.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            Choose the plan that fits your organization. Every tier includes all features: workflows, break-glass, and full audit logs.
          </p>
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
                  ? 'bg-white border-2 border-accent-400 shadow-xl shadow-accent-200/20 transform md:-translate-y-2' 
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
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
                <h3 className="text-2xl font-bold text-slate-950 mb-2">{tier.name}</h3>
                <p className="text-slate-500 text-sm h-10">{tier.description}</p>
              </div>
              
              {tier.pricePending ? (
                <div className="mb-6">
                  <div className="flex items-baseline gap-2" aria-label="Pricing coming soon">
                    <span
                      className="text-5xl font-extrabold tracking-[0.28em] text-slate-300 select-none"
                      aria-hidden="true"
                    >
                      •••
                    </span>
                    <span className="text-lg font-medium text-slate-500">{tier.frequencyLabel}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-500">Pricing coming soon</p>
                </div>
              ) : (
                <div className="mb-6 flex items-baseline text-slate-950">
                  <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                  <span className="ml-1 text-lg font-medium text-slate-500">{tier.frequency}</span>
                </div>
              )}
              
              <ul className="flex-1 space-y-4 mb-8">
                <li className="flex gap-3 items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{tier.users}</span>
                </li>
              </ul>
              
              <button
                type="button"
                disabled
                aria-disabled="true"
                className={`block w-full py-3.5 px-4 rounded-xl text-center font-medium transition-all cursor-not-allowed opacity-70 ${
                  tier.popular
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'bg-slate-50 text-slate-700 border border-slate-200'
                }`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
