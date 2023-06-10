import { render, screen } from '@testing-library/react';
import mockHeader from '@/components/Header/Header.mock';
import { App } from './App';

jest.mock('@/components/Header', () => ({
  __esModule: true,
  default: mockHeader,
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
