import React from 'react';
import { PricingSection } from '../components/sections/PricingSection';
import { Container } from '../components/Container';

export default function Pricing() {
  const faqs = [
    { q: 'Do I need a credit card for the trial?', a: 'No credit card is required for the 14-day trial.' },
    { q: 'Can SageStone handle millions of contacts?', a: 'Yes. The Scale plan supports large lists and advanced deliverability guardrails.' },
    { q: 'Is SageStone compliant?', a: 'We support SOC 2 and GDPR and provide guidance on list health and domain warm-up.' },
  ];

  return (
    <>
      <PricingSection />
      <section className="section-spacing bg-stone-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8">
              <h3 className="mb-4">Compare Plans</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-stone-600">
                      <th className="text-left p-3">Feature</th>
                      <th className="text-left p-3">Starter</th>
                      <th className="text-left p-3">Growth</th>
                      <th className="text-left p-3">Scale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { f: 'AI segmentation', s: '—', g: '✓', c: '✓' },
                      { f: 'Automation workflows', s: 'Basic', g: 'Advanced', c: 'Enterprise' },
                      { f: 'Deliverability guardrails', s: '—', g: '✓', c: '✓+' },
                      { f: 'Revenue analytics', s: 'Basic', g: 'Full', c: 'Full + Cohorts' },
                      { f: 'Support', s: 'Docs', g: 'Chat', c: 'Dedicated' },
                    ].map((row) => (
                      <tr key={row.f} className="border-t border-stone-200">
                        <td className="p-3 text-stone-800">{row.f}</td>
                        <td className="p-3">{row.s}</td>
                        <td className="p-3">{row.g}</td>
                        <td className="p-3">{row.c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8">
              <h3 className="mb-4">FAQs</h3>
              <ul className="space-y-4">
                {faqs.map((f) => (
                  <li key={f.q}>
                    <p className="font-medium text-stone-800">{f.q}</p>
                    <p className="text-stone-600">{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
