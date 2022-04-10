import React, { useEffect } from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { setRate } from './ducks/actions/RateAction'
import { useDispatch } from 'react-redux'

import Header from './Components/Header'
import Wallets from './Components/Wallet/Wallets'

const App = (): JSX.Element => {

 const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setRate())
  },[])

  const [theme, setTheme] = React.useState<DefaultTheme>(dark)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
        <Wallets />
      </ThemeProvider>
  )
}

export default App;
