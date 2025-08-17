"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Signup from "../signup/page";

interface LoginProps {
  onToggle?: () => void;
}

export default function Login({ onToggle }: LoginProps) {
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login form submitted", formData);
  };

  if (showSignup) {
    return <Signup />;
  }

  return (
    <div className="min-h-screen shadow-xl broder-2 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-white to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg transition-all duration-200 bg-gray-50 focus:bg-white focus:outline-none ${
                  focusedField === 'email' 
                    ? 'border-blue-600 shadow-lg ring-4 ring-blue-100' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                focusedField === 'password' ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className={`w-full pl-10 pr-12 py-3 border-2 rounded-lg transition-all duration-200 bg-gray-50 focus:bg-white focus:outline-none ${
                  focusedField === 'password' 
                    ? 'border-blue-600 shadow-lg ring-4 ring-blue-100' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              Forgot your password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            Sign In
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-sm text-gray-500 bg-white">or</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Social Login Options */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <button
            onClick={() => onToggle ? onToggle() : setShowSignup(true)}
            className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 hover:underline"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}