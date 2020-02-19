import React from 'react';
import { StyledMenu } from './Menu.styled'
import LovedTracksLink from '../../LovedTracksLink'
import BacklogLink from '../../BacklogLink'
import LoginButton from '../../LoginButton'

const Menu = ({open}) => {
    return (
        <StyledMenu open={open}>
            <LovedTracksLink />
            <BacklogLink />
            <LoginButton />
        </StyledMenu>
    )
}

export default Menu