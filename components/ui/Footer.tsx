'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
    const pathname = usePathname();

    if (pathname.startsWith("/admin")) return null;
    if (pathname.startsWith("/login")) return null;
    const footerLinks = {
        about: [
            { label: 'Our Edge', href: '/about/our-edge' },
            { label: 'Our Team', href: '/about/our-team' },
            { label: 'Global Network', href: '/about/global-network' },
            { label: 'Certificates', href: '/about/certificates' },
        ],
        products: [
            { label: 'By Species', href: '/products/by-species' },
            { label: 'By Segment', href: '/products/by-segment' },
            { label: 'By Application', href: '/products/by-application' },
            // { label: 'By Region', href: '/products/by-region' },
        ],
        support: [
            { label: 'Contact US', href: '/contact' },
            { label: 'Privacy Policy', href: '/' },
            { label: 'Terms and Conditions', href: '/resource-center/news-and-events' },
        ],
        resources: [
            { label: 'News and Events', href: '/resource-center/news-and-events' },
            { label: 'Blogs', href: '/resource-center/blogs' },
            { label: 'FAQs', href: '/resource-center/faqs' },
        ],
    };

    const socialLinks = [
        {
            name: 'Facebook',
            href: 'https://facebook.com',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
    ];

    return (
        <>

            {/* Newsletter Section */}
            <div className="relative overflow-hidden">
                {/* Gradient Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-500 to-sky-600 opacity-25"></div>

                {/* Content */}
                <div className="relative z-10 py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">
                            Stay Connected with us!
                        </h2>

                        <p className="text-lg text-black-50 mb-8">
                            Subscribe to our newsletter and never miss an update
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-full text-gray-800 outline-none focus:ring-2 focus:ring-cyan-400 bg-white"
                            />

                            <button className="cursor-pointer px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:shadow-xl transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="relative bg-gradient-to-r from-cyan-400 via-cyan-500 to-sky-600 overflow-hidden">
                {/* Curved top edge */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                    <svg
                        className="relative block w-full h-16 sm:h-20 md:h-24"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            fill="rgba(255,255,255,0.75)"
                        ></path>
                    </svg>
                </div>

                {/* Footer Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Logo/Brand Section */}
                        {/* <div>
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                                <div className="w-6 h-6 bg-white rounded-full"></div>
                            </div>
                            <span className="text-2xl font-bold text-white tracking-wide">trace</span>
                        </Link>
                    </div> */}



                        {/* Company Links */}
                        <div className='mx-auto'>
                            <h3 className="text-white font-semibold mb-4 text-lg text-center md:text-left">About US</h3>
                            <ul className="space-y-3 text-center md:text-left">
                                {footerLinks.about.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div className='mx-auto'>
                            <h3 className="text-white font-semibold mb-4 text-lg text-center md:text-left">Products</h3>
                            <ul className="space-y-3 text-center md:text-left">
                                {footerLinks.products.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div className='mx-auto'>
                            <h3 className="text-white font-semibold mb-4 text-lg text-center md:text-left">Support</h3>
                            <ul className="space-y-3 text-center md:text-left">
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='mx-auto'>
                            <h3 className="text-white font-semibold mb-4 text-lg text-center md:text-left">Resources</h3>
                            <ul className="space-y-3 text-center md:text-left">
                                {footerLinks.resources.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        {/* Copyright */}
                        <p className="text-white/70 text-sm">
                            2025 Prowell Lifesciences Pvt. Ltd., All Rights Reserved
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center space-x-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-white transition-colors duration-200"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;