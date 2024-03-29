import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  --Green: hsl(163, 72%, 41%);
  --Red: hsl(356, 69%, 56%);
}

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.text};
    transition: background-color 500ms linear;
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    font-weight: 400;
  }
`