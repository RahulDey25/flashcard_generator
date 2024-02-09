/* This line imports the createSlice function from the Redux Toolkit, 
a set of tools and utilities to simplify Redux state management.*/
import { createSlice } from "@reduxjs/toolkit";


/* Here, it defines the initial state for the Redux store. 
It checks if there is any data stored in the "flashcards" key in the browser's localStorage. 
If there is, it parses and uses that data; otherwise, it initializes an empty array.*/
const initialState = {
    flashcards: localStorage.getItem("flashcards") ? JSON.parse(localStorage.getItem("flashcards")) : [],
};



/* This code creates a Redux slice using the createSlice function. 
It specifies the name of the slice as "flashcard" and provides the initial state.
These are two Redux actions, addFlashCard and removeFlashCard, 
defined within the reducers property of the slice. 
They specify how the state should be updated when these actions are dispatched. 
addFlashCard adds a new flashcard to the array and updates the localStorage. 
removeFlashCard filters out a flashcard by its ID and updates the state and localStorage accordingly. */
export const flashcardSlice = createSlice({
    name: "flashcard",
    initialState,
    reducers: {

        addFlashCard: (state, action) => {
            state.flashcards.push(action.payload)
            localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
        },

        removeFlashCard: (state, action) => {
            state.flashcards = state.flashcards.filter((flashcard) =>
                flashcard.id !== action.payload
            );
            localStorage.setItem("flashcards", JSON.stringify(state.flashcards))
        },
    },
});

// This code exports the action creators (addFlashCard and removeFlashCard) and the reducer generated by the createSlice function. 
//These can be used when creating the Redux store and dispatching actions.
export const { addFlashCard, removeFlashCard } = flashcardSlice.actions;
export default flashcardSlice.reducer;