import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState({ username: 'Tim' });
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    user.hasOwnProperty('username') ? setLoggedIn(true) : setLoggedIn(false);
  }, [user]);
  // some useEffect to grab the currently logged in user here from the backend authentication
  // set state of the logged in user - if the user exists, then conditionally render the dashboard below
  function loginUser(obj) {
    setUser(obj);
    return;
  }

  return (
    <div className='app'>
      <Navbar loginUser={(obj) => loginUser(obj)} loggedIn={loggedIn} />
      {user.hasOwnProperty('username') ? (
        <Dashboard />
      ) : (
        <div className='not-Logged-in'>Login to continue</div>
      )}
    </div>
  );
}

export default App;
