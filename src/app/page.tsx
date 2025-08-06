import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrapbookEntry from "@/components/ScrapbookEntry";
import data from "@/data.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200/10 rounded-organic floating-element"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-lotus-200/15 rounded-full floating-element"></div>
          <div className="absolute top-80 left-1/4 w-40 h-40 bg-forest-200/8 organic-shape-1 floating-element"></div>
          <div className="absolute top-96 right-1/3 w-28 h-28 bg-earth-200/12 leaf-shape floating-element"></div>
        </div>

        <div className="relative z-10 container mx-auto py-20 px-6">
          {/* Section header with botanical styling */}
          <div className="text-center mb-16">
            {/* Decorative botanical header */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-6 bg-forest-400 leaf-shape transform rotate-12 animate-leaf-sway"></div>
                <div className="w-8 h-4 bg-lotus-600 leaf-shape transform -rotate-12 animate-leaf-sway"></div>
                <div className="w-16 h-8 bg-sage-400 leaf-shape transform rotate-6 animate-leaf-sway"></div>
                <div className="w-10 h-5 bg-forest-400 leaf-shape transform -rotate-12 animate-leaf-sway"></div>
                <div className="w-14 h-7 bg-lotus-500 leaf-shape transform rotate-12 animate-leaf-sway"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-forest-600 via-sage-700 to-charcoal bg-clip-text text-transparent mb-6 leading-tight">
              Our Community of Generous Donors
            </h2>

            {/* Subtitle with organic accent */}
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-sage-700 font-body leading-relaxed mb-6">
                Every contribution plants a seed of hope in our community garden of generosity.
              </p>

              {/* Decorative vine divider */}
              <div className="flex justify-center">
                <svg width="300" height="40" viewBox="0 0 300 40" className="opacity-70">
                  <path
                    d="M20,20 Q75,10 150,20 T280,20"
                    stroke="url(#mainGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3a9b3a" />
                      <stop offset="33%" stopColor="#a90dbd" />
                      <stop offset="66%" stopColor="#6b786b" />
                      <stop offset="100%" stopColor="#3a9b3a" />
                    </linearGradient>
                  </defs>

                  {/* Botanical accents */}
                  <circle cx="50" cy="15" r="2.5" fill="#3a9b3a" opacity="0.6" className="animate-pulse" />
                  <circle cx="100" cy="25" r="2" fill="#a90dbd" opacity="0.7" className="animate-pulse" />
                  <circle cx="150" cy="12" r="3" fill="#6b786b" opacity="0.6" className="animate-pulse" />
                  <circle cx="200" cy="28" r="2" fill="#3a9b3a" opacity="0.5" className="animate-pulse" />
                  <circle cx="250" cy="18" r="2.5" fill="#a90dbd" opacity="0.6" className="animate-pulse" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dynamic Grid for Scrapbook Entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {data.donors.map((donor, index) => (
              <div
                key={index}
                className="animate-float"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <ScrapbookEntry
                  name={donor.name}
                  message={donor.message}
                  imageUrl={donor.imageUrl}
                />
              </div>
            ))}
          </div>

          {/* Call to action section */}
          <div className="mt-24 text-center">
            <div className="max-w-4xl mx-auto glass-morphism rounded-organic p-12">
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl animate-gentle-bounce">🌿</span>
                  <span className="text-4xl animate-gentle-bounce" style={{ animationDelay: '0.2s' }}>💝</span>
                  <span className="text-4xl animate-gentle-bounce" style={{ animationDelay: '0.4s' }}>🌺</span>
                </div>
              </div>

              <h3 className="text-3xl font-display font-bold text-charcoal mb-4">
                Want to Join Our Garden of Giving?
              </h3>
              <p className="text-lg text-sage-700 leading-relaxed mb-8">
                Your generosity helps our community flourish. Every donation, no matter the size,
                contributes to the beautiful tapestry of human kindness we're weaving together.
              </p>

              {/* Decorative bottom accent */}
              <div className="flex justify-center space-x-3">
                <div className="w-4 h-4 bg-forest-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-lotus-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-5 h-5 bg-sage-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <div className="w-3 h-3 bg-forest-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <div className="w-4 h-4 bg-lotus-500 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}