import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid rgb(45, 58, 79);
    width: 25vh;
    box-shadow: 2px 2px 7px 2px darkgray;
`

const Button = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 2px solid darkturquoise;
    color: darkturquoise;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

export default class Coin extends Component {
    
    // props come from the parent component: CoinList
    handleClick = (e) => {
        e.preventDefault()
        this.props.handleRefresh(this.props.ticker)
    }
    
    render() {
        const balance = this.props.showBalance ? <Td>{this.props.balance}</Td> : null
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                {balance}
                <Td>
                    <form action="#" method="POST">
                        <Button onClick={this.handleClick}>Refresh</Button>
                    </form>
                </Td>
            </tr>
        )
    }
}

// defining property types for the items we're adding (coins)
Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}