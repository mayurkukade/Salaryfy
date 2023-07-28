import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: '#005F59', // Change this to your primary color
    },
    secondary: {
      main: '#ff00ff', // Change this to your secondary color
    },
  },
  typography: {
    button: { textTransform: 'none' }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
