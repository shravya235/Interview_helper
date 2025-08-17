"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, UserPlus, Check, X } from "lucide-react";
import Login from "../login/page";

export default function Signup() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  // Password validation helpers
  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, text: "", color: "bg-gray-200" };
    
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    if (score <= 2) return { strength: score, text: "Weak", color: "bg-red-500" };
    if (score <= 3) return { strength: score, text: "Medium", color: "bg-yellow-500" };
    return { strength: score, text: "Strong", color: "bg-green-500" };
  };

  const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;
  const passwordsDontMatch = formData.confirmPassword && formData.password !== formData.confirmPassword;
  const passwordStrength = getPasswordStrength();

  if (showLogin) {
    return <Login onToggle={() => setShowLogin(false)} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white border-2 shadow-[10px_10px_0px_#000000] rounded-2xl p-8 w-full max-w-md transform transition-all duration-300">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h2>
          {/* <p className="text-gray-600">Join us and start your journey today</p> */}
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
                focusedField === 'email' ? 'text-purple-600' : 'text-gray-400'
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
                    ? 'border-purple-600 shadow-lg ring-4 ring-purple-100' 
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
                focusedField === 'password' ? 'text-purple-600' : 'text-gray-400'
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
                    ? 'border-purple-600 shadow-lg ring-4 ring-purple-100' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Create a strong password"
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
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Password strength</span>
                  <span className={`text-xs font-medium ${
                    passwordStrength.strength <= 2 ? 'text-red-600' : 
                    passwordStrength.strength <= 3 ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {passwordStrength.text}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                    style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                focusedField === 'confirmPassword' ? 'text-purple-600' : 'text-gray-400'
              }`} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => setFocusedField('confirmPassword')}
                onBlur={() => setFocusedField(null)}
                className={`w-full pl-10 pr-12 py-3 border-2 rounded-lg transition-all duration-200 bg-gray-50 focus:bg-white focus:outline-none ${
                  focusedField === 'confirmPassword' 
                    ? 'border-purple-600 shadow-lg ring-4 ring-purple-100' 
                    : passwordsMatch 
                    ? 'border-green-300 bg-green-50'
                    : passwordsDontMatch
                    ? 'border-red-300 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
              
              {/* Match indicator */}
              {formData.confirmPassword && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {passwordsMatch ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            
            {/* Password match feedback */}
            {passwordsDontMatch && (
              <p className="mt-1 text-sm text-red-600">Passwords don't match</p>
            )}
            {passwordsMatch && (
              <p className="mt-1 text-sm text-green-600">Passwords match!</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-5 h-5 text-gray-600 border-2 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                required
              />
            </div>
            <label htmlFor="agreeTerms" className="text-sm text-gray-700 leading-5">
              I agree to the{" "}
              <button type="button" className="text-gray-500 hover:text-gray-800 underline font-medium">
                Terms and Conditions
              </button>
              {" "}and{" "}
              <button type="button" className="text-gray-500 hover:text-gray-800 underline font-medium">
                Privacy Policy
              </button>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!formData.agreeTerms || passwordsDontMatch || !passwordsMatch}
            className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            Create Account
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-sm text-gray-500 bg-white">or</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Social Signup Options */}
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

        {/* Login Link */}
        <div className="mt-8 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <button
            onClick={() => setShowLogin(true)}
            className="font-semibold text-gray-400 hover:text-gray-800 transition-colors duration-200 hover:underline"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}