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

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
                Account Balance: ${this.props.amount}
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
