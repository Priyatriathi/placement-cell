import React from 'react';

const ProfilePage = ({ userType = 'student' }) => {
  // Dummy data for student
  const studentProfile = {
    fullName: 'Priya Tripathi',
    gender: 'Female',
    dob: '1998-05-10',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    photoUrl: 'https://via.placeholder.com/150', // Placeholder image
    skills: 'JavaScript, React, Node.js',
    course: 'ug', // Undergraduate
    department: 'Computer Science',
    resumeUrl: 'https://example.com/resume.pdf', // Dummy resume link
  };

  // Dummy data for company
  const companyProfile = {
    name: 'Tech Innovations Ltd.',
    contact: '999-888-7777',
    companyWebsite: 'https://tech-innovations.com',
    logoUrl: 'https://via.placeholder.com/150', // Placeholder logo
    city: 'Mumbai',
    state: 'Maharashtra',
  };

  // Render profile based on userType
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-slate-400 to-gray-600">
      <div className="bg-white p-12 rounded-lg shadow-lg w-[32rem]">
        <h1 className="text-5xl font-bold mb-8 text-center">
          {userType === 'student' ? 'Student' : 'Company'} Profile
        </h1>

        {/* Display for student profile */}
        {userType === 'student' && (
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <img
                src={studentProfile.photoUrl}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">Full Name</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{studentProfile.fullName}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">Gender</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{studentProfile.gender}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">Date of Birth</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{studentProfile.dob}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">City</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{studentProfile.city}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">State</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{studentProfile.state}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">Skills</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{studentProfile.skills}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">Course</label>
                <p className="text-xl px-6 py-4 border rounded-lg">
                  {studentProfile.course === 'ug' ? 'Undergraduate' : 'Postgraduate'}
                </p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">Department</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{studentProfile.department}</p>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">Resume</label>
              <a
                href={studentProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Resume
              </a>
            </div>
          </div>
        )}

        {/* Display for company profile */}
        {userType === 'company' && (
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <img
                src={companyProfile.logoUrl}
                alt="Company Logo"
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">Company Name</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{companyProfile.name}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">Contact</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{companyProfile.contact}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">City</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{companyProfile.city}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-lg mb-1">State</label>
                <p className="text-xl px-6 py-4 border rounded-lg">{companyProfile.state}</p>
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 font-semibold text-lg mb-1">Website</label>
                <a
                  href={companyProfile.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {companyProfile.companyWebsite}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;