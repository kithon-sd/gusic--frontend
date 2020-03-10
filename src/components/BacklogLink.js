import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
color: #000;
text-decoration:none
&:hover {
    text-decoration: underline;
}
`

const BacklogLink = (props) => {
    const currentUser = window.localStorage.getItem('gusic_currentUser')
    const parsed = JSON.parse(currentUser)

    if (!parsed || !currentUser) {
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