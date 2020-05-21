import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OrderPanel from './OrderPanel';

describe('OrderPanel', () => {
  const defaultProps = {
    itemName: 'Olives',
    itemPrice: '£1.99',
    handleClose: jest.fn(),
  };

  const testId = `order-${defaultProps.itemName.replace(/\s/g, '')}`;

  const renderComponent = (props) => render(<OrderPanel {...defaultProps} {...props} />);

  it('has the base elements', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('orderPanelTitle'));
    expect(getByTestId('orderPanelQty'));
  });

  it('renders <MenuItem /> with the correct props passed in', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId)).toHaveTextContent(defaultProps.itemName);
    expect(getByTestId(`${testId}-itemPrice`)).toHaveTextContent(defaultProps.itemPrice);
  });

  it('button should be disabled on first render', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('addToOrderButton')).toHaveClass('Mui-disabled');
  });

  it(`correctly increases and descreses the quantity of the order using the buttons,
      and the add to order button is disabled when qty is 0`, () => {
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId('qtyPlusButton'));
    expect(getByTestId('addToOrderButton')).toHaveTextContent('[1] Add To Order');
    expect(getByTestId('addToOrderButton')).not.toHaveClass('Mui-disabled');

    fireEvent.click(getByTestId('qtyMinusButton'));
    expect(getByTestId('addToOrderButton')).toHaveTextContent('[0] Add To Order');
    expect(getByTestId('addToOrderButton')).toHaveClass('Mui-disabled');
  });

  it('add to order button should call handleClose when its not disabled and clicked', () => {
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId('qtyPlusButton'));
    fireEvent.click(getByTestId('addToOrderButton'));
    expect(defaultProps.handleClose).toHaveBeenCalled();
  });

  it('close button should call handleClose when clicked', () => {
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId('closeButton'));
    expect(defaultProps.handleClose).toHaveBeenCalled();
  });
});
