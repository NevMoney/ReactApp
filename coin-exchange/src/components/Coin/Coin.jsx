import React from 'react';
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

export default function Coin(props) {
    
    const handleClick = (e) => {
        e.preventDefault()
        props.handleRefresh(props.id)
    }
    
    const balance = props.showBalance ? <Td>{props.balance}</Td> : null
    
    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            {balance}
            <Td>
                <form action="#" method="POST">
                    <Button onClick={handleClick}>Refresh</Button>
                </form>
            </Td>
        </tr>
    )
}

// defining property types for the items we're adding (coins)
Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}