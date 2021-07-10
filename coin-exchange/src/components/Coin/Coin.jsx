import React, { Component } from 'react';
import './Coin.css';
import PropTypes from 'prop-types';

export default class Coin extends Component {
    render() {
        return (
            <tr className="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.props.price}</td>
            </tr>
        )
    }
}

// definint property types for the items we're adding (coins)
Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}