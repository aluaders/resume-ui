import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TemplateName from './TemplateName';
import { Loading } from './TemplateName.load';

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigation,
  useLocation: () => ({
    pathname: '/'
  }),
}));

describe('<TemplateName />', () => {
  test('it should mount', () => {
    render(<TemplateName />);
    
    const templateName = screen.getByTestId('TemplateName');

    expect(templateName).toBeInTheDocument();
  });

  test('is should mount loading', () => {
    render(<Loading />);
    
    const loading = screen.getByTestId('LoadingTemplateName');

    expect(loading).toBeInTheDocument();
  })
});