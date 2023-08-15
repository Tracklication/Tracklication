import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import styles from './scss/App.scss';
import {Auth0Provider} from '@auth0/auth0-react';

// react render
const root = createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(domain, clientId);
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
