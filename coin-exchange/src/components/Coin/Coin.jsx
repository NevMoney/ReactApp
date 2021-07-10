import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TD = styled.td`
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
                <TD>{this.props.name}</TD>
                <TD>{this.props.ticker}</TD>
                <TD>${this.state.price}</TD>
                <TD>
                    <form action="#" method="POST">
                        <Button onClick={this.handleClick}>Refresh</Button>
                    </form>
                </TD>
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