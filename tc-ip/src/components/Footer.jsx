import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-right py-4 w-full ">
      <div className="container mx-auto text-gray-600 pr-4">
       
        <p className="mt-2">
        <a href="/faqs" className="hover:underline">
            FAQS
          </a>
          {' '}
          |{' '}
          <a href="/terms" className="hover:underline">
            Terms
          </a>
          {' '}
          |{' '}
          <a href="/ai-policy" className="hover:underline">
            AI-Policy
          </a>
          {' '}
          |{' '}
          <a href="/Privacy" className="hover:underline">
            Privacy
          </a>
        </p>
        <p className="bg-slate-300">&copy; 2024 Training and Placement Cell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
