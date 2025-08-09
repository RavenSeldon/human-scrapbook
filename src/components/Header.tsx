import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/lotus.jpeg')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60"></div>

        <div className="absolute inset-0">
          <div className="absolute top-16 left-10 w-20 h-20 bg-forest-400/30 rounded-full floating-element"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-lotus-500/40 rounded-full floating-element"></div>
          <div className="absolute bottom-16 left-1/4 w-24 h-24 bg-sage-300/20 rounded-full floating-element"></div>
          <div className="absolute bottom-32 right-16 w-18 h-18 bg-forest-300/25 rounded-full floating-element"></div>
        </div>
      </div>
      {/* Main content */}
      <div className="relative z-10 container mx-auto py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="text-2xl animate-gentle-bounce text-white/80" style={{ animationDelay: '0.2s' }}>🪷</div>
              </div>
              <div className="relative">
                <div className="relative w-40 h-40 animate-gentle-bounce" style={{ animationDelay: '0.4s' }}>
                    <Image
                        src="/images/LKC.png"
                        alt="LKC Logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
              </div>
              <div className="relative">
                <div className="text-2xl animate-gentle-bounce text-white/80" style={{ animationDelay: '0.6s' }}>🪷</div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-lotus-300 mb-6 tracking-tight drop-shadow-lg">
            The HUMA-N Project
          </h1>

          <div className="relative">
            <p className="text-xl md:text-2xl text-lotus-300/90 font-light mb-4 tracking-wide drop-shadow-md">
              Donation Drive Scrapbook
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          </div>

          {/* Subtitle with organic styling */}
          <div className="mt-10 p-8 glass-morphism rounded-3xl max-w-2xl mx-auto backdrop-blur-md">
            <p className="text-lotus-300/70 font-medium text-lg leading-relaxed">
              Our Community is our Ecology. Thanks to your Giving, we saw just how effective our Community can be!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave border */}
      <div className="absolute bottom-0 left-0 w-full h-12">
        <svg viewBox="0 0 1200 100" className="w-full h-full">
          <path
            d="M0,50 Q300,10 600,50 T1200,50 L1200,100 L0,100 Z"
            fill="rgba(254, 252, 248, 0.95)"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;