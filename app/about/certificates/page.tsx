'use client'
import React, { useState } from 'react';
import { X, Award, Calendar, Building2, ExternalLink } from 'lucide-react';

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    description?: string;
}

// Sample certificate data - replace with your actual certificates
const certificates: Certificate[] = [
    {
        id: 1,
        title: "LEI Registration",
        issuer: "Ministry of Corporate Affairs",
        date: "09 September 2025",
        image: "/images/certificates/1.png",
        description: "Prowell LifeSciences Private Limited Company Register"
    },
    {
        id: 2,
        title: "Udyam Registration Certificate",
        issuer: "Ministry of Micro, Small and Medium Enterprises",
        date: "07 August 2023",
        image: "/images/certificates/2.png",
        description: "Trading [For availing benefits of Priority Sector Lending(PSL) ONLY]"
    },
    {
        id: 3,
        title: "IEC (Importer-Exporter Code)",
        issuer: "Ministry of Commerce and Industry",
        date: "06 June 2023",
        image: "/images/certificates/3.png",
        description: "This is to certify that PROWELL LIFESCIENCES PRIVATE LIMITED is issued an Importer-Exporter Code (IEC) AANCP7625G"
    },
    {
        id: 4,
        title: "Certificate Of Incorporation",
        issuer: "Ministry of Corporate Affairs",
        date: "12 May 2023",
        image: "/images/certificates/4.png",
        description: "This certificate only evidences incorporation of the company on the basis of documents and declarations of the applicant(s). This certificate is neither a license nor permission to conduct business or solicit deposits or funds from public. Permission of sector regulator is necessary wherever required. Registration status and other details of the company can be verified on mca.gov.in"
    },
    // {
    //     id: 5,
    //     title: "Company Registration Certificate",
    //     issuer: "Government of India",
    //     date: "06 June 2023",
    //     image: "/images/certificates/5.png",
    //     description: "Company Registration Certificate"
    // },
    {
        id: 6,
        title: "Company Registration Certificate",
        issuer: "Government of India",
        date: "15 October 2024",
        image: "/images/certificates/6.png",
        description: "Company Registration Certificate"
    },
    // {
    //     id: 7,
    //     title: "Sustainability Champion",
    //     issuer: "Green Tech Alliance",
    //     date: "July 2024",
    //     image: "/images/certificates/7.png",
    //     description: "Leadership in sustainable technology practices"
    // },
    {
        id: 8,
        title: "Company License",
        issuer: "Food Safty and Drug Control Administration",
        date: "19 December 2023",
        image: "/images/certificates/8.png",
        description: "Licence to sell, stock or exhibit or offer for sale, or distribute by wholesale drugs specified in Schedules C and C(1) excluding those specified in Schedule X"
    },
    {
        id: 9,
        title: "Company License",
        issuer: "Food Safty and Drug Control Administration",
        date: "19 December 2023",
        image: "/images/certificates/9.png",
        description: "Licence to sell, stock or exhibit or offer for sale, or distribute by wholesale drugs specified in Schedules C and C(1) excluding those specified in Schedule X"
    },
];

export default function CertificateShowcase() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-green-950 to-blue-900">
            {/* Header */}
            <header className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-3xl"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-2 bg-green-500/20 rounded-full mb-6">
                            <Award className="w-8 h-8 text-green-300" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Certifications</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Celebrating excellence through recognized certifications and awards
                        </p>
                    </div>
                </div>
            </header>

            {/* Certificates Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            onClick={() => setSelectedCert(cert)}
                            className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-green-400/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
                        >
                            {/* Certificate Image */}
                            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-600/20 to-blue-600/20">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                                    Click to view
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="flex items-center text-white/90 mb-2">
                                    <Building2 className="w-4 h-4 mr-2 text-green-400" />
                                    <span className="text-sm">{cert.issuer}</span>
                                </div>

                                <div className="flex items-center text-white/80 mb-3">
                                    <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                                    <span className="text-sm">{cert.date}</span>
                                </div>

                                {cert.description && (
                                    <p className="text-white/70 text-sm line-clamp-2">
                                        {cert.description}
                                    </p>
                                )}

                                <div className="mt-4 flex items-center text-green-400 text-sm font-semibold group-hover:text-green-300">
                                    <span>View Certificate</span>
                                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Modal */}
            {selectedCert && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        className="relative bg-blue-950 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-green-500/30"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-4 right-4 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal Content */}
                        <div className="p-6">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    {selectedCert.title}
                                </h2>
                                <div className="flex flex-wrap gap-4 text-white/90">
                                    <div className="flex items-center">
                                        <Building2 className="w-5 h-5 mr-2 text-green-400" />
                                        <span>{selectedCert.issuer}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                                        <span>{selectedCert.date}</span>
                                    </div>
                                </div>
                                {selectedCert.description && (
                                    <p className="text-white/80 mt-4">{selectedCert.description}</p>
                                )}
                            </div>

                            {/* Certificate Image */}
                            <div className="rounded-xl overflow-hidden border border-green-500/30">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}