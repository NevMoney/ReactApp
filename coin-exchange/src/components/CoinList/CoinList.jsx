import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`
// the parent of the coinList is App.js
export default function CoinList(props) {
    const balance = props.showBalance ? <th>Balance</th> : null;

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
                {props.coinData.map(({ key, name, ticker, balance, price }) => (
                    <Coin
                        key={key}
                        id={key}
                        handleRefresh={props.handleRefresh}
                        name={name}
                        ticker={ticker}
                        price={price}
                        showBalance={props.showBalance}
                        balance={balance}
                    />
                ))}
            </tbody>
        </Table>
    )
}
