import React from 'react';
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
// this allows for styling of the numbers to show up as currency
var formated = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

export default function AccountBalance (props) {
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance'
    let balance = props.showBalance ?
        <span>Cash Balance: {props.amount}</span>
        : '\u00A0';
    
    // '\u00A0' is a non-breaking space so that the page doesn't jump up and down as things are added and removed
    let helicopterMoney = null
    // to add class to the button
    // const buttonClass = 'btn ' + (props.showBalance ? 'btn-danger' : 'btn-info')
    
    if (props.showBalance) {
        helicopterMoney = <Button
            onClick={props.addHelicopterMoney}
            // then add class to the button
            // className={buttonClass}
        >
            <i className="fas fa-money-bill-wave-alt"></i> Money Printer Go Brrrr
        </Button>
        // then implement formated to the balance amount
        balance = <span>Cash Balance: {formated.format(props.amount)}</span>
    }
    
    return (
        <>
            <Section>
                {balance}
            </Section>
            <Section>
                <Button
                    onClick={props.handleBalanceVisibility}
                    // className={buttonClass}
                >
                    {buttonText}
                </Button>
                {helicopterMoney}
            </Section>
        </>
    )
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}