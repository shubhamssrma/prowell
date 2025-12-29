import React from 'react'
import { ProductHero } from '@/components/ui/product/ProductHero'
import { ProductHighlights } from '@/components/ui/product/ProductHighlights'
import { ProductOverview } from '@/components/ui/product/ProductOverview'
import { ModeOfAction } from '@/components/ui/product/ModeOfAction'
import { ProductBenefits } from '@/components/ui/product/ProductBenefits'
import { DosageSection } from '@/components/ui/product/DosageSection'
export default function page() {
  return (
    <>
      <ProductHero />
      <ProductHighlights />
      <ProductOverview />
      <ModeOfAction />
      <ProductBenefits />
      <DosageSection />
    </>
  )
}
