import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center -mb-96">
      {/* Card without background and shadow */}
      <div className="relative flex flex-col items-center p-4 bg-transparent max-w-lg mx-auto my-8">
        <div className="flex items-center justify-center">
          {/* Smaller 'S' box with white border and capital letter */}
          <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center ml-2 font-bold uppercase border border-white text-2xl">
            S
          </div>
          <div className="ml-3">
            <h2 className="text-lg font-semibold font-inter text-gray-200">Semicolon Africa</h2>
          </div>
        </div>
        {/* Wider 'View Profile' button with button-like styling */}
        <div className="mt-4">
          <a
            href="#"
            className="inline-block bg-slate-50 text-black hover:bg-blue-700 py-3 px-10 rounded-lg font-inter font-bold text-lg"
          >
            View Profile &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
