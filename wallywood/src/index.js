import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styled/Theme'
import { GlobalStyle } from './components/styled/Global.style'
import { BrowserRouter } from 'react-router-dom'
import { PosterProvider } from './components/app/posterlist/PosterList';
import { AuthProvider } from './components/providers/AuthProvider';
import { CartProvider } from './components/providers/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PosterProvider>
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <App />
    </ThemeProvider>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
    </PosterProvider>
  </React.StrictMode>
);

