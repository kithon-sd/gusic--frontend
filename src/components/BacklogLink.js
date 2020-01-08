import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
text-decoration: none;
color: #fff;
`

const BacklogLink = () => {
    const currentUser = window.localStorage.getItem('gusic_currentUser')

    if (!currentUser) {
        return (
            <></>
        )
    }
    return (
        <StyledLink to="/backlog">
            Backlog
        </StyledLink>
    )
}

export default BacklogLink