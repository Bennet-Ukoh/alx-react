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
    expect(wrapper.find(Notifications)).toHaveLength(1);
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

    it('calls logOut and displays the console message when Ctrl+H is pressed', () => {
      // Mock the logOut function
      const mockLogOut = jest.fn();
      wrapper.setProps({ logOut: mockLogOut });

      // Spy on the global console.log function
      global.console.log = jest.fn();

      // Simulate the keydown event with Ctrl+H
      const event = { ctrlKey: true, key: 'h' };
      wrapper.instance().handleKeyDown(event);

      // Check if logOut was called
      expect(mockLogOut).toHaveBeenCalled();

      // Check if console.log was called with the correct message
      expect(global.console.log).toHaveBeenCalledWith('Logging you out');
    });
  });
});