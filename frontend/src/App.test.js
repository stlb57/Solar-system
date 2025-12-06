import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mission control header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mission Control/i);
  expect(linkElement).toBeInTheDocument();
});