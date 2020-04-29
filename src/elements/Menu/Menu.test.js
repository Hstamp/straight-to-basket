import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

describe('Menu', () => {
  it('renders with base elements', () => {
    const { getByTestId } = render(<Menu />);
    expect(getByTestId('fullMenu'));
    expect(getByTestId('fullMenuImage'));
    expect(getByTestId('fullMenuTitle'));
    expect(getByTestId('fullMenuContent'));
  });

  xit('renders a list of menu items', () => {
    const { getByTestId } = render(<Menu />);
  });

  xit('displays the category of the correct menu items', () => {
    const { getByTestId } = render(<Menu />);
  });
});
