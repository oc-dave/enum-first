"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { openModal, closeModal } from "./store/slice/modalSlice";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import CloudIcon from "@mui/icons-material/Cloud";
import React from "react";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Image from "next/image";
import ProfileCard from "./components/ProfileCard"; // Importing the ProfileCard component

const CohortsPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  const openCohortModal = () => dispatch(openModal());
  const handleCloseModal = () => dispatch(closeModal());

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen relative">
        <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/images/test-image.jpeg" // Path to the image in the public folder
            alt="Header Image"
            width={2000}
            height={100}
            className="object-cover w-full h-[350px] md:h-[400px] lg:h-[450px]" // Adjust height for responsiveness
          />

          <div
            className="absolute bottom-[-0%] left-[-30px] w-full
             md:bottom-[-60px] md:left-[30px]
             lg:bottom-[10px] lg:left-[-30px] lg:w-[70%]
             xl:left-[-300px]"
          >
            <ProfileCard />
          </div>

          <div className="flex flex-col md:flex-row mt-16 flex-1">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-white shadow-md p-4 mb-4 md:mb-0">
              <ul className="ml-4 mt-4">
                <li className="text-neutral-600 mb-5">
                  <a
                    href="#"
                    className="flex items-center transition-colors duration-200 hover:text-blue-500 hover:font-bold"
                  >
                    <PeopleOutlineOutlinedIcon />
                    <span className="ml-2">Cohorts</span>
                  </a>
                </li>
                <li className="text-neutral-600 mb-5">
                  <a
                    href="#"
                    className="flex items-center transition-colors duration-200 hover:text-blue-500 hover:font-bold"
                  >
                    <ImportContactsOutlinedIcon />
                    <span className="ml-2">Programs</span>
                  </a>
                </li>
                <li className="text-neutral-600 mb-5">
                  <a
                    href="#"
                    className="flex items-center transition-colors duration-200 hover:text-blue-500 hover:font-bold"
                  >
                    <WorkOutlineIcon />
                    <span className="ml-2">Instructors</span>
                  </a>
                </li>
                <li className="text-neutral-600 mb-5">
                  <a
                    href="#"
                    className="flex items-center transition-colors duration-200 hover:text-blue-500 hover:font-bold"
                  >
                    <PersonOutlineIcon />
                    <span className="ml-2">Learners</span>
                  </a>
                </li>
              </ul>
            </aside>

            {/* Main content */}
            <main className="p-6 md:p-12 flex-1">
              <h1 className="text-2xl mb-4 text-neutral-800 font-serif font-semibold">
                Cohorts
              </h1>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center mb-16">
                  <div className="flex justify-center items-center text-neutral-300 font-bold">
                    <CloudIcon style={{ fontSize: "120px" }} /> {/* Adjust size */}
                  </div>
                  <h2 className="text-lg font-semibold text-neutral-600 mt-2">
                    Empty Space
                  </h2>
                  <p className="text-neutral-500">
                    No cohort has been created yet, let’s get you started by
                    clicking the button below.
                  </p>
                  <button
                    type="button"
                    onClick={openCohortModal}
                    className="bg-blue-500 text-white hover:bg-blue-600 px-5 py-2 rounded-lg mt-4 transition duration-200"
                  >
                    Create Cohort
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Modal */}
        <Modal open={isModalOpen} handleClose={handleCloseModal} />
      </div>
    </>
  );
};

export default CohortsPage;
