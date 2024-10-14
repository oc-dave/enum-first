import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center -mb-96">
      {/* Card without background and shadow */}
      <div className="relative flex flex-col items-center p-4 bg-transparent max-w-lg mx-auto my-8">
        <div className="flex items-center justify-center">
          {/* Smaller 'S' box with white border and capital letter */}
          <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center font-bold uppercase border border-white text-2xl">
            S
          </div>
          <div className="ml-3">
            <h2 className="text-xl font-semibold font-inter text-slate-50">Semicolon Africa</h2>
          </div>
        </div>
        {/* Wider 'View Profile' button with button-like styling */}
        <div className="mt-4">
          <a
            href="#"
            className="inline-block bg-white text-black hover:bg-blue-700 py-4 px-12 rounded-lg font-inter font-bold text-xl"
          >
            View Profile &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
