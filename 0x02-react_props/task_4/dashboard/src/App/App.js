import React from "react";
import Login from '../../src/Login/Login';
import Header from "../../src/Header/Header";
import Notifications from '../Notifications/Notifications'
import Footer from "../../src/Footer/Footer";
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";

function App( {isLoggedIn } ) {
    return (
      <>
        <Notifications displayDrawer={isLoggedIn}/>
        <div className="App">
          <Header />
          <div >
            {isLoggedIn ? <CourseList /> : <Login />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }

  App.propTypes = {
    isLoggedIn: PropTypes.bool,
  }

  App.defaultProps = {
    isLoggedIn: true
  }

  export default App