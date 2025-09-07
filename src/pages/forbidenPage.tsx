import React from "react";
import DotGrid from "../components/effects/DotGrid";
import SectionScrollFloat from "../components/effects/SectionScrollFloat";

const ForbiddenPage: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* DotGrid Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#1f2937"
          activeColor="#dc2626"
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
          <div className="flex flex-col items-center justify-center min-h-screen">
            <SectionScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom-=100"
              scrollEnd="bottom top+=100"
            >
              <div className="text-center max-w-2xl mx-auto">
                {/* Error Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-red-600/20 rounded-full flex items-center justify-center border-4 border-red-500/30">
                      <div className="text-6xl">🚫</div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                  </div>
                </div>

                {/* Error Code */}
                <div className="mb-6">
                  <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
                    403
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Access Forbidden
                  </h2>
                </div>

                {/* Description */}
                <div className="mb-8 space-y-4">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    You don't have permission to access this resource.
                  </p>
                  <p className="text-gray-400">
                    This page is restricted and requires proper authentication
                    or authorization.
                  </p>
                </div>

                {/* Additional Info */}
                <div className="mb-8 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl mt-1">⚠️</div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-red-400 mb-2">
                        Possible reasons:
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span>You are not logged in as an administrator</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span>Your session has expired</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span>
                            Insufficient permissions for this resource
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGoHome}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200 font-medium shadow-lg"
                  >
                    🏠 Go to Homepage
                  </button>
                  <button
                    onClick={handleGoBack}
                    className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:outline-none transition-all duration-200 font-medium border border-gray-600"
                  >
                    ← Go Back
                  </button>
                  <button
                    onClick={() => (window.location.href = "/auth")}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-200 font-medium"
                  >
                    🔐 Login as Admin
                  </button>
                </div>

                {/* Footer Info */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <p className="text-gray-500 text-sm">
                    If you believe this is an error, please contact the
                    administrator.
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                    Error Code: FORBIDDEN_ACCESS_DENIED
                  </p>
                </div>
              </div>
            </SectionScrollFloat>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForbiddenPage;
