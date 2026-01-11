'use client';

import React, { useEffect, useState } from 'react';
import { Search, SlidersHorizontal, Grid3x3, List, ArrowRight, Tag, Loader2, Loader } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getProductsByApplications, getProductsByRegions, getProductsBySegments, getProductsBySpecies } from '@/store/slices/productSlice';
import { Product } from '@/types/product.types';

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   description: string;
//   image: string;
//   tags: string[];
//   featured?: boolean;
//   slug?: string;
// }

const ProductsShowcasePage: React.FC = () => {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const dispatch = useAppDispatch()
  const { products, loading, error } = useAppSelector(state => state.productReducer)

  const urlParams = useParams()
  console.log(urlParams)
  // const products: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Advanced Analytics Dashboard',
  //     category: 'Species',
  //     description: 'Comprehensive data visualization and analytics platform for business intelligence.',
  //     image: '/images/products/Bile_Acid.jpg',
  //     // image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  //     tags: ['Analytics', 'Dashboard', 'Business'],
  //     slug: 'test',
  //     featured: true
  //   },
  //   {
  //     id: 2,
  //     name: 'Cloud Storage Solution',
  //     category: 'Segment',
  //     description: 'Secure and scalable cloud storage platform with advanced file management.',
  //     image: '/images/products/Antibiotic_Growth_Promoter.jpg',
  //     // image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
  //     slug: 'test',
  //     tags: ['Cloud', 'Storage', 'Security']
  //   },
  //   {
  //     id: 3,
  //     name: 'Project Management Suite',
  //     category: 'Application',
  //     description: 'Complete project management and team collaboration platform.',
  //     image: '/images/products/Chemical_Anticoccidial.jpg',
  //     // image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
  //     slug: 'test',
  //     tags: ['Management', 'Collaboration', 'Productivity'],
  //     featured: true
  //   },
  //   {
  //     id: 4,
  //     name: 'AI Chatbot Platform',
  //     category: 'Region',
  //     description: 'Intelligent conversational AI for customer service and support automation.',
  //     image: '/images/products/Combination_Anticoccidial.jpg',
  //     // image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
  //     slug: 'test',
  //     tags: ['AI', 'Chatbot', 'Automation']
  //   },
  //   {
  //     id: 5,
  //     name: 'Marketing Automation Tool',
  //     category: 'Region',
  //     description: 'All-in-one marketing automation platform for email, social media, and campaigns.',
  //     image: '/images/products/Ionophore_Coccidiostat.jpg',
  //     // image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  //     slug: 'test',
  //     tags: ['Marketing', 'Automation', 'Email']
  //   },
  //   {
  //     id: 6,
  //     name: 'Mobile App Development Kit',
  //     category: 'Application',
  //     description: 'Complete SDK for building cross-platform mobile applications.',
  //     image: '/images/products/Natural_Growth_Promoter.jpg',
  //     // image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  //     slug: 'test',
  //     tags: ['Mobile', 'Development', 'SDK'],
  //     featured: true
  //   },
  //   {
  //     id: 7,
  //     name: 'CRM System',
  //     category: 'Application',
  //     description: 'Customer relationship management platform for sales and service teams.',
  //     image: '/images/products/Probiotic.jpg',
  //     // image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
  //     slug: 'test',
  //     tags: ['CRM', 'Sales', 'Customer Service']
  //   },
  //   {
  //     id: 8,
  //     name: 'E-Learning Platform',
  //     category: 'Species',
  //     description: 'Interactive online learning management system with course creation tools.',
  //     image: '/images/products/Probiotic.jpg',
  //     // image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
  //     slug: 'test',
  //     tags: ['Education', 'Learning', 'Online']
  //   },
  //   {
  //     id: 9,
  //     name: 'Cybersecurity Suite',
  //     category: 'Region',
  //     description: 'Enterprise-grade security platform with threat detection and prevention.',
  //     image: '/images/products/Ionophore_Coccidiostat.jpg',
  //     // image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
  //     slug: 'test',
  //     tags: ['Security', 'Cybersecurity', 'Protection']
  //   }
  // ];

  // const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  // const filteredProducts = products.filter(product => {
  //   const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
  //   const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     product.description.toLowerCase().includes(searchQuery.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 1000);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const handleProductClick = (product: Product | undefined) => {
    // Navigate to product detail page
    // console.log(`Navigate to product: ${productId}`);
    if (product) {
      router.push(`/product/${product.slug}`)
    }
    // In real Next.js app: router.push(`/products/${productId}`)
  };

  useEffect(() => {
    if (urlParams.category === 'by-species') {
      dispatch(getProductsBySpecies({ search: debouncedSearch }))
    } else if (urlParams.category === 'by-segment') {
      dispatch(getProductsBySegments({ search: debouncedSearch }))
    } else if (urlParams.category === 'by-application') {
      dispatch(getProductsByApplications({ search: debouncedSearch }))
    } else if (urlParams.category === 'by-region') {
      dispatch(getProductsByRegions({ search: debouncedSearch }))
    }
  }, [urlParams, debouncedSearch])


  // if (loading) {
  //   return "loading..."
  // }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center">
            Our Products
          </h1>
          <p className="text-lg sm:text-xl text-cyan-50 text-center">
            Explore our innovative solutions designed to transform your business
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filters Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden sm:block">
                {products.length} products
              </span>
              <div className="flex items-center gap-2 border-2 border-cyan-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-600 hover:bg-cyan-50'}`}
                  aria-label="Grid view"
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-600 hover:bg-cyan-50'}`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-cyan-100">
            {/* {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-md'
                  : 'bg-cyan-50 text-gray-700 hover:bg-cyan-100'
                  }`}
              >
                {category}
              </button>
            ))} */}
          </div>
        </div>

        {/* Products Display */}

        {/* Empty State */}
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
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-50 rounded-full mb-4">
                  <Search className="w-8 h-8 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're looking for
                </p>
              </div>
            ) :
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-6'
              }>
                {
                  products.map((product) => (
                    <div
                      key={product._id}
                      onClick={() => handleProductClick(product)}
                      className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden ${viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                        }`}
                    >
                      {/* Product Image */}
                      <div className={`relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 ${viewMode === 'list' ? 'sm:w-80 h-64 sm:h-auto flex-shrink-0' : 'aspect-video'
                        }`}>
                        <img
                          src={product.featuredImage.url}
                          alt={product.featuredImage.alt}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                        {product.isFeatured && (
                          <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg">
                            Featured
                          </span>
                        )}

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <span className="text-white font-medium flex items-center gap-2">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          {
                            product.categories.map(cat => {
                              return (
                                <span key={cat._id} className="inline-block px-3 py-1 text-xs font-semibold text-cyan-700 bg-cyan-50 rounded-full border border-cyan-200">
                                  {cat.name}
                                </span>
                              )
                            })
                          }
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                          {product.name}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {product.productSmallDescription}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.species.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-1 rounded border border-green-200"
                            >
                              <Tag className="w-3 h-3" />
                              {tag.name}
                            </span>
                          ))}
                        </div>

                        {/* Learn More Button */}
                        <button
                          className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:gap-3 transition-all group/button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProductClick(product);
                          }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))
                }
              </div>
        }
      </div>



      {/* Pagination */}
      {/* {products.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border-2 border-cyan-200 rounded-lg hover:bg-cyan-50 hover:border-cyan-300 transition-all">
                Previous
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${page === 1
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-md'
                    : 'border-2 border-cyan-200 hover:bg-cyan-50 hover:border-cyan-300'
                    }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border-2 border-cyan-200 rounded-lg hover:bg-cyan-50 hover:border-cyan-300 transition-all">
                Next
              </button>
            </div>
          </div>
        )} */}
    </div >
  );
};

export default ProductsShowcasePage;