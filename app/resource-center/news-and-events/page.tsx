"use client"
import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  id: number;
  url: string;
  title: string;
  category: string;
  slides?: string[];
}

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [filter, setFilter] = useState<string>('All');

  const images: Image[] = [
    {
      id: 1,
      url: '/images/gallery/VIV Select Asia 2026-01.jpeg',
      title: 'VIV Select Asia 2026 22nd - 24th April 2026',
      category: 'Events',
      slides: [
        '/images/gallery/VIV Select Asia 2026-01.jpeg',
        '/images/gallery/VIV Select Asia 2026-02.jpeg',
        '/images/gallery/VIV Select Asia 2026-03.jpeg',
        '/images/gallery/VIV Select Asia 2026-04.jpeg',
        '/images/gallery/VIV Select Asia 2026-05.jpeg',
        '/images/gallery/VIV Select Asia 2026-06.jpeg',
        '/images/gallery/VIV Select Asia 2026-07.jpeg',
        '/images/gallery/VIV Select Asia 2026-08.jpeg',
      ],
    },
    { id: 2, url: '/images/gallery/image1.jpeg', title: '36th Annual General Meeting - Poultry Federation of India', category: 'Events' },
    { id: 3, url: '/images/gallery/image2.jpg', title: 'VIV Asia', category: 'Events' },
    { id: 4, url: '/images/gallery/image3.jpg', title: 'VIV Asia - Company Meeting', category: 'News' },
    { id: 5, url: '/images/gallery/image4.jpg', title: '17th Poultry India Expo 2025', category: 'News' },
    { id: 6, url: '/images/gallery/image5.jpg', title: 'North poultry Vets Summit', category: 'Events' },
  ];

  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];

  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => img.category === filter);

  const openImage = (image: Image) => {
    setSelectedImage(image);
    setSlideIndex(0);
  };

  const closeImage = () => setSelectedImage(null);

  const hasSlides = !!selectedImage?.slides && selectedImage.slides.length > 1;
  const slides = selectedImage?.slides ?? (selectedImage ? [selectedImage.url] : []);

  const goPrev = () => setSlideIndex(i => (i - 1 + slides.length) % slides.length);
  const goNext = () => setSlideIndex(i => (i + 1) % slides.length);

  useEffect(() => {
    if (!selectedImage) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeImage();
      if (!hasSlides) return;
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedImage, hasSlides, slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-green-50">
      {/* Header */}
      <div className="text-center pt-12">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">
            News & Events
          </span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our curated collection of stunning images
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === category
                ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-cyan-50 border border-cyan-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-xl mb-2">{image.title}</h3>
                  <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                    {image.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => openImage(image)}
                    className="p-2 bg-white/90 backdrop-blur-md rounded-full text-gray-700 hover:bg-white transition-colors"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {hasSlides && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}

          <div className="max-w-5xl w-full p-4 sm:p-10" onClick={(e) => e.stopPropagation()}>
            <img
              src={slides[slideIndex]}
              alt={selectedImage.title}
              className="w-full h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">{selectedImage.title}</h2>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-full">
                {selectedImage.category}
              </span>
              {hasSlides && (
                <div className="mt-4 text-white/80 text-sm">
                  {slideIndex + 1} / {slides.length}
                </div>
              )}
            </div>

            {hasSlides && (
              <div className="mt-4 flex gap-2 justify-center flex-wrap">
                {slides.map((src, idx) => (
                  <button
                    key={src}
                    onClick={() => setSlideIndex(idx)}
                    className={`w-16 h-12 rounded overflow-hidden border-2 transition-all ${idx === slideIndex ? 'border-cyan-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
