import React, { useState, useEffect } from 'react'
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'
import Header from './components/Header/Header'
import styled from 'styled-components'
import axios from 'axios'
import 'bootswatch/dist/flatly/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all'

const Div = styled.div`
  text-align: center;
`

const coinDataUrl = 'https://api.coinpaprika.com/v1/coins'
const coinTickerUrl = 'https://api.coinpaprika.com/v1/tickers/'
const formatedPrice = (price) => parseFloat(Number(price).toFixed(4))

function App(props) {
  // using react hooks
  const [balance, setBalance] = useState(10000)
  const [showBalance, setShowBalance] = useState(false)
  const [coinData, setCoinData] = useState([])

  const componentDidMount = async () => {
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
    setCoinData(coinPriceData)
  }

  useEffect(function () {
    // only load data if needed
    if (coinData.length === 0) {
      componentDidMount()
    } else {
      // componend did update
    }
  })

  const handleRefresh = async (changedTickerValue) => {
    console.log('clicked', changedTickerValue)
    const priceData = await axios.get(coinTickerUrl + changedTickerValue)
    const newCoinData = coinData.map((values) => {
      let newValues = { ...values }
      if (changedTickerValue === values.key) {
        newValues.price = formatedPrice(priceData.data.quotes.USD.price)
      }
      return newValues
    })

    setCoinData(newCoinData)
  }

  const handleBalanceVisibility = () => {
    setShowBalance((oldValue) => !oldValue)
  }

  // addHelicopterMoney is a const function that adds 1200 to the balance
  const addHelicopterMoney = () => {
    setBalance((oldValue) => oldValue + 1200)
  }

  const handleTransaction = (isBuy, changedTickerValue) => {
    var balanceChange = isBuy ? 1 : -1
    const newCoinData = coinData.map((values) => {
      let newValues = { ...values }
      if (changedTickerValue === values.key) {
        newValues.balance += balanceChange
        setBalance((oldBalance) => oldBalance - balanceChange * newValues.price)
      }
      return newValues
    })
    setCoinData(newCoinData)
  }

  return (
    <Div className="App">
      <Header />
      <AccountBalance
        amount={balance}
        showBalance={showBalance}
        handleBalanceVisibility={handleBalanceVisibility}
        addHelicopterMoney={addHelicopterMoney}
      />
      <CoinList
        coinData={coinData}
        showBalance={showBalance}
        handleRefresh={handleRefresh}
        handleTransaction={handleTransaction}
      />
    </Div>
  )
}

export default App
