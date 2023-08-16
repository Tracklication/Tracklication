import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import JobList from './components/JobList';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  // some useEffect to grab the currently logged in user here from the backend authentication
  // set state of the logged in user - if the user exists, then conditionally render the dashboard below

  function setList(arr) {
    setAllList([...arr]);
    return;
  }
  console.log(isAuthenticated, 'IS AUTHENTICATED');
  return (
    <div className='app'>
      <Navbar />
      {isAuthenticated ? (
        // <Dashboard userID={userID} setList={setList} allList={allList} />
        <JobList />
      ) : (
        <div className='not-Logged-in'>Login to continue</div>
      )}
    </div>
  );
}

export default App;
