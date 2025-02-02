import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import BacklogLink from '../BacklogLink'
import SettingsLink from '../SettingsLink'
import LoginButton from '../LoginButton'
import LovedTracksLink from '../LovedTracksLink'

const Nav = styled.div`
display: flex;
background-color: ${props => props.theme.secondary.regular};
width: 100%;
margin: 0;
padding: 0;

@media (max-width: 1024px) {
    display: none;
}
`

const Wrapper = styled.div`
display:flex;
margin-left: auto;
`

const NavElementWrapper = styled.ul`
list-style: none;
`
const StyledNavElement = styled.li`
margin: auto 5px;
display: inline-block;
`

const DesktopNav = () => {
    return (
        <Nav>
            <Link to='/'>
                <img src="https://cdn.discordapp.com/attachments/537353785996083220/664477858319826944/home.jpg" alt="Home"/>
            </Link>
            <Wrapper>
                <NavElementWrapper>

                    <StyledNavElement>
                        <LovedTracksLink />
                    </StyledNavElement>

                    <StyledNavElement>
                        <BacklogLink/>
                    </StyledNavElement>

                    <StyledNavElement>
                        <SettingsLink />
                    </StyledNavElement>

                    <StyledNavElement>
                        <LoginButton/>
                    </StyledNavElement>
                    
                </NavElementWrapper>
            </Wrapper>
        </Nav>
    )
}

export default DesktopNav