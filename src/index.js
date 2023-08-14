import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';

// react render
const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
