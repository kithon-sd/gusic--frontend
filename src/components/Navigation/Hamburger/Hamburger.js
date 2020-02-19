import React from 'react'
import { StyledBurger } from './Hamburger.styled'

const Hamburger = ({open, toggle}) => {
    return (
        <StyledBurger open={open} onClick={toggle}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default Hamburger