import React from 'react';
import Image from 'next/image';

interface ScrapbookEntryProps {
  name: string;
  message: string;
  imageUrl: string;
}

const ScrapbookEntry: React.FC<ScrapbookEntryProps> = ({ name, message, imageUrl }) => {
  return (
    <div className="group relative">
      {/* Decorative background elements */}
      <div className="absolute -inset-4 bg-gradient-to-br from-sage-200/20 via-lotus-200/20 to-forest-200/20 rounded-organic opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>

      <div className="relative nature-card rounded-3xl overflow-hidden hover-organic">
        {/* Image container with organic mask */}
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 via-transparent to-transparent z-10"></div>
          <Image
            src={imageUrl}
            alt={`Donation from ${name}`}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 group-hover:scale-110"
          />

          {/* Floating botanical accents */}
          <div className="absolute top-4 right-4 z-20">
            <div className="w-6 h-6 bg-lotus-400/80 rounded-full floating-element"></div>
          </div>
          <div className="absolute bottom-4 left-4 z-20">
            <div className="w-4 h-4 bg-forest-400/80 leaf-shape floating-element"></div>
          </div>
        </div>

        {/* Content area */}
        <div className="p-8 relative">
          {/* Decorative vine element */}
          <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-forest-400 via-lotus-400 to-sage-400 rounded-full transform -translate-y-1/2"></div>

          <div className="space-y-4">
            {/* Name with botanical accent */}
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-forest-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-display font-bold text-charcoal leading-tight">
                {name}
              </h3>
            </div>

            {/* Message with elegant styling */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-lotus-300 to-forest-300 rounded-full opacity-60"></div>
              <blockquote className="text-sage-700 italic leading-relaxed font-body text-lg pl-4">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "{message}"
              </blockquote>
            </div>

            {/* Decorative elements */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-forest-300 rounded-full opacity-60"></div>
                <div className="w-2 h-2 bg-lotus-300 rounded-full opacity-80 mt-0.5"></div>
                <div className="w-3 h-3 bg-sage-300 rounded-full opacity-70"></div>
              </div>

              {/* Gratitude symbol */}
              <div className="text-lotus-400 text-2xl opacity-80 transform hover:scale-110 transition-transform duration-300">
                💚
              </div>
            </div>
          </div>
        </div>

        {/* Organic bottom decoration */}
        <div className="h-3 bg-gradient-to-r from-forest-400 via-lotus-400 to-sage-400 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"></div>
        </div>
      </div>

      {/* Hover effect shadow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-forest-500/10 to-lotus-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl transform scale-110"></div>
    </div>
  );
};

export default ScrapbookEntry;