import React from "react";
import Header from "../../src/Header/Header";
import Notifications from '../Notifications/Notifications';
import Login from "../Login/Login";
import Footer from "../../src/Footer/Footer";
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from '../../utils/utils';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite'

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

  styles = StyleSheet.create({
    body: {
      backgroundColor: '#fff',
      padding: '20px'
    },
    footer: {
      borderTop: '2px solid rgb(231, 40, 40)',
      textAlign: 'center',
      fontSize: 'small',
      fontStyle: 'italic',
    },
  })

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <div className={css(this.styles.body)}>
          <Notifications displayDrawer={true} listNotifications={this.listNotifications} />
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Holberton School is a Computer Science school founded in Silicon Valley to address the gap in the education system for aspiring software engineers.

              After Holberton School opened its doors in 2016, the world’s most innovative companies have noticed. Graduates have found jobs at LinkedIn, Google, Tesla, Docker, Apple, Dropbox, Facebook, Pinterest, Genentech, Cisco, IBM, and more.
              Only motivation and talent is needed to learn Computer Science from the ground up!

Our students collaborate on projects and learn from each other. Regardless of your previous education, age, or gender, you'll learn skills that employers value and reward in Software Development Careers.
            </p>
          </BodySection>
          <div className={css(this.styles.footer)}>
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
  isLoggedIn: false,
  logOut: () => { },
};

export default App;