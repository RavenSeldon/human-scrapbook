import React from 'react';
import Image from 'next/image';

interface DestinationGalleryProps {
  siteName: string;
  siteUrl: string;
  imageUrls: string[];
  history: string;
  contactInfo: string;
}

const DestinationGallery: React.FC<DestinationGalleryProps> = ({ siteName, siteUrl, imageUrls, history, contactInfo }) => {
  const hasMultipleImages = imageUrls.length > 1;

  return (
    <section className="mt-16 bg-black bg-opacity-20 p-8 rounded-lg shadow-lg border border-white border-opacity-20 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center text-forest-200 mb-8">
        Where Your Donations Went
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* IMAGE SECTION: Logic to handle one or more images */}
        <div>
          {hasMultipleImages ? (
            // Grid for multiple images
            <div className="grid grid-cols-2 gap-4">
              {imageUrls.map((url, index) => (
                <div key={index} className="relative h-40 w-full rounded-lg overflow-hidden">
                  <Image
                    src={url}
                    alt={`${siteName} photo ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ) : (
            // Single, larger image
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              <Image
                src={imageUrls[0]}
                alt={`${siteName} photo`}
                layout="fill"
                objectFit="cover"
                className="transform transition-transform hover:scale-110"
              />
            </div>
          )}
        </div>

        {/* TEXT CONTENT SECTION */}
        <div>
          <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold font-display text-forest-200 hover:text-lotus-200 transition-colors duration-300">
            {siteName}
          </a>
          <p className="text-white font-body mt-3 mb-4">{history}</p>
          <p
            className="text-white font-body font-semibold"
            dangerouslySetInnerHTML={{ __html: contactInfo }}
          />
        </div>

      </div>
    </section>
  );
};

export default DestinationGallery;