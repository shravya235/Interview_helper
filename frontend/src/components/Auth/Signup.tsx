"use client";

import { useState } from "react";
import Login from "./Login";

export default function Signup() {
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup form submitted", formData);
  };

  if (showLogin) {
    return <Login onToggle={() => setShowLogin(false)} />;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2  border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            required
          />
          <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
            I agree to the Terms and Conditions
          </label>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center text-sm">
        <span className="text-gray-600">Already have an account? </span>
        <button
          onClick={() => setShowLogin(true)}
          className="font-medium text-black hover:text-gray-800"
        >
          Log in
        </button>
      </div>
    </div>
  );
}