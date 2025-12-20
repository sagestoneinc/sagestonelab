import React from 'react';
import { Container } from '../Container';

export function SocialProofSection() {
  const logos = ['Shopify', 'Klaviyo', 'Mailchimp', 'HubSpot', 'Moosend'];
  const metrics = [
    { label: 'Emails Sent Monthly', value: '50M+' },
    { label: 'Avg. Revenue Lift', value: '+32%' },
    { label: 'Deliverability Score', value: '98%' },
  ];

  return (
    <section id="social-proof" className="section-spacing bg-gradient-to-br from-white to-stone-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2>Trusted by teams that ship millions of emails</h2>
          <p className="text-xl text-stone-600 max-w-none">
            SageStone Lab powers modern DTC and SaaS teams with reliable automation, clear analytics, and world-class deliverability.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid sm:grid-cols-3 gap-6" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 text-center">
              <div className="text-3xl font-bold text-stone-900 mb-1">{m.value}</div>
              <div className="text-stone-600">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {logos.map((name) => (
            <span key={name} className="text-sm text-stone-600 bg-white border border-stone-200 rounded-md px-4 py-2 shadow-sm">
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
