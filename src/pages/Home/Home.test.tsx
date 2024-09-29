import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home'; // Adjust the import path as needed

describe('HomePage Component', () => {
  const title = 'Home Page - React Factory CLI';
  const description = 'Web site created using rfc setup';

  // Utility to render the component with HelmetProvider
  const renderWithHelmetProvider = (ui: React.ReactElement) => {
    return render(<HelmetProvider>{ui}</HelmetProvider>);
  };

  test('renders HomePage component correctly', () => {
    renderWithHelmetProvider(<Home />);

    // Check if the title and description are rendered in the component
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
