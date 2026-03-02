'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#004ea1', // Financial Blue from logo
    },
    secondary: {
      main: '#ffcc00', // Golden Yellow from logo
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
