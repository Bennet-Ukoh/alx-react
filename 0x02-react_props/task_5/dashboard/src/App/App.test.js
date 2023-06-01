import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={false} />);
  });

  it('renders the Notifications component', () => {
    expect(wrapper.contains(<Notifications />)).toBe(true);
  });

  it('renders the Header component', () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('renders the Login component when isLoggedIn is false', () => {
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('renders the Footer component', () => {
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  describe('when isLoggedIn is true', () => {
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not render the Login component', () => {
      expect(wrapper.contains(<Login />)).toBe(false);
    });

    it('renders the CourseList component', () => {
      expect(wrapper.find('CourseList')).toHaveLength(1);
    });
  });
});