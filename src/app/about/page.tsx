import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/super.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10 container mx-auto py-20 px-6">
        <div className="max-w-3xl mx-auto bg-cream/50 p-10 rounded-lg shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl font-display font-bold text-lotus-600 mb-6">
            About the Donation Drive
          </h1>
          <div className="space-y-6 text-sage-800 font-body">
            <p>
              The HUMA-N Project's donation drive was born from three simple ideas: that
              <li>
                doing good can feel good,
              </li>
              <li>
                it doesn't have to be hard to give back, and
              </li>
              <li>
                it feels fundamentally human to give in fellowship with community.
              </li>
            </p>
            <p>
              For one month, I asked my friends and social media network to join me in Taking the Path of Least Resistance Towards Good.
              This digital scrapbook is our way of honoring every single person who contributed...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;