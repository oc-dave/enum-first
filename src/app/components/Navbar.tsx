"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1); // Default active tab set to 'Workspace'

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    switch (newValue) {
      case 0:
        router.push("/home");
        break;
      case 1:
        router.push("/workspace");
        break;
      case 2:
        router.push("/resources-library");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-1 bg-white shadow-md border-b border-gray-200
        md:px-8 md:py-2
        lg:px-12 lg:py-3
        xl:px-16 xl:py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dvrsknpdj/image/upload/v1729548509/logo_sdatpn.png"
            alt="Logo"
            className="ml-4 md:ml-8 lg:ml-12 xl:ml-16"
            style={{ width: 'auto', height: '60px' }} // Adjust height as needed
          />
        </div>

        {/* Center Tabs */}
        <div className="flex-1 flex justify-center relative">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            className="space-x-8 text-sm font-bold  
              md:space-x-10 md:text-base
              lg:space-x-12 lg:text-lg
              xl:space-x-14 xl:text-xl"
            TabIndicatorProps={{
              style: {
                backgroundColor: '#499eff', // Set the same color as the logo (adjust color code as needed)
                height: '5px',  // Adjust the height of the indicator
                borderTopLeftRadius: '10px',  // Round the top-left corner
                borderTopRightRadius: '10px', // Round the top-right corner
              },
            }}
          >
            <Tab
              label="Home"
              className="text-neutral-600 font-dm-sans cursor-pointer font-bold text-lg mr-10"
              style={{ textTransform: 'none' }}
            />
            <Tab
              label="Workspace"
              className="text-neutral-600 font-dm-sans cursor-pointer font-bold text-lg mr-10" 
              style={{ textTransform: 'none' }}
            />
            <Tab
              label="Resources Library"
              className="text-neutral-600 font-dm-sans cursor-pointer font-bold text-lg mr-10"
              style={{ textTransform: 'none' }}
            />
          </Tabs>
        </div>

        {/* Right Side: Notifications, Profile, and Cube Grid */}
        <div className="flex items-center space-x-4
          md:space-x-6
          lg:space-x-8
          xl:space-x-10">
          {/* Notifications */}
          <div className="relative">
            <button className="flex items-center">
              <img
                src="https://res.cloudinary.com/dvrsknpdj/image/upload/v1729549016/Frame_48097018_quszew.png"
                alt="Notifications"
                style={{ width: '400px', height: '50px' }} // Adjust size as needed
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
