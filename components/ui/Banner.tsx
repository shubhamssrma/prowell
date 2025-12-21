{/* <HeroSection page="Catalogue" /> */ }

import React from 'react'
import Link from 'next/link'
import { Award } from 'lucide-react'

interface PageData {
    name: String,
    title: String
}
const data: PageData[] = [
    {
        name: "our team",
        title: 'Our Team'
    },
    {
        name: "contact",
        title: 'Contact Us'
    },
    {
        name: "News",
        title: 'News'
    },
    {
        name: "Catalogue",
        title: 'Catalogue'
    },
    {
        name: "About Us",
        title: 'About Us'
    },
    {
        name: "Products",
        title: 'Products'
    },
]

interface HeroSectionProps {
    page: String,
    description?: string
}
const HeroSection: React.FC<HeroSectionProps> = ({ page, description }) => {
    const filteredData = data.find(d => d.name.toLowerCase() === page.toLowerCase())
    const title = filteredData?.title || ""
    const name = filteredData?.name || ""
    console.log(filteredData)
    return (
        // <div className='h-[50vh] relative bg-cover bg-center text-white' style={{ backgroundImage: "url('/assets/section1/slide1.jpg')" }}>
        //     <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col">
        //         <h1 className='text-5xl mb-5'>{title}</h1>
        //         <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        //             <li>
        //                 <div className="flex items-center">
        //                     <Link href="/" className="ms-1 text-sm font-medium text-gray-200 hover:text-blue-600 md:ms-2 dark:hover:text-white">Home</Link>
        //                 </div>
        //             </li>
        //             <li aria-current="page">
        //                 <div className="flex items-center">
        //                     <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        //                     </svg>
        //                     <span className="ms-1 text-sm font-medium text-gray-400 md:ms-2 dark:text-gray-400">{name}</span>
        //                 </div>
        //             </li>
        //         </ol>
        //     </div>
        // </div>
        <>
            <header className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-green-950 to-blue-900">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-3xl"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-2 bg-green-500/20 rounded-full mb-6">
                            {
                                page==""
                            }
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">{title}</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            {description}
                        </p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeroSection