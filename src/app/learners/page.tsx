"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Navbar from "../components/Navbar";
import Image from "next/image";

const LearnersPage = () => {
  const [activeItem, setActiveItem] = useState("Learners");
  const router = useRouter(); 

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    switch (item) {
      case "Cohorts":
        router.push("/");
        break;
      case "Programs":
        router.push("/programs");
        break;
      case "Instructors":
        router.push("/instructors");
        break;
      default:
        router.push("/learners");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen relative">
        {/* Header Image */}
        <div className="relative w-full h-[350px]">
          <Image
            src="https://i.ibb.co/JqTdYCF/6e709818152f.jpg"
            alt="Header Image"
            width={2000}
            height={100}
            className="object-cover w-full h-[280px]"
          />
          <div className="absolute left-6 bottom-12 md:bottom-36 md:left-32 w-56">
            <img
              src="https://res.cloudinary.com/dvrsknpdj/image/upload/v1729557697/Company-Section_xixlx4.png"
              alt="Company Section"
              className="object-cover w-full h-[80px] md:h-[120px]"
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-1">
        <aside className="w-full mt-12 md:w-64 bg-white p-4 mb-4 md:mb-0">
  {/* Sidebar Items */}
  <div className="w-64 bg-background">
    {[
      { name: "Cohorts", icon: "https://res.cloudinary.com/dvrsknpdj/image/upload/v1729899460/users_xmpctc.png" },
      { name: "Programs", icon: "https://res.cloudinary.com/dvrsknpdj/image/upload/v1729899460/book-open_ht0u0t.png" },
      { name: "Instructors", icon: "https://res.cloudinary.com/dvrsknpdj/image/upload/v1729899460/briefcase_cyjcbm.png" },
      { name: "Learners", icon: "https://res.cloudinary.com/dvrsknpdj/image/upload/v1729899460/user_paszrd.png" },
    ].map(({ name, icon }) => (
      <div
        key={name}
        onClick={() => handleItemClick(name)}
        className={`flex items-center p-4 mb-2 cursor-pointer rounded-full transition-colors
          ${activeItem === name ? "bg-blue-100 text-blue-500 font-semibold" : "hover:bg-blue-50 text-neutral-600"}`}
      >
        <img
          src={icon}
          className={`mr-4 transition-colors ${activeItem === name ? "" : "grayscale"}`}
          alt={`${name} Icon`}
        />
        <span>{name}</span>
      </div>
    ))}
  </div>
</aside>


          <main className="p-6 flex-1 mt-12">
            <h1 className="text-3xl font-extrabold mt-12">Welcome to the Learners Page</h1>
          </main>
        </div>
      </div>
    </>
  );
};

export default LearnersPage;
