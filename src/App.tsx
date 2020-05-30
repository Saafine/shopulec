import React from 'react'
import './App.scss'
import { Router } from '@reach/router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Tabs from './Tabs/Tabs'
import { urls } from './consts/urls'

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
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Tabs path={urls.root()}></Tabs>
      </Router>
    </ThemeProvider>
  )
}

export default App
