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

const SettingsLink = (props) => {
    const currentUser = window.localStorage.getItem('gusic_currentUser')
    const parsed = JSON.parse(currentUser)

    if (!currentUser || !parsed) {
        return <></>
    }
    
    if (props.toggle) {
        return (
            <StyledLink to="/settings" onClick={props.toggle}>
                Settings
            </StyledLink>
        )
    }
    
    return (
        <StyledLink to="/settings">
            Settings
        </StyledLink>
    )
}

export default SettingsLink