import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchArtistInfo, fetchArtistTopAlbums } from '../reducers/artistReducer'

const Artist = (props) => {
    const { artist }  = props.match.params
    const {
        fetchArtistInfo,
        fetchArtistTopAlbums
    } = props

    const trimLastFmDescription = (str) => {
        const index = str.indexOf('<a href')
        return str.slice(0, index)
    }

    useEffect(() => {
        fetchArtistInfo(artist)
        fetchArtistTopAlbums(artist)
    }, [artist, fetchArtistInfo, fetchArtistTopAlbums])

    if ( !props.artistData.bio  || !props.artistTopAlbums || props.match.params.artist !== props.artistData.name ) return <h2>Loading..</h2>    
    return (
        <div>
            <h1>{ artist }</h1>
            
            <div>
                <h2>Description</h2>
                <p>{ trimLastFmDescription(props.artistData.bio.summary) }</p>
            </div>

            <div>
                <h2>Top albums</h2>
                <ul>
                    {props.artistTopAlbums.map(album => (
                        <li key={album.url}>
                            <Link to={`/music/${artist}/${album.name}`}>
                                {album.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        artistData: state.artist.artistData,
        artistTopAlbums: state.artist.artistTopAlbums
    }
}

const mapDispatchToProps = {
    fetchArtistInfo,
    fetchArtistTopAlbums
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Artist)