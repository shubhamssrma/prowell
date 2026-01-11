'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Eye, Heart, Share2, Package, Leaf, MessageCircle, CreditCard, Loader, Search, Loader2, Tag } from 'lucide-react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getFeaturedProducts } from '@/store/slices/productSlice';
import { Product } from '@/types/product.types';

// interface Product {
//     _id: number;
//     name: string;
//     price: number;
//     originalPrice?: number;
//     image: string;
//     badge?: 'New' | 'Sale';
//     slug: string;
//     category: string;
// }

// const products: Product[] = [
//     {
//         id: 1,
//         name: 'Promax',
//         price: 29.00,
//         image: "/images/products/Promax.jpg",
//         badge: undefined,
//         slug: "promax",
//         category: "test"
//     },
//     {
//         id: 2,
//         name: 'Promensin 200',
//         price: 23.00,
//         image: "/images/products/Promensin_200.jpeg",
//         // badge: 'New',
//         badge: undefined,
//         slug: 'promensin-200',
//         category: "test"
//     },
//     {
//         id: 3,
//         name: 'Probuty TB 60',
//         price: 25.00,
//         originalPrice: 85.00,
//         image: "/images/products/Probuty_TB_60.jpg",
//         // badge: 'Sale',
//         badge: undefined,
//         slug: 'probuty-tb-60',
//         category: "test"
//     },
//     {
//         id: 4,
//         name: 'Promycin M',
//         price: 27.00,
//         image: "/images/products/Promycin_M.jpg",
//         badge: undefined,
//         slug: 'promycin-m',
//         category: "test"
//     },
//     {
//         id: 5,
//         name: 'Protide 10',
//         price: 27.00,
//         image: "/images/products/Protide_10.jpg",
//         badge: undefined,
//         slug: 'protide-10',
//         category: "test"
//     },
//     {
//         id: 6,
//         name: 'Proquin 60',
//         price: 27.00,
//         image: "/images/products/Proquin_60.jpg",
//         badge: undefined,
//         slug: 'proquin-60',
//         category: "test"
//     }
// ];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    const copyLink = async () => {
        const url = `${window.location.origin}/product/${product.slug}`;
        await navigator.clipboard.writeText(url);

        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div
            className="flex-shrink-0 w-72 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-white-100 shadow-lg rounded-lg overflow-hidden relative aspect-[3/4]">
                {/* {product.badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded text-white text-sm font-medium z-10 ${product.badge === 'New' ? 'bg-orange-600' : 'bg-teal-700'
                        }`}>
                        {product.badge}
                    </div>
                )} */}

                <img
                    src={product.featuredImage.url}
                    alt={product.featuredImage.alt}
                    className="w-full h-full object-contain"
                />

                {/* Hover Actions */}
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    {/* <button className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-lg transition-colors">
            <ShoppingBag className="w-5 h-5 text-gray-700" />
          </button> */}
                    <Link href={`/product/${product.slug}`} className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-lg transition-colors">
                        <Eye className="w-5 h-5 text-gray-700" />
                    </Link>
                    {/* <button className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-lg transition-colors">
            <Heart className="w-5 h-5 text-gray-700" />
          </button> */}

                    <div className="relative">
                        <button
                            onClick={copyLink}
                            className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-lg transition-colors"
                        >
                            <Share2 className="w-5 h-5 text-gray-700" />
                        </button>

                        {copied && (
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded">
                                Copied!
                            </span>
                        )}
                    </div>
                    {/* <button className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-lg transition-colors">
                        <Share2 className="w-5 h-5 text-gray-700" />
                    </button> */}
                </div>
            </div>

            <div className="text-center border-1 border-gray-100 border-t-0 px-2 pt-4 rounded-lg">
                {/* <div className="flex items-center justify-center gap-2 mb-1">
                    {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                            ${product.originalPrice.toFixed(2)}
                        </span>
                    )}
                    <span className="text-lg font-semibold">
                        ${product.price.toFixed(2)}
                    </span>
                </div> */}
                <h3 className="text-gray-800 font-medium hover:text-green-500">
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </h3>
                {/* <h3 className="text-gray-800 font-medium">
                    <p className='text-gray-500'>{product.productSmallDescription}</p>
                </h3> */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.productSmallDescription}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {product.species.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-1 rounded border border-green-200"
                        >
                            {/* <Tag className="w-3 h-3" /> */}
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SkincareProductsUI: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 4;
    const dispatch = useAppDispatch()
    const { products, loading, error } = useAppSelector(state => state.productReducer)
    const maxIndex = Math.max(0, products.length - itemsPerView);

    const handlePrevious = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    useEffect(() => {
        dispatch(getFeaturedProducts())
    }, [dispatch])
    return (
        <div className="bg-white">
            {/* Featured Products Section */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">Our Featured Products</h1>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Scientifically proven poultry medicines and feed supplements designed to improve performance, gut health, and sustainability.</p>
                </div>

                {
                    loading ?
                        <div className="text-center py-16">
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
                        products.length === 0 ? (
                            <div className="text-center py-16 bg-gray-100">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-50 rounded-full mb-4">
                                    <Search className="w-8 h-8 text-cyan-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    No Featured products found
                                </h3>
                                <p className="text-gray-600">
                                    Try adjusting your search or filter to find what you're looking for
                                </p>
                            </div>
                        ) :
                            <div className="relative">
                                {/* Previous Button */}
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentIndex === 0}
                                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg transition-all ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                                </button>

                                {/* Products Carousel */}

                                <div className="overflow-hidden">
                                    <div
                                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                                        style={{ transform: `translateX(-${currentIndex * (288 + 24)}px)` }}
                                    >
                                        {products.map(product => (
                                            <React.Fragment key={product._id}>
                                                <ProductCard product={product} />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>

                                {/* Next Button */}
                                <button
                                    onClick={handleNext}
                                    disabled={currentIndex >= maxIndex}
                                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg transition-all ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-700" />
                                </button>
                            </div>
                }
            </div>

            {/* Promotional Banners */}
            {/* <div className="max-w-7xl mx-auto px-8 py-8">
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-gray-50 rounded-lg p-12 flex items-center justify-between" >
                        <div className="max-w-xs">
                            <p className="text-xs font-semibold text-gray-600 tracking-wider mb-2">NEW COLLECTION</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Intensive Glow C+ Serum
                            </h2>
                            <button className="text-gray-900 font-medium hover:underline">
                                Explore More
                            </button>
                        </div>
                    </div>

                    <div className="bg-teal-100 rounded-lg p-12 flex items-center justify-between overflow-hidden relative">
                        <div className="z-10">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                25% off Everything
                            </h2>
                            <p className="text-gray-700 mb-6 max-w-xs">
                                Makeup with extended range in colors for every human.
                            </p>
                            <button className="bg-white text-gray-900 px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors">
                                Shop Sale
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-8 py-12">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Package className="w-12 h-12 text-gray-700" strokeWidth={1} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
                        <p className="text-gray-500 text-sm">Free Shipping for orders over $130</p>
                    </div>

                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Leaf className="w-12 h-12 text-gray-700" strokeWidth={1} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Returns</h3>
                        <p className="text-gray-500 text-sm">Within 30 days for an exchange.</p>
                    </div>

                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <MessageCircle className="w-12 h-12 text-gray-700" strokeWidth={1} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Online Support</h3>
                        <p className="text-gray-500 text-sm">24 hours a day, 7 days a week</p>
                    </div>

                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <CreditCard className="w-12 h-12 text-gray-700" strokeWidth={1} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Payment</h3>
                        <p className="text-gray-500 text-sm">Pay with Multiple Credit Cards</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default SkincareProductsUI;