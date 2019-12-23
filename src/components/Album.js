import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAlbum } from '../reducers/albumListReducer'
import { 
    trimLastFmDescription,
    fetchUserData,
} from '../services/helper'
import BacklogButton from './BacklogButton'
import Tracklist from './Tracklist'

const Album = (props) => {
    const { albumName, albumArtist } = props.match.params
    const { 
        album,
        similarArtists,
        fetchAlbum,
     } = props
    const {
        currentUser,
        currentUserData
    } = fetchUserData()

    const [render, setRender] = useState(false)
    const forceRender = () => {
        setRender(!render)
    }

    const checkBacklog = (album) => {
        return currentUserData.backlog.find(i => i.title === album)
    }
    
    useEffect(() => {
        fetchAlbum(albumArtist, albumName)
    }, [albumArtist, albumName, fetchAlbum, currentUser])

    if (!album) return <h2>Loading...</h2>

    return (
        <div>
            <div>
                <h1>{album.name}</h1>
                <h2>{album.artist}</h2>

                {checkBacklog(album.name) ?
                <BacklogButton 
                type='REMOVE'
                currentUser={currentUser}
                album={album.name}
                render={forceRender}
                 />
                :<BacklogButton
                type='ADD'
                currentUser={currentUser}
                album={{
                    name: album.name,
                    url: album.url,
                    artist: album.artist
                }}
                render={forceRender}
                />
                }
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
                <Tracklist
                currentUser={currentUser}
                tracklist={album.tracks.track}
                />
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

