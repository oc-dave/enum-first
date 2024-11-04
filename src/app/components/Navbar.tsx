"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(1); // Default active tab set to 'Workspace'

  useEffect(() => {
    // Set activeTab based on the current pathname
    if (pathname === "/home") setActiveTab(0);
    else if (pathname === "/") setActiveTab(1);
    else if (pathname === "/resource") setActiveTab(2);
  }, [pathname]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    switch (newValue) {
      case 0:
        router.push("/home");
        break;
      case 1:
        router.push("/"); // Default workspace page
        break;
      case 2:
        router.push("/resource");
        break;
      default:
        break;
    }
  };

  return (
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
          style={{ width: 'auto', height: '60px' }}
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
              backgroundColor: '#499eff',
              height: '5px',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            },
          }}
        >
          <Tab label="Home" style={{ textTransform: 'none', fontSize:'20px', fontWeight:'bold' }} />
          <Tab label="Workspace" style={{ textTransform: 'none',fontSize:'20px', fontWeight:'bold' }} />
          <Tab label="Resources Library" style={{ textTransform: 'none', fontSize:'20px', fontWeight:'bold' }} />
        </Tabs>
      </div>

      {/* Right Side: Notifications */}
      <div className="flex items-center space-x-4
          md:space-x-6
          lg:space-x-8
          xl:space-x-10">
        <div className="relative">
          <button className="flex items-center">
            <img
              src="https://res.cloudinary.com/dvrsknpdj/image/upload/v1729549016/Frame_48097018_quszew.png"
              alt="Notifications"
              style={{ width: '400px', height: '40px' }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
