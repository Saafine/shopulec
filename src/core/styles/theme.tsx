import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#c62828',
    },
    secondary: {
      main: '#ff5252',
    },
  },
  overrides: {
    MuiFormControlLabel: {
      label: {
        fontSize: '1.2rem',
      },
    },
  },
})
