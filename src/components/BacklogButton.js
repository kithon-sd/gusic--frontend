import React from 'react'

import {
    addToBacklog,
    removeFromBacklog
} from '../services/helper'

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
            <button onClick={() => handleClick(currentUser, album)}>Remove from backlog</button>
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
            <button onClick={() => handleClick(currentUser, {
                name: album.name,
                artist: album.artist,
                cover: album.cover
            })}>Add to backlog</button>
        )
    }
}

export default BacklogButton