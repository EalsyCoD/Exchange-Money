import styled from "styled-components";


export const TodayChange = styled.p`
  width: 140px;
  height: 20px;
  margin: -40px 100px 0 0;
  text-align: right;
  letter-spacing: 1px;

& img {
  height: 8px;
  margin: -20px 0 0 -110px;
}

`
export const Text = styled.p`
display: flex;
width: 10px;
margin-right: 100px;
& img {
  position: relative;
  top: 26px;
  right: -110px;
  height: 8px;
}
& {
  color: var(--${(props) => props.color})
}
`