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
import { Loader, Loader2 } from 'lucide-react'
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

  return (
    <>
      {
        loading ?
          <div className="flex items-center justify-center flex-col text-center min-h-[80vh]">
            <div className="flex flex-col items-center justify-center">
              <Loader2 className="animate-spin text-cyan-600" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 my-2">
                Loading Products
              </h3>
              <p className="text-gray-600">
                Wait we are searching that you're looking for
              </p>
            </div>
          </div>
          :
          <>
            <ProductHero />
            <ProductHighlights />
            <ProductOverview />
            <ModeOfAction />
            <ProductBenefits />
            <DosageSection />
          </>
      }
    </>
  )
}
