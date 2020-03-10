import React, { useState } from 'react'
import styled from 'styled-components'

import AlbumCard from './AlbumCard'

const StyledButton = styled.button`
height: 50%;
margin-left: 5px;
margin-top: auto;
margin-bottom: auto;
background-color: ${props => props.theme.primary.dark};
color: ${props => props.theme.text.special};
border: none;
outline: 1px solid ${props => props.theme.secondary.regular};
&:hover {
    outline: 3px solid ${props => props.theme.secondary.regular}
}
`

const AlbumWrapper = styled.li`
display: flex;
`


const BacklogList = (props) => {
    const {
        backlog,
        removeFromBacklog,
        currentUser
    } = props

    const [backlogData, setBacklogData] = useState(backlog)

    const handleClick = (name, title) => {
        removeFromBacklog(name, title)
        const newBacklog = backlogData.filter(album => album.title !== title)
        setBacklogData(newBacklog)
    }

    return (
        <ul>
            {backlogData.map(album => (
                <AlbumWrapper key={album.url || album.name}>
                    <AlbumCard cover={album.cover} name={album.title} artist={album.artist}/>
                    <StyledButton onClick={() => handleClick(currentUser, album.title)}>x</StyledButton>
                </AlbumWrapper>
            ))}
        </ul>
    )
}

export default BacklogList