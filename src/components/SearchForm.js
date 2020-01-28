import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import styled from 'styled-components'

import { findAlbums, resetAlbums } from '../reducers/albumListReducer'
import AlbumCard from './AlbumCard'

const StyledList = styled.ul`
list-style: none;
`

const AlbumWrapper = styled.li`
@media (min-width: 1400px) {
    width: 40%;
}
width: 100%
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
        <StyledList>
            {albums.length > 0 ? albums.map(album => (
                <AlbumWrapper key={album.mbid || album.url}>
                        <AlbumCard
                        cover={album.image.find(img => img.size === 'large')['#text']}
                        name={album.name}
                        artist={album.artist}
                        />
                </AlbumWrapper>
            )) : <h2>Loading..</h2>}
        </StyledList>
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