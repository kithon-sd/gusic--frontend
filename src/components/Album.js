import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../reducers/albumListReducer'

const Album = (props) => {
    const { albumName, albumArtist } = props.match.params
    
    useEffect(() => {
        props.fetchAlbum(albumArtist, albumName)
    }, [])

    return (
        <h1>{ albumName } - { albumArtist }</h1>
    )
}

const mapStateToProps = state => {
    return {
        albums: state.data.albums
    }
}

const mapDispatchToProps = {
    fetchAlbum
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Album)

