'use client'
import React, { useState } from 'react';
import { X, FileText, Calendar, Building2, ExternalLink } from 'lucide-react';

interface Report {
    id: number;
    title: string;
    issuer: string;
    date: string;
    file: string;
    description?: string;
}

const reports: Report[] = [
    {
        id: 1,
        title: "Director's Report",
        issuer: "Prowell LifeSciences Private Limited",
        date: "2024-2025",
        file: "/images/reports/New%20Director%20Report.pdf",
        description: "Annual report from the Board of Directors covering company operations, financial performance, and strategic outlook."
    },
];

export default function AnnualReportsShowcase() {
    const [selectedReport, setSelectedReport] = useState<Report | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-green-950 to-blue-900">
            {/* Header */}
            <header className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-3xl"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-2 bg-green-500/20 rounded-full mb-6">
                            <FileText className="w-8 h-8 text-green-300" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Annual <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Reports</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Transparency through detailed yearly performance and governance reports
                        </p>
                    </div>
                </div>
            </header>

            {/* Reports Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reports.map((report) => (
                        <div
                            key={report.id}
                            onClick={() => setSelectedReport(report)}
                            className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-green-400/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
                        >
                            {/* Report Thumbnail */}
                            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center">
                                <FileText className="w-24 h-24 text-green-300/80 transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                                    Click to view
                                </div>
                            </div>

                            {/* Report Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                                    {report.title}
                                </h3>

                                <div className="flex items-center text-white/90 mb-2">
                                    <Building2 className="w-4 h-4 mr-2 text-green-400" />
                                    <span className="text-sm">{report.issuer}</span>
                                </div>

                                <div className="flex items-center text-white/80 mb-3">
                                    <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                                    <span className="text-sm">{report.date}</span>
                                </div>

                                {report.description && (
                                    <p className="text-white/70 text-sm line-clamp-2">
                                        {report.description}
                                    </p>
                                )}

                                <div className="mt-4 flex items-center text-green-400 text-sm font-semibold group-hover:text-green-300">
                                    <span>View Report</span>
                                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Modal */}
            {selectedReport && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedReport(null)}
                >
                    <div
                        className="relative bg-blue-950 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-green-500/30 flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedReport(null)}
                            className="absolute top-4 right-4 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal Content */}
                        <div className="p-6 border-b border-green-500/20">
                            <h2 className="text-3xl font-bold text-white mb-2 pr-12">
                                {selectedReport.title}
                            </h2>
                            <div className="flex flex-wrap gap-4 text-white/90">
                                <div className="flex items-center">
                                    <Building2 className="w-5 h-5 mr-2 text-green-400" />
                                    <span>{selectedReport.issuer}</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                                    <span>{selectedReport.date}</span>
                                </div>
                            </div>
                            {selectedReport.description && (
                                <p className="text-white/80 mt-4">{selectedReport.description}</p>
                            )}
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 bg-white overflow-hidden">
                            <iframe
                                src={`${selectedReport.file}#toolbar=0&navpanes=0`}
                                title={selectedReport.title}
                                className="w-full h-[70vh]"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
