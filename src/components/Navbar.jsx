import React, { useState } from 'react';
import Login from './Login';
function Navbar(props) {
  const [Open, setOpen] = useState(false);
  //handling btn text changing
  let btnText = '';
  props.loggedIn ? (btnText = 'Logout') : (btnText = 'Login');
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
              //on click: if user is logged in, set current User to empty obj
              if (props.loggedIn) return props.loginUser({});
              //else meaning not user is logged in. show login popup on click
              toggleOpen(true);
            }}
          >
            {btnText}
          </button>
        </div>
      </div>
      <Login open={Open} toggleOpen={toggleOpen} loginUser={props.loginUser} />
    </div>
  );
}

export default Navbar;
