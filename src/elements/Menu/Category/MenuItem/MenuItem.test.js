import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MenuItem from './MenuItem';
import menuData from '../../../../data/menuData';

describe('MenuItem', () => {
  const item = menuData[1].menuItems[0];
  const getItemName = (name) => name.replace(/\s/g, '');

  const props = {
    item,
    dataTestId: item.name,
    handleClick: jest.fn(),
  };

  const renderComponent = () => render(
    <MenuItem
      {...props}
    />,
  );

  it('renders with base elements', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(`item-${getItemName(item.name)}`));
  });

  it('displays the correct item information', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(`item-${getItemName(item.name)}`)).toHaveTextContent(`${item.name}`);
    expect(getByTestId('itemPrice')).toHaveTextContent(`${item.price}`);
  });

  it('calls the handleClick function when clicked', () => {
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId(`item-${getItemName(item.name)}`));
    expect(props.handleClick).toHaveBeenCalled();
  });
});
