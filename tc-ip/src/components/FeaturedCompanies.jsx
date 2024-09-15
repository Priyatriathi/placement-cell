import React from 'react';

const FeaturedCompanies = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-12 text-center">
      <button className="bg-black text-white px-4 py-2 rounded-md mb-4">
        Featured Companies
      </button>
      <h1 className="text-4xl font-bold mb-4">
        Top Recruiters on Campus
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Check out the list of top companies that have recruited from our campus in the past.
      </p>

      {/* Recruiters section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder boxes for the recruiter logos */}
        <div className="bg-gray-100 h-64 rounded-md shadow-sm animate-pulse"></div>
        <div className="bg-gray-100 h-64 rounded-md shadow-sm animate-pulse"></div>
        <div className="bg-gray-100 h-64 rounded-md shadow-sm animate-pulse"></div>
        <div className="bg-gray-100 h-64 rounded-md shadow-sm animate-pulse"></div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
