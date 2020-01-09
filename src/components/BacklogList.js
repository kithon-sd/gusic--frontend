import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledLink = styled(Link)`
color: #aaa;
text-decoration:none
&:hover {
    color: #00e676;
    text-decoration: underline;
}
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
                <li key={album.url || album.name}>
                    <StyledLink to={`/music/${encodeURIComponent(album.artist)}/${encodeURIComponent(album.title)}`}>
                        {album.artist} - {album.title}
                    </StyledLink>
                    <button onClick={() => handleClick(currentUser, album.title)}>Remove from backlog</button>
                </li>
            ))}
        </ul>
    )
}

export default BacklogList