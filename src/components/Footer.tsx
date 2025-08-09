import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-cream to-sage-100 border-t border-sage-200/50 mt-20 overflow-hidden">
      {/* Organic top border */}
      <div className="absolute top-0 left-0 w-full h-8 -mt-8">
        <svg viewBox="0 0 1200 80" className="w-full h-full">
          <path
            d="M0,80 Q300,40 600,80 T1200,80 L1200,0 L0,0 Z"
            fill="rgba(240, 249, 240, 0.8)"
          />
        </svg>
      </div>

      {/* Floating botanical elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 left-10 w-16 h-16 bg-sage-200/20 rounded-organic floating-element"></div>
        <div className="absolute top-12 right-20 w-12 h-12 bg-lotus-200/30 rounded-full floating-element"></div>
        <div className="absolute bottom-8 left-1/4 w-20 h-20 bg-forest-200/15 organic-shape-2 floating-element"></div>
        <div className="absolute bottom-12 right-1/3 w-14 h-14 bg-earth-200/25 leaf-shape floating-element"></div>
      </div>

      <div className="relative z-10 container mx-auto py-16 px-6">
        {/* Decorative vine divider */}
        <div className="flex justify-center mb-8">
          <svg width="200" height="30" viewBox="0 0 200 30" className="opacity-60">
            <path
              d="M10,15 Q50,5 100,15 T190,15"
              stroke="url(#footerGradient)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3a9b3a" />
                <stop offset="50%" stopColor="#a90dbd" />
                <stop offset="100%" stopColor="#6b786b" />
              </linearGradient>
            </defs>

            {/* Small botanical accents */}
            <circle cx="30" cy="12" r="2" fill="#3a9b3a" opacity="0.6" />
            <circle cx="70" cy="18" r="1.5" fill="#a90dbd" opacity="0.7" />
            <circle cx="130" cy="10" r="2" fill="#6b786b" opacity="0.6" />
            <circle cx="170" cy="16" r="1.5" fill="#3a9b3a" opacity="0.5" />
          </svg>
        </div>

        <div className="text-center space-y-6">
          {/* Main gratitude message */}
          <div className="max-w-2xl mx-auto glass-morphism rounded-3xl p-8">
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative w-40 h-40 animate-gentle-bounce" style={{ animationDelay: '0.4s' }}>
                    <Image
                        src="/images/LKC.png"
                        alt="LKC Logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
              </div>
            </div>
            <p className="text-lg text-charcoal font-body leading-relaxed mb-4">
              The most heartfelt and abundant outpouring of gratitude to all who contributed to this donation drive's success.
              You all have showcased just how much good can be done when people work together and leverage the amazing community we have right here in Vancouver.
            </p>
            <p className="text-sage-600 font-medium leading-relaxed mb-4">
              Together, we proved that we can indeed Take the Path of Least Resistance Towards Good.
            </p>
            <p className="text-sage-600 font-small leading-relaxed mb-4">
              Brought to you by the Loving Kindness Collective
            </p>
          </div>

          {/* Project info */}
          <div className="pt-8 border-t border-sage-200/50">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-3 h-3 bg-forest-400 rounded-full animate-pulse"></div>
              <p className="text-charcoal font-display font-semibold text-lg">
                The HUMA-N Project
              </p>
              <div className="w-3 h-3 bg-lotus-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-sage-600 text-sm">
              &copy; {new Date().getFullYear()} • an LKC Initiative
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient decoration */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-forest-300/30 via-lotus-400/30 to-sage-300/30"></div>
    </footer>
  );
};

export default Footer;