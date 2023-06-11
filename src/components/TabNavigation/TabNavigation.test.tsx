import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TabNavigation from './TabNavigation';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
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
});