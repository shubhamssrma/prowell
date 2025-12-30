'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    gradient: string;
}
interface PageProps {
    showCta?: boolean;
    enableSlider?: boolean;
}
const OurTeamSection: React.FC<PageProps> = ({ showCta, enableSlider = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [slideWidth, setSlideWidth] = useState(0);
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: "Dr. Tapan Saha",
            role: "Director",
            image: '/images/team/tapan.png',
            gradient: 'from-gray-900/60 to-gray-900/0'
        },
        {
            id: 2,
            name: "Dr. Ramakrishnan Pandian",
            role: "Director - Techno Commercial",
            image: '/images/team/Pandian.png',
            gradient: 'from-gray-900/60 to-gray-900/0'
        },
        {
            id: 3,
            name: "Ranjeet Chauhan",
            role: "Sales Manager (North)",
            image: '/images/team/Ranjeet.png',
            gradient: 'from-gray-900/60 to-gray-900/0'
        },
        {
            id: 4,
            name: "M. Venkatesan",
            role: "Branch Head",
            image: '/images/team/Venkatesan.png',
            gradient: 'from-gray-900/60 to-gray-900/0'
        },
        {
            id: 5,
            name: "Govind Vishwakarma",
            role: "Account Manager",
            image: '/images/team/Govind.png',
            gradient: 'from-gray-900/60 to-gray-900/0'
        },
        {
            id: 6,
            name: "Bhuvankumar Reddy",
            role: "Area Sales Manager (Telangana)",
            image: '/images/team/Bhuvan.png',
            gradient: 'from-gray-900/60 to-gray-900/0'
        },
        {
            id: 7,
            name: "Sekhar Chakraborty",
            role: "Regional Sales Manager (East)",
            image: '/images/team/Sekhar.png',
            gradient: 'from-gray-900/60 to-gray-900/0'
        },



    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!sliderRef.current) return;

        const updateSlideWidth = () => {
            const firstSlide = sliderRef.current?.children[0] as HTMLElement;
            if (firstSlide) {
                const gap = 24; // gap-6 = 24px
                setSlideWidth(firstSlide.offsetWidth + gap);
            }
        };

        updateSlideWidth();
        window.addEventListener('resize', updateSlideWidth);

        return () => window.removeEventListener('resize', updateSlideWidth);
    }, [slidesToShow]);

    const maxIndex = Math.max(0, teamMembers.length - slidesToShow);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <div className="relative min-h-screen bg-gray-50 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            {/* Background gradient orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
                    <h1 className="text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">
                        Meet Our Team
                    </h1>
                    {/* <p className="text-gray-500 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed mx-auto">
                        Builders need more than just capital. Which is why Builder VC likes to get involved in the building process from the ground floor.
                    </p> */}
                </div>

                {/* Team Slider */}
                {/* Team Section */}
                <div className="relative">

                    {/* ===== GRID MODE ===== */}
                    {!enableSlider && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="group relative h-96 sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient}`} />

                                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm sm:text-base">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ===== SLIDER MODE ===== */}
                    {enableSlider && (
                        <>
                            <div className="overflow-hidden">
                                <div
                                    ref={sliderRef}
                                    className="flex gap-6 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentIndex * slideWidth}px)`
                                    }}
                                >
                                    {teamMembers.map((member) => (
                                        <div
                                            key={member.id}
                                            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                                        >
                                            <div className="group relative h-96 sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient}`} />
                                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-gray-300 text-sm sm:text-base">
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Arrows */}
                            {maxIndex > 0 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/10 hover:bg-white/80 rounded-full p-4"
                                    >
                                        <ChevronLeft className="text-white hover:text-black" />
                                    </button>

                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/10 hover:bg-white/80 rounded-full p-4"
                                    >
                                        <ChevronRight className="text-white hover:text-black" />
                                    </button>
                                </>
                            )}
                        </>
                    )}
                </div>


                {/* CTA Section */}
                {
                    showCta &&
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 border-t border-gray-800 pt-8 sm:pt-12  mt-12 sm:mt-16 lg:mt-20">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-700">
                                Interested in joining with us ?
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                                Please send us your details along with your resume.
                            </p>
                        </div>

                        <Link href="/contact" className="group flex items-center gap-3 bg-green-500 hover:bg-cyan-500 backdrop-blur-sm border border-black/20 hover:border-black/40 rounded-full px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 whitespace-nowrap">
                            <span className="text-base sm:text-lg font-medium">Contact us</span>
                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default OurTeamSection;