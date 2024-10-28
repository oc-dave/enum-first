"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { openModal, closeModal } from "./store/slice/modalSlice";
import Navbar from "./components/Navbar";
import EnumModal from "./components/Modal";
import Image from "next/image";
import { useState } from "react";

const CohortsPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const cohorts = useSelector((state: RootState) => state.cohorts.cohorts);

  const openCohortModal = () => dispatch(openModal());
  const handleCloseModal = () => dispatch(closeModal());

  const [activeItem, setActiveItem] = useState("Cohorts");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen relative">
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
            <div className="w-64 bg-background">
              {/* Sidebar Items */}
              <div
                onClick={() => handleItemClick("Cohorts")}
                className={`flex items-center p-4 mb-2 cursor-pointer rounded-full transition-colors
                  ${activeItem === "Cohorts" ? "bg-blue-100 text-blue-500 font-semibold" : "hover:bg-blue-50 text-neutral-600"}`}
              >
                <img
                  src="https://res.cloudinary.com/dvrsknpdj/image/upload/v1729899460/users_xmpctc.png"
                  className={`mr-4 transition-colors ${activeItem === "Cohorts" ? "" : "grayscale"}`}
                  alt="Cohorts Icon"
                />
                <span>Cohorts</span>
              </div>
              <div
                onClick={() => handleItemClick("Programs")}
                className={`flex items-center p-4 mb-2 cursor-pointer rounded-full transition-colors
                  ${activeItem === "Programs" ? "bg-blue-100 text-blue-500 font-semibold" : "hover:bg-blue-50 text-neutral-600"}`}
              >
                <img
                  src="https://res.cloudinary.com/dvrsknpdj/image/upload/v1729899460/book-open_ht0u0t.png"
                  className={`mr-4 transition-colors ${activeItem === "Programs" ? "" : "grayscale"}`}
                  alt="Programs Icon"
                />
                <span>Programs</span>
              </div>
              <div
                onClick={() => handleItemClick("Instructors")}
                className={`flex items-center p-4 mb-2 cursor-pointer rounded-full transition-colors
                  ${activeItem === "Instructors" ? "bg-blue-100 text-blue-500 font-semibold" : "hover:bg-blue-50 text-neutral-600"}`}
              >
                <img
                  src="https://res.cloudinary.com/dvrsknpdj/image/upload/v1729899460/briefcase_cyjcbm.png"
                  className={`mr-4 transition-colors ${activeItem === "Instructors" ? "" : "grayscale"}`}
                  alt="Instructors Icon"
                />
                <span>Instructors</span>
              </div>
              <div
                onClick={() => handleItemClick("Learners")}
                className={`flex items-center p-4 mb-2 cursor-pointer rounded-full transition-colors
                  ${activeItem === "Learners" ? "bg-blue-100 text-blue-500 font-semibold" : "hover:bg-blue-50 text-neutral-600"}`}
              >
                <img
                  src="https://res.cloudinary.com/dvrsknpdj/image/upload/v1729899460/user_paszrd.png"
                  className={`mr-4 transition-colors ${activeItem === "Learners" ? "" : "grayscale"}`}
                  alt="Learners Icon"
                />
                <span>Learners</span>
              </div>
            </div>
          </aside>

          <main className="p-6 flex-1 mt-12">
            <h1 className="text-3xl mb-4 text-neutral-800 font-serif font-extrabold ml-32">Cohorts</h1>

            {cohorts.length === 0 ? (
              <div className="text-center">
                <div className="flex justify-center mt-20">
                  <img
                    src="https://res.cloudinary.com/dvrsknpdj/image/upload/v1729903596/Group_598_pfpafv.png"
                    alt="Cloud Illustration"
                    className="w-64"
                  />
                </div>
                <h2 className="text-xl font-semibold mt-10">Empty Space</h2>
                <p className="text-neutral-600 mt-8 font-normal text-xl">
                  No cohort has been created yet, let’s get you started by <br /> clicking the button below.
                </p>
                <button onClick={openCohortModal} className="mt-6 bg-blue-500 text-white p-6 rounded-lg text-xl">
                  Create a Cohort
                </button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between mb-4">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border border-zinc-300 p-2 rounded-md w-1/3"
                  />
                  <div className="relative">
                    <button onClick={openCohortModal} className="bg-blue-500 text-white p-2 rounded-md">
                      Create a Cohort
                    </button>
                    <button className="bg-zinc-200 p-2 rounded-md ml-2">More Actions</button>
                    {/* Dropdown for more actions */}
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-300 rounded-md shadow-lg hidden">
                      <div className="p-2 hover:bg-zinc-100">Publish a poll</div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-zinc-200 pb-2">
                  {cohorts.map(cohort => (
                    <div key={cohort.id} className="flex items-center py-2">
                      <div className="bg-pink-200 w-10 h-10 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="font-semibold">{cohort.name}</div>
                        <div className="text-zinc-500">
                          {cohort.program} - {cohort.learnersCount || 0} Learners
                        </div>
                      </div>
                      <div>Created {new Date(cohort.startDate).toLocaleDateString()}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>

        {/* Modal */}
        <EnumModal open={isModalOpen} handleClose={handleCloseModal} />
      </div>
    </>
  );
};

export default CohortsPage;
