import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAlbum } from '../reducers/albumListReducer'
import { addLovedTrack } from '../services/mainService'
import { 
    trimLastFmDescription,
    addAlbumToBacklog
} from '../services/helper'

const Album = (props) => {
    const { albumName, albumArtist } = props.match.params
    const { album, similarArtists } = props

    const handleClick = async (artist, track) => {
        const sessionKey = window.localStorage.getItem('gusic_sessionKey')

        const response = await addLovedTrack(artist, track, sessionKey)
        response === 200 ? console.log(`Added ${track} to Loved on lastfm`)
        : console.log(response)
    }
    
    useEffect(() => {
        props.fetchAlbum(albumArtist, albumName)
    }, [])

    if (!album) return <h2>Loading...</h2>

    return (
        <div>
            <div>
                <h1>{album.name}</h1>
                <h2>{album.artist}</h2>
                <button onClick={() => addAlbumToBacklog(album.name)}>Add to backlog</button>
            </div>

            {album.wiki ?
            <p>{trimLastFmDescription(album.wiki.summary)}</p>
            : <p>No description available for this album</p>
            }

            <div>
                <h3>Genres</h3>
                <ul>
                    {album.tags.tag.map(genre => (
                        <li key={genre.url}>
                            {genre.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Tracklist</h3>
                <ul>
                    {album.tracks.track.map(track => (
                        <li key={track.url}>
                            {track.name}
                            <button onClick={() => handleClick(albumArtist, track.name)}>Add to favorites</button>
                        </li>
                    ))}
                </ul>
            </div>

            <h3>Similar artists</h3>
            <ul>
                {similarArtists.map(artist => (
                    <li key={artist.url}>
                        <Link to={`/music/${artist.name}`} >
                            {artist.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       album: state.data.albumData.album,
       similarArtists: state.data.albumData.similarArtists
    }
}

const mapDispatchToProps = {
    fetchAlbum
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Album)

