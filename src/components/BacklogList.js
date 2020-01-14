import React, { useState } from 'react'

import AlbumCard from './AlbumCard'

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
                <li key={album.url || album.name}>
                    <AlbumCard cover={album.cover} name={album.title} artist={album.artist}/>
                    <button onClick={() => handleClick(currentUser, album.title)}>Remove from backlog</button>
                </li>
            ))}
        </ul>
    )
}

export default BacklogList