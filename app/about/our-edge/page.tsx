import React from 'react';
import Image from 'next/image';
import CounterStatsSection from '@/components/ui/Counter';

export default function page() {

  const stats = [
    { number: '1000+', label: 'Completed Projects' },
    { number: '250+', label: 'On Going Projects' },
    { number: '500+', label: 'Happy Clients' },
    { number: '25', label: 'Offices through out GLOBE' },
  ];
  return (
    <>
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main circular image */}
                <div className="relative aspect-square rounded-full overflow-hidden bg-white shadow-xl">
                  <Image
                    src="/images/about/1.jpg"
                    alt="Team members"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating chicken image */}
                <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-white shadow-lg transform translate-x-4 translate-y-4">
                  <Image
                    src="/images/about/4.jpg"
                    alt="Poultry"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-cyan-400">Who we </span>
                <span className="text-green-400">are?</span>
              </h2>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                The Great Place for Poultry
              </h3>

              <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                <p>
                  We deliver uncompromising quality through transparent processes, rigorous testing, and reliable supply chains to build and maintain trust at every stage.
                </p>
                <p>
                  Empowering agricultural excellence through innovation, integrity, and unwavering commitment to farmer success
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Learn More Button */}
                  <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors duration-200 shadow-md hover:shadow-lg">
                    CONTACT US
                  </button>

                  {/* Watch Video Button */}
                  <button className="px-8 py-3 bg-white hover:bg-gray-50 text-green-500 font-semibold rounded-md border-2 border-green-500 transition-colors duration-200 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <span>Watch Video</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CounterStatsSection />

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}

            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-cyan-400">Our </span>
                <span className="text-green-400">Vision?</span>
              </h2>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                The Great Place for Poultry
              </h3>

              <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ea commodi pariatur mollitia tempora dolor consequatur neque quas quia nisi!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum nostrum itaque ipsam asperiores sunt impedit, non sint quis. Ad, esse.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Watch Video Button */}
                  <button className="px-8 py-3 bg-white hover:bg-gray-50 text-green-500 font-semibold rounded-md border-2 border-green-500 transition-colors duration-200 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <span>Watch Video</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Right side - Illustration */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main circular image */}
                <div className="relative aspect-square rounded-full overflow-hidden bg-white shadow-xl">
                  <Image
                    src="/images/about/3.jpg"
                    alt="Team members"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating chicken image */}
                <div className="absolute bottom-[-20] left-[-20] w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-white shadow-lg">
                  <Image
                    src="/images/about/5.jpg"
                    alt="Poultry"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main circular image */}
                <div className="relative aspect-square rounded-full overflow-hidden bg-white shadow-xl">
                  <Image
                    src="/images/about/1.jpg"
                    alt="Team members"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating chicken image */}
                <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-white shadow-lg transform translate-x-4 translate-y-4">
                  <Image
                    src="/images/about/4.jpg"
                    alt="Poultry"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-cyan-400">Our </span>
                <span className="text-green-400">Mission</span>
              </h2>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                The Great Place for Poultry
              </h3>

              <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                <p>
                  And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Learn More Button */}
                  <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors duration-200 shadow-md hover:shadow-lg">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
