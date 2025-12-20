import React from 'react';
import { Container } from '../Container';

export function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '14-day trial',
      highlights: ['Up to 5k contacts', 'Automation templates', 'Basic analytics'],
      cta: 'Start Free Trial',
    },
    {
      name: 'Growth',
      price: '$199',
      period: '/month',
      highlights: ['Up to 100k contacts', 'AI segmentation', 'Revenue analytics'],
      cta: 'Request Demo',
      featured: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      period: 'annual',
      highlights: ['Millions of contacts', 'Deliverability guardrails', 'Dedicated support'],
      cta: 'Talk to Sales',
    },
  ];

  return (
    <section id="pricing" className="section-spacing bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2>Simple, scalable pricing that grows with you</h2>
          <p className="text-xl text-stone-600 max-w-none">Start free. No credit card required. Upgrade when you see the revenue impact.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border ${plan.featured ? 'border-sage-300 shadow-xl bg-gradient-to-br from-sage-50 to-white' : 'border-stone-200 shadow-sm bg-white'}`}
            >
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="mb-0">{plan.name}</h3>
                {plan.featured && (
                  <span className="text-xs font-medium bg-sage-100 text-sage-700 border border-sage-200 rounded-full px-3 py-1">Recommended</span>
                )}
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-stone-900">{plan.price}</span>
                <span className="ml-2 text-stone-600">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-sage-600 mt-2 flex-shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-flex items-center justify-center w-full px-6 py-3.5 rounded-lg transition-all ${plan.featured ? 'bg-gradient-to-r from-sage-600 to-sage-700 text-white hover:shadow-xl' : 'border-2 border-stone-300 text-stone-700 hover:border-sage-600 hover:text-sage-700'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-stone-600">Need enterprise features or compliance? We support SOC 2, GDPR, and more.</p>
        </div>
      </Container>
    </section>
  );
}
