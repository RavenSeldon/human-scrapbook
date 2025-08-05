import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto py-6 px-6 text-center text-sm text-gray-500">
        <p>
          A heartfelt thank you to everyone who contributed and made this drive a success. ❤️
        </p>
        <p className="mt-2">The HUMA-N Project &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;