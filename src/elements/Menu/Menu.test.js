import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';
import menuData from '../../data/menuData';

describe('Menu', () => {
  it('renders with base elements', () => {
    const { getByTestId } = render(<Menu />);
    expect(getByTestId('menu'));
    expect(getByTestId('menuImage'));
    expect(getByTestId('menuAllItems'));
  });

  it('renders a list of menu categories', () => {
    const { getByTestId } = render(<Menu />);
    menuData.forEach((categoryBlock) => expect(getByTestId(`categoryBlock-${categoryBlock.category}`)));
  });

  xit('displays the category of the correct menu items', () => {
    const { getByTestId } = render(<Menu />);
  });
});
