import React from 'react';
import './App.css';
import HolbertonLogo from './HolbertonLogo.jpg';
import { getFooterCopy, getFullYear } from './utils'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={ HolbertonLogo } alt='HolbertonLogo' className='logo'/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' /> 
      
        <button>Ok</button>
      </div>
      <div className="App-footer">
        <p>Copyright { getFullYear() } - { getFooterCopy(false) }</p>
      </div>
    </div>
  );
}

export default App;

