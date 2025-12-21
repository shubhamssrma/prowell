'use client';

import Link from 'next/link';
import React, { useState } from 'react';

interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

const productImages: ProductImage[] = [
  {
    id: 1,
    src: "/images/products/Probiotic.jpg",
    alt: 'Doxyneo Soluble - Front View'
  },
  {
    id: 2,
    src:  "/images/products/Antibiotic_Growth_Promoter.jpg",
    alt: 'Doxyneo Soluble - Side View'
  }
];

const DoxyneoProductPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ProductImage>(productImages[0]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left Column - Product Images */}
            <div className="flex flex-col items-center">
              {/* Main Image */}
              <div className="w-full bg-gray-50 rounded-lg p-8 mb-6 flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full h-auto max-h-96 object-contain"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-4">
                {productImages.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className={`w-24 h-24 rounded-lg border-2 overflow-hidden transition-all ${
                      selectedImage.id === image.id
                        ? 'border-blue-600 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Information */}
            <div className="flex flex-col justify-center">
              {/* Product Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                DOXYNEO SOLUBLE
              </h1>

              {/* Product Composition */}
              <p className="text-lg text-green-600 font-medium mb-8">
                100 mg/g Doxycycline hydrochloride & 100 mg/g Neomycin sulphate
              </p>

              {/* Product Description */}
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  DOXYNEO SOLUBLE is a broad-spectrum antibiotic soluble powder that exhibits a potent synergistic effect in the treatment and prevention of complicated mixed bacterial infections in poultry and livestock caused by or associated with Doxycycline and Neomycin susceptible organisms.
                </p>
              </div>

              {/* Additional Information - Optional */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      Form
                    </h3>
                    <p className="text-gray-900 font-medium">Soluble Powder</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      Package
                    </h3>
                    <p className="text-gray-900 font-medium">10 x 100 g</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      Category
                    </h3>
                    <p className="text-gray-900 font-medium">Veterinary Medicine</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      Type
                    </h3>
                    <p className="text-gray-900 font-medium">Antibiotic</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Optional */}
              <div className="mt-8 flex gap-4">
                <Link href="/contact" className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-500 transition-colors text-center">
                  Request Information
                </Link>
                <Link href="/contact" className="flex-1 bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-colors text-center">
                  Contact Supplier
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections - Optional */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Broad Spectrum</h3>
              <p className="text-gray-600 text-sm">Effective against multiple bacterial infections</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Synergistic Effect</h3>
              <p className="text-gray-600 text-sm">Combined action of two powerful antibiotics</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-gray-600 text-sm">Soluble powder for convenient administration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoxyneoProductPage;