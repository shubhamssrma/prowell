// import React from 'react';
// import { Users, Briefcase, MapPin, Award } from 'lucide-react';

// interface TeamMember {
//     name: string;
//     role: string;
//     image: string;
//     color: 'green' | 'cyan' | 'teal';
// }

// export default function TeamSection() {
//     const teamMembers: TeamMember[] = [
//         {
//             name: "Dr. Tapan Saha",
//             role: "Director",
//             image: "/images/team/1.png",
//             color: "green"
//         },
//         {
//             name: "Dr. Ramakrishnan Pandian",
//             role: "Director - Techno Commercial",
//             image: "/images/team/2.png",
//             color: "cyan"
//         },
//         {
//             name: "Ranjeet Chauhan",
//             role: "Sales Manager (North)",
//             image: "/images/team/3.png",
//             color: "teal"
//         },
//         {
//             name: "M. Venkatesan",
//             role: "Branch Head",
//             image: "/images/team/4.png",
//             color: "green"
//         },
//         {
//             name: "Govind Vishwakarma",
//             role: "Account Manager",
//             image: "/images/team/5.png",
//             color: "cyan"
//         },
//         {
//             name: "Bhuvankumar Reddy",
//             role: "Area Sales Manager (Telangana)",
//             image: "/images/team/6.png",
//             color: "teal"
//         },
//         {
//             name: "MD Yunus Shaikh",
//             role: "Regional Sales Manager (Gujarat)",
//             image: "/images/team/7.png",
//             color: "green"
//         },
//         {
//             name: "Sekhar Chakraborty",
//             role: "Regional Sales Manager (East)",
//             image: "/images/team/8.png",
//             color: "cyan"
//         }
//     ];

//     const getColorClasses = (color: 'green' | 'cyan' | 'teal') => {
//         switch (color) {
//             case 'green':
//                 return {
//                     ring: 'ring-green-500',
//                     gradient: 'from-green-500 to-green-600',
//                     hover: 'group-hover:ring-green-400',
//                     badge: 'bg-green-500'
//                 };
//             case 'cyan':
//                 return {
//                     ring: 'ring-cyan-500',
//                     gradient: 'from-cyan-500 to-cyan-600',
//                     hover: 'group-hover:ring-cyan-400',
//                     badge: 'bg-cyan-500'
//                 };
//             case 'teal':
//                 return {
//                     ring: 'ring-teal-500',
//                     gradient: 'from-teal-500 to-teal-600',
//                     hover: 'group-hover:ring-teal-400',
//                     badge: 'bg-teal-500'
//                 };
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-full px-6 py-2 mb-6 shadow-lg">
//                         <Users className="w-5 h-5" />
//                         <span className="font-semibold">Our Leadership</span>
//                     </div> */}

//                     <h1 className="text-5xl font-bold mb-4">
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">
//                             Meet Our Team!
//                         </span>
//                     </h1>

//                     <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                         Dedicated professionals committed to excellence in animal health.
//                     </p>

//                     <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
//                         <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
//                             <Award className="w-5 h-5 text-green-600" />
//                             <span className="text-sm font-medium text-gray-700">Expert Team</span>
//                         </div>
//                         <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
//                             <Briefcase className="w-5 h-5 text-cyan-600" />
//                             <span className="text-sm font-medium text-gray-700">Industry Leaders</span>
//                         </div>
//                         <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
//                             <MapPin className="w-5 h-5 text-teal-600" />
//                             <span className="text-sm font-medium text-gray-700">Asia Presence</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Team Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-stretch">
//                     {teamMembers.map((member, index) => {
//                         const colors = getColorClasses(member.color);

//                         return (
//                             <div
//                                 key={index}
//                                 className="group relative"
//                             >
//                                 {/* Card */}
//                                 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
//                                     {/* Image Container */}
//                                     <div className="relative mb-6">

//                                         <div className={`relative w-40 h-40 mx-auto rounded-full ring-4 ${colors.ring} ${colors.hover} transition-all duration-300 overflow-hidden`}>
//                                             <div className={`absolute inset-0 bg-gradient-to-br z-[-1] ${colors.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300`}></div>
//                                             {/* <div className={`w-full h-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
//                                                 <Users className="w-16 h-16 text-white opacity-50" />
//                                             </div> */}
//                                             <img
//                                                 src={member.image}
//                                                 alt={member.name}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>

//                                         {/* Status Badge */}
//                                         {/* <div className={`absolute bottom-2 right-1/2 transform translate-x-1/2 ${colors.badge} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}>
//                                             Active
//                                         </div> */}
//                                     </div>

//                                     {/* Content */}
//                                     <div className="text-center">
//                                         <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-cyan-600 transition-all duration-300">
//                                             {member.name}
//                                         </h3>
//                                         <p className="text-gray-600 text-sm leading-relaxed min-h-[40px]">
//                                             {member.role}
//                                         </p>
//                                     </div>

//                                     {/* Decorative Element */}
//                                     <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                 </div>

//                                 {/* Floating Accent */}
//                                 <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${colors.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Bottom CTA */}
//                 {/* <div className="mt-20 text-center">
//                     <div className="bg-gradient-to-r from-green-500 via-cyan-500 to-teal-500 rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto">
//                         <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//                             Want to Join Our Team?
//                         </h3>
//                         <p className="text-white/90 mb-6">
//                             We're always looking for talented individuals passionate about animal health and sustainable agriculture.
//                         </p>
//                         <button className="bg-white text-green-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
//                             View Open Positions
//                         </button>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     );
// }



'use client';

import React, { useState, useEffect } from 'react';
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
    showCta?: boolean
}
const OurTeamSection: React.FC<PageProps> = ({ showCta }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Matt S.',
            role: 'Founder, Builder labs',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
            gradient: 'from-gray-900/60 to-gray-900/80'
        },
        {
            id: 2,
            name: 'Paresh Sri',
            role: 'Product Designer',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop',
            gradient: 'from-green-600/40 via-yellow-500/40 to-yellow-600/60'
        },
        {
            id: 3,
            name: 'Sumito Deo',
            role: 'Marketing head',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop',
            gradient: 'from-gray-900/60 to-gray-900/80'
        },
        {
            id: 4,
            name: 'Sarah Johnson',
            role: 'Tech Lead',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
            gradient: 'from-purple-600/40 to-pink-600/60'
        },
        {
            id: 5,
            name: 'Alex Chen',
            role: 'Operations Manager',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop',
            gradient: 'from-blue-600/40 to-cyan-600/60'
        }
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
                        Meet Our team
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed mx-auto">
                        Builders need more than just capital. Which is why Builder VC likes to get involved in the building process from the ground floor.
                    </p>
                </div>

                {/* Team Slider */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`
                            }}
                        >
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="flex-shrink-0"
                                    style={{ width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 1.5 / slidesToShow}rem)` }}
                                >
                                    <div className="group relative h-96 sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} transition-opacity duration-300`}></div>

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

                    {/* Navigation Arrows */}
                    {maxIndex > 0 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white/10 backdrop-blur-sm hover:bg-white/80 rounded-full p-3 sm:p-4 transition-all duration-300 border border-white/20"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-black" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white/10 backdrop-blur-sm hover:bg-white/80 rounded-full p-3 sm:p-4 transition-all duration-300 border border-white/20"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-black" />
                            </button>
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