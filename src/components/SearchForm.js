import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import styled from 'styled-components'

import { findAlbums, resetAlbums } from '../reducers/albumListReducer'

const StyledLink = styled(Link)`
color: #aaa;
text-decoration:none
&:hover {
    color: #00e676;
    text-decoration: underline;
}
`

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
                    <StyledLink to={`/music/${encodeURIComponent(album.artist)}/${encodeURI(album.name)}`}>
                        {album.artist} - {album.name}
                    </StyledLink>
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