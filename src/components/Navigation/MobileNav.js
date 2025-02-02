import React, { useState } from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger/Hamburger'
import Menu from './Menu/Menu'

const TopWrapper = styled.div`
background-color: ${props => props.theme.secondary.regular};
padding-top: 1em;
padding-bottom: 1em;

@media (min-width: 1025px) {
  display: none;
}
`

const MobileNav = () => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <TopWrapper>
          <Hamburger open={open} toggle={toggleMenu} />
          <Menu open={open} toggle={toggleMenu} />
        </TopWrapper>
    )
}

export default MobileNav