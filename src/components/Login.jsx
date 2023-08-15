import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

function Login(props) {
  if (!props.open) return;

  const {loginWithRedirect, isAuthenticated} = useAuth0();

  function tempLogin() {
    props.loginUser({username: 'Tim'});
    props.toggleOpen(false);
  }
  return (
    <div>
      <div className='pop-up popupbackground'></div>
      <div className='pop-up login-div'>
        <div className='close-btn-div'>
          <button
            className='btn login-close-btn'
            onClick={() => {
              props.toggleOpen(false);
            }}
          >
            X
          </button>
        </div>

        <div className='oauth'>oAth things</div>
        {!isAuthenticated && (
          <button
            className='btn login-btn'
            onClick={() => {
              loginWithRedirect();
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
