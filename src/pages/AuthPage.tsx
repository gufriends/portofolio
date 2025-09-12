import React, { useState } from "react";
import DotGrid from "../components/effects/DotGrid";
import SectionScrollFloat from "../components/effects/SectionScrollFloat";
import type { APIResponse, ErrorStructure } from "../types/responseType";
import axiosConfig from "../config/axiosConfig";

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setError(null); // Reset error

    try {
      const response = await axiosConfig.axiosInstance.post<APIResponse>(
        "/login",
        {
          email,
          password,
        }
      );
      const token = response.data.content.token;
      axiosConfig.setAuthHeader(token);
      localStorage.setItem("token", token);
      window.location.href = "/admin";
    } catch (error: any) {
      setIsError(true);

      if (error.response) {
        const strukturResponse = error.response.data as APIResponse;

        if (strukturResponse.errors && strukturResponse.errors.length > 0) {
          const errorMessages = strukturResponse.errors
            .map((err: ErrorStructure) => `${err.field}: ${err.message}`)
            .join(", ");
          setError(errorMessages);
        } else {
          setError(strukturResponse.message || "Login failed");
        }
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* DotGrid Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#1f2937"
          activeColor="#6366f1"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 lg:gap-16">
            {/* Motivational Section */}
            <div className="flex-1 max-w-lg order-2 lg:order-1">
              <SectionScrollFloat
                animationDuration={1.2}
                ease="back.inOut(2)"
                scrollStart="top bottom-=100"
                scrollEnd="bottom top+=100"
              >
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Welcome Back
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                      Admin
                    </span>
                  </h2>
                  <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                    "Success is not final, failure is not fatal: it is the
                    courage to continue that counts."
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-400">
                        Manage your portfolio
                      </span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-400">
                        Update your projects
                      </span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-400">Track your progress</span>
                    </div>
                  </div>
                </div>
              </SectionScrollFloat>
            </div>

            {/* Login Form Section */}
            <div className="flex-1 max-w-md order-1 lg:order-2">
              <SectionScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="top bottom-=100"
                scrollEnd="bottom top+=100"
              >
                <div className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
                  <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
                    Login Admin
                  </h1>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    {error && (
                      <div className="bg-red-900/20 border border-red-500/20 rounded-lg py-3 px-4">
                        {error.includes(", ") ? (
                          // Multiple errors - tampilkan sebagai list
                          <div>
                            <p className="text-red-400 text-sm font-medium mb-2 text-center">
                              Please fix the following errors:
                            </p>
                            <ul className="space-y-1">
                              {error.split(", ").map((err, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-2 text-red-400 text-sm"
                                >
                                  <span className="text-red-500 mt-0.5">•</span>
                                  <span>{err}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          // Single error - tampilkan biasa
                          <p className="text-red-400 text-sm text-center">
                            {error}
                          </p>
                        )}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200 font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        {isLoading && (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        )}
                        <span>{isLoading ? "Signing In..." : "Sign In"}</span>
                      </div>
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">
                      Demo: admin@email.com / admin123
                    </p>
                  </div>
                </div>
              </SectionScrollFloat>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
