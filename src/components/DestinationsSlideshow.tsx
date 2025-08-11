"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Destination {
  siteName: string;
  siteUrl: string;
  imageUrls: string[];
  history: string;
  contactInfo: string;
}

interface DestinationsSlideshowProps {
  destinations: Destination[];
}

const DestinationsSlideshow: React.FC<DestinationsSlideshowProps> = ({
  destinations,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Advance to the next site, wrapping around when at the end.
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };
  // Go back to the previous site, wrapping around when at the beginning.
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? destinations.length - 1 : prev - 1,
    );
  };

  const current = destinations[currentIndex];

  const hasMultipleImages = current.imageUrls.length > 1;

  return (
    <section
      className="mt-16 bg-black bg-opacity-20 p-8 rounded-lg shadow-lg border border-white border-opacity-20 backdrop-blur-sm relative"
    >
      <h2 className="text-3xl font-bold text-center text-forest-200 mb-8">
        Where Your Donations Went
      </h2>
      <div className="flex items-center">
        {/* Previous arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous site"
          className="text-4xl text-forest-200 hover:text-lotus-200 transition-colors duration-300 px-2 focus:outline-none"
        >
          &#8592;
        </button>
        <div className="flex-grow overflow-hidden px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* IMAGE SECTION */}
            <div className="w-full md:w-1/2">
              {hasMultipleImages ? (
                <div className="grid grid-cols-2 gap-4">
                  {current.imageUrls.map((url, index) => (
                    <div
                      key={index}
                      className="relative h-40 w-full rounded-lg overflow-hidden"
                    >
                      <Image
                        src={url}
                        alt={`${current.siteName} photo ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative h-80 w-full rounded-lg overflow-hidden">
                  <Image
                    src={current.imageUrls[0]}
                    alt={`${current.siteName} photo`}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform hover:scale-110"
                  />
                </div>
              )}
            </div>
            {/* TEXT SECTION */}
            <div className="w-full md:w-1/2">
              <a
                href={current.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold font-display text-forest-200 hover:text-lotus-200 transition-colors duration-300"
              >
                {current.siteName}
              </a>
              <p className="text-white [&_span]:text-forest-200 [&_a]:text-lotus-200 [&_a:hover]:underline font-body mt-3 mb-4">
                {current.history}
              </p>
              <p
                className="text-white [&_span]:text-forest-200 [&_a]:text-lotus-200 [&_a:hover]:underline font-body font-semibold"
                dangerouslySetInnerHTML={{ __html: current.contactInfo }}
              />
            </div>
          </div>
        </div>
        {/* Next arrow */}
        <button
          onClick={handleNext}
          aria-label="Next site"
          className="text-4xl text-forest-200 hover:text-lotus-200 transition-colors duration-300 px-2 focus:outline-none"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default DestinationsSlideshow;