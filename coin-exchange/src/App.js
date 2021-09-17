import React from 'react'
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'
import Header from './components/Header/Header'
import styled from 'styled-components'
import axios from 'axios'

const Div = styled.div`
  text-align: center;
`

const coinDataUrl = 'https://api.coinpaprika.com/v1/coins'
const coinTickerUrl = 'https://api.coinpaprika.com/v1/tickers/'
const formatedPrice = (price) => parseFloat(Number(price).toFixed(2))

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [],
  }

  componentDidMount = async () => {
    const res = await axios.get(coinDataUrl)
    const coinIds = res.data.slice(0, 10).map((coin) => coin.id)
    const promises = coinIds.map((id) => axios.get(coinTickerUrl + id))
    const cointData = await Promise.all(promises)
    const coinPriceData = cointData.map(function (response) {
      const coin = response.data
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatedPrice(coin.quotes.USD.price),
      }
    })
    this.setState({ coinData: coinPriceData })
  }

  handleRefresh = async (changedTickerValue) => {
    console.log('clicked', changedTickerValue)
    const priceData = await axios.get(coinTickerUrl + changedTickerValue)
    const newCoinData = this.state.coinData.map((values) => {
      let newValues = { ...values }
      if (changedTickerValue === values.key) {
        newValues.price = formatedPrice(priceData.data.quotes.USD.price)
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
