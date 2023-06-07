import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {

    const styles = StyleSheet.create({
        appBody: {
            marginTop: '40px',
            paddingLeft: '30px',
            fontSize: 'medium',
            borderTop: '2px solid rgb(231, 40, 40)'
          },
          
          input: {
            margin: '8px'
          }
    })
    return (
    <div className={css(styles.appBody)} data-testid="app-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' className={css(styles.input)}/>

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' className={css(styles.input)}/> 
      
        <button>Ok</button>
    </div>
    )
}

export default Login