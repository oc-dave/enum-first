"use client";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 flex-1 mt-12">
        <h1 className="text-3xl mb-4 text-neutral-800 font-serif font-extrabold">Welcome to the Home Page</h1>
        <p className="text-lg text-neutral-600">This is the Home page content.</p>
      </div>
    </>
  );
};

export default Home;
