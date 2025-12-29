'use client'
import React, { useState } from 'react';

const ProbiosSLProduct = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const productImages = [
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600"
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'dosage', label: 'Dosage' },
    { id: 'action', label: 'How It Works' }
  ];

  const quickSpecs = [
    { label: 'Form', value: 'Soluble Powder' },
    { label: 'Package', value: '25 kg poly-lined bag' },
    { label: 'Category', value: 'Probiotics' },
    { label: 'Shelf Life', value: '24 months' }
  ];

  const concentration = [
    { strain: 'Bacillus subtilis', cfu: '2×10¹⁰ CFU/g' },
    { strain: 'Bacillus licheniformis', cfu: '2×10¹⁰ CFU/g' }
  ];

  const species = [
    { name: 'Poultry', dosage: '100–200 g/MT feed' },
    { name: 'Ruminants', dosage: '200–300 g/MT' },
    { name: 'Swine', dosage: '200–300 g/MT' },
    { name: 'Shrimp/Fish', dosage: '60–100 g/MT' }
  ];

  const benefits = [
    'Restores intestinal balance, reduces diarrhea & indigestion',
    'Suppresses harmful bacteria and reduces necrotic enteritis lesions',
    'Enhances immunity by activating macrophages & antioxidant enzymes',
    'Produces SCFAs to lower intestinal pH and favor beneficial biofilm',
    'Compatible with anticoccidials and acidifiers in pelleted feed',
    'High-purity strains resistant to gastric acid, bile, and high temperature',
    'Cost-effective due to high concentration'
  ];

  const modeOfAction = [
    {
      strain: 'Bacillus subtilis',
      items: [
        { label: 'Type', value: 'Aerobic' },
        { label: 'Location', value: 'Upper/Mid GIT' },
        { label: 'Action', value: 'Produces enzymes; promotes beneficial microbes' }
      ]
    },
    {
      strain: 'Bacillus licheniformis',
      items: [
        { label: 'Type', value: 'Facultative Anaerobe' },
        { label: 'Location', value: 'Mid/Lower GIT' },
        { label: 'Action', value: 'Regulates flora; produces vitamins; inhibits pathogens' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">PROBIOS SL</h1>
              <p className="text-sm text-gray-600">Advanced Probiotic Solution</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Request Info
              </button>
              <button className="border-2 border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Overview */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <img
                src={productImages[selectedImage]}
                alt="PROBIOS SL"
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>
            <div className="flex gap-3 mt-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-1 rounded-lg overflow-hidden transition-all ${selectedImage === index
                      ? 'ring-2 ring-green-600'
                      : 'ring-1 ring-gray-200 hover:ring-gray-300'
                    }`}
                >
                  <img
                    src={img}
                    alt={`View ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {quickSpecs.map((spec, index) => (
                <div key={index} className="bg-white border rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">{spec.label}</p>
                  <p className="text-gray-900 font-semibold">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Concentration */}
            <div className="bg-white border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Active Strains</h3>
              <div className="space-y-3">
                {concentration.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">{item.strain}</span>
                    <span className="font-bold text-green-600">{item.cfu}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                PROBIOS SL features a synergistic blend of high-concentration Bacillus strains
                that provide comprehensive GIT support for poultry, ruminants, swine, and aquaculture species,
                promoting optimal gut health and performance.
              </p>
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b bg-gray-50">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-fit px-6 py-4 font-semibold transition-colors ${activeTab === tab.id
                      ? 'bg-white text-green-600 border-b-2 border-green-600'
                      : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What is PROBIOS SL?</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    PROBIOS SL is a broad-spectrum probiotic solution that delivers proven results in animal health
                    and performance. Our dual-strain formula ensures complete gastrointestinal tract coverage.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">✓ Species Coverage</h4>
                    <p className="text-sm text-gray-600">Poultry, Ruminants, Swine, Aquaculture</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">✓ High Stability</h4>
                    <p className="text-sm text-gray-600">Survives pelleting, gastric acid, and bile</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">✓ Cost-Effective</h4>
                    <p className="text-sm text-gray-600">High concentration reduces inclusion rates</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">✓ Compatible</h4>
                    <p className="text-sm text-gray-600">Works with standard feed additives</p>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border rounded-lg hover:shadow-sm transition-shadow">
                      <span className="text-green-600 font-bold text-xl mt-0.5">✓</span>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dosage Tab */}
            {activeTab === 'dosage' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Dosage</h3>
                <div className="space-y-3 mb-6">
                  {species.map((animal, index) => (
                    <div key={index} className="border rounded-lg p-5 hover:shadow-sm transition-shadow">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-gray-900">{animal.name}</h4>
                        <p className="text-green-600 font-semibold">{animal.dosage}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Can be combined with coccidiosis control programs and is compatible
                    with anticoccidials and acidifiers in pelleted feed.
                  </p>
                </div>
              </div>
            )}

            {/* How It Works Tab */}
            {activeTab === 'action' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mode of Action</h3>
                <div className="space-y-6">
                  {modeOfAction.map((mode, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{mode.strain}</h4>
                      <div className="space-y-3">
                        {mode.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="font-semibold text-gray-600 min-w-24">{item.label}:</span>
                            <span className="text-gray-700">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="bg-gray-900 text-white rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-3">Synergistic Effect</h4>
                    <p className="text-gray-300 leading-relaxed">
                      These complementary strains work together to cover the full gastrointestinal tract,
                      balance microflora, reduce toxins, and improve mucosal health for optimal digestive performance
                      across all target species.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gray-900 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to Optimize Your Operation?</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust PROBIOS SL for superior animal health and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Request Technical Data
            </button>
            <button className="bg-white text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProbiosSLProduct;