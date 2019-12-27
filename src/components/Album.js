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
import Notification from './Notification'

const Album = (props) => {
    const { albumName, albumArtist } = props.match.params
    const { 
        album,
        similarArtists,
        fetchAlbum,
     } = props
     let currentUser;
     let currentUserData;
    if (fetchUserData()) {
        currentUser = fetchUserData().currentUser
        currentUserData = fetchUserData().currentUserData
    }

    const [notificationData, setNotificationData] = useState({
        show: false,
        type: '',
        album: ''
    })
    const [render, setRender] = useState(false)
    const forceRender = () => {
        setRender(!render)
    }

    const handleNotification = (type, data) => {
        setNotificationData({
            show: true,
            type: type,
            data: data
        })
        setTimeout(() => {
            setNotificationData({
                show: false,
                type: '',
                data: null
            })
        }, 3000)
    }

    const checkBacklog = (album) => {
        if (!currentUserData) return false
        return currentUserData.backlog.find(i => i.title === album)
    }
    
    useEffect(() => {
        fetchAlbum(albumArtist, albumName)
    }, [albumArtist, albumName, fetchAlbum, currentUser])

    if (!album || props.match.params.albumName !== album.name) return <h2>Loading..</h2>

    return (
        <div>
            {notificationData.show && <Notification notificationData={notificationData} />}
            <div>
                <h1>{album.name}</h1>
                <h2>{album.artist}</h2>

                {checkBacklog(album.name) ?
                <BacklogButton 
                type='REMOVE'
                currentUser={currentUser}
                album={album.name}
                render={forceRender}
                handleNotification={handleNotification}
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
                handleNotification={handleNotification}
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
                handleNotification={handleNotification}
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

