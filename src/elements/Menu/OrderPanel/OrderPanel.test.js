import React from 'react';
import { render } from '@testing-library/react';
import OrderPanel from './OrderPanel';

describe('OrderPanel', () => {
  it('has the base elements', () => {
    const { getByTestId } = render(<OrderPanel />);
    expect(getByTestId('orderPanelTitle'));
    expect(getByTestId('orderPanelDesc'));
    expect(getByTestId('orderPanelQty'));
  });
});
