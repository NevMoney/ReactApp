import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`
// the parent of the coinList is App.js
export default class CoinList extends Component {
    render() {
        const balance = this.props.showBalance ?
                        <th>Balance</th> : null;

        return (
            <Table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    {balance}
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.coinData.map(({ name, ticker, balance, price }) => (
                        <Coin
                            key={ticker}
                            handleRefresh={this.props.handleRefresh}
                            name={name}
                            ticker={ticker}
                            price={price}
                            showBalance={this.props.showBalance}
                            balance={balance}
                        />
                    ))}
                </tbody>
            </Table>
        )
    }
}
