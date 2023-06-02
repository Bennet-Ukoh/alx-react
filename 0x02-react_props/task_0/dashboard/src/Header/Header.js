import React from "react";
import HolbertonLogo from '../../assets/HolbertonLogo.jpg';
import './Header.css';

function Header() {
    return (
        <div className="App-header" data-testid="app-header">
        <img src={ HolbertonLogo } alt='HolbertonLogo' className='logo'/>
        <h1>School dashboard</h1>
      </div>
    )
}

export default Header