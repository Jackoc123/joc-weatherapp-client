import { render, screen } from '@testing-library/react';
import WeatherTitle from './WeatherTitle';

test('Temperature', () => {
  render(<WeatherTitle title='Temperature' />);
  const titleElement = screen.getByText(/Temperature/i);
  expect(titleElement).toBeInTheDocument();
});
