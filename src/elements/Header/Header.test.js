import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { Desktop } from '../../helpers';

jest.mock('../../helpers', () => ({
  _esModule: true,
  Desktop: jest.fn(),
  default: jest.fn(),
}));

describe('Header', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it('renders with base elements', () => {
    Desktop.mockImplementation(() => null);
    const { getByTestId, queryByTestId } = render(<Header />);
    expect(getByTestId('header'));
    expect(getByTestId('straightToBasket'));
    expect(queryByTestId('settings')).not.toBeInTheDocument();
  });

  it('renders with settings for wide screens', () => {
    Desktop.mockImplementation(({ children }) => children);
    const { getByTestId, queryByTestId } = render(<Header />);
    expect(getByTestId('header'));
    expect(getByTestId('straightToBasket'));
    expect(queryByTestId('settings')).toBeInTheDocument();
  });
});
