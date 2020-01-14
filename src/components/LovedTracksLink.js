import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
color: #6d6d6d;
text-decoration:none
&:hover {
    color: #1b1b1b;
    text-decoration: underline;
}
`

const LovedTracksLink = () => {
    const currentUser = window.localStorage.getItem('gusic_currentUser')

    if (!currentUser) {
        return <div/>
    }

    return (
        <StyledLink href={`https://www.last.fm/user/${currentUser}/loved`}>Loved Tracks</StyledLink>
    )
}

export default LovedTracksLink