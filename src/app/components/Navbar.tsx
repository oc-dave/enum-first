"use client";

import { useRouter } from "next/navigation";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'; // Import icons from MUI
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1); // Default active tab set to 'Workspace'

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md border-b border-gray-200
                     md:px-8 md:py-4
                     lg:px-12 lg:py-6
                     xl:px-16 xl:py-8">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <span className="text-primary text-2xl font-bold text-blue-500 ml-4
                       md:text-xl md:ml-8
                       lg:text-2xl lg:ml-12
                       xl:text-3xl xl:ml-16">enum</span>
        </div>

        {/* Center Tabs */}
        <div className="flex-1 flex justify-center">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2196F3", // Blue scrollbar for active tab
                height: "4px",
                borderRadius: "4px",
              },
            }}
            className="space-x-4 text-sm font-bold
                       md:space-x-6 md:text-base
                       lg:space-x-8 lg:text-lg
                       xl:space-x-10 xl:text-xl"
          >
            <Tab
              label="Home"
              onClick={() => router.push("/home")}
              className={`text-neutral-700 font-sans ${activeTab === 0 ? "font-bold text-blue-500" : ""}`}
            />
            <Tab
              label="Workspace"
              onClick={() => router.push("/workspace")}
              className={`text-neutral-700 font-sans ${activeTab === 1 ? "font-bold text-blue-500" : ""}`}
            />
            <Tab
              label="Resources Library"
              onClick={() => router.push("/resources-library")}
              className={`text-neutral-700 font-sans ${activeTab === 2 ? "font-bold text-blue-500" : ""}`}
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
              <NotificationsNoneIcon style={{ fontSize: '30px' }} /> {/* Notification Icon from MUI */}
            </button>
            <span className="absolute top-[-5px] right-[-5px] bg-blue-500 text-white rounded-full text-xs px-2 py-1">1</span> {/* Badge */}
          </div>

          {/* User Profile */}
          <div className="flex items-center text-sky-600 cursor-pointer font-bold">
            <AccountCircleRoundedIcon style={{ fontSize: '30px' }} /> {/* Profile Icon from MUI */}
            <span className="ml-2 text-neutral-950 font-light text-sm
                           md:text-base
                           lg:text-lg
                           xl:text-xl">Onowomano</span>
          </div>
          <div className="flex items-center cursor-pointer font-bold">
            <KeyboardArrowDownIcon style={{ fontSize: '30px' }} /> {/* Dropdown Icon from MUI */}
          </div>

          {/* Cube Grid */}
          <div className="flex items-center text-sky-600 cursor-pointer font-bold ml-4
                       md:ml-6
                       lg:ml-8
                       xl:ml-10">
            <AppsOutlinedIcon style={{ fontSize: '40px' }} /> {/* Cube Grid Icon */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
