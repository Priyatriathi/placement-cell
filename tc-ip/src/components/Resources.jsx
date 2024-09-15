import React from 'react';

function Resources() {
  return (
    <section className="flex flex-col lg:flex-row justify-between mt-8 space-y-6 lg:space-y-0 lg:space-x-6">
      <div className="bg-white p-6 shadow-md rounded-lg flex-1">
        <h3 className="text-2xl font-bold mb-4">Resume Building</h3>
        <p className="text-lg mb-4">
          Access our resume-building resources to create a professional and impactful resume.
        </p>
        <div className="space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-lg">Resume Templates</button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-lg">Resume Tips</button>
        </div>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg flex-1">
        <h3 className="text-2xl font-bold mb-4">Interview Preparation</h3>
        <p className="text-lg mb-4">
          Explore our comprehensive interview preparation resources to ace your next interview.
        </p>
        <div className="space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-lg">Interview Tips</button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-lg">Practice Questions</button>
        </div>
      </div>
    </section>
  );
}

export default Resources;
