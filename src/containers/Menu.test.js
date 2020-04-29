import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

describe('Menu', () => {
  it('renders with base elements', () => {
    const { getByTestId } = render(<Menu />);
    expect(getByTestId('menuLayout'));
    expect(getByTestId('header'));
    expect(getByTestId('footer'));
  });
});
