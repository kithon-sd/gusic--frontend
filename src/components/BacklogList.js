import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
                    <Link to={`/music/${album.artist}/${album.title}`}>
                        {album.artist} - {album.title}
                    </Link>
                    <button onClick={() => handleClick(currentUser, album.title)}>Remove from backlog</button>
                </li>
            ))}
        </ul>
    )
}

export default BacklogList