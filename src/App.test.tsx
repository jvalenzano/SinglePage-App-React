import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Single Page Application by Jason Valenzano link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Single Page Application by Jason Valenzano/i);
  expect(linkElement).toBeInTheDocument();
});

