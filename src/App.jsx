import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import {useAuth0} from '@auth0/auth0-react';
import axios from 'axios';

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const {isLoading, isAuthenticated, user, getAccessTokenSilently} = useAuth0();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('isLoading is updating', isLoading, isAuthenticated);
    getAccessTokenSilently();
  }, [isLoading]);

  useEffect(() => {}, []);
  useEffect(() => {
    // async function authenticateUser() {
    //   const accessToken = getAccessTokenSilently();
    //   const userId = user.sub;
    //   const userData = {accessToken, userId};
    //   const response = await axios.post('/api/jobs', userData);
    //   setUserInfo(response);
    // }
    // if (isAuthenticated) {
    //   authenticateUser();
    // }
  }, [isAuthenticated]);

  return (
    <div className='app'>
      <Navbar />
      {/* {!isLoading && !isAuthenticated && (
        <div className='not-Logged-in'>Login to continue</div>
      )}
      {isLoading && !isAuthenticated && (
        <div className='not-Logged-in'>Loading...</div>
      )}
      {!isLoading && isAuthenticated && <Dashboard />} */}
      {!isLoading && !isAuthenticated && (
        <div className='not-Logged-in'>Login to continue</div>
      )}
      {isLoading && !isAuthenticated && (
        <div className='not-Logged-in'>Loading...</div>
      )}
      {!isLoading && isAuthenticated && <Dashboard />}
    </div>
  );
}

export default App;
