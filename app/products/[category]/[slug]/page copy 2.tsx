'use client'
import React, { useState } from 'react';

const ProbiosSLProduct = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    "/images/products/Probiotic.jpg", // Replace with actual image paths
    "/images/products/Probile 300.jpg",
    "/images/products/Probiotic.jpg",
    "/images/products/Probiotic.jpg",
    "/images/products/Probiotic.jpg",
    "/images/products/Probiotic.jpg",
    "/images/products/Probiotic.jpg",
  ];

  const quickInfo = [
    { label: "FORM", value: "Soluble Powder" },
    { label: "PACKAGE", value: "25 kg poly-lined bag" },
    { label: "CATEGORY", value: "Probiotics" },
    { label: "TYPE", value: "Feed Supplement" }
  ];

  const concentration = [
    { strain: "Bacillus subtilis", cfu: "2×10¹⁰ CFU/g" },
    { strain: "Bacillus licheniformis", cfu: "2×10¹⁰ CFU/g" }
  ];

  const dosageTable = [
    { species: "Poultry", dosage: "100–200 g/MT feed" },
    { species: "Ruminants", dosage: "200–300 g/MT" },
    { species: "Swine", dosage: "200–300 g/MT" },
    { species: "Shrimp/Fish", dosage: "60–100 g/MT" }
  ];

  const benefits = [
    "Restores intestinal balance, reduces diarrhea & indigestion",
    "Suppresses harmful bacteria and reduces necrotic enteritis lesions",
    "Enhances immunity by activating macrophages & antioxidant enzymes",
    "Produces SCFAs to lower intestinal pH and favor beneficial biofilm formation",
    "Compatible with anticoccidials and acidifiers in pelleted feed",
    "High-purity strains resistant to gastric acid, bile, and high temperature",
    "Cost-effective due to high concentration"
  ];

  const modeOfAction = [
    {
      strain: "Bacillus subtilis",
      type: "Aerobic",
      location: "Upper/Mid GIT",
      action: "Produces enzymes; promotes beneficial microbes"
    },
    {
      strain: "Bacillus licheniformis",
      type: "Facultative Anaerobe",
      location: "Mid/Lower GIT",
      action: "Regulates flora; produces vitamins; inhibits pathogens"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Section - Product Overview */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Image Gallery */}
            <div>
              <div className="bg-white rounded-lg mb-4 border-1 border-gray-200 shadow-lg">
                <img
                  src={productImages[selectedImage]}
                  alt="PROBIOS SL"
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border-4 rounded-lg overflow-hidden transition-all ${selectedImage === index
                        ? 'border-green-600'
                        : 'border-gray-200 hover:border-green-400'
                      }`}
                  >
                    <img
                      src={img}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Product Info */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">PROBIOS SL</h1>
              <p className="text-xl text-green-600 font-semibold mb-6">
                Bacillus subtilis (2×10¹⁰ CFU/g) & Bacillus licheniformis (2×10¹⁰ CFU/g)
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                PROBIOS SL is an advanced probiotic solution featuring a synergistic blend of high-concentration Bacillus strains.
                It provides comprehensive gastrointestinal tract support for poultry, ruminants, swine, and aquaculture species,
                promoting optimal gut health and performance.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {quickInfo.map((info, index) => (
                  <div key={index}>
                    <p className="text-sm font-semibold text-gray-500 mb-1">{info.label}</p>
                    <p className="text-lg text-gray-900">{info.value}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Request Information
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors">
                  Contact Supplier
                </button>
              </div>

              {/* Shelf Life */}
              <div className="mt-6 bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Shelf Life:</span> 24 months under proper storage conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concentration Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Active Strains</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {concentration.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-cyan-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-green-700">{item.strain}</span>
                  <span className="text-cyan-600 font-bold text-lg">{item.cfu}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mode of Action */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Mode of Action</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {modeOfAction.map((mode, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-700 mb-4">{mode.strain}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-cyan-600 font-semibold mr-2 min-w-24">Type:</span>
                    <span className="text-gray-700">{mode.type}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-600 font-semibold mr-2 min-w-24">Location:</span>
                    <span className="text-gray-700">{mode.location}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-600 font-semibold mr-2 min-w-24">Action:</span>
                    <span className="text-gray-700">{mode.action}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-600 to-cyan-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="mr-2">🔄</span> Synergistic Effect
            </h3>
            <p className="text-green-50 leading-relaxed">
              Together, these strains cover the full gastrointestinal tract, balance microflora, reduce toxins, and improve mucosal health for optimal digestive performance.
            </p>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow border-l-4 border-green-500">
                <span className="text-green-600 font-bold text-xl mr-3 mt-1">✓</span>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application & Usage */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Application & Usage</h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-600 to-cyan-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Species</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Recommended Dosage</th>
                </tr>
              </thead>
              <tbody>
                {dosageTable.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-green-50 transition-colors`}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.species}</td>
                    <td className="px-6 py-4 text-gray-700">{row.dosage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
            <p className="text-gray-700">
              <span className="font-bold text-cyan-700">Note:</span> PROBIOS SL can be combined with coccidiosis control programs and is compatible with anticoccidials and acidifiers in pelleted feed.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-cyan-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Animal Health Program?</h2>
          <p className="text-xl text-green-50 mb-8">Contact us to learn more about PROBIOS SL and how it can benefit your operation.</p>
          <button className="bg-white text-green-700 font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProbiosSLProduct;