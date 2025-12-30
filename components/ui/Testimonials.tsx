'use client'
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role?: string;
    company: string;
    image: string;
    rating: number;
    text: string;
    featured?: boolean;
}

interface TestimonialsProps {
    variant?: 'default' | 'carousel' | 'grid' | 'minimal';
    maxItems?: number;
    showNavigation?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sonu',
        // role: 'CEO',
        company: 'K K Feeds Poultry',
        image: '/images/testimonial/testimonial.png',
        rating: 5,
        text: 'Excellent service and good products!',
        featured: true
    },
    {
        id: 2,
        name: 'Amit Dhull',
        // role: 'Sales Manager',
        company: 'Royal Feeds',
        image: '/images/testimonial/testimonial.png',
        rating: 5,
        text: 'Good Results',
        featured: true
    },
    // {
    //     id: 3,
    //     name: 'Amit Patel',
    //     role: 'Real Estate Broker',
    //     company: 'Skyline Estates',
    //     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    //     rating: 5,
    //     text: 'Outstanding service! The automation features save us hours every week. The customer support is also top-notch and very responsive.',
    //     featured: false
    // },
    // {
    //     id: 4,
    //     name: 'Sneha Reddy',
    //     role: 'Property Consultant',
    //     company: 'Green Valley Realty',
    //     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    //     rating: 5,
    //     text: 'This is exactly what we needed for our growing business. The interface is user-friendly and the reporting features give us valuable insights.',
    //     featured: false
    // },
    // {
    //     id: 5,
    //     name: 'Vikram Singh',
    //     role: 'Director',
    //     company: 'Metro Homes',
    //     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    //     rating: 5,
    //     text: 'We\'ve tried multiple CRM systems, but this one stands out. The property management integration is seamless and the team loves using it.',
    //     featured: false
    // },
    // {
    //     id: 6,
    //     name: 'Ananya Kapoor',
    //     role: 'Senior Agent',
    //     company: 'Prime Properties',
    //     image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop',
    //     rating: 5,
    //     text: 'Game changer for our agency! The lead scoring system helps us prioritize effectively, and we\'ve seen a 50% increase in conversions.',
    //     featured: true
    // }
];

const Testimonials: React.FC<TestimonialsProps> = ({
    variant = 'default',
    maxItems,
    showNavigation = true,
    autoPlay = false,
    autoPlayInterval = 5000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayedTestimonials = maxItems ? testimonials.slice(0, maxItems) : testimonials;

    useEffect(() => {
        if (autoPlay && variant === 'carousel') {
            const interval = setInterval(() => {
                handleNext();
            }, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [currentIndex, autoPlay, autoPlayInterval, variant]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % displayedTestimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + displayedTestimonials.length) % displayedTestimonials.length);
    };

    const renderStars = (rating: number) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={18}
                        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                ))}
            </div>
        );
    };

    // Carousel Variant
    if (variant === 'carousel') {
        const currentTestimonial = displayedTestimonials[currentIndex];
        return (
            <div className="py-16 px-4 bg-gradient-to-br from-cyan-50 via-white to-green-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">What Our Clients Say</h2>
                        {/* <p className="text-lg text-gray-600">Trusted by real estate professionals worldwide</p> */}
                    </div>

                    <div className="relative">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                            <Quote className="text-green-200 mb-6" size={48} />

                            <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                                "{currentTestimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</h4>
                                    <p className="text-gray-600">{currentTestimonial.company}</p>
                                    <div className="mt-2">{renderStars(currentTestimonial.rating)}</div>
                                </div>
                            </div>
                        </div>

                        {showNavigation && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-purple-50 transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="text-green-500" size={24} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-purple-50 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="text-green-500" size={24} />
                                </button>
                            </>
                        )}

                        <div className="flex justify-center gap-2 mt-8">
                            {displayedTestimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-green-500' : 'w-2 bg-gray-300'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Grid Variant
    if (variant === 'grid') {
        return (
            <div className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
                        <p className="text-lg text-gray-600">See what our satisfied clients have to say</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedTestimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                                    </div>
                                </div>

                                <div className="mb-4">{renderStars(testimonial.rating)}</div>

                                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Minimal Variant
    if (variant === 'minimal') {
        return (
            <div className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Trusted by Industry Leaders</h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {displayedTestimonials.slice(0, 3).map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="mb-3">{renderStars(testimonial.rating)}</div>
                                <p className="text-gray-700 mb-4 text-sm">"{testimonial.text}"</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-gray-600">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Default Variant
    return (
        <div className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </div>

                {/* Featured Testimonials */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {displayedTestimonials.filter(t => t.featured).map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-full opacity-50" />

                            <Quote className="text-blue-200 mb-4" size={40} />

                            <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4 relative z-10">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                    <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                                    <div className="mt-2">{renderStars(testimonial.rating)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Regular Testimonials */}
                <div className="grid md:grid-cols-3 gap-6">
                    {displayedTestimonials.filter(t => !t.featured).map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                        >
                            <div className="mb-4">{renderStars(testimonial.rating)}</div>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;