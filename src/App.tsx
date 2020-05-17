import React from 'react'
import './App.scss'
import AddList from './new-list/AddList'
import { Router } from '@reach/router'
import { urls } from './consts/urls'
import List from './new-list/List'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AddList path={urls.root()}></AddList>
        <List path={urls.list()}></List>
      </Router>
    </ThemeProvider>
  )
}

export default App
