import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider, GlobalStyles } from '@mui/material';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);

const theme = createTheme({
      typography: {
            'fontFamily': `'Rubik', sans-serif`
      },
      palette: {
            secondary: {
                  light: '#fff',
                  main: '#FFE400',
                  contrastText: '#000',
            },
      },
})


root.render(
      <ThemeProvider theme={theme}>      
      
      <GlobalStyles 
            styles={{
                  body: { 
                        backgroundColor: '#F5F5F5',
                  },
                  '*': {
                        boxSizing: 'border-box',
                        margin: 0,
                        padding: 0,
                  },
                  '.MuiBadge-badge':{
                        borderRadius: '0px !important'
                  }
            }}
      />
      
      <App />
      </ThemeProvider>
);
