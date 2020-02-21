import React from 'react';
import { Link } from 'react-router-dom'
import { StyledMenu } from './Menu.styled'
import LovedTracksLink from '../../LovedTracksLink'
import BacklogLink from '../../BacklogLink'
import LoginButton from '../../LoginButton'

const Menu = ({open}) => {
    return (
        <StyledMenu open={open}>
            <Link to="/">Home</Link>
            <LovedTracksLink />
            <BacklogLink />
            <LoginButton />
        </StyledMenu>
    )
}

export default Menu