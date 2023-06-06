import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should log mount and unmount messages with "Component" for pure HTML element', () => {
    const PureHTMLComponent = () => <div>Hello, World!</div>;
  
    const ComponentWithLogging = WithLogging(PureHTMLComponent);
    const wrapper = mount(<ComponentWithLogging />);
  
    expect(consoleLogSpy).toHaveBeenCalledWith('Component PureHTMLComponent is mounted');
  
    wrapper.unmount();
  
    expect(consoleLogSpy).toHaveBeenCalledWith('Component PureHTMLComponent is going to unmount');
  });
  
  

  it('should log mount and unmount messages with the name of the component when the wrapped element is the Login component', () => {
    const Login = () => <div>Login component</div>;
    Login.displayName = 'Login';
    const ComponentWithLogging = WithLogging(Login);

    const wrapper = mount(<ComponentWithLogging />);

    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
})