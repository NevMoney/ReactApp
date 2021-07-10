import React from 'react'
import logo from './logo.svg'
import './App.css'
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coin Exchange</h1>
        </header>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </div>
    )
  }
}

export default App
