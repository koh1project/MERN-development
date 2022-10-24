import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Home from '../pages/index';

describe('UI tests for Home page components', () => {
  it('Should not throw an error', () => {
    expect(() => render(<Home />)).not.toThrowError();
  });
  it('Should have headings', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('Should have footer', () => {
    render(<Home />);

    // "i" stands for case insensitive
    const footer = screen.getByText(/powered by/i, {
      selector: 'footer a',
    });

    expect(footer).toBeInTheDocument();
  });
});
