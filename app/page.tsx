import HeroSection from "@/components/ui/Homepagehero";
import SkincareProductsUI from "@/components/ui/Products";
import OurTeamSection from "@/components/ui/Team";
import MeetOurTeam from "@/components/ui/Team";
import Testimonials from "@/components/ui/Testimonials";
import WelcomeSection from "@/components/ui/welcome";
import Image from "next/image";
import Link from "next/link";


export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  slug: string;
}

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <WelcomeSection/> */}




      <SkincareProductsUI />
      <section className=" bg-gradient-to-br from-cyan-50 via-white to-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main circular image */}
                <div className="relative aspect-square rounded-full overflow-hidden bg-white shadow-xl">
                  <Image
                    src="/images/about/first.jpg"
                    alt="Team members"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating chicken image */}
                <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-white shadow-lg transform translate-x-4 translate-y-4">
                  <Image
                    src="/images/about/third.jpg"
                    alt="Poultry"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">
                <span className="">Who we are</span>
                {/* <span className="text-green-400">are?</span> */}
              </h2>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                The Great Place for Poultry
              </h3>

              <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                <p>
                  At Prowell Lifesciences, we believe healthy animals mean healthy progress. Founded in 2023, our mission is simple: to support farmers with solutions that protect livestock, improve performance, and build a sustainable future for animal production in India.
                </p>
                <p>
                  What sets us apart is how we bring proven science to practical use. Our feed supplements and health solutions are designed to safeguard gut health, reduce disease risks, and help animals grow stronger and more productive, while minimizing resistance challenges. Behind every product lies careful research, trusted partnerships with consistent quality, and a deep understanding of farmers&apos; needs.
                </p>
                <p>
                  For us, progress is not just about products. It&apos;s about people. We see our role as partners - sharing knowledge, building trust, and raising standards together. Whether you are a farmer, distributor, or someone who cares about animal welfare, our commitment remains the same: to create solutions that make farming healthier, more sustainable, and more rewarding for everyone.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Learn More Button */}
                  <Link href="/contact" className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors duration-200 shadow-md hover:shadow-lg">
                    CONTACT US
                  </Link>

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

      <OurTeamSection showCta={false} />
      <Testimonials
        variant="carousel"           // 'default' | 'carousel' | 'grid' | 'minimal'
        maxItems={6}                 // Limit number of testimonials shown
        showNavigation={true}        // Show/hide carousel navigation
        autoPlay={true}              // Enable auto-play for carousel
        autoPlayInterval={3000}      // Auto-play interval in ms
      />
    </>
  );
}
