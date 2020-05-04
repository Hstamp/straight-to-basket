import React from 'react';
import { render } from '@testing-library/react';
import MenuItem from './MenuItem';
import menuData from '../../../../data/menuData';

describe('MenuItem', () => {
  const item = menuData[1].menuItems[0];

  const renderComponent = () => render(
    <MenuItem
      item={item}
      dataTestId={item.name}
    />,
  );

  it('renders with base elements', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(`item-${item.name.replace(/\s/g, '')}`));
  });

  it('displays the correct item information', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(`item-${item.name.replace(/\s/g, '')}`)).toHaveTextContent(`${item.name}`);
    expect(getByTestId('itemPrice')).toHaveTextContent(`${item.price}`);
  });
});
