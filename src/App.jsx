import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState({username: 'Tim'});
  // some useEffect to grab the currently logged in user here from the backend authentication
  // set state of the logged in user - if the user exists, then conditionally render the dashboard below

  //   useEffect(() => {
  //     //if cookie
  //     // fetch the user information from the authentication routes in the backend
  //   }, []);

  function loginUser(obj) {
    setUser(obj);
    return;
  }

  return (
    <div className='app'>
      <Navbar loginUser={(obj) => loginUser(obj)} />
      {user.hasOwnProperty('username') && <Dashboard />}
    </div>
  );
}

export default App;
