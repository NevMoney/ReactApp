import React from 'react'
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'
import Header from './components/Header/Header'
import styled from 'styled-components'
import axios from 'axios'

const Div = styled.div`
  text-align: center;
`

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      // {
      //   name: 'Bitcoin',
      //   ticker: 'BTC',
      //   balance: 0.35,
      //   price: 35721.51,
      // },
      // {
      //   name: 'Ethereum',
      //   ticker: 'ETH',
      //   balance: 3.759,
      //   price: 2513.05,
      // },
      // {
      //   name: 'Tether',
      //   ticker: 'USDT',
      //   balance: 1000.0,
      //   price: 1.0,
      // },
      // {
      //   name: 'Ripple',
      //   ticker: 'XRP',
      //   balance: 120.0,
      //   price: 0.43,
      // },
      // {
      //   name: 'Bitcoin Cash',
      //   ticker: 'BCH',
      //   balance: 0.0,
      //   price: 298.99,
      // },
    ],
  }

  componentDidMount = async () => {
    const res = await axios.get('https://api.coinpaprika.com/v1/coins')

    //this will give us the first 10 coins in string
    const coinIds = res.data.slice(0, 10).map((coin) => coin.id)
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/'
    // because it's a string, no need for object {key}, we can have just key
    const promises = coinIds.map((id) => axios.get(tickerUrl + id))
    // returns array of promises
    const cointData = await Promise.all(promises)
    // change coinData
    const coinPriceData = cointData.map(function (response) {
      const coin = response.data
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number(coin.quotes.USD.price).toFixed(4)),
      }
    })
    // when taking the number toFixed(2), it will round to 2 decimal places but as a string
    // to convert it into a number, use parseFloat(Number(12.32132154).toFixed(2))
    // retrieve the prices
    this.setState({ coinData: coinPriceData })
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
