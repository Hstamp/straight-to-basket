import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MenuItem from './MenuItem';
import menuData from '../../../data/menuData';

describe('MenuItem', () => {
  const item = menuData[1].menuItems[0];
  const getItemName = (name) => name.replace(/\s/g, '');
  const testId = `item-${getItemName(item.name)}`;

  const props = {
    item,
    dataTestId: `item-${item.name}`,
    handleClick: jest.fn(),
  };

  const renderComponent = () => render(
    <MenuItem
      {...props}
    />,
  );

  it('renders with base elements', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId));
  });

  it('displays the correct item information', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId)).toHaveTextContent(`${item.name}`);
    expect(getByTestId(`${testId}-itemPrice`)).toHaveTextContent(`${item.price}`);
  });

  it('calls the handleClick function when clicked', () => {
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId(testId));
    expect(props.handleClick).toHaveBeenCalledWith(item.name, item.price);
  });
});
