import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Menu from './Menu';
import menuData from '../../data/menuData';

describe('Menu', () => {
  const getItemName = (name) => name.replace(/\s/g, '');

  afterEach(cleanup);

  const renderComponent = () => render(<Menu />);

  it('renders with base elements', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('menu'));
    expect(getByTestId('menuImage'));
    expect(getByTestId('menuAllItems'));
  });

  it('renders a list of menu categories', () => {
    const { getByTestId } = renderComponent();
    menuData.forEach((categoryBlock) => expect(getByTestId(`categoryBlock-${categoryBlock.category}`)));
  });

  describe('Order Panel', () => {
    it('Opens the order panel on click of a Menu Item', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('orderPanel')).toHaveClass('makeStyles-orderPanel-296');
      expect(getByTestId('orderPanel')).not.toHaveClass('makeStyles-showOrderPanel-299');
      fireEvent.click(getByTestId(`item-${getItemName(menuData[0].menuItems[1].name)}`));
      expect(getByTestId('orderPanel')).toHaveClass('makeStyles-showOrderPanel-297');
      fireEvent.click(getByTestId('orderPanel'));
      expect(getByTestId('orderPanel')).not.toHaveClass('makeStyles-showOrderPanel-299');
    });

    it('Opens an order panel with the right menu item name and price', () => {
      const menuItem = `item-${getItemName(menuData[0].menuItems[1].name)}`;
      const { getByTestId } = renderComponent();
      fireEvent.click(getByTestId(menuItem));
      expect(getByTestId(menuItem)).toHaveTextContent(menuData[0].menuItems[1].name);
      expect(getByTestId(`${menuItem}-itemPrice`)).toHaveTextContent(menuData[0].menuItems[1].price);
    });
  });
});
