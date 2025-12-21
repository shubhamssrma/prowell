'use client'
import React, { useState } from 'react';
import { Calendar, Clock, User, ChevronLeft, Share2, Bookmark, Heart, Facebook, Twitter, Linkedin, Link2, TrendingUp } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    authorBio: string;
    authorImage: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: string[];
}

interface RelatedPost {
    id: number;
    title: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
}

export default function BlogDetailPage() {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [likes, setLikes] = useState(42);
    const [isLiked, setIsLiked] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);

    const blogPost: BlogPost = {
        id: 1,
        title: 'The Future of Distribution: Trends Shaping 2025',
        excerpt: 'Explore the latest trends transforming the distribution industry and how businesses can adapt to stay competitive in the evolving market landscape.',
        author: 'Sarah Johnson',
        authorBio: 'Sarah is a supply chain expert with over 15 years of experience in distribution management and logistics optimization.',
        authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        date: 'Dec 15, 2024',
        readTime: '5 min read',
        category: 'Industry News',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
        content: [
            'The distribution industry is experiencing unprecedented transformation as we approach 2025. With technological advancements, changing consumer behaviors, and evolving market dynamics, businesses must stay ahead of the curve to remain competitive.',
            'One of the most significant trends reshaping the distribution landscape is the integration of artificial intelligence and machine learning. These technologies are revolutionizing everything from demand forecasting to inventory optimization, enabling distributors to make data-driven decisions with unprecedented accuracy.',
            'Sustainability has moved from being a nice-to-have to a must-have in the distribution sector. Companies are increasingly focusing on reducing their carbon footprint through optimized routing, electric vehicles, and eco-friendly packaging solutions. This shift is not just about environmental responsibility—it\'s also about meeting customer expectations and staying compliant with evolving regulations.',
            'The rise of omnichannel distribution is another game-changer. Customers now expect seamless experiences across multiple touchpoints, whether they\'re ordering online, through mobile apps, or in physical stores. Distributors must adapt their operations to support this multichannel approach while maintaining efficiency and cost-effectiveness.',
            'Automation and robotics are transforming warehouse operations. From automated guided vehicles (AGVs) to robotic picking systems, these technologies are improving accuracy, reducing labor costs, and enabling 24/7 operations. The initial investment may be significant, but the long-term benefits are undeniable.',
            'Real-time visibility across the supply chain has become essential. Modern distribution management systems provide end-to-end tracking capabilities, allowing businesses to monitor shipments, inventory levels, and delivery status in real-time. This transparency not only improves operational efficiency but also enhances customer satisfaction.',
            'The future of distribution will be defined by those who embrace these changes proactively. Companies that invest in technology, prioritize sustainability, and focus on customer experience will be best positioned to thrive in the evolving marketplace. The question is not whether to adapt, but how quickly you can implement these transformative strategies.'
        ]
    };

    const relatedPosts: RelatedPost[] = [
        {
            id: 2,
            title: 'Maximizing Efficiency: Smart Inventory Management Tips',
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop',
            date: 'Dec 12, 2024',
            readTime: '7 min read',
            category: 'Tips & Guides'
        },
        {
            id: 3,
            title: 'AI and Machine Learning in Modern Distribution',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
            date: 'Dec 5, 2024',
            readTime: '8 min read',
            category: 'Technology'
        },
        {
            id: 4,
            title: 'Sustainable Practices for Modern Distributors',
            image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop',
            date: 'Dec 3, 2024',
            readTime: '5 min read',
            category: 'Industry News'
        }
    ];

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    const handleShare = (platform: string) => {
        console.log(`Sharing on ${platform}`);
        setShowShareMenu(false);
    };

    const handleBackToBlog = () => {
        console.log('Navigate back to blog index');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-green-50">
            {/* Back Button */}
            {/* <div className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <button
                        onClick={handleBackToBlog}
                        className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors font-medium"
                    >
                        <ChevronLeft size={20} />
                        Back to Blog
                    </button>
                </div>
            </div> */}

            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden">
                <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
                {/* Article Header */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="block md:flex items-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-green-500 text-white text-sm font-semibold rounded-full">
                            {blogPost.category}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-4 md:mt-0">
                            <div className="flex items-center gap-1">
                                <Calendar size={16} />
                                <span>{blogPost.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock size={16} />
                                <span>{blogPost.readTime}</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {blogPost.title}
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {blogPost.excerpt}
                    </p>

                    {/* Author Info and Actions */}
                    <div className="block md:flex items-center justify-between pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-4">
                            <img
                                src={blogPost.authorImage}
                                alt={blogPost.author}
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <div>
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-gray-400" />
                                    <span className="font-semibold text-gray-900">{blogPost.author}</span>
                                </div>
                                <p className="text-sm text-gray-600">{blogPost.authorBio}</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 mt-4 md:mt-0">
                            <button
                                onClick={handleLike}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${isLiked
                                        ? 'bg-red-100 text-red-600'
                                        : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
                                    }`}
                            >
                                <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                                <span className="font-semibold">{likes}</span>
                            </button>

                            <button
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                className={`p-2 rounded-full transition-all ${isBookmarked
                                        ? 'bg-cyan-100 text-cyan-600'
                                        : 'bg-gray-100 text-gray-600 hover:bg-cyan-50 hover:text-cyan-600'
                                    }`}
                            >
                                <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setShowShareMenu(!showShareMenu)}
                                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all"
                                >
                                    <Share2 size={18} />
                                </button>

                                {showShareMenu && (
                                    <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-2 w-48 z-20">
                                        <button
                                            onClick={() => handleShare('facebook')}
                                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors text-gray-700"
                                        >
                                            <Facebook size={18} className="text-blue-600" />
                                            Facebook
                                        </button>
                                        <button
                                            onClick={() => handleShare('twitter')}
                                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-sky-50 rounded-lg transition-colors text-gray-700"
                                        >
                                            <Twitter size={18} className="text-sky-500" />
                                            Twitter
                                        </button>
                                        <button
                                            onClick={() => handleShare('linkedin')}
                                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors text-gray-700"
                                        >
                                            <Linkedin size={18} className="text-blue-700" />
                                            LinkedIn
                                        </button>
                                        <button
                                            onClick={() => handleShare('copy')}
                                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
                                        >
                                            <Link2 size={18} className="text-gray-600" />
                                            Copy Link
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="prose prose-lg max-w-none">
                        {blogPost.content.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                                #Distribution
                            </span>
                            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                                #SupplyChain
                            </span>
                            <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                                #Technology
                            </span>
                            <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                                #Innovation
                            </span>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="text-cyan-600" size={24} />
                        <h2 className="text-3xl font-bold text-gray-800">Related Articles</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {relatedPosts.map((post) => (
                            <div
                                key={post.id}
                                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>{post.date}</span>
                                        <div className="flex items-center gap-1">
                                            <Clock size={12} />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}