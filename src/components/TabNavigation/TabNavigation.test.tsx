import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TabNavigation from './TabNavigation';
import { Paths } from '@/utils/routes/paths';
import { Loading } from './TabNavigation.load';

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigation,
  useLocation: () => ({
    pathname: '/'
  }),
}));

describe('<TabNavigation />', () => {
  test('it should mount', () => {
    render(<TabNavigation />);
    
    const tabNavigation = screen.getByTestId('TabNavigation');

    expect(tabNavigation).toBeInTheDocument();
  });

  test('is should mount loading', () => {
    render(<Loading />);
    
    const loading = screen.getByTestId('LoadingTabNavigation');

    expect(loading).toBeInTheDocument();
  })

  test('it should update navigation', () => {
    render(<TabNavigation />);

    const tabButton = screen.getByTestId('menu-tab-Contact');
    fireEvent.click(tabButton);

    expect(mockNavigation).toBeCalledWith(Paths.Contact);
  });
});