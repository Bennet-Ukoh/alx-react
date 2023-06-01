import React from "react";
import './Login.css';

function Login() {
    return (
    <div className="App-body" data-testid="app-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' /> 
      
        <button>Ok</button>
    </div>
    )
}

export default Login