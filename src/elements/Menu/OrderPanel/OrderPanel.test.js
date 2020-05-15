import React from 'react';
import { render } from '@testing-library/react';
import OrderPanel from './OrderPanel';

describe('OrderPanel', () => {
  const defaultProps = {
    itemName: 'Olives',
    itemPrice: '£1.99',
  };

  const getItemName = (name) => name.replace(/\s/g, '');
  const testId = `order-${getItemName(defaultProps.itemName)}`;

  const renderComponent = (props) => render(<OrderPanel {...defaultProps} {...props} />);

  it('has the base elements', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('orderPanelTitle'));
    expect(getByTestId('orderPanelDesc'));
    expect(getByTestId('orderPanelQty'));
  });

  it('renders <MenuItem /> with the correct props passed in', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId)).toHaveTextContent(defaultProps.itemName);
    expect(getByTestId(`${testId}-itemPrice`)).toHaveTextContent(defaultProps.itemPrice);
  });
});
