import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ProblemSection } from '../components/sections/ProblemSection';
import { SolutionSection } from '../components/sections/SolutionSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { SocialProofSection } from '../components/sections/SocialProofSection';
import { IntegrationsSection } from '../components/sections/IntegrationsSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { UseCasesSection } from '../components/sections/UseCasesSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <SocialProofSection />
      <IntegrationsSection />
      <HowItWorksSection />
      <UseCasesSection />
      <FinalCTASection />
    </>
  );
}
