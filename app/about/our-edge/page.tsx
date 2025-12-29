import React from 'react';
import Image from 'next/image';
import CounterStatsSection from '@/components/ui/Counter';
import Link from 'next/link';

export default function page() {

  const stats = [
    { number: '1000+', label: 'Completed Projects' },
    { number: '250+', label: 'On Going Projects' },
    { number: '500+', label: 'Happy Clients' },
    { number: '25', label: 'Offices through out GLOBE' },
  ];

  const values = [
    {
      title: "Unwavering Integrity",
      description: "We operate with honesty and accountability across all interactions. Decisions are guided by what is right for long-term trust, not short-term gains.",
      icon: "🤝"
    },
    {
      title: "Quality",
      description: "A non-negotiable at Prowell, we work with trusted manufacturers and follow strict checks to ensure product consistency, reliability, and performance across batches and regions.",
      icon: "✓"
    },
    {
      title: "Client Centricity",
      description: "We stay closely connected to our customers through field engagement and regular feedback. Our products, recommendations, and support are shaped by actual farm needs and real-world conditions.",
      icon: "👥"
    },
    {
      title: "Resilience",
      description: "Built as a bootstrapped company, we value steady growth, adaptability, and perseverance. Challenges are approached with discipline and long-term thinking, ensuring continuity and reliability for our partners.",
      icon: "💪"
    },
    {
      title: "Agility",
      description: "Our lean structure allows us to respond quickly to market needs, supply requirements, and field feedback. We adapt efficiently while maintaining quality and compliance.",
      icon: "⚡"
    },
    {
      title: "Data-Driven Innovation",
      description: "We rely on technical insights, performance data, and field observations to guide product selection and application strategies. Innovation at Prowell is practical, measurable, and focused on improving outcomes at the farm level.",
      icon: "📊"
    }
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
                  {/* <button className="px-8 py-3 bg-white hover:bg-gray-50 text-green-500 font-semibold rounded-md border-2 border-green-500 transition-colors duration-200 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <span>Watch Video</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <CounterStatsSection /> */}

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}

            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-cyan-400">Our </span>
                <span className="text-green-400">Vision?</span>
              </h2>
{/* 
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                The Great Place for Poultry
              </h3> */}

              <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                <p className='text-black font-semibold'>
                  <i>&apos;&apos;To be the most valued nutrition partner for farmers and stakeholders across Asia, building lasting relationships rooted in respect, accountability, and shared growth.&apos;&apos;</i>
                </p>
                <p>
                  We aim to grow alongside our partners by understanding real on-ground challenges and offering solutions that consistently deliver results. Our focus is on long-term collaboration rather than short-term transactions, ensuring mutual success across regions and markets.
                </p>
                {/* <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-8 py-3 bg-white hover:bg-gray-50 text-green-500 font-semibold rounded-md border-2 border-green-500 transition-colors duration-200 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <span>Watch Video</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div> */}
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
{/* 
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                The Great Place for Poultry
              </h3> */}

              <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                <p className='text-black font-semibold'>
                 <i>&apos;&apos;We deliver uncompromising quality through transparent processes, rigorous testing, and reliable supply chains to build and maintain trust at every stage.</i>
                </p>
                <p>
                  From sourcing and imports to distribution and field-level application, we prioritize consistency and clarity in everything we do. Our mission is to ensure that every product reaching a farm meets defined quality standards and performs as expected.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Learn More Button */}
                  <Link href="/contact" className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors duration-200 shadow-md hover:shadow-lg">
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-400">Our </span>
              <span className="text-green-400">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Prowell, our core values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-green-50 to-cyan-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-cyan-400"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-bl-full"></div>

                <div className="relative">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-green-800 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
