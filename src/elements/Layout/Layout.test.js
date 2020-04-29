import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  it('renders with children', () => {
    const { getByTestId } = render(<Layout> Children </Layout>);
    expect(getByTestId('layout'));
    expect(getByTestId('layout')).toHaveTextContent('Children');
  });

  it('renders Header and Footer', () => {
    const { getByTestId } = render(<Layout> Children </Layout>);
    expect(getByTestId('header'));
    expect(getByTestId('footer'));
  });
});
