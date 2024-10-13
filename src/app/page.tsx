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
import Image from 'next/image';
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
        <div className="relative w-full h-[250px]"> {/* Adjust height as necessary */}
          <Image
            src="/images/test-image.jpeg" // Path to the image in the public folder
            alt="Header Image"
            width={1200} // Set a specific width
            height={300} // Set a specific height
            style={{ objectFit: 'cover', width: '100%', height: '250px' }} // Handle object-fit and dimensions via style
          />

          {/* ProfileCard placed on top of the image towards the left */}
          <div className="absolute -bottom-32 left-40">
            <ProfileCard /> {/* This will float the card to the top left of the image */}
          </div>
        </div>

        <div className="flex mt-8 flex-1"> {/* Added flex-1 to ensure proper layout */}
          <aside className="w-64 bg-white shadow-md p-4">
            <ul className="ml-4 mt-4 min-h-screen">
              <li className="text-neutral-600 hover:text-blue-500 hover:font-bold">
                <a href="#" className="flex items-center mb-10">
                  <PeopleOutlineOutlinedIcon />
                  <span className="ml-2">Cohorts</span>
                </a>
              </li>
              <li className="text-neutral-600 hover:text-blue-500 hover:font-bold mb-4">
                <a href="#" className="flex items-center mb-10">
                  <ImportContactsOutlinedIcon />
                  <span className="ml-2">Programs</span>
                </a>
              </li>
              <li className="text-neutral-600 hover:text-blue-500 hover:font-bold">
                <a href="#" className="flex items-center mb-10">
                  <WorkOutlineIcon />
                  <span className="ml-2">Instructors</span>
                </a>
              </li>
              <li className="text-neutral-600 hover:text-blue-500 hover:font-bold">
                <a href="#" className="flex items-center mb-10">
                  <PersonOutlineIcon />
                  <span className="ml-2">Learners</span>
                </a>
              </li>
            </ul>
          </aside>

          <main className="p-12 flex-1"> {/* Added flex-1 to ensure proper layout */}
            <h1 className="text-2xl mb-4 text-neutral-800 font-serif font-semibold">
              Cohorts
            </h1>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center mb-16">
                <div className="flex justify-center items-center text-neutral-300 font-bold">
                  <CloudIcon style={{ fontSize: "200px" }} /> {/* Increased size */}
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
                  className="bg-blue-500 text-white hover:bg-blue-600 px-5 py-2 rounded-lg mt-4"
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
    </>
  );
};

export default CohortsPage;
