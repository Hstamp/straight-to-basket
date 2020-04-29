import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders with base elements', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer'));
    expect(getByTestId('footerGithubIcon'));
  });
});
