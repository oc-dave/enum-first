"use client";

import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCohort } from "../store/slice/cohortsSlice"; 
import UploadFileIcon from '@mui/icons-material/UploadFile'; // Import the upload icon

const EnumModal = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => {
  const dispatch = useDispatch();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [cohortData, setCohortData] = useState({
    name: '',
    description: '',
    program: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCohortData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setAvatarFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCohort = {
      id: Date.now(), // Generate a unique ID
      ...cohortData,
      avatar: avatarFile ? URL.createObjectURL(avatarFile) : null,
    };
    dispatch(addCohort(newCohort)); // Dispatch action to add cohort
    handleClose(); // Close the modal after creating
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="mx-auto p-6 bg-card rounded-lg shadow-lg">
        <DialogTitle fontFamily={'sans-serif'}>Create a Cohort</DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-muted-foreground" htmlFor="cohort-name">Cohort Name</label>
              <input 
                type="text" 
                id="cohort-name" 
                name="name"
                placeholder="Ex. Cohort 1" 
                className="mt-1 block w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-ring" 
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-muted-foreground" htmlFor="description">Description</label>
              <textarea 
                id="description" 
                name="description"
                placeholder="Ex. A space for python developers" 
                className="mt-1 block w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-ring" 
                onChange={handleInputChange}
                required 
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-muted-foreground" htmlFor="program">Program</label>
              <select 
                id="program" 
                name="program"
                className="mt-1 block w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-ring" 
                onChange={handleInputChange}
                required
              >
                <option value="">Select a program</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
              </select>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-sm font-medium text-muted-foreground" htmlFor="start-date">Start Date</label>
                <input 
                  type="date" 
                  id="start-date" 
                  name="startDate"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-ring" 
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-muted-foreground" htmlFor="end-date">End Date</label>
                <input 
                  type="date" 
                  id="end-date" 
                  name="endDate"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-ring" 
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col items-center justify-center p-6 border-2 border-dashed border-muted rounded-lg bg-card text-muted-foreground">
              <div className="mb-2">
                <img aria-hidden="true" alt="upload-icon" src="https://res.cloudinary.com/dvrsknpdj/image/upload/v1730117180/upload_zrkbiz.png" />
              </div>
              <p className="text-lg">Drag and drop or <a href="#" className="text-primary hover:underline">choose file</a></p>
              <p className="text-sm text-muted">240x240 px Recommended, max size 1MB</p>
              <p className="text-xs text-muted-foreground">You can do this later.</p>
              <input 
                type="file" 
                onChange={handleFileChange} 
                className="hidden" // Hide the default file input
                id="avatar-upload" // Set an ID for the label to target
              />
              <label htmlFor="avatar-upload" className="cursor-pointer text-primary hover:underline">
                Choose File
              </label>
            </div>

            <DialogActions>
              <Button onClick={handleClose} className="border border-blue-500 text-blue-500 hover:bg-blue-50">Cancel</Button>
              <Button type="submit" className="bg-gray-300 text-gray-500" disabled={!cohortData.name || !cohortData.description || !cohortData.program || !cohortData.startDate || !cohortData.endDate}>
                Create Cohort
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default EnumModal;
