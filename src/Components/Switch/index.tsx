import React from 'react'

import { Container, Title, SwitcherIcon } from './styles'

interface Props {
  toggleTheme(): void
  titleTheme: string
}

const Switch: React.FC<Props> = ({ toggleTheme, titleTheme }) => {
  return (
    <Container onClick={toggleTheme}>
      <Title>{titleTheme}</Title>
      <SwitcherIcon />
    </Container>
  )
}

export default Switch