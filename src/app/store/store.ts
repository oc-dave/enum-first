import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modalSlice';
import counterReducer from './slice/counterSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    counter: counterReducer,
  },
});

// Infer types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
