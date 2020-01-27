import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { fetchArtistInfo, fetchArtistTopAlbums } from '../reducers/artistReducer'
import { trimLastFmDescription } from '../services/helper'
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

const Artist = (props) => {
    const { artist }  = props.match.params
    const {
        fetchArtistInfo,
        fetchArtistTopAlbums
    } = props

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
                <StyledList>
                    {props.artistTopAlbums.map(album => (
                        <AlbumWrapper key={album.url}>
                            <AlbumCard 
                            cover={album.image.find(img => img.size === 'large')['#text']} 
                            name={album.name} 
                            artist={artist} />
                        </AlbumWrapper>
                    ))}
                </StyledList>
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