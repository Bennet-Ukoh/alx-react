import React from "react";
import Header from "../../src/Header/Header";
import Notifications from '../Notifications/Notifications';
import Login from "../Login/Login";
import Footer from "../../src/Footer/Footer";
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";
import {getLatestNotification} from '../../utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    this.listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
     if (event.ctrlKey && event.key === 'h') {
      console.log('Logging you out')
      this.props.logOut()
     }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <div className="App">
          <Notifications displayDrawer={isLoggedIn} listNotifications={this.listNotifications} />
          <Header />
          {isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {},
};

export default App;