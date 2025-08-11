import React from 'react';
import Image from 'next/image';

const ReportPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/human.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10 container mx-auto py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-cream/50 p-10 rounded-lg shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl font-display font-bold text-lotus-400 mb-6">
            Donation Drive Report
          </h1>
          <p className="text-lg text-sage-800 font-body mb-8">
            For a detailed breakdown of the donations, their distribution, and the impact on our
            community, please download our official report. Thank you for your transparency and trust.
          </p>
          <a
            href="/donation-drive-report.pdf"
            download
            className="inline-block bg-primary-green text-forest-600 font-bold py-3 px-8 rounded-full hover:bg-dark-green transition-colors duration-300 shadow-md"
          >
            Coming Soon
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;