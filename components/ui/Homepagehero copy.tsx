'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Slide {
    id: number;
    subtitle?: string;
    title: string;
    description: string;
    backgroundImage: string;
    buttonText: string;
    href: string
}

const slides: Slide[] = [
    {
        id: 1,
        // subtitle: 'ESSENTIAL ITEMS',
        title: 'Global Expertise Local Commitment',
        description: 'At Prowell Lifesciences, we believe healthy animals mean healthy progress. Founded in 2023, our mission is simple: to support farmers with solutions that protect livestock, improve performance, and build a sustainable future for animal production in India.',
        backgroundImage: '/images/banner/banner1.png',
        buttonText: 'Contact US',
        href: `/contact`

    },
    {
        id: 2,
        // subtitle: 'NEW COLLECTION',
        title: 'Healthy Poultry Sustainable Future',
        description: 'What sets us apart is how we bring proven science to practical use. Our feed supplements and health solutions are designed to safeguard gut health, reduce disease risks, and help animals grow stronger and more productive, while minimizing resistance challenges. Behind every product lies careful research, trusted partnerships with consistent quality, and a deep understanding of farmers’ needs.',
        backgroundImage: '/images/banner/banner1.png',
        buttonText: 'Explore More',
        href: `/products/by-species`
    },
    {
        id: 3,
        // subtitle: 'BEST SELLERS',
        title: 'Quality you can see, Integrity you can trust',
        description: 'For us, progress is not just about products. It’s about people. We see our role as partners - sharing knowledge, building trust, and raising standards together. Whether you are a farmer, distributor, or someone who cares about animal welfare, our commitment remains the same: to create solutions that make farming healthier, more sustainable, and more rewarding for everyone.',
        backgroundImage: '/images/banner/banner1.png',
        buttonText: 'Need Help?',
        href: `/resource-center/faqs`
    }
];

const BeautyHeroSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentSlide]);

    const handleNextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setTimeout(() => setIsAnimating(false), 700);
        }
    };

    const goToSlide = (index: number) => {
        if (!isAnimating && index !== currentSlide) {
            setIsAnimating(true);
            setCurrentSlide(index);
            setTimeout(() => setIsAnimating(false), 700);
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${slide.backgroundImage})`,
                        }}
                    >
                        {/* Overlay for better text readability - optional */}
                        <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                </div>
            ))}

            {/* Content Container */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-8 md:px-16 lg:px-24">
                    <div className="max-w-2xl">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`transition-all duration-700 ${index === currentSlide
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-8 absolute'
                                    }`}
                            >
                                {/* Subtitle */}
                                <p className="text-xs md:text-sm tracking-[0.3em] text-gray-800 font-semibold mb-6 uppercase">
                                    {slide.subtitle}
                                </p>

                                {/* Title */}
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-cyan-700 to-teal-700 mb-6 leading-tight">
                                    {slide.title.split(' ').map((word, i) => (
                                        <React.Fragment key={i}>
                                            {word}
                                            {i === 1 && <br />}
                                            {i !== 1 && i < slide.title.split(' ').length - 1 && ' '}
                                        </React.Fragment>
                                    ))}
                                </h1>

                                {/* Description */}
                                <p className="text-base md:text-lg text-white-600 mb-8 max-w-lg leading-relaxed">
                                    {slide.description}
                                </p>

                                <Link href={slide.href} className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors duration-200 shadow-md hover:shadow-lg">
                                    {slide.buttonText}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                            ? 'w-8 h-3 bg-cyan-500'
                            : 'w-3 h-3 bg-white hover:bg-cyan-600'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BeautyHeroSlider;