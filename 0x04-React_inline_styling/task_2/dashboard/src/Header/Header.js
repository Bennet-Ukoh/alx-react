import React from "react";
import HolbertonLogo from '../../assets/HolbertonLogo.jpg';
import { StyleSheet, css } from "aphrodite";

function Header() {

  const styles = StyleSheet.create({
    appHeader : {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: 'small',
      color: 'rgb(231, 40, 40)',
    },
  
    logo: {
      height: '150px',
    }
  })
    return (
        <div className={css(styles.appHeader)} data-testid="app-header">
        <img src={ HolbertonLogo } alt='HolbertonLogo' className={css(styles.logo)}/>
        <h1>School dashboard</h1>
      </div>
    )
}

export default Header