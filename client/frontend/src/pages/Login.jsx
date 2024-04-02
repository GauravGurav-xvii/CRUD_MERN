import React from 'react';
import "../style.scss";
const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login