"use client";

import { useRouter } from "next/navigation";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';// Import icons from MUI
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import React from "react";
// Ensure CubeGrid is in the right folder

const Navbar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md border-b border-gray-200">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <span className="text-primary text-2xl font-bold text-blue-500 ml-10">enum</span>
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
            className="space-x-8 text-sm font-bold"
          >
            <Tab
              label="Home"
              onClick={() => router.push("/home")}
              className={`text-neutral-700 font-sans ${activeTab === 0 ? "font-bold text-primary" : ""}`}
            />
            <Tab
              label="Workspace"
              onClick={() => router.push("/workspace")}
              className={`text-neutral-700 font-sans ${activeTab === 1 ? "font-bold text-primary" : ""}`}
            />
            <Tab
              label="Resources Library"
              onClick={() => router.push("/resources-library")}
              className={`text-neutral-700 font-sans ${activeTab === 2 ? "font-bold text-primary" : ""}`}
            />
          </Tabs>
        </div>

        {/* Right Side: Notifications, Profile, and Cube Grid */}
        <div className="flex items-center space-x-8">
          {/* Notifications */}
          <div className="relative">
            <button className="flex items-center">
              <NotificationsNoneIcon style={{ fontSize: '30px' }} /> {/* Notification Icon from MUI */}
            </button>
            <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full text-xs px-2">1</span> {/* Badge */}
          </div>

          {/* User Profile */}
          <div className="flex items-center text-sky-600 cursor-pointer font-bold">
            <AccountCircleRoundedIcon style={{ fontSize: '30px' }} /> {/* Profile Icon from MUI */}
            <span className="ml-2 text-neutral-950 font-light ">Onowomano</span>
          </div>
          <div className="flex items-center cursor-pointer font-bold">
            <KeyboardArrowDownIcon style={{ fontSize: '30px' }} /> {/* Profile Icon from MUI */}
          </div>



          {/* Cube Grid */}
          <div className="flex items-center text-sky-600 cursor-pointer font-bold ml-10">
            <AppsOutlinedIcon style={{ fontSize: '40px' }} />
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
