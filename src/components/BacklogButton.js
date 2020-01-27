import React from 'react'
import styled from 'styled-components'

import {
    addToBacklog,
    removeFromBacklog
} from '../services/helper'

const StyledButton = styled.button`
padding: 5px;
border: 1px solid #00e676;
background-color: #424242;
color: #fff;
&:hover {
    border: 1px solid #424242;
    color: #424242;
    background-color: #00e676;
}
`

const BacklogButton = (props) => {
    const {
        type,
        currentUser,
        album,
        render,
        handleNotification
    } = props
    
    if (!currentUser) {
        return <div />
    }


    if (type === 'REMOVE') {
        const handleClick = (name, album) => {
            removeFromBacklog(name, album)
            handleNotification('REMOVE_ALBUM', album)
            render()
        }
        return (
            <StyledButton onClick={() => handleClick(currentUser, album)}>Remove from backlog</StyledButton>
        )
    }


    if (type === 'ADD') {
        const handleClick = (name, album) => {
            addToBacklog(name, {
                name: album.name,
                artist: album.artist,
                cover: album.cover
            })
            handleNotification('ADD_ALBUM', album.name)
            render()
        }

        return (
            <StyledButton onClick={() => handleClick(currentUser, {
                name: album.name,
                artist: album.artist,
                cover: album.cover
            })}>Add to backlog</StyledButton>
        )
    }
}

export default BacklogButton