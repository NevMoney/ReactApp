import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid rgb(45, 58, 79);
    width: 16vh;
    box-shadow: 2px 2px 7px 2px lightgray;
`

const TdAction = styled.td`
    border: 1px solid rgb(45, 58, 79);
    width: 34vh;
    box-shadow: 2px 2px 7px 2px lightgray;
`

const TdName = styled.td`
    border: 1px solid rgb(45, 58, 79);
    width: 24vh;
    box-shadow: 2px 2px 7px 2px lightgray;
`


const Button = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 2px solid darkturquoise;
    color: darkturquoise;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 0.75em;
    &:hover {
        background: darkturquoise;
        color: white;
    }
`;

const BuyButton = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 2px solid limegreen;
    color: limegreen;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 0.75em;
    &:hover {
        background: limegreen;
        color: white;
    }
`;

const SellButton = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 2px solid orangered;
    color: orangered;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 0.75em;
    &:hover {
        background: orangered;
        color: white;
    }
`;

export default function Coin(props) {
    
    const handleRefresh = (e) => {
        e.preventDefault()
        props.handleRefresh(props.id)
    }

    const handleBuy = (e) => {
        e.preventDefault()
        props.handleTransaction(true, props.id)
    }

    const handleSell = (e) => {
        e.preventDefault()
        props.handleTransaction(false, props.id)
    }
    
    const balance = <Td>{props.showBalance ? props.balance : '-'}</Td>
    
    return (
        <tr>
            <TdName>{props.name}</TdName>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            {balance}
            <TdAction>
                <form action="#" method="POST">
                    <Button onClick={handleRefresh}>
                        <i class="fas fa-sync-alt"></i>
                    </Button>
                    <BuyButton onClick={handleBuy}>
                        Buy
                    </BuyButton>
                    <SellButton onClick={handleSell}>
                        Sell
                    </SellButton>
                </form>
            </TdAction>
        </tr>
    )
}

// defining property types for the items we're adding (coins)
Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}