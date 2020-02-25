import React from 'react';
import { Link } from 'react-router-dom'
import { StyledMenu } from './Menu.styled'
import LovedTracksLink from '../../LovedTracksLink'
import BacklogLink from '../../BacklogLink'
import LoginButton from '../../LoginButton'

const Menu = ({open, toggle}) => {
    return (
        <StyledMenu open={open}>
              <Link tabindex={open ? '1' : '-1'} to="/" onClick={toggle}>Home</Link>
              <LovedTracksLink tabindex={open ? '1' : '-1'} />
              <BacklogLink tabindex={open ? '1' : '-1'} toggle={toggle} />
              <LoginButton tabindex={open ? '1' : '-1'} />
        </StyledMenu>
    )
}

export default Menu