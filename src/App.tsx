import React, { useEffect } from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { setRate } from './ducks/actions/RateAction'
import { useDispatch } from 'react-redux'

import Header from './Components/Header'
import Wallet from './Components/Wallet'

const App = (): JSX.Element => {
 const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setRate(""))
  },[dispatch])
  const [theme, setTheme] = React.useState<DefaultTheme>(dark)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
        <Wallet />
      </ThemeProvider>
  )
}

export default App;
