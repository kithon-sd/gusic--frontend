import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import { findAlbums, resetAlbums } from '../reducers/albumListReducer'

const SearchForm = (props) => {
    const { 
        albums,
        findAlbums,
        resetAlbums
     } = props
    const query = queryString.parse(props.location.search).query


    useEffect(() => {
        findAlbums(query)
        return function cleanUp() {
           resetAlbums()
        }
    }, [query, findAlbums, resetAlbums])


    return (
        <ul>
            {albums.length > 0 ? albums.map(album => (
                <li key={album.mbid}>
                    <Link to={`/music/${album.artist}/${album.name}`}>
                        {album.artist} - {album.name}
                    </Link>
                </li>
            )) : <h2>Loading..</h2>}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        albums: state.data.albumData
    }
}

const mapDispatchToProps = {
    findAlbums,
    resetAlbums
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm)