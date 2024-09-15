import React from 'react';

function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6 space-y-4 md:space-y-0">
        
        {/* Title and Subtitle */}
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Training and Placement Cell
          </h1>
          <h3 className="text-sm md:text-lg font-light mt-2 leading-snug">
            Welcome to the central hub for students and recruiters. Explore resources, placement statistics, and upcoming events.
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Student Portal
          </button>
          <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Recruiter Portal
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
