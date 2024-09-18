import React, { useState } from 'react';
import axios from 'axios';

const StudentSignup = () => {
  const [formData, setFormData] = useState({
    "scholar_id": "2320403208",
    "firstName": "Risu",
    "lastName": "Gupta",
    "email": "riskmr3275@gmail.com",
    "password": "1234",
    "confirmPassword": "1234",
    "accountType": "Student",
    "otp": "524601"

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await axios.post('/api/student/signup', formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-slate-400 to-gray-600">
      <div className="bg-white p-12 rounded-lg shadow-lg w-[40rem]">
        <h1 className="text-5xl font-bold mb-8 text-center">Student Signup</h1>
        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          {/* Group fields in two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">Gender</label>
              <select
                name="gender"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* DOB */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">Date of Birth</label>
              <input
                type="date"
                name="dob"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">Contact</label>
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Photo */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">Photo</label>
              <input
                type="file"
                name="photo"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                onChange={handleFileChange}
                required
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">Course (UG/PG)</label>
              <select
                name="course"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.course}
                onChange={handleInputChange}
                required
              >
                <option value="ug">Undergraduate</option>
                <option value="pg">Postgraduate</option>
              </select>
            </div>

            {/* Department */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">Department</label>
              <input
                type="text"
                name="department"
                placeholder="Department"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.department}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">Skills</label>
              <input
                type="text"
                name="skills"
                placeholder="Skills"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.skills}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Resume */}
            <div>
              <label className="block text-gray-700 font-semibold text-lg mb-3">Resume</label>
              <input
                type="file"
                name="resume"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                onChange={handleFileChange}
                required
              />
            </div>

            {/* Password */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold text-lg mb-3">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentSignup;

