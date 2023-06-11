import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuNavigation from './MenuNavigation';
import { Paths } from '@/utils/routes/paths';
import Loading from './MenuNavigation.load';

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigation,
  useLocation: () => jest.fn(),
}));

describe('<MenuNavigation />', () => {
  test('it should mount', () => {
    render(<MenuNavigation />);
    
    const menuNavigation = screen.getByTestId('MenuNavigation');

    expect(menuNavigation).toBeInTheDocument();
  });

  test('is should mount loading', () => {
    render(<Loading />);
    
    const loading = screen.getByTestId('LoadingMenuNavigation');

    expect(loading).toBeInTheDocument();
  })

  test('it should update navigation', () => {
    render(<MenuNavigation />);

    const menuButton = screen.getByTestId('menu-nav-button');
    fireEvent.click(menuButton);

    const menuItem = screen.getByTestId('menu-item-About');
    fireEvent.click(menuItem);

    expect(mockNavigation).toBeCalledWith(Paths.About);
  });
});