import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SearchForm = (props) => {
    const { albums } = props
    return (
        <ul>
            {albums.map(album => (
                <li key={album.mbid}>
                    <Link to={`/music/${album.artist}/${album.name}`}>
                        {album.artist} - {album.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        albums: state.data.albums
    }
}

export default connect(
    mapStateToProps,
    null
)(SearchForm)