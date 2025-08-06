import React from 'react';
import Image from 'next/image';

// Define the props that this component will accept
interface ScrapbookEntryProps {
  name: string;
  message: string;
  imageUrl: string;
}

const ScrapbookEntry: React.FC<ScrapbookEntryProps> = ({ name, message, imageUrl }) => {
  return (
    <div className="bg-black bg-opacity-20 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 backdrop-blur-sm border border-white border-opacity-20">
      <div className="relative h-56 w-full">
        <Image
          src={imageUrl}
          alt={`Donation from ${name}`}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-300 italic">"{message}"</p>
      </div>
      {/* We can add a decorative vine SVG here later */}
      <div className="h-2 bg-gradient-to-r from-success-green to-secondary-accent"></div>
    </div>
  );
};

export default ScrapbookEntry;