import { createMuiTheme } from '@material-ui/core/styles';
import colorPalette from './colorPalette';

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    common: {
      white: '#ffffff',
      offWhite: '#f5f5f5f5',
      accent: colorPalette.accent,
      grey: colorPalette.grey,
    },
    primary: {
      main: colorPalette.primary,
      dark: colorPalette.primaryDark,
      contrastText: '#000000',
    },
    secondary: {
      main: colorPalette.secondary,
      dark: colorPalette.secondaryDark,
      contrastText: colorPalette.contrastWhite,
    },
    background: {
      default: colorPalette.background,
      paper: colorPalette.surface,
    },
    error: {
      main: colorPalette.error,
    },
  },
  typography: {
    h1: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#434343',
    },
    h2: {
      fontSize: '20px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: '#434343',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '20px',
      color: '#000000',
    },
    body2: {
      fontSize: '20px',
      lineHeight: '26px',
      color: '#000000',
    },
  },
  overrides: {},
});


export default theme;
