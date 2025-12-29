import { Activity, TreePalm } from "lucide-react";
export function ProductHighlights() {
    return (
        // <section className="bg-white">
        //     <div className="max-w-7xl mx-auto px-6 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

        //         {[
        //             { label: "Total CFU", value: "4 × 10¹⁰ CFU / g" },
        //             { label: "Shelf Life", value: "24 Months" },
        //             { label: "Form", value: "Powder" },
        //             { label: "Packaging", value: "25 kg Bag" },
        //         ].map((item, i) => (
        //             <div key={i} className="mt-8 bg-white rounded-lg shadow-sm p-8">
        //                 <div className="text-center">
        //                     <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        //                         <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        //                         </svg>
        //                     </div>
        //                     <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>
        //                     <p className="text-gray-600 text-sm">{item.value}</p>
        //                 </div>
        //             </div>
        //         ))}

        //     </div>
        // </section>

        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">
                    <TreePalm className="w-12 h-12 text-green-600 mx-auto" />
                    <h2 className="mt-4 text-3xl font-bold text-gray-900">
                        Quick Facts
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8">

                    {[
                        { label: "Total CFU", value: "4 × 10¹⁰ CFU / g" },
                        { label: "Shelf Life", value: "24 Months" },
                        { label: "Form", value: "Powder" },
                        { label: "Packaging", value: "25 kg Bag" },
                    ].map((item, i) => (
                        <div key={i} className="border rounded-2xl p-8 bg-green-50">
                            <h3 className="font-semibold text-green-800">
                                {item.label}
                            </h3>
                            <p className="mt-4 text-sm text-gray-600">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
