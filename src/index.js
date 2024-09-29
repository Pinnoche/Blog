import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BlogsContextProvider } from './context/blogContext';
import { UserContextProvider } from './context/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BlogsContextProvider>
        <App />
      </BlogsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
