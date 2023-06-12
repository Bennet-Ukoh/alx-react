import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {

    const styles = StyleSheet.create({
        appBody: {
            marginTop: '40px',
            paddingLeft: '30px',
            fontSize: 'large',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',

          },
          
          input: {
            margin: '8px'
          },
          button: {
    
            border: '3px solid orange'
          },
          '@media (max-width: 900px)': {
            appBody: {
              alignItems: 'center',
            },
            button: {
              marginTop: '16px',
            },
          },

    })
    return (
    <div className={css(styles.appBody)} data-testid="app-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        

        <label htmlFor='password'>Password:</label>
        
        <button className={css(styles.button)}>Ok</button>
    </div>
    )
}

export default Login