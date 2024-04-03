import { createSlice } from "@reduxjs/toolkit";


export const INITIAL_STATE = {
    contacts: {
          items: []
      },
    filters: {
          name: ""
      }
  }


const contactSlice = createSlice({

 name: "contact",
 
 initialState: INITIAL_STATE,

 reducers: {
    
    setContact(state, action) {
        state.contacts = action.payload;
    },

    addContact(state, action) {
        state.contacts.push(action.payload)
    },
    // addContact : { 
    //     reducer(state, action) {
    //         state.contacts.push(action.payload)
    //     },
    //     prepare(text) {
    //         return {
    //           payload: {
    //             text,
    //             id: nanoid(),
    //             completed: false,
    //           },
    //         };
    //       },
    // },

    deleteContact(state, action) {
        state.contacts = state.contacts.filter(
            (contact) => contact.id !== action.payload
        )
    }
 }
})

export const { addContact, deleteContact, setContact } = contactSlice.actions;


export const contactDetailsReducer = contactSlice.reducer;
