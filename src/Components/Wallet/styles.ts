import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto 10px auto;
  padding: 0.5em;
  border-radius: 0.938em;
  background: #00008b;
  @media (min-width: 1024px) {
    width: 50em;
  }
`

export const ContainerFilter = styled.div`
  width: 85%;
  margin-bottom: 10px;
  padding-left: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #00008b;
  &:last-child {
    margin-bottom: 0;
  }
`
export const Label = styled.label`
  font-size: 13px;
`
export const Select = styled.select`
  width: 60%;
  color: #fff;
  padding: 0.9em 1.5em;
  border-radius: 0.625em;
  background-color: #0000FF;
  background-repeat: no-repeat;
  background-position: right 5px center;
  background-size: 24px;
  appearance: none;
  cursor: pointer;
  @media (min-width: 700px) {
    width: 40%;
  }
`
export const Select2 = styled.select`
  width: 60%;
  color: #fff;
  padding: 0.9em 1.5em;
  border-radius: 0.625em;
  background-color: #0000FF;
  background-repeat: no-repeat;
  background-position: right 5px center;
  background-size: 24px;
  appearance: none;
  cursor: pointer;
  @media (min-width: 700px) {
    width: 40%;
  }
`

export const WalletConverter = styled.input`
position: absolute;
width: 220px;
height: 50px;
margin: 200px 0 0 85px;

`

export const Option = styled.option``
export const Option2 = styled.option``