import React from "react";
import Login from '../../src/Login/Login.js';
import Header from "../../src/Header/Header.js";
import Notifications from '../../Notifications/Notifications.js'
import Footer from "../../src/Footer/Footer.js";
function App() {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <div className="App-body">
            <Login />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }

  export default App