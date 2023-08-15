import React, {useState} from 'react';
import Login from './Login';
import {useAuth0} from '@auth0/auth0-react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  console.log(user, 'USER FROM useAUTH0');
  //handling btn text changing
  let btnText = '';
  isAuthenticated ? (btnText = 'Logout') : (btnText = 'Login');
  // toggle popup
  function toggleOpen(bol) {
    setOpen(bol);
    return;
  }
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
            {btnText}
          </button>
          <button onClick={() => logout()}>Log out</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
