import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuNavigation from './MenuNavigation';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => jest.fn(),
}));

describe('<MenuNavigation />', () => {
  test('it should mount', () => {
    render(<MenuNavigation />);
    
    const menuNavigation = screen.getByTestId('MenuNavigation');

    expect(menuNavigation).toBeInTheDocument();
  });
});