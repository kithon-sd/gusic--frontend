import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../reducers/albumListReducer'

const Album = (props) => {
    const { albumName, albumArtist } = props.match.params
    const { album } = props
    console.log(album)
    
    useEffect(() => {
        props.fetchAlbum(albumArtist, albumName)
    }, [])

    if (!album) return <h2>Loading...</h2>

    return (
        <div>
            <div>
                <h1>{album.name}</h1>
                <h2>{album.artist}</h2>
            </div>
            {album.wiki ?
            <p>{album.wiki.summary}</p>
            : <p>No description available for this album</p>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
       album: state.data.albumData.album
    }
}

const mapDispatchToProps = {
    fetchAlbum
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Album)

