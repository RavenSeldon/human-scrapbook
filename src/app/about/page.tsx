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
          <h1 className="text-4xl font-display font-bold text-lotus-400 mb-6">
            About the Donation Drive
          </h1>
          <div className="space-y-6 text-sage-800 font-body">
            <p>
              The {"HUMA-N Project's"} goal was to offer a small opportunity for me to do something tangible for my local community. I have always said that if you care about making a difference in the world,
              you have to care equally about how you can make a difference in your immediate environment. On top of that, I was going through an extremely difficult transition in life - my three-year-long relationship had come to a sudden end this year,
              and I had to say goodbye to my home, my cats, and the life I had built up. In the midst of my suffering, there I found my opportunity. The HUMA-N project was a public cry and proclamation: by Helping You, you Help Me, and we Help All of Us.
              <span className='text-lotus-400'><b>Help U, Me, All of us - Now</b></span>. {"It's"} a challenge to embrace that which makes us truly <span className='text-lotus-400'><b>HUMAN</b></span> - our compassion, our ability to work together, and our collective vision in something greater than any one of us.
            </p>

            <p>
              What did we do? I asked my friends and social media network to look around their homes for anything at all they would be willing to lovingly part with. Clothes, shoes, books, food;
              Anything people were willing to donate, I was happy to find a home for. I challenged folks from all areas of my life to join me in Taking the Path of Least Resistance Towards Good. That meant I wanted to make it as easy as possible for people to give
              whatever they had through whatever means, knowing that the network of philanthropy and community support I had built up would ensure any items would go to the places that need them the most.
            </p>

            <p>
              From this little experiment, we were able to demonstrate three simple ideas: that
              <li className='text-lotus-400 font-body'>
                doing good can feel good,
              </li>
              <li className='text-lotus-400 font-body'>
                it {"doesn't"} have to be hard to give back, and
              </li>
              <li className='text-lotus-400 font-body'>
                it feels fundamentally human to give in fellowship with community.
              </li>
            </p>
            <p>
              This digital scrapbook is our way of honoring every single person who contributed. From each of the hardworking people from our Donation Sites who helped identify the areas of need in our community,
              to the amazing people who stepped up and volunteered to deliver donations, accompany me for pickups, and were generally much-needed sources of support;

              To the each and every one of the wonderful human beings that parted with items freely and generously. To all who contributed, know that All Kingdoms of Heaven belong to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;