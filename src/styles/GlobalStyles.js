// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* ========================================================
     1. CSS Reset and Box-Sizing
  ======================================================== */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ========================================================
     2. CSS Variables for Consistent Color Palette and Fonts
  ======================================================== */
  :root {
    /* Color Palette */
    --color-background: #1e1e1e;
    --color-text: #ffffff;
    --color-primary: #f39c12; /* Orange */
    --color-secondary: #2980b9; /* Blue */
    --color-accent: #e74c3c; /* Red */
    --color-muted: #bdc3c7;
    --color-dark: #2c3e50;
    --color-hover: #34495e;

    /* Typography */
    --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-secondary: 'Roboto', sans-serif;

    /* Font Sizes */
    --font-size-small: 0.9em;
    --font-size-medium: 1em;
    --font-size-large: 1.5em;
    --font-size-xlarge: 2em;
    --font-size-xxlarge: 2.5em;

    /* Transition Durations */
    --transition-duration: 0.3s;
    --transition-ease: ease-in-out;
  }

  /* ========================================================
     3. Global Body Styles
  ======================================================== */
  body {
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: var(--font-primary);
    overflow: hidden; /* Prevent scrolling for slide-like experience */
    transition: background-color var(--transition-duration) var(--transition-ease),
                color var(--transition-duration) var(--transition-ease);
  }

  /* ========================================================
     4. Typography Styles
  ======================================================== */
  h1, h2, h3, p {
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: var(--font-size-xxlarge);
    font-family: var(--font-primary);
  }

  h2 {
    font-size: var(--font-size-xlarge);
    font-family: var(--font-primary);
  }

  h3 {
    font-size: var(--font-size-large);
    font-family: var(--font-primary);
  }

  p {
    font-size: var(--font-size-medium);
    line-height: 1.4;
    max-width: 800px;
  }

  /* ========================================================
     5. Link Styles
  ======================================================== */
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: color var(--transition-duration) var(--transition-ease);
  }

  a:hover, a:focus {
    color: var(--color-primary);
    outline: none;
  }

  /* ========================================================
     6. Button Styles
  ======================================================== */
  button, .button {
    padding: 10px 20px;
    background-color: var(--color-primary);
    color: var(--color-text);
    border: none;
    border-radius: 25px;
    font-size: var(--font-size-medium);
    cursor: pointer;
    transition: background-color var(--transition-duration) var(--transition-ease),
                transform 0.2s;
    font-family: var(--font-primary);
  }

  button:hover, .button:hover {
    background-color: var(--color-secondary);
    transform: translateY(-3px);
  }

  button:active, .button:active {
    transform: translateY(0);
  }

  /* ========================================================
     7. Focus Styles for Accessibility
  ======================================================== */
  :focus {
    outline: 2px dashed var(--color-primary);
    outline-offset: 4px;
  }

  /* ========================================================
     8. Smooth Transitions for Interactive Elements
  ======================================================== */
  * {
    transition: all var(--transition-duration) var(--transition-ease);
  }

  /* ========================================================
     9. Responsive Design Enhancements
  ======================================================== */
  @media (max-width: 768px) {
    h1 {
      font-size: var(--font-size-xlarge);
    }

    h2 {
      font-size: var(--font-size-large);
    }

    h3 {
      font-size: var(--font-size-medium);
    }

    p {
      font-size: var(--font-size-small);
      max-width: 100%;
    }

    button, .button {
      padding: 8px 16px;
      font-size: var(--font-size-small);
    }
  }
`;

export default GlobalStyles;
