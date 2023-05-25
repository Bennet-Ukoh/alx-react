import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render} from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
    });

    it('renders a div with the class App-header', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('app-header')).toBeInTheDocument();
    });

    it('renders a div with the class App-body', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('app-header')).toBeInTheDocument();
    });

    it('renders a div with the class App-body', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('app-body')).toBeInTheDocument();
      });

      it('renders a div with the class App-footer', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('app-footer')).toBeInTheDocument();
      });
});