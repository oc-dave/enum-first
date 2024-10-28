// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modalSlice';
import counterReducer from './slice/counterSlice';
import cohortsReducer from './slice/cohortsSlice'; // Import the cohorts slice

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    counter: counterReducer,
    cohorts: cohortsReducer, // Add cohorts reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
