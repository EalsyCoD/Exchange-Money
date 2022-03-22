import React from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Header from './Components/Header'

const App = (): JSX.Element => {


  const [theme, setTheme] = React.useState<DefaultTheme>(light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
      </ThemeProvider>
  )
}

export default App;
