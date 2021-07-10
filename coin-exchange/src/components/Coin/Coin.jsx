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
    }
    // method to execute different things, including API
    componentDidMount() {
        const callback = () => {
            // set the state to new random value
            const randomPercentage = 0.995 + Math.random() * 0.01;

            // DON'T DO THIS to change state:
            // this.state.price = this.state.price * randomPercentage;

            // DO THIS to change state:
            this.setState(oldState => {
                return {
                    price: oldState.price * randomPercentage
                };
            });

            // OR THIS (oldState.price becomes this.state.price and be used as read-only value)
            // it is better to go with function, so stick with it(see line 23)
            // this.setState({price: oldState.price * randomPercentage})

        }
        setInterval{callback, 1000}
    }
    render() {
        return (
            <tr className="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.state.price}</td>
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