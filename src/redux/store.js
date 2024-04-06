import { configureStore } from "@reduxjs/toolkit";
import { contactDetailsReducer } from "./contactsSlice";
import { filterDetailsReducer } from "./filtersSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactDetailsConfig = {
  key: 'contactDetails',
  storage,
  whitelist: ['contacts']
};


export const store = configureStore({
  reducer: {
    contactDetails: persistReducer(contactDetailsConfig, contactDetailsReducer),
    filterDetails: filterDetailsReducer
  },
  
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, ]
      }
    })
});

export const persistor = persistStore(store);