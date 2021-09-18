import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`

const Img = styled.img`
  height: 4rem;
  pointer-events: none;
  animation: App-logo-spin infinite 20s linear;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 38px;
  color: white;
`

export default class Header extends Component {
    render() {
        return (
            <AppHeader>   
                <Img src={logo} alt="logo" />
                <H1>Coin Exchange</H1>
            </AppHeader>
        )
    }
}
