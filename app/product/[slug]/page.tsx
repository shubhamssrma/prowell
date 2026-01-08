'use client'
import React, { useEffect } from 'react'
import { ProductHero } from '@/components/ui/product/ProductHero'
import { ProductHighlights } from '@/components/ui/product/ProductHighlights'
import { ProductOverview } from '@/components/ui/product/ProductOverview'
import { ModeOfAction } from '@/components/ui/product/ModeOfAction'
import { ProductBenefits } from '@/components/ui/product/ProductBenefits'
import { DosageSection } from '@/components/ui/product/DosageSection'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useParams } from 'next/navigation'
import { getProductBySlug } from '@/store/slices/productSlice'
export default function page() {
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector(state => state.productReducer)
  const urlParams = useParams()
  const { slug } = urlParams

  useEffect(() => {
    if (slug) {
      dispatch(getProductBySlug({ slug: slug as string }))
    }
  }, [dispatch, slug])

  if (loading) {
    return 'loading...'
  }
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
