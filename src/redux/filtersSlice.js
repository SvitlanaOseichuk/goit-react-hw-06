import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./contactsSlice";




const filterSlice = createSlice({

 name: "filter",
 
 initialState: INITIAL_STATE,

 reducers: {
    setFilter(state, action) {
        state.filter = action.payload;
    },
 },
});

export const { setFilter } = filterSlice.actions;


export const filterDetailsReducer = filterSlice.reducer;