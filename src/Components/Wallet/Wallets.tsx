import React from 'react'


import  Wallet  from './Wallet'



import { Container } from './styles'



const Wallets = ():JSX.Element => {
    return(
        <React.Fragment>
        <Container>
            <Wallet />
        </Container>
    </React.Fragment>
    )
}

export default Wallets