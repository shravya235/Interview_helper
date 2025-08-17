"use client";

import { useState } from "react";
import Login from "./Login";
import { auth, googleProvider } from "@/app/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { HiOutlineMail, HiLockClosed } from "react-icons/hi"; // Example icons
import { toast } from "sonner";

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

  // Email/Password signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.warning("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User signed up:", userCredential.user);
      toast.success("Signup successful!");
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      });
    } catch (error: any) {
      console.error("Error signing up:", error.message);
      toast.error(error.message);
    }
  };

  // Google signup/login
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google user:", user);
      toast.success(`Signed up as ${user.displayName || user.email}`);
    } catch (error: any) {
      console.error("Error with Google signup:", error.message);
      toast.error(error.message);
    }
  };

  if (showLogin) {
    return <Login onToggle={() => setShowLogin(false)} />;
  }

const inputFields = [
  { id: "email", placeholder: "Email", type: "email", name: "email", icon: <HiOutlineMail /> },
  { id: "password", placeholder: "Password", type: "password", name: "password", icon: <HiLockClosed /> },
  { id: "confirmPassword", placeholder: "Confirm Password", type: "password", name: "confirmPassword", icon: <HiLockClosed /> },
];

return (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      {inputFields.map((field) => (
        <div key={field.id} className="relative">
          {/* Icon inside input */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            {field.icon}
          </div>
          <input
            type={field.type}
            id={field.id}
            name={field.name}
            value={(formData as any)[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className="mt-1 block placeholder-gray-600 w-full pl-10 pr-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            required
          />
        </div>
      ))}

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

      <button
        type="button"
        onClick={handleGoogleSignup}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-500 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-2"
      >
        <FcGoogle className="w-5 h-5" />
        Sign Up with Google
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