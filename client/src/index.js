import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from 'styled-components';
import Theme from './theme/theme';
import {Globalstyle} from './theme/globalstyles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <Provider store={store}>
            <ThemeProvider theme={Theme}>
                  <Globalstyle/>
                      <BrowserRouter>
                                    <App />
                      </BrowserRouter>
            </ThemeProvider>
    </Provider>
    </LocalizationProvider>
  </React.StrictMode>
);


