// Importing the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importing the flashcardReducer from the specified path
import flashcardReducer from '../App/feature/flascardSlice';


// Creating the Redux store by calling configureStore
const store = configureStore({

    // Setting the reducer for the store to be the flashcardReducer
    reducer: flashcardReducer,
});


// Exporting the created store as the default export
export default store;