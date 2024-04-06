import { createSlice, nanoid } from "@reduxjs/toolkit";


export const INITIAL_STATE = {
    contacts: {
      items: []
    },
    filter: {
      name: ""
    }
  }
  


 const contactSlice = createSlice({

 name: "contact",
 
 initialState: INITIAL_STATE,

 reducers: {
    
    selectContacts(state, action) {
        state.contacts = action.payload;
    },
   
    addContact : { 
        reducer(state, action) {
            state.contacts.items.push(action.payload);
        },
        prepare({name, number}) {
            return {
              payload: {
                name, 
                number,
                id: nanoid(),
              },
            };
          },
    },

    deleteContact(state, action) {
        state.contacts.items = state.contacts.items.filter(
            (contact) => contact.id !== action.payload
        )
    }
 }
})

export const { addContact, deleteContact, selectContacts } = contactSlice.actions;


export const contactDetailsReducer = contactSlice.reducer;
