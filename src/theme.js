import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff'
    },
    secondary: {
      main: '#6c757d'
    },
    error: {
      main: '#dc3545'
    },
    background: {
      default: '#f4f4f4'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(',')
  }
});

export default theme;
