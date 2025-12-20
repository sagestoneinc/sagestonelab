import React from 'react';
import { ProductSection } from '../components/sections/ProductSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

export default function Product() {
  return (
    <>
      <ProductSection />
      <FeaturesSection />
      <FinalCTASection />
    </>
  );
}
