import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 1.4rem;
    font-weight: bold;
    color: rgb(102, 87, 194);
    margin-top: 20px;
    border-bottom: 2px solid darkturquoise;
    padding: 0 0 1.5rem 0 ;
`

const Button = styled.button`
    background-color: white;
    color: rgb(102, 87, 194);
    border: 1px solid rgb(102, 87, 194);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
        background-color: rgb(102, 87, 194);
        color: white;
    }
`

export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance'
        let balance = this.props.showBalance ?
            <span>Account Balance: ${this.props.amount}</span>
            : null;
        
        return (
            <Section>
                {balance}
                <Button onClick={this.props.handleBalanceVisibility}>{buttonText}</Button>
            </Section>
        )
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}