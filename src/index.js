// Importing React and ReactDOM for creating and rendering React components
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main styling for the application
import './index.css';

// Importing the main App component
import App from './App';

// Importing the Redux store created in store.js
import store from "./Store/store";

// Importing the Provider component from react-redux to connect the Redux store to the React app
import { Provider } from 'react-redux';

// Importing the reportWebVitals function for performance monitoring
import reportWebVitals from './reportWebVitals';

// Creating a root using ReactDOM.createRoot for rendering React components
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within the Redux Provider to enable state management
// Enabling React StrictMode for additional development checks
// Wrapping the main App component with the Redux Provider, passing the store as a prop

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Running the reportWebVitals function for performance monitoring
reportWebVitals();
