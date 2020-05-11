import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const renderComponent = (children, props) => render(
    <Button {...props}>
      {children}
    </Button>,
  );

  it('renders with base elements', () => {
    const { getByTestId } = renderComponent('Plus');
    expect(getByTestId('button'));
  });

  it('renders with the correct text passed via children', () => {
    const { getByTestId } = renderComponent('Minus');
    expect(getByTestId('button')).toHaveTextContent('Minus');
  });
});
