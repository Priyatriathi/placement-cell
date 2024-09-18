// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [accountType, setAccountType] = useState('student');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        email,
        password,
        accountType,
      });
      console.log(response.data); // Handle response (e.g., store token, redirect)
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-slate-400 to-gray-600">
      <div className="bg-white p-12 rounded-lg shadow-lg w-[28rem]">
        <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-semibold text-lg mb-3">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-6 py-4 border rounded-lg text-lg"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold text-lg mb-3">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 border rounded-lg text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold text-lg mb-3">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-4 border rounded-lg text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Account Type */}
          <div>
            <label className="block text-gray-700 font-semibold text-lg mb-3">Account Type</label>
            <select
              className="w-full px-6 py-4 border rounded-lg text-lg"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              required
            >
              <option value="student">Student</option>
              <option value="company">Company</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
