import React from "react";
import Header from "../../src/Header/Header";
import Notifications from '../Notifications/Notifications'
import Footer from "../../src/Footer/Footer";
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";
import {NotificationItemShape} from "../Notifications/NotificationItemShape";
import {getLatestNotification} from '../../utils/utils'

function App( { isLoggedIn } ) {
    // Create the listCourses array
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];
    

    return (
      <>
        <Notifications displayDrawer={isLoggedIn} listNotifications={[]} />
        <div className="App">
          <Header />
          <div >
            {/* Pass the listCourses prop to CourseList component */}
            <CourseList listCourses={listCourses}/>
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