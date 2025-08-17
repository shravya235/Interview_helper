"use client";

import { useState } from "react";
import Signup from "./Signup";
import { auth } from "@/app/firebase"; 
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleProvider } from "@/app/firebase";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";

interface LoginProps {
  onToggle?: () => void;
}

export default function Login({ onToggle }: LoginProps) {
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

const fields = [
  { name: "email", type: "email", placeholder: "Email", icon: <HiOutlineMail /> },
  { name: "password", type: "password", placeholder: "Password", icon: <HiLockClosed /> },
];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User logged in:", userCredential.user);
      alert("Login successful!");
      setFormData({ email: "", password: "" });
    } catch (error: any) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user:", result.user);
      alert("Google login successful!");
    } catch (error: any) {
      console.error("Google login error:", error.message);
      alert(error.message);
    }
  };

  if (showSignup) return <Signup />;
return (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="relative">
          {/* Icon inside input */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            {field.icon}
          </div>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            value={(formData as any)[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className="mt-1 placeholder-gray-600 block w-full pl-10 pr-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            required
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        Log In
      </button>
    </form>

    {/* Google Login Button */}
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-2 py-2 px-4 mt-2 border border-gray-500 rounded-md shadow-sm text-sm font-medium bg-white hover:bg-gray-100"
    >
      <FcGoogle className="w-5 h-5" />
      Sign in with Google
    </button>

    <div className="text-center text-sm">
      <span className="text-gray-600">Dont have an account? </span>
      <button
        onClick={() => onToggle ? onToggle() : setShowSignup(true)}
        className="font-medium text-black hover:text-gray-800"
      >
        Sign up
      </button>
    </div>
  </div>
);
}