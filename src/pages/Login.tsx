import React from "react";
import { Mail, Lock } from "lucide-react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
          alt="AI Generative"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute text-white text-center px-8">
          <h2 className="text-3xl font-light mb-2">AI Generative</h2>
          <p className="text-lg font-light">Anything you can Imagine</p>
          <p className="text-sm mt-3 opacity-70">
            Generate any type of art with Openartistic
          </p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gradient-to-b from-[#020617] to-[#0f172a] text-white">
        <div className="w-[80%] max-w-md">
          <h2 className="text-3xl font-semibold mb-2">Welcome Back!</h2>
          <p className="text-sm text-gray-400 mb-8">
            Enter your email and password
          </p>

          <form className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Hello@basitkhan.design"
                className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-gray-800 to-black rounded-lg hover:opacity-90 transition"
            >
                <a href="http://localhost:5173/">

              Sign in</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
