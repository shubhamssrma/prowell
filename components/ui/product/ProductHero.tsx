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
        src: "/images/products/Protide_10.jpg",
        alt: 'Doxyneo Soluble - Front View'
    },
    {
        id: 2,
        src: "/images/products/Promycin_M.jpg",
        alt: 'Doxyneo Soluble - Side View'
    }
];


export function ProductHero() {
    const [selectedImage, setSelectedImage] = useState<ProductImage>(productImages[0]);

    // return (
    //     <section className="bg-gradient-to-br from-green-50 to-white border-b">
    //         <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

    //             {/* IMAGE */}
    //             <div className="flex justify-center">
    //                 <Image
    //                     src="/products/probios-sl.png"
    //                     alt="PROBIOS SL"
    //                     width={420}
    //                     height={420}
    //                     className="object-contain"
    //                 />
    //             </div>

    //             {/* CONTENT */}
    //             <div className="space-y-6">
    //                 <span className="inline-block bg-green-600/10 text-green-700 px-4 py-1 rounded-full text-sm">
    //                     Probiotics
    //                 </span>

    //                 <h1 className="text-4xl font-bold text-gray-900">
    //                     PROBIOS SL
    //                 </h1>

    //                 <p className="text-gray-600 leading-relaxed">
    //                     A high-concentration multi-strain probiotic designed to maintain gut
    //                     integrity, microbial balance, and overall performance across poultry,
    //                     ruminants, swine, and aqua species.
    //                 </p>

    //                 <div className="flex flex-wrap gap-2">
    //                     {["Poultry", "Ruminants", "Swine", "Aqua"].map(item => (
    //                         <span
    //                             key={item}
    //                             className="px-3 py-1 text-xs bg-white border rounded-full"
    //                         >
    //                             {item}
    //                         </span>
    //                     ))}
    //                 </div>
    //             </div>

    //         </div>
    //     </section>
    // );
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-full mx-auto">
                <div className="rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                        {/* Left Column - Product Images */}
                        <div className="flex flex-col items-center">
                            {/* Main Image */}
                            <div className="w-full bg-white rounded-lg p-8 mb-6 flex items-center justify-center">
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
                                        className={`w-24 h-24 rounded-lg border-2 overflow-hidden transition-all ${selectedImage.id === image.id
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
                                PROBIOS SL
                            </h1>

                            {/* Product Composition */}
                            <p className="text-lg text-green-600 font-medium mb-8">
                                100 mg/g Doxycycline hydrochloride & 100 mg/g Neomycin sulphate
                            </p>

                            {/* Product Description */}
                            <div className="prose prose-lg">
                                <p className="text-gray-700 leading-relaxed">
                                    PROBIOS SL is a broad-spectrum antibiotic soluble powder that exhibits a potent synergistic effect in the treatment and prevention of complicated mixed bacterial infections in poultry and livestock caused by or associated with Doxycycline and Neomycin susceptible organisms.
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
                                    {/* <div>
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
                                    </div> */}
                                </div>
                            </div>

                            {/* Action Buttons - Optional */}
                            <div className="mt-8 flex gap-4">
                                <Link href="/contact" className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-500 transition-colors text-center">
                                    Download Spec Sheet
                                </Link>
                                <Link href="/contact" className="flex-1 bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-colors text-center">
                                    Request Sample
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
