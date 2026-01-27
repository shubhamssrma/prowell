'use client'
import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, X, Menu, ChevronUp } from 'lucide-react';
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getApplications, getCategories, getRegions, getSpecies } from '@/store/slices/productSlice';

type SubMenuItem = {
    label: string;
    link: string;
};

type DropdownItem = {
    label: string;
    link: string;
    isMainCategory?: boolean;
    hasSubmenu?: boolean;
    submenu?: SubMenuItem[];
};

type MenuItem = {
    id: string;
    label: string;
    link: string;
    hasDropdown: boolean;
    dropdownItems?: DropdownItem[];
};

type NavigationData = {
    logo: {
        src: string;
        alt: string;
    };
    menuItems: MenuItem[];
};


// Navigation Data Structure
const navigationData: NavigationData = {
    logo: {
        src: "/images/logo.png",
        alt: "Prowell logo"
    },
    menuItems: []
};


const Navbar = () => {
    const pathname = usePathname();

    if (pathname.startsWith("/admin")) return null;
    if (pathname.startsWith("/login")) return null;

    // Hide the button that points to the current page (e.g. hide Login on /login, hide Sign up on /register)
    // const hideLogin = pathname === "/login";
    // const hideSignUp = pathname === "/register";

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
    const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
    const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
    const dispatch = useAppDispatch()
    const { loading, error, species, applications, regions, categories } = useAppSelector(state => state.productReducer)
    const [navigationMenu, setNavigationMenu] = useState<NavigationData>(navigationData)
    // Get main categories from products dropdown
    const getMainCategories = () => {
        const productsMenu = navigationMenu.menuItems.find(item => item.id === 'products');
        return productsMenu?.dropdownItems?.filter(item => item.isMainCategory) || [];
    };

    // Get regular categories from products dropdown
    const getRegularCategories = () => {
        const productsMenu = navigationMenu.menuItems.find(item => item.id === 'products');
        return productsMenu?.dropdownItems?.filter(item => !item.isMainCategory) || [];
    };

    const buildProductsMenu = (): MenuItem => ({
        id: 'products',
        label: 'Products',
        hasDropdown: true,
        link: '#',
        dropdownItems: [
            species.length && {
                label: 'By Species',
                link: '/products/by-species',
                isMainCategory: true,
                hasSubmenu: true,
                submenu: species.map(item => ({
                    label: item.name,
                    link: `/products/by-species`,
                    // link: `/products/by-species/${item.slug}`,
                })),
            },
            categories.length && {
                label: 'By Segment',
                link: '/products/by-segment',
                isMainCategory: true,
                hasSubmenu: true,
                submenu: categories.map(item => ({
                    label: item.name,
                    link: `/products/by-segment`,
                    // link: `/products/by-segment/${item.slug}`,
                })),
            },
            applications.length && {
                label: 'By Application',
                link: '/products/by-application',
                isMainCategory: true,
                hasSubmenu: true,
                submenu: applications.map(item => ({
                    label: item.name,
                    link: `/products/by-application`,
                    // link: `/products/by-application/${item.slug}`,
                })),
            },
            regions.length && {
                label: 'By Region',
                link: '/products/by-region',
                isMainCategory: true,
                hasSubmenu: true,
                submenu: regions.map(item => ({
                    label: item.name,
                    link: `/products/by-region`,
                    // link: `/products/by-region/${item.slug}`,
                })),
            },
        ].filter(Boolean) as DropdownItem[], // 👈 critical
    });



    useEffect(() => {
        dispatch(getApplications())
        dispatch(getRegions())
        dispatch(getCategories())
        dispatch(getSpecies())
    }, [dispatch])


    useEffect(() => {
        setNavigationMenu({
            logo: navigationData.logo,
            menuItems: [
                {
                    id: 'home',
                    label: 'Home',
                    hasDropdown: false,
                    link: '/',
                },
                buildProductsMenu(), // ← safe builder
                {
                    id: 'about',
                    label: 'About Us',
                    hasDropdown: true,
                    link: '#',
                    dropdownItems: [
                        { label: 'Our Edge', link: '/about/our-edge' },
                        { label: 'Our Team', link: '/about/our-team' },
                        { label: 'Certificates', link: '/about/certificates' },
                    ],
                },
                {
                    id: 'resource-center',
                    label: 'Resource Center',
                    hasDropdown: true,
                    link: '#',
                    dropdownItems: [
                        { label: 'News and Events', link: '/resource-center/news-and-events' },
                        { label: 'Blogs', link: '/resource-center/blogs' },
                        { label: 'FAQs', link: '/resource-center/faqs' },
                    ],
                },
                {
                    id: 'contact',
                    label: 'Contact',
                    hasDropdown: false,
                    link: '/contact',
                },
            ],
        });
    }, [species, applications, categories, regions]);

    return (
        <>
            {/* Desktop & Mobile Navbar */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20 lg:h-24">
                        {/* Logo */}
                        <a href="/">
                            <img
                                src={navigationData.logo.src}
                                alt={navigationData.logo.alt}
                                className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto"
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navigationMenu.menuItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative group"
                                >
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                className="flex items-center gap-1 text-[#4a4a4a] hover:text-[#5b4b9e] font-medium text-[15px]"
                                                onMouseEnter={() => setOpenDesktopDropdown(item.id)}
                                            >
                                                {item.label}
                                                <ChevronDown className="w-4 h-4" />
                                            </button>

                                            {/* Desktop Dropdown */}
                                            {openDesktopDropdown === item.id && item.dropdownItems && (
                                                <div
                                                    className="absolute left-0 top-full pt-2 min-w-[280px]"
                                                    onMouseLeave={() => {
                                                        setOpenDesktopDropdown(null);
                                                        setHoveredSubmenu(null);
                                                    }}
                                                >
                                                    <div className="bg-white border border-gray-200 shadow-lg rounded-md overflow-visible">
                                                        {item.id === 'products' ? (
                                                            <>
                                                                {/* Main Categories - Orange with nested submenus */}
                                                                <div className="border-b border-gray-100">
                                                                    {getMainCategories().map((cat, idx) => (
                                                                        <div
                                                                            key={idx}
                                                                            className="relative"
                                                                        >
                                                                            <div
                                                                                className="flex items-center justify-between px-5 py-3 text-black hover:bg-gray-50 transition-colors cursor-pointer"
                                                                                onMouseEnter={() => {
                                                                                    if (cat.hasSubmenu) {
                                                                                        setHoveredSubmenu(cat.label);
                                                                                    }
                                                                                }}
                                                                            >
                                                                                <span className="font-normal text-[14px]">{cat.label}</span>
                                                                                {cat.hasSubmenu && <ChevronRight className="w-4 h-4" />}
                                                                            </div>

                                                                            {/* Nested Submenu */}
                                                                            {cat.hasSubmenu && hoveredSubmenu === cat.label && cat.submenu && (
                                                                                <div
                                                                                    className="absolute left-full top-0 ml-0 min-w-[280px] z-50"
                                                                                    onMouseEnter={() => setHoveredSubmenu(cat.label)}
                                                                                    onMouseLeave={() => setHoveredSubmenu(null)}
                                                                                >
                                                                                    <div className="bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
                                                                                        <div className="py-2">
                                                                                            {cat.submenu.map((subItem, subIdx) => (
                                                                                                <a
                                                                                                    key={subIdx}
                                                                                                    href={subItem.link}
                                                                                                    className="block px-5 py-2.5 text-[#4a4a4a] hover:bg-gray-50 hover:text-[#5b4b9e] text-[14px] transition-colors"
                                                                                                >
                                                                                                    {subItem.label}
                                                                                                </a>
                                                                                            ))}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>

                                                                {/* Regular Categories */}
                                                                <div className="py-2">
                                                                    {getRegularCategories().map((cat, idx) => (
                                                                        <a
                                                                            key={idx}
                                                                            href={cat.link}
                                                                            className="block px-5 py-2.5 text-[#4a4a4a] hover:bg-gray-50 hover:text-[#5b4b9e] text-[14px] transition-colors"
                                                                        >
                                                                            {cat.label}
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <div className="py-2">
                                                                {item.dropdownItems.map((dropItem, idx) => (
                                                                    <a
                                                                        key={idx}
                                                                        href={dropItem.link}
                                                                        className="block px-5 py-2.5 text-[#4a4a4a] hover:bg-gray-50 hover:text-[#5b4b9e] text-[14px] transition-colors"
                                                                    >
                                                                        {dropItem.label}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <a href={item.link} className="text-[#4a4a4a] hover:text-[#5b4b9e] font-medium text-[15px]">
                                            {item.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2"
                        >
                            <Menu className="w-6 h-6 text-[#4a4a4a]" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 overflow-y-auto lg:hidden">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
                        <a href="/">
                            <img
                                src={navigationData.logo.src}
                                alt={navigationData.logo.alt}
                                className="w-40"
                            />
                        </a>
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setOpenMobileMenu(null);
                                setOpenMobileSubmenu(null);
                            }}
                            className="p-1"
                        >
                            <X className="w-7 h-7 text-[#4a4a4a]" />
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <div className="py-2">
                        {navigationMenu.menuItems.map((item) => (
                            <div key={item.id} className="border-b border-gray-100">
                                {item.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() => setOpenMobileMenu(openMobileMenu === item.id ? null : item.id)}
                                            className={`flex items-center justify-between w-full px-5 py-4 font-semibold ${item.id === 'products' && openMobileMenu === 'products'
                                                ? 'text-black'
                                                : 'text-[#2d2d2d]'
                                                }`}
                                        >
                                            <span>{item.label}</span>
                                            <span className={`${item.id === 'products' && openMobileMenu === 'products'
                                                ? 'text-black text-2xl font-light'
                                                : 'text-gray-400 text-lg'
                                                }`}>
                                                {openMobileMenu === item.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                            </span>
                                        </button>

                                        {/* Mobile Submenu */}
                                        {openMobileMenu === item.id && item.dropdownItems && (
                                            <div className="bg-white">
                                                {item.id === 'products' ? (
                                                    <>
                                                        {/* Main Categories */}
                                                        {getMainCategories().map((cat, idx) => (
                                                            <div key={idx} className="border-b border-gray-100">
                                                                {cat.hasSubmenu ? (
                                                                    <>
                                                                        <button
                                                                            onClick={() => setOpenMobileSubmenu(
                                                                                openMobileSubmenu === cat.label ? null : cat.label
                                                                            )}
                                                                            className="flex items-center justify-between w-full px-5 py-4 text-black font-medium text-[14px] pl-8"
                                                                        >
                                                                            <span>{cat.label}</span>
                                                                            <span className="text-black text-md font-light">—</span>
                                                                        </button>

                                                                        {/* Submenu Items */}
                                                                        {openMobileSubmenu === cat.label && cat.submenu && (
                                                                            <div className="bg-gray-50">
                                                                                {cat.submenu.map((subItem, subIdx) => (
                                                                                    <a
                                                                                        key={subIdx}
                                                                                        href={subItem.link}
                                                                                        className="block px-5 py-3 text-[#4a4a4a] pl-12 border-b border-gray-100"
                                                                                    >
                                                                                        {subItem.label}
                                                                                    </a>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </>
                                                                ) : (
                                                                    <a
                                                                        href={cat.link}
                                                                        className="flex items-center justify-between px-5 py-4 text-[#4a4a4a] font-medium pl-8"
                                                                    >
                                                                        <span>{cat.label}</span>
                                                                    </a>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </>
                                                ) : (
                                                    <>
                                                        {item.dropdownItems.map((dropItem, dropIdx) => (
                                                            <a
                                                                key={dropIdx}
                                                                href={dropItem.link}
                                                                className="block px-5 py-3 text-[#4a4a4a] pl-8 border-b border-gray-100"
                                                            >
                                                                {dropItem.label}
                                                            </a>
                                                        ))}
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <a href={item.link} className="block px-5 py-4 text-[#2d2d2d] font-semibold">
                                        {item.label}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;