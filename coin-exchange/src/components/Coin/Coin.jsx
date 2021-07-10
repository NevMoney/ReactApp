import React, { Component } from 'react';
import './Coin.css';
import PropTypes from 'prop-types';

export default class Coin extends Component {
    // this takes the props and adds a state, making it dynamic
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }
    // handleClick doesn't have access to "this", so in constructor you must bind it! see line 12
    handleClick(event) {
        // clicking button will reload the page, so this is used to prevent that from happening (in forms)
        event.preventDefault();

        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(oldState => {
            return {
                price: oldState.price * randomPercentage
            };
        });
    }
    render() {
        return (
            <tr className="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.state.price}</td>
                <td>
                    <form action="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </td>
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