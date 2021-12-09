import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../../components/App/App';

describe('<App/>', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkEl = screen.getByText(/learn react/i);
    expect(linkEl).toBeInTheDocument();
  });

  test('renders initial message', () => {
    render(<App />);
    const textEl = screen.getByText(/edit and save to reload\./i);
    expect(textEl).toBeInTheDocument();
  });
});
