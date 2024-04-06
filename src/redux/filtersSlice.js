import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./contactsSlice";




const filterSlice = createSlice({

 name: "filter",
 
 initialState: INITIAL_STATE.filter, 

 reducers: {
    changeFilter(state, action) {
        state.name = action.payload;
    },
 },
});

export const { changeFilter } = filterSlice.actions;

export const selectNameFilter = (state) => state.filterDetails.name;

export const filterDetailsReducer = filterSlice.reducer;