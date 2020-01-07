import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
text-decoration: none;
color: #fff;
`

const BacklogLink = () => {
    return (
        <StyledLink to="/backlog">
            Backlog
        </StyledLink>
    )
}

export default BacklogLink