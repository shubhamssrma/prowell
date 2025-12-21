'use client'
import React from 'react';
import { Heart, TrendingUp, Shield, Users, Leaf, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import CTA from './CTA';

export default function WelcomeSection() {
    const highlights = [
        {
            icon: Shield,
            title: "Science-Backed Solutions",
            description: "Proven research and trusted partnerships"
        },
        {
            icon: Heart,
            title: "Animal Welfare First",
            description: "Protecting livestock, improving performance"
        },
        {
            icon: TrendingUp,
            title: "Sustainable Growth",
            description: "Building a rewarding future for farming"
        }
    ];

    const benefits = [
        "Safeguard gut health and reduce disease risks",
        "Help animals grow stronger and more productive",
        "Minimize resistance challenges",
        "Deep understanding of farmers' needs"
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/background.jpg')",
                    }}
                ></div>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-green-950/85 to-blue-900/90"></div>
                {/* Animated subtle elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Header Badge */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                        <Sparkles className="w-5 h-5 text-green-400" />
                        <span className="text-white font-semibold">Established 2023</span>
                        <span className="text-white/60">|</span>
                        <Leaf className="w-5 h-5 text-blue-400" />
                        <span className="text-white/90">Sustainable Innovation</span>
                    </div>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Welcome to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-green-400 animate-gradient">
                            PROWELL LIFESCIENCES
                        </span>
                        <br />
                        <span className="text-2xl sm:text-3xl lg:text-4xl text-white/90">
                            PRIVATE LIMITED
                        </span>
                    </h1>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column - Main Description */}
                    <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-xl p-3 shrink-0">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
                                    <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                                </div>
                            </div>
                            <p className="text-white/80 text-lg leading-relaxed mb-6">
                                At Prowell Lifesciences, we believe <span className="text-green-400 font-semibold">healthy animals mean healthy progress</span>. Founded in 2023, our mission is simple: to support farmers with solutions that protect livestock, improve performance, and build a sustainable future for animal production in India.
                            </p>
                            <p className="text-white/70 leading-relaxed">
                                What sets us apart is how we bring proven science to practical use. Our feed supplements and health solutions are designed to safeguard gut health, reduce disease risks, and help animals grow stronger and more productive, while minimizing resistance challenges.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                                Key Benefits
                            </h3>
                            <ul className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3 text-white/80">
                                        <div className="bg-green-500/20 rounded-full p-1 mt-0.5">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        </div>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Highlights & Vision */}
                    <div className="space-y-6">
                        {/* Highlight Cards */}
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`bg-gradient-to-br ${index === 0 ? 'from-green-500 to-green-600' : index === 1 ? 'from-blue-500 to-blue-600' : 'from-green-500 to-blue-500'} rounded-xl p-3 group-hover:scale-110 transition-transform`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/70">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Partnership Card */}
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-xl p-3 w-fit mb-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Our Commitment</h3>
                                <p className="text-white/80 leading-relaxed mb-4">
                                    For us, progress is not just about products. It's about people. We see our role as partners - sharing knowledge, building trust, and raising standards together.
                                </p>
                                <p className="text-white/70 leading-relaxed">
                                    Whether you are a farmer, distributor, or someone who cares about animal welfare, our commitment remains the same: to create solutions that make farming healthier, more sustainable, and more rewarding for everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-block">
                        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                            <p className="text-white/90 text-lg mb-6 max-w-2xl">
                                Ready to partner with us in building a sustainable future for animal production?
                            </p>
                            <CTA
                                href="/products/by-species"
                                title='Discover Our Products'
                                showArrow={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="rgba(34, 197, 94, 0.1)" />
                    <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,90.7C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="rgba(59, 130, 246, 0.1)" />
                </svg>
            </div>

            <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </div>
    );
}