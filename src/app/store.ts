import { configureStore } from "@reduxjs/toolkit";
// ↓ counterSlice.reducer but exported as default (can rename it...)
import counterReducer from "../features/counter/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispacth = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
