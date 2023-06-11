import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import mockMenuNavigation from '@/components/MenuNavigation/MenuNavigation.mock';
import type { MenuNavigationProps } from '@/components/MenuNavigation';
import Loading from './Header.load';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('@/components/MenuNavigation', () => ({
  __esModule: true,
  default: (props: MenuNavigationProps) => mockMenuNavigation(props),
}));

describe('<Header />', () => {
  test('it should mount', () => {
    render(<Header />);
    
    const header = screen.getByTestId('Header');

    expect(header).toBeInTheDocument();
  });

  test('is should mount loading', () => {
    render(<Loading />);
    
    const loading = screen.getByTestId('LoadingHeader');

    expect(loading).toBeInTheDocument();
  })
});