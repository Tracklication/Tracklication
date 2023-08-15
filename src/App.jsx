import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  // some useEffect to grab the currently logged in user here from the backend authentication
  // set state of the logged in user - if the user exists, then conditionally render the dashboard below

  console.log(isAuthenticated, 'IS AUTHENTICATED');
  return (
    <div className='app'>
      <Navbar />
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <div className='not-Logged-in'>Login to continue</div>
      )}
    </div>
  );
}

export default App;
