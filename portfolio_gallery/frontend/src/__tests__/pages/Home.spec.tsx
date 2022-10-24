import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { MainFooter } from '../../components/footers/MainFooter/MainFooter';
import { MainHeader } from '../../components/headers/MainHeader/MainHeader';
import Home from '../../pages/index';

describe('UI tests for Home page components', () => {
  it('Should not throw an error', () => {
    expect(() => render(<Home />)).not.toThrowError();
  });
  it('Should have headings', () => {
    const mockText = 'Lets post your portfolio';
    render(<MainHeader text={mockText} />);

    expect(screen.getByText(mockText)).not.toBeNull();
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });

  it('Should have footer', () => {
    const mockText = 'Copyright 2022';
    render(<MainFooter text={mockText} />);

    expect(screen.getByText(mockText)).not.toBeNull();
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });
});
