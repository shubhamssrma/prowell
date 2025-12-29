// 'use client'
// import React, { useState, useEffect } from 'react';
// import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import CTA from './CTA';

// interface Slide {
//     id: number;
//     title: string;
//     subtitle: string;
//     buttonText: string;
//     href: string;
//     image: string;
// }

// const HeroSection: React.FC = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//     const slides: Slide[] = [
//         {
//             id: 1,
//             title: 'Animal Health Center',
//             subtitle: 'Advanced products for poultry and aqua health management with proven results',
//             buttonText: 'Contact now',
//             href: "/contact",
//             image: '/images/banner/1.png'
//         },
//         {
//             id: 2,
//             title: 'Healthy Animals Mean Healthy Progress',
//             subtitle: 'Supporting farmers with solutions that protect livestock, improve performance, and build a sustainable future',
//             buttonText: 'Learn More',
//             href: "/about/our-edge",
//             image: '/images/banner/2.png'
//         },
//         {
//             id: 3,
//             title: 'Innovative Veterinary Solutions',
//             subtitle: 'Advanced products for poultry and aqua health management with proven results',
//             buttonText: 'Explore Products',
//             href: "/products/by-species",
//             image: '/images/banner/3.png'
//         }
//     ];

//     useEffect(() => {
//         if (!isAutoPlaying) return;

//         const interval = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [isAutoPlaying, slides.length]);

//     const goToSlide = (index: number) => {
//         setCurrentSlide(index);
//         setIsAutoPlaying(false);
//         setTimeout(() => setIsAutoPlaying(true), 10000);
//     };

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//         setIsAutoPlaying(false);
//         setTimeout(() => setIsAutoPlaying(true), 10000);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//         setIsAutoPlaying(false);
//         setTimeout(() => setIsAutoPlaying(true), 10000);
//     };

//     return (
//         <div className="relative w-full h-[80vh] overflow-hidden">
//             {/* Slides Container */}
//             <div className="relative w-full h-full">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={slide.id}
//                         className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
//                             }`}
//                     >
//                         {/* Background Image */}
//                         <div
//                             className="absolute inset-0 bg-cover bg-center"
//                             style={{
//                                 backgroundImage: `url(${slide.image})`,
//                             }}
//                         >
//                             {/* Overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent"></div>
//                         </div>

//                         {/* Content */}
//                         <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto">
//                             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                                 <div className="max-w-2xl">
//                                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
//                                         <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
//                                             {slide.title}
//                                         </h1>
//                                         <p className="text-base sm:text-lg md:text-lg text-white mb-6 md:mb-8 leading-relaxed">
//                                             {slide.subtitle}
//                                         </p>
//                                         <CTA
//                                             href={slide.href}
//                                             title={slide.buttonText}
//                                             showArrow={true}
//                                         />
//                                         {/* <button className="group bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/30 flex items-center gap-3">
//                                             <span className="text-lg"></span>
//                                             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                                         </button> */}
//                                         {/* <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                                             {slide.buttonText}
//                                         </button> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Navigation Arrows */}
//             {/* <button
//                 onClick={prevSlide}
//                 className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
//                 aria-label="Previous slide"
//             >
//                 <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
//             </button>

//             <button
//                 onClick={nextSlide}
//                 className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
//                 aria-label="Next slide"
//             >
//                 <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
//             </button> */}

//             {/* Dots Navigation */}
//             <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`transition-all duration-300 rounded-full ${index === currentSlide
//                             ? 'bg-cyan-500 w-10 md:w-12 h-3 md:h-4'
//                             : 'bg-white/60 hover:bg-white/80 w-3 md:w-4 h-3 md:h-4'
//                             }`}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>

//             {/* Decorative Element - Green grass on right */}
//             <div className="absolute bottom-0 right-0 w-32 md:w-48 h-full pointer-events-none z-10 overflow-hidden">
//                 <div
//                     className="absolute inset-0 opacity-40"
//                     style={{
//                         background: 'linear-gradient(to left, rgba(34, 197, 94, 0.3) 0%, transparent 100%)'
//                     }}
//                 ></div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;


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
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-cyan-700 to-teal-700 mb-6 leading-tight">
                                    {slide.title.split(' ').map((word, i) => (
                                        <React.Fragment key={i}>
                                            {word}
                                            {i === 1 && <br />}
                                            {i !== 1 && i < slide.title.split(' ').length - 1 && ' '}
                                        </React.Fragment>
                                    ))}
                                </h1>

                                {/* Description */}
                                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                                    {slide.description}
                                </p>

                                {/* CTA Button */}
                                {/* <button className="bg-green-500 text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-gray-800 transition-colors duration-300">
                                    
                                </button> */}
                                <Link href={slide.href} className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors duration-200 shadow-md hover:shadow-lg">
                                    {slide.buttonText}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Leaves - Optional */}
            {/* <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none overflow-hidden">
                <img
                    src="/api/placeholder/600/800"
                    alt="Decorative leaves"
                    className="absolute top-0 right-0 w-full h-auto opacity-80"
                />
            </div> */}

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

            {/* Navigation Arrows - Optional */}
            {/* <button
                    onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                    className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-300 group"
                    aria-label="Previous slide"
                >
                    <svg
                        className="w-6 h-6 text-gray-800 group-hover:text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={handleNextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-300 group"
                    aria-label="Next slide"
                >
                    <svg
                        className="w-6 h-6 text-gray-800 group-hover:text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button> */}
        </div>
    );
};

export default BeautyHeroSlider;