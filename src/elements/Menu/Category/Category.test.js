import React from 'react';
import { render } from '@testing-library/react';
import Category from './Category';
import menuData from '../../../data/menuData';

describe('Category', () => {
  const { menuItems } = menuData[1];

  it('renders with base elements', () => {
    const { getByTestId } = render(
      <Category
        menuItems={menuData[1]}
        dataTestId={menuData[1].category}
      />,
    );
    expect(getByTestId(`categoryBlock-${menuData[1].category}`));
    expect(getByTestId('categoryTitle')).toHaveTextContent('Main');
    menuItems.forEach((menuItem) => expect(getByTestId(`item-${menuItem.name.replace(/\s/g, '')}`)));
  });
});
