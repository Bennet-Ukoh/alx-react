import React from "react";
import Login from '../../src/Login/Login';
import Header from "../../src/Header/Header";
import Notifications from '../Notifications/Notifications'
import Footer from "../../src/Footer/Footer";
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