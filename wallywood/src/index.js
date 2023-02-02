import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styled/Theme'
import { GlobalStyle } from './components/styled/Global.style'
import { BrowserRouter } from 'react-router-dom'
import { PosterProvider } from './components/app/posterlist/PosterList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PosterProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <App />
    </ThemeProvider>
    </BrowserRouter>
    </PosterProvider>
  </React.StrictMode>
);

