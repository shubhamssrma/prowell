'use client';

import React, { useState, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
    children: ReactNode[];
    viewSlides?: number;
    scrollSlides?: number;
    showArrows?: boolean;
    showDots?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    gap?: number;
    arrowPosition?: 'inside' | 'outside';
    dotColor?: string;
    arrowColor?: string;
}

const Slider: React.FC<SliderProps> = ({
    children,
    viewSlides = 1,
    scrollSlides = 1,
    showArrows = true,
    showDots = true,
    autoPlay = false,
    autoPlayInterval = 3000,
    gap = 24,
    arrowPosition = 'outside',
    dotColor = 'cyan',
    arrowColor = 'gray'
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const totalSlides = children.length;
    const maxIndex = Math.max(0, totalSlides - viewSlides);

    // Auto play functionality
    React.useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            handleNext();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [currentIndex, autoPlay, autoPlayInterval]);

    const handleSlideChange = (newIndex: number) => {
        if (isTransitioning || newIndex < 0 || newIndex > maxIndex) return;

        setIsTransitioning(true);
        setCurrentIndex(newIndex);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 600);
    };

    const handlePrevious = () => {
        const newIndex = Math.max(0, currentIndex - scrollSlides);
        handleSlideChange(newIndex);
    };

    const handleNext = () => {
        const newIndex = Math.min(maxIndex, currentIndex + scrollSlides);
        if (autoPlay && newIndex === maxIndex) {
            handleSlideChange(0);
        } else {
            handleSlideChange(newIndex);
        }
    };

    const goToSlide = (index: number) => {
        handleSlideChange(index);
    };

    // Calculate how many dots to show
    const totalDots = Math.ceil(totalSlides / scrollSlides);
    const activeDotIndex = Math.floor(currentIndex / scrollSlides);

    const arrowColorClass = {
        gray: 'border-gray-700 text-gray-700 hover:bg-gray-800 hover:border-gray-800',
        cyan: 'border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:border-cyan-600',
        green: 'border-green-600 text-green-600 hover:bg-green-600 hover:border-green-600',
        blue: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:border-blue-600'
    }[arrowColor] || 'border-gray-700 text-gray-700 hover:bg-gray-800 hover:border-gray-800';

    const dotColorClass = {
        cyan: 'bg-cyan-500',
        green: 'bg-green-500',
        blue: 'bg-blue-500',
        gray: 'bg-gray-800'
    }[dotColor] || 'bg-cyan-500';

    return (
        <div className="relative w-full">
            {/* Slider Container */}
            <div className="relative overflow-hidden">
                {/* Previous Arrow */}
                {showArrows && (
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0 || isTransitioning}
                        className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all hover:text-white hover:scale-110 ${arrowPosition === 'outside' ? '-left-16' : 'left-4'
                            } ${currentIndex === 0 || isTransitioning
                                ? 'border-gray-300 text-gray-300 cursor-not-allowed hover:bg-transparent hover:text-gray-300'
                                : arrowColorClass
                            }`}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                )}

                {/* Next Arrow */}
                {showArrows && (
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex || isTransitioning}
                        className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all hover:text-white hover:scale-110 ${arrowPosition === 'outside' ? '-right-16' : 'right-4'
                            } ${currentIndex >= maxIndex || isTransitioning
                                ? 'border-gray-300 text-gray-300 cursor-not-allowed hover:bg-transparent hover:text-gray-300'
                                : arrowColorClass
                            }`}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                )}

                {/* Slides Container */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / viewSlides}%)`,
                        gap: `${gap}px`
                    }}
                >
                    {children.map((child, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0"
                            style={{
                                width: `calc(${100 / viewSlides}% - ${(gap * (viewSlides - 1)) / viewSlides}px)`
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Navigation */}
            {showDots && (
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalDots }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index * scrollSlides)}
                            disabled={isTransitioning}
                            className={`transition-all duration-300 rounded-full ${index === activeDotIndex
                                    ? `w-12 h-2 ${dotColorClass}`
                                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                                } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// Example Usage Component
const SliderExample: React.FC = () => {
    // Sample slide content
    const slides = [
        { id: 1, title: 'Slide 1', bg: 'bg-cyan-500' },
        { id: 2, title: 'Slide 2', bg: 'bg-green-500' },
        { id: 3, title: 'Slide 3', bg: 'bg-blue-500' },
        { id: 4, title: 'Slide 4', bg: 'bg-purple-500' },
        { id: 5, title: 'Slide 5', bg: 'bg-pink-500' },
        { id: 6, title: 'Slide 6', bg: 'bg-yellow-500' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Example 1: Show 3 slides, scroll 1 at a time */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Example 1: View 3 Slides, Scroll 1
                    </h2>
                    <Slider
                        viewSlides={3}
                        scrollSlides={1}
                        showArrows={true}
                        showDots={true}
                        gap={24}
                        arrowPosition="outside"
                        dotColor="cyan"
                        arrowColor="cyan"
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className={`${slide.bg} rounded-2xl h-64 flex items-center justify-center text-white text-3xl font-bold shadow-lg`}
                            >
                                {slide.title}
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Example 2: Show 1 slide, scroll 1 at a time (mobile-like) */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Example 2: View 1 Slide, Scroll 1 (Mobile Style)
                    </h2>
                    <Slider
                        viewSlides={1}
                        scrollSlides={1}
                        showArrows={true}
                        showDots={true}
                        gap={0}
                        arrowPosition="inside"
                        dotColor="green"
                        arrowColor="green"
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className={`${slide.bg} rounded-2xl h-96 flex items-center justify-center text-white text-4xl font-bold shadow-lg`}
                            >
                                {slide.title}
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Example 3: Show 2 slides, scroll 2 at a time with autoplay */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Example 3: View 2 Slides, Scroll 2, Auto Play
                    </h2>
                    <Slider
                        viewSlides={2}
                        scrollSlides={2}
                        showArrows={true}
                        showDots={true}
                        autoPlay={true}
                        autoPlayInterval={3000}
                        gap={16}
                        arrowPosition="outside"
                        dotColor="blue"
                        arrowColor="blue"
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className={`${slide.bg} rounded-2xl h-80 flex items-center justify-center text-white text-3xl font-bold shadow-lg`}
                            >
                                {slide.title}
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Example 4: Custom content (cards) */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Example 4: Custom Card Content
                    </h2>
                    <Slider
                        viewSlides={3}
                        scrollSlides={1}
                        showArrows={true}
                        showDots={true}
                        gap={24}
                        arrowPosition="outside"
                        dotColor="cyan"
                        arrowColor="gray"
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className={`w-16 h-16 ${slide.bg} rounded-full mb-4`}></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{slide.title}</h3>
                                <p className="text-gray-600">
                                    This is a custom card component that can contain any content you want.
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Slider;