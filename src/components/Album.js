import React from 'react'

const Album = (props) => {
    const { albums } = props

    return (
        <ul>
            {albums.map(album => (
                <li key={album.mbid}>
                    {album.artist} - {album.name}
                </li>
            ))}
        </ul>
    )
}

export default Album

