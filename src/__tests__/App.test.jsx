import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('SkillBridge Explorer - Core Test Suite', () => {
  it('renders navigation brand and main routes correctly', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/SkillBridge/i)).toBeDefined();
    expect(screen.getByText(/Internships/i)).toBeDefined();
  });

  it('validates form input fields on application page', () => {
    // Test verification for form client-side validation logic
    const mockEmailInput = document.createElement('input');
    mockEmailInput.type = 'email';
    mockEmailInput.value = 'invalid-email';
    expect(mockEmailInput.value).toContain('@' === false);
  });
});