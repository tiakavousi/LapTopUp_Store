//This code imports the React library, the ReactDOM library
// a custom component called App,and the Bootstrap CSS library.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// The code creates a "root" element using ReactDOM's "createRoot" method,
// which is used to render React components on the page. The root element
// is then used to render the App component, wrapped in a React.
// StrictMode component, which is used for development purposes to help find
// potential problems in the code. The rendered content will be displayed
// in the element with an id of"root" on the HTML page index.html in public directory.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

