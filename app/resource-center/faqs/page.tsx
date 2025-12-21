"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    items: FAQItem[];
}

const faqData: FAQSection[] = [
    {
        title: "About Prowell Lifesciences",
        items: [
            {
                question: "What does Prowell Lifesciences do?",
                answer:
                    "Prowell Lifesciences provides scientifically proven feed supplements and animal health solutions that enhance performance, support gut integrity, and promote sustainable farms.",
            },
            {
                question: "What makes Prowell different from other animal health companies?",
                answer:
                    "Our approach combines global scientific expertise with local insight. We deliver solutions that are practical, research-backed, and tailored to the needs of Indian poultry.",
            },
            {
                question: "Where are your products sourced or manufactured?",
                answer:
                    "Around 90% of our products are sourced through trusted global partners with proven quality standards. 10% are manufactured in our Chennai unit following the same stringent standards.",
            },
            {
                question: "Are Prowell products approved and tested for safety?",
                answer:
                    "Yes. All our products meet relevant Indian and international safety standards, supported by scientific validation and rigorous quality control.",
            },
        ],
    },
    {
        title: "Product Information",
        items: [
            {
                question: "What categories of products does Prowell offer?",
                answer:
                    "Our portfolio includes Feed Efficiency & Growth Promoters, Gut Health & Immunity Enhancers, Coccidiosis Management, and Digestive Health & Balance Support.",
            },
            {
                question: "How do your products improve animal performance?",
                answer:
                    "By optimizing nutrient utilization, maintaining a healthy gut microflora, and reducing disease challenges, our solutions support better growth and flock performance.",
            },
            {
                question: "Can your products be used across species?",
                answer:
                    "While our primary focus is poultry, select products are suitable for aqua, ruminant, and swine applications. Usage may vary by species.",
            },
        ],
    },
    {
        title: "For Distributors & Integrators",
        items: [
            {
                question: "How can I become a Prowell distributor or partner?",
                answer:
                    "You can contact us via the Contact page or email info@prowell.asia. Partnerships are evaluated based on alignment, reach, and shared values.",
            },
            {
                question: "Do you provide marketing or technical support to partners?",
                answer:
                    "Yes. We offer comprehensive product training, technical documentation, and marketing support.",
            },
            {
                question: "Are there minimum order requirements?",
                answer:
                    "Minimum order quantities vary by product and region. Please connect with our sales team for details.",
            },
        ],
    },
    {
        title: "Usage & Safety",
        items: [
            {
                question: "How should I use Prowell products?",
                answer:
                    "Each product includes clear dosage and usage instructions. Follow label guidelines or consult our technical experts.",
            },
            {
                question: "Are your products compatible with other feed additives or medications?",
                answer:
                    "Most products are compatible, but formulations may vary. Please confirm with our technical support team before combining products.",
            },
            {
                question: "How should products be stored?",
                answer:
                    "Store products in a cool, dry place away from sunlight and moisture to maintain efficacy.",
            },
        ],
    },
    {
        title: "Orders & Support",
        items: [
            {
                question: "How can I place an order for Prowell products?",
                answer:
                    "Orders can be placed through sales representatives, distributors, or via the website contact form.",
            },
            {
                question: "Do you deliver pan-India?",
                answer:
                    "Yes. Our distribution network covers multiple regions across India.",
            },
            {
                question: "How can I get after-sales or technical support?",
                answer:
                    "Our technical and administrative teams are available for support. Contact details are available on our website.",
            },
        ],
    },
];

function FAQAccordion({ question, answer }: FAQItem) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-cyan-100 rounded-xl overflow-hidden bg-white">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
            >
                <span className="font-medium text-green-800">{question}</span>
                <ChevronDown
                    className={`h-5 w-5 text-cyan-600 transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-4 text-gray-600"
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQPage() {
    return (
        <section className="bg-gradient-to-b from-white via-cyan-50 to-green-50 py-16 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">
                {/* <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-green-700">FAQs</h1>
                    <p className="mt-3 text-gray-600">
                        Find answers to common questions about Prowell Lifesciences and our products.
                    </p>
                </div> */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">
                            FAQs
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Find answers to common questions about Prowell Lifesciences and our products.
                    </p>
                </div>

                <div className="space-y-10">
                    {faqData.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="text-xl font-semibold text-cyan-700 mb-4">
                                {section.title}
                            </h2>

                            <div className="space-y-4">
                                {section.items.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group rounded-xl border border-cyan-100 bg-white p-5 shadow-sm transition-all"
                                    >
                                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-green-800">
                                            {faq.question}
                                            <ChevronDown className="h-5 w-5 text-cyan-600 transition-transform duration-300 group-open:rotate-180" />
                                        </summary>

                                        <div className="mt-3 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
