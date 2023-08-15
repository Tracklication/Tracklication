import React, {useState} from 'react';
import Login from './Login';
import {useAuth0} from '@auth0/auth0-react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  async function accessTokenLog() {
    const token = await getAccessTokenSilently();
    console.log(token);
  }

  //handling btn text changing
  let btnText = '';
  isAuthenticated ? (btnText = 'Logout') : (btnText = 'Login');
  // toggle popup
  return (
    <div className='top-div'>
      <div className='nav-div'>
        <h1>Tracklication</h1>
        <div>
          <button
            className='btn'
            onClick={() => {
              isAuthenticated ? logout() : loginWithRedirect();
            }}
          >
            {isLoading ? 'Logout' : btnText}
          </button>
          <button onClick={() => accessTokenLog()}>Access Token</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
