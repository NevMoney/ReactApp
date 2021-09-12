import React from 'react'
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'
import Header from './components/Header/Header'
import styled from 'styled-components'

const Div = styled.div`
  text-align: center;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 35721.51,
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 2513.05,
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0,
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.43,
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 298.99,
        },
      ],
    }
  }
  render() {
    return (
      <Div className="App">
        <Header />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </Div>
    )
  }
}

export default App
