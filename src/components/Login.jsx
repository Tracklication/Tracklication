import React from 'react';

function Login(props) {
  if (!props.open) return;
  function tempLogin() {
    props.loginUser({ username: 'Tim' });
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
        <button
          className='btn login-btn'
          onClick={() => {
            tempLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
