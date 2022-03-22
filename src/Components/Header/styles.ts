import styled from 'styled-components'

export const Container = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 125px 35px 100px 35px;
  @media (min-width: 560px) {
    width: 47rem;
  }
`

export const Title = styled.h1`
  font-size: 26px;
  color: ${(props) => props.theme.colors.text};
  letter-spacing: 2px;
`