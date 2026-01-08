// 'use client';

// import React, { useState, useEffect } from 'react';

// interface Slide {
//     id: number;
//     subtitle: string;
//     title: string;
//     description: string;
//     buttonText: string;
//     mainImage: string;
//     floatingImage: string;
// }

// const slides: Slide[] = [
//     {
//         id: 1,
//         subtitle: 'Discover the Nature with',
//         title: 'HEALTH POULTRY SUSTAINABLE FUTURE',
//         description: 'At PureGlow Skincare, we believe in the power of nature to nurture and restore your skin. Our products are crafted with the purest organic ingredients, harnessing the gifts of the earth to create a radiant, healthy glow for your skin.',
//         buttonText: 'Learn More',
//         mainImage: '/images/about/first.jpg',
//         floatingImage: '/images/about/third.jpg'
//     },
//     {
//         id: 2,
//         subtitle: 'Experience Pure Quality',
//         title: 'ORGANIC FARMING NATURAL WELLNESS',
//         description: 'Our commitment to sustainable farming practices ensures that every product meets the highest standards of quality. We work directly with local farmers to bring you the freshest, most nutritious poultry products available.',
//         buttonText: 'Explore Products',
//         mainImage: '/images/about/sixth.jpg',
//         floatingImage: '/images/about/seventh.jpg'
//     },
//     {
//         id: 3,
//         subtitle: 'Building a Better Tomorrow',
//         title: 'ETHICAL PRACTICES HEALTHY LIVING',
//         description: 'Join us in our mission to create a more sustainable future. Through ethical farming practices and dedication to animal welfare, we are setting new standards in the industry while delivering exceptional products to your table.',
//         buttonText: 'Our Story',
//         mainImage: '/images/about/third.jpg',
//         floatingImage: '/images/about/second.jpg'

//     }
// ];

// const PoultryHeroSection: React.FC = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             handleNextSlide();
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [currentSlide]);

//     const handleNextSlide = () => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//             setTimeout(() => setIsAnimating(false), 700);
//         }
//     };

//     const goToSlide = (index: number) => {
//         if (!isAnimating && index !== currentSlide) {
//             setIsAnimating(true);
//             setCurrentSlide(index);
//             setTimeout(() => setIsAnimating(false), 700);
//         }
//     };

//     return (
//         <section className="relative min-h-screen bg-gradient-to-r from-green-50 via-cyan-50 to-teal-50 overflow-hidden">
//             {/* Content Container */}
//             <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

//                     {/* Left Column - Text Content */}
//                     <div className="space-y-6 lg:space-y-8 pt-8 lg:pt-0 relative">
//                         {slides.map((slide, index) => (
//                             <div
//                                 key={slide.id}
//                                 className={`transition-all duration-700 ${index === currentSlide
//                                         ? 'opacity-100 translate-x-0 relative'
//                                         : 'opacity-0 -translate-x-8 absolute'
//                                     }`}
//                             >
//                                 <p className="text-sm md:text-base text-green-700 tracking-wide">
//                                     {slide.subtitle}
//                                 </p>

//                                 <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight space-y-2">
//                                     <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600'>
//                                         {slide.title}
//                                     </span>
//                                 </h1>

//                                 <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-lg">
//                                     {slide.description}
//                                 </p>

//                                 <div className="pt-2">
//                                     <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-12 py-3.5 rounded-sm transition-colors duration-300 text-sm md:text-base">
//                                         {slide.buttonText}
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Right side - Illustration */}
//                     <div className="hidden lg:block relative">
//                         {slides.map((slide, index) => (
//                             <div
//                                 key={slide.id}
//                                 className={`transition-all duration-700 ${index === currentSlide
//                                         ? 'opacity-100 translate-x-0 relative'
//                                         : 'opacity-0 translate-x-8 absolute inset-0'
//                                     }`}
//                             >
//                                 <div className="relative w-full max-w-md mx-auto">
//                                     {/* Main circular image */}
//                                     <div className="relative aspect-square rounded-full overflow-hidden bg-white shadow-xl">
//                                         <img
//                                             src={slide.mainImage}
//                                             alt="Team members"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>

//                                     {/* Floating chicken image */}
//                                     <div className="absolute bottom-[-20] left-[-20] w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-white shadow-lg">
//                                         <img
//                                             src={slide.floatingImage}
//                                             alt="Poultry"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>

//             {/* Navigation Dots */}
//             <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`transition-all duration-300 rounded-full ${index === currentSlide
//                                 ? 'w-8 h-3 bg-cyan-500'
//                                 : 'w-3 h-3 bg-green-400 hover:bg-cyan-600'
//                             }`}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default PoultryHeroSection;


'use client';

import React, { useState, useEffect } from 'react';

interface Slide {
    id: number;
    subtitle: string;
    title: string;
    description: string;
    buttonText: string;
    mainImage: string;
    floatingImage: string;
}

const slides: Slide[] = [
    {
        id: 1,
        subtitle: 'Discover the Nature with',
        title: 'HEALTH POULTRY SUSTAINABLE FUTURE',
        description: 'At PureGlow Skincare, we believe in the power of nature to nurture and restore your skin. Our products are crafted with the purest organic ingredients, harnessing the gifts of the earth to create a radiant, healthy glow for your skin.',
        buttonText: 'Learn More',
        mainImage: '/images/about/first.jpg',
        floatingImage: '/images/about/third.jpg'
    },
    {
        id: 2,
        subtitle: 'Experience Pure Quality',
        title: 'ORGANIC FARMING NATURAL WELLNESS',
        description: 'Our commitment to sustainable farming practices ensures that every product meets the highest standards of quality. We work directly with local farmers to bring you the freshest, most nutritious poultry products available.',
        buttonText: 'Explore Products',
        mainImage: '/images/about/sixth.jpg',
        floatingImage: '/images/about/seventh.jpg'
    },
    {
        id: 3,
        subtitle: 'Building a Better Tomorrow',
        title: 'ETHICAL PRACTICES HEALTHY LIVING',
        description: 'Join us in our mission to create a more sustainable future. Through ethical farming practices and dedication to animal welfare, we are setting new standards in the industry while delivering exceptional products to your table.',
        buttonText: 'Our Story',
        mainImage: '/images/about/third.jpg',
        floatingImage: '/images/about/second.jpg'

    }
];

const PoultryHeroSection: React.FC = () => {
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
        <section className="relative min-h-screen bg-gradient-to-r from-green-50 via-cyan-50 to-teal-50 overflow-hidden">
            {/* Content Container */}
            <div className="relative z-10 max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Text Content */}
                    <div className="space-y-6 lg:space-y-8 pt-8 lg:pt-0 relative">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`transition-all duration-700 ${
                                    index === currentSlide
                                        ? 'opacity-100 translate-x-0 relative'
                                        : 'opacity-0 -translate-x-8 absolute'
                                }`}
                            >
                                <p className="text-sm md:text-base text-green-700 tracking-wide">
                                    {slide.subtitle}
                                </p>

                                <h1 className="text-4xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight space-y-2">
                                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600'>
                                        {slide.title}
                                    </span>
                                </h1>

                                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-lg">
                                    {slide.description}
                                </p>

                                <div className="pt-2">
                                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-12 py-3.5 rounded-sm transition-colors duration-300 text-sm md:text-base">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Illustration */}
                    <div className="relative">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`transition-all duration-700 ${
                                    index === currentSlide
                                        ? 'opacity-100 translate-x-0 relative'
                                        : 'opacity-0 translate-x-8 absolute inset-0'
                                }`}
                            >
                                <div className="relative w-full max-w-md mx-auto">
                                    {/* Main circular image */}
                                    <div className="relative aspect-square rounded-full overflow-hidden bg-white shadow-xl">
                                        <img
                                            src={slide.mainImage}
                                            alt="Team members"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Floating chicken image */}
                                    <div className="absolute bottom-[-20] left-[-20] w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-white shadow-lg">
                                        <img
                                            src={slide.floatingImage}
                                            alt="Poultry"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-2 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentSlide
                                ? 'w-8 h-3 bg-cyan-500'
                                : 'w-3 h-3 bg-green-400 hover:bg-cyan-600'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default PoultryHeroSection;