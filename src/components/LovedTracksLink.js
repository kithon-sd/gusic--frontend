import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
text-decoration:none;
`

const LovedTracksLink = () => {
    const currentUser = window.localStorage.getItem('gusic_currentUser')
    const parsed = JSON.parse(currentUser)

    if (!parsed || !currentUser) {
        return <div/>
    }

    return (
        <StyledLink href={`https://www.last.fm/user/${currentUser}/loved`}>Loved Tracks</StyledLink>
    )
}

export default LovedTracksLink