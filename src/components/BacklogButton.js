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
        render
    } = props


    if (type === 'REMOVE') {
        const handleClick = (name, album) => {
            removeFromBacklog(name, album)
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
                url: album.url
            })
            render()
        }

        return (
            <button onClick={() => handleClick(currentUser, {
                name: album.name,
                artist: album.artist,
                url: album.url
            })}>Add to backlog</button>
        )
    }
}

export default BacklogButton