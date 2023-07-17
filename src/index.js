import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from 'styled-components';
import Theme from './theme/theme';
import {Globalstyle} from './theme/globalstyles';
import { BrowserRouter } from 'react-router-dom'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <Globalstyle/>
  <BrowserRouter>
       <App />
  </BrowserRouter>
    </ThemeProvider>
   
  </React.StrictMode>
);


