import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import { findAlbums } from '../reducers/albumListReducer'

const SearchForm = (props) => {
    const { albums } = props
    const query = queryString.parse(props.location.search).query

    useEffect(() => {
        props.findAlbums(query)
    }, [])


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
    findAlbums
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm)