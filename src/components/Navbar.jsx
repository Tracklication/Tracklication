import React, { useState } from 'react';
import Login from './Login';
function Navbar() {
  const [Open, setOpen] = useState(true);
  return (
    <div className='top-div'>
      <div className='nav-div'>
        <h1>Tracklication</h1>
        <div>
          <button
            className='nav-login'
            onClick={() => {
              Open ? setOpen(false) : setOpen(true);
            }}
          >
            Login
          </button>
        </div>
      </div>
      <Login open={Open} />
    </div>
  );
}

export default Navbar;
