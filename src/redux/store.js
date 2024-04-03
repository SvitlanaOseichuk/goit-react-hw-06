import { configureStore } from "@reduxjs/toolkit";
import { filterDetailsReducer } from "./filtersSlice";
import { contactDetailsReducer } from "./contactsSlice";



export const store = configureStore({
  reducer: {
    contactDetails: contactDetailsReducer,
    contactDetails: filterDetailsReducer
  },
});