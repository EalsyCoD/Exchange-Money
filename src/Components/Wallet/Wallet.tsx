import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWallet } from '../../ducks/actions/WalletAction'
import { RootState } from '../../types'


import { ContainerFilter, Label, Select, Select2, Option, Option2, WalletConverter } from './styles'

const Wallet = (): JSX.Element => {
    const dispatch = useDispatch()
     
    const isWallet = useSelector((state: RootState) => state.filter.wallet)
    const rates = useSelector((state: RootState) => state.rate)

    return (
        <React.Fragment>
          <ContainerFilter>
            <Label>Wallets</Label>
            <Select
              name="select"
              defaultValue={isWallet}
              onChange={(e) => {
                dispatch(setWallet(e.target.value))
              }}
            >
                {isWallet.map((el,i) => (
                    <Option key={i} value={el}>
                        {el}
                    </Option>
                ))}
                </Select>
            <Select2
              name="select"
              defaultValue={isWallet}
              onChange={(e) => {
                dispatch(setWallet(e.target.value))
              }}
            >
                {isWallet.map((el,i) => (
                    <Option2 key={i} value={el}>
                        {el}
                    </Option2>
                ))}
            </Select2>
            <WalletConverter onChange={(e) => e.target.value} >
              
          </WalletConverter>
          </ContainerFilter>
        </React.Fragment>
      )
    }
{/* {isWallet.map((el,i) => (
                    <Option2 key={i} value={el}>
                        {el}
                    </Option2>
                ))} */}

export default Wallet