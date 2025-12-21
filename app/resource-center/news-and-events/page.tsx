// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// interface GalleryImage {
//   id: number;
//   src: string;
//   alt: string;
// }

// const galleryImages: GalleryImage[] = [
//   { id: 1, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", alt: "Event Image 1" },
//   { id: 2, src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", alt: "Event Image 2" },
//   { id: 3, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", alt: "Event Image 3" },
//   { id: 4, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", alt: "Event Image 4" },
//   { id: 5, src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1", alt: "Event Image 5" },
//   { id: 6, src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7", alt: "Event Image 6" }
// ];

// export default function NewsAndEventsGallery() {
//   return (
//     <section className="bg-gradient-to-b from-white via-cyan-50 to-green-50 py-16 px-4 sm:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl sm:text-6xl font-bold mb-4">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">
//               News & Events
//             </span>
//           </h1>

//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             A glimpse of moments from our recent events, workshops, and celebrations.
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {galleryImages.map((img) => (
//             <motion.div
//               key={img.id}
//               whileHover={{ scale: 1.03 }}
//               className="relative group overflow-hidden rounded-2xl shadow-lg bg-white"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 width={600}
//                 height={400}
//                 className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-green-700/70 via-cyan-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//               {/* Hover Label */}
//               <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-sm font-semibold tracking-wide">
//                   Event Highlight
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client"


import React, { useState } from 'react';
import { X, ZoomIn, Download, Heart } from 'lucide-react';

interface Image {
  id: number;
  url: string;
  title: string;
  category: string;
}

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const images: Image[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Mountain Vista', category: 'Nature' },
    { id: 2, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', title: 'Forest Path', category: 'Nature' },
    { id: 3, url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800', title: 'Sunset Beach', category: 'Beach' },
    { id: 4, url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800', title: 'City Lights', category: 'Urban' },
    { id: 5, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800', title: 'Misty Morning', category: 'Nature' },
    { id: 6, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', title: 'Tropical Paradise', category: 'Beach' },
    { id: 7, url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800', title: 'Night City', category: 'Urban' },
    { id: 8, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', title: 'Green Valley', category: 'Nature' },
    { id: 9, url: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800', title: 'Ocean Waves', category: 'Beach' },
  ];

  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];

  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => img.category === filter);

  const toggleLike = (id: number) => {
    setLiked(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

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
                  {/* <button
                    onClick={() => toggleLike(image.id)}
                    className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${liked.has(image.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/90 text-gray-700 hover:bg-white'
                      }`}
                  >
                    <Heart className={`w-5 h-5 ${liked.has(image.id) ? 'fill-current' : ''}`} />
                  </button> */}
                  <button
                    onClick={() => setSelectedImage(image)}
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
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full p-20">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h2 className="text-white text-3xl font-bold mb-2">{selectedImage.title}</h2>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;