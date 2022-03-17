import { render, screen } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App />); // fake DOM
  const linkElement = screen.getByText( /hello/i );
  expect(linkElement).toBeInTheDocument();
});
