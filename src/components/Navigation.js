import React from 'react'
import styled from 'styled-components'

import BacklogLink from './BacklogLink'
import LoginButton from './LoginButton'

//backlog button
//log button
//home

const Nav = styled.div`
display: flex;
background-color: #00e676;
width: 100%;
margin: 0;
padding: 0;
`

const Navigation = () => {
    return (
        <Nav>
            <BacklogLink />
            <LoginButton />
        </Nav>
    )
}

export default Navigation