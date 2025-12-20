import React from 'react';
import { Container } from '../components/Container';

export default function SignIn() {
  return (
    <section className="section-spacing">
      <Container>
        <div className="max-w-md mx-auto bg-white rounded-2xl border border-stone-200 shadow-sm p-8">
          <h2 className="mb-4">Sign In</h2>
          <p className="text-stone-600 mb-6">Access your SageStone Lab dashboard.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-stone-700 mb-1">Email</label>
              <input type="email" className="w-full border border-stone-300 rounded-lg px-3 py-2" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm text-stone-700 mb-1">Password</label>
              <input type="password" className="w-full border border-stone-300 rounded-lg px-3 py-2" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full px-6 py-3.5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-lg hover:shadow-xl transition-all">Sign In</button>
          </form>
        </div>
      </Container>
    </section>
  );
}
