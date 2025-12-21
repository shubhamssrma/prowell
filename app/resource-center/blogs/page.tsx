'use client'
import React, { useState } from 'react';
import { Calendar, Clock, User, Search, ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

export default function BlogsIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Industry News', 'Product Updates', 'Tips & Guides', 'Success Stories', 'Technology'];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Distribution: Trends Shaping 2025',
      excerpt: 'Explore the latest trends transforming the distribution industry and how businesses can adapt to stay competitive in the evolving market landscape.',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'Industry News',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Maximizing Efficiency: Smart Inventory Management Tips',
      excerpt: 'Learn practical strategies to optimize your inventory management processes and reduce costs while improving customer satisfaction.',
      author: 'Michael Chen',
      date: 'Dec 12, 2024',
      readTime: '7 min read',
      category: 'Tips & Guides',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'New Product Launch: Revolutionary Supply Chain Solutions',
      excerpt: 'Introducing our latest suite of tools designed to streamline your supply chain operations and boost productivity across all channels.',
      author: 'Emma Williams',
      date: 'Dec 10, 2024',
      readTime: '4 min read',
      category: 'Product Updates',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      id: 4,
      title: 'Case Study: How ABC Corp Increased Sales by 150%',
      excerpt: 'Discover how ABC Corporation leveraged our platform to triple their distribution network and achieve unprecedented growth.',
      author: 'David Kumar',
      date: 'Dec 8, 2024',
      readTime: '6 min read',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop'
    },
    {
      id: 5,
      title: 'AI and Machine Learning in Modern Distribution',
      excerpt: 'Understanding how artificial intelligence is revolutionizing demand forecasting and inventory optimization in the distribution sector.',
      author: 'Lisa Anderson',
      date: 'Dec 5, 2024',
      readTime: '8 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop'
    },
    {
      id: 6,
      title: 'Sustainable Practices for Modern Distributors',
      excerpt: 'Explore eco-friendly strategies that can help your distribution business reduce its carbon footprint while maintaining profitability.',
      author: 'Robert Green',
      date: 'Dec 3, 2024',
      readTime: '5 min read',
      category: 'Industry News',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop'
    },
    {
      id: 7,
      title: 'Building Strong Dealer Relationships: A Complete Guide',
      excerpt: 'Learn the essential strategies for creating and maintaining successful partnerships with dealers and distributors worldwide.',
      author: 'Jennifer Martinez',
      date: 'Nov 30, 2024',
      readTime: '6 min read',
      category: 'Tips & Guides',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop'
    },
    {
      id: 8,
      title: 'Q4 Platform Updates: What\'s New and Improved',
      excerpt: 'Get an overview of our latest feature releases and improvements designed to enhance your distribution management experience.',
      author: 'Alex Thompson',
      date: 'Nov 28, 2024',
      readTime: '4 min read',
      category: 'Product Updates',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Insights, updates, and stories from the world of distribution and supply chain management
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 outline-none focus:ring-4 focus:ring-white/30 transition bg-white"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-cyan-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Browse by Category</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && searchQuery === '' && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-green-500 rounded-full" />
              <h2 className="text-3xl font-bold text-gray-800">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-green-500 text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors">
                      <Link href={`/resource-center/blogs/${post.title}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <button className="flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all">
                        Read More
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-green-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
          </div>

          {regularPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      <Link href={`/resource-center/blogs/${post.title}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <User size={14} className="text-gray-400" />
                        <span className="text-xs text-gray-600">{post.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Load More Button */}
        {regularPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}