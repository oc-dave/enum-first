"use client";

import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload"; // Import upload icon



const EnumModal = ({ open, handleClose}: { open: any, handleClose: any }) => {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  // Function to handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setAvatarFile(file);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <div className="fixed inset-0 flex items-center justify-center bg-sky-400 bg-opacity-20 border-sky-500 ">
        <div className="bg-white dark:bg-card rounded-lg shadow-lg p-6 w-5/12  border-sky-500 border-2">
          <DialogTitle>
            <Typography variant="h6" component="div" className=" font-serif font-semibold mb-4">
              Create a Cohort
            </Typography>
          </DialogTitle>
          <DialogContent dividers>
            <form>
              {/* Cohort Name Field */}
              <div className="mb-4">
                <TextField
                  label="Cohort Name"
                  id="cohort-name"
                  placeholder="Ex: Cohort 1"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  className="mt-1 block w-full border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Description Field */}
              <div className="mb-4">
                <TextField
                  label="Description"
                  id="description"
                  placeholder="Ex: A space for python developers"
                  multiline
                  rows={4}
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  className="mt-1 block w-full border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Program Field */}
              <div className="mb-4">
                <TextField
                  label="Program"
                  id="program"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  className="mt-1 block w-full border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Date Fields */}
              <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                  <TextField
                    label="Start Date"
                    id="start-date"
                    type="date"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{ shrink: true }}
                    className="mt-1 block w-full border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="w-1/2">
                  <TextField
                    label="End Date"
                    id="end-date"
                    type="date"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{ shrink: true }}
                    className="mt-1 block w-full border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Avatar Upload Section */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-2">
                  Add a cohort avatar
                </label>
                <div className="border-2 border-dashed border-zinc-300 dark:border-sky-600 rounded-md p-4 text-center relative">
                  <CloudUploadIcon className="text-zinc-500 dark:text-zinc-400 mb-2" style={{ fontSize: "40px" }} />
                  <p className="text-zinc-500 dark:text-zinc-400">Drag and drop or choose file</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">340x240px Recommended, max size 1MB</p>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
                {avatarFile && (
                  <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                    Selected file: {avatarFile.name}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between mt-6">
                <Button
                  onClick={handleClose}
                  className="bg-muted text-muted-foreground hover:bg-muted/80 px-4 py-2 rounded-md"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-md"
                >
                  Create Cohort
                </Button>
              </div>
            </form>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
};

export default EnumModal;
