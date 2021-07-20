import { render, screen } from '@testing-library/react';
import App from './App';

test('Enter a location to check the weather', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Enter a location to check the weather/i
  );
  expect(linkElement).toBeInTheDocument();
});
