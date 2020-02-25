import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
color: #6d6d6d;
text-decoration:none
&:hover {
    color: #1b1b1b;
    text-decoration: underline;
}
`

const BacklogLink = (props) => {
    const currentUser = window.localStorage.getItem('gusic_currentUser')

    if (!currentUser) {
        return (
            <></>
        )
    } 
    
    if (props.toggle) {
        return (
            <StyledLink to="/backlog" onClick={props.toggle}>
                Backlog
            </StyledLink>
        )
    }
    
    return (
        <StyledLink to="/backlog">
            Backlog
        </StyledLink>
    )
}

export default BacklogLink