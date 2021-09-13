import React from 'react'
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'
import Header from './components/Header/Header'
import styled from 'styled-components'

const Div = styled.div`
  text-align: center;
`

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.35,
        price: 35721.51,
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 3.759,
        price: 2513.05,
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 1000.0,
        price: 1.0,
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 120.0,
        price: 0.43,
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0.0,
        price: 298.99,
      },
    ],
  }

  handleRefresh = (changedTickerValue) => {
    const newCoinData = this.state.coinData.map((values) => {
      let newValues = { ...values }
      if (changedTickerValue === values.ticker) {
        const randomPercent = 0.995 + Math.random() * 0.01
        newValues.price *= randomPercent
      }
      return newValues
    })
    this.setState({ coinData: newCoinData })
  }

  handleBalanceVisibility = () => {
    this.setState({ showBalance: !this.state.showBalance })
  }
  render() {
    return (
      <Div className="App">
        <Header />
        <AccountBalance
          amount={this.state.balance}
          showBalance={this.state.showBalance}
          handleBalanceVisibility={this.handleBalanceVisibility}
        />
        <CoinList
          coinData={this.state.coinData}
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh}
        />
      </Div>
    )
  }
}

export default App
