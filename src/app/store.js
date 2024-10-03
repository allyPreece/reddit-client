import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/Header/searchSlice'
export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
