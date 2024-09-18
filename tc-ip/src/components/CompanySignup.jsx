import React, { useState } from 'react';
import axios from 'axios';

const CompanySignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    companyWebsite: '',
    logo: null,
    city: '',
    state: '',
    password: '',
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

      const response = await axios.post('/api/company/signup', formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-slate-400 to-gray-600">
      <div className="bg-white p-12 rounded-lg shadow-lg w-[32rem]">
        <h1 className="text-5xl font-bold mb-8 text-center">Company Signup</h1>
        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          {/* Row 1: Company Name & Contact */}
          <div className="flex space-x-6">
            <div className="w-1/2">
              <label className="block text-gray-700 font-semibold text-lg mb-3">Company Name</label>
              <input
                type="text"
                name="name"
                placeholder="Company Name"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-1/2">
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
          </div>

          {/* Row 2: Company Website & Logo */}
          <div className="flex space-x-6">
            <div className="w-1/2">
              <label className="block text-gray-700 font-semibold text-lg mb-3">Company Website</label>
              <input
                type="url"
                name="companyWebsite"
                placeholder="Website Link"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                value={formData.companyWebsite}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-semibold text-lg mb-3">Company Logo</label>
              <input
                type="file"
                name="logo"
                className="w-full px-6 py-4 border rounded-lg text-lg"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>

          {/* Row 3: City & State */}
          <div className="flex space-x-6">
            <div className="w-1/2">
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
            <div className="w-1/2">
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
          </div>

          {/* Password */}
          <div>
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

export default CompanySignup;
