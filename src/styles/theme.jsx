import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { defaultTheme } from './defaultTheme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  body, button, input {
    font-family: 'Lato', sans-serif;
    color: #000;
    @-webkit-keyframes fadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
          to { opacity: 1; }
    }
  }

  body, p, h1, h2, h3, h4, h5, h6, hr {
   margin: 0;
  }
`;

export const Theme = ({ children }) => {
	return (
		<>
			<link rel="stylesheet" href="https://use.typekit.net/uck0zoh.css" />
			<GlobalStyle />
			<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
		</>
	);
};
