import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CreateFlashCard from './Pages/CreateFlashcard';
import FlashcardDetails from './Pages/FlashcardDetails';
import MyFlashcard from './Pages/MyFlashcards';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (

    // Browser Router for routing
    <BrowserRouter>
      <div>
        {/* Header component */}
        <Header />
        {/* Navbar component */}
        <Navbar />
        {/* Toast notification container */}
        <ToastContainer />
        {/* Routes for different pages */}
        <Routes>
          {/* Route for Create Flashcard page */}
          <Route path="/" element={<CreateFlashCard />}></Route>
          {/* Route for My Flashcard page */}
          <Route path="/myflashcard" element={<MyFlashcard />}></Route>
          {/* Route for Flashcard Details page */}
          <Route path="/flashcarddetails/:id" element={<FlashcardDetails />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};


// Exporting the default app component
export default App;
