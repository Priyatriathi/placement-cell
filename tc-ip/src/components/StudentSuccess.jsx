import React from 'react';

const StudentSuccess = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-12 text-center">
      {/* Success Button */}
      <button className="bg-black text-white px-4 py-2 rounded-md mb-4">
        Student Success
      </button>

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4">
        Inspiring Stories from Our Students
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 mb-8">
        Hear from our students about their journey and how the Training and
        Placement Cell has helped them achieve their goals.
      </p>

      {/* Student Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-gray-300 rounded-full h-20 w-20 mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold">Samantha Doe</h3>
          <p className="text-gray-500 mb-4">Software Engineer, Google</p>
          <p className="text-sm text-gray-700">
            "The Training and Placement Cell provided me with the resources
            and guidance I needed to land my dream job. I'm grateful for the
            support and opportunities they offered."
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-gray-300 rounded-full h-20 w-20 mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold">John Smith</h3>
          <p className="text-gray-500 mb-4">Product Manager, Amazon</p>
          <p className="text-sm text-gray-700">
            "The Training and Placement Cell helped me develop the skills and
            confidence I needed to excel in my interviews. I'm grateful for
            the support they provided."
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-gray-300 rounded-full h-20 w-20 mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold">Emily Johnson</h3>
          <p className="text-gray-500 mb-4">Data Analyst, Microsoft</p>
          <p className="text-sm text-gray-700">
            "The Training and Placement Cell's resources and workshops were
            invaluable in helping me prepare for my career. I'm grateful for
            the opportunities they provided."
          </p>
        </div>
      </div>

    
    </section>
  );
};

export default StudentSuccess;
