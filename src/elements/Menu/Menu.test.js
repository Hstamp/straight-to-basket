import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu from './Menu';
import menuData from '../../data/menuData';

describe('Menu', () => {
  const getItemName = (name) => name.replace(/\s/g, '');

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

  describe('Order Panel', () => {
    it('Opens the order panel on click of a Menu Item', () => {
      const { getByTestId } = render(<Menu />);
      expect(getByTestId('orderPanel')).toHaveClass('makeStyles-orderPanel-298');
      expect(getByTestId('orderPanel')).not.toHaveClass('makeStyles-showOrderPanel-299');
      fireEvent.click(getByTestId(`item-${getItemName(menuData[0].menuItems[1].name)}`));
      expect(getByTestId('orderPanel')).toHaveClass('makeStyles-showOrderPanel-299');
      fireEvent.click(getByTestId('orderPanel'));
      expect(getByTestId('orderPanel')).not.toHaveClass('makeStyles-showOrderPanel-299');
    });
  });
});
