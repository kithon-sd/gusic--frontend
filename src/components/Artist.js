import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchArtistInfo } from '../reducers/artistReducer'

const Artist = (props) => {
    const { artist }  = props.match.params
    console.log(artist)
    console.log(props.match.params.artist)

    useEffect(() => {
        props.fetchArtistInfo(artist)
    }, [])

    return (
        <h1>{ artist }</h1>
    )
}

const mapStateToProps = (state) => {
    return {
        artistData: state.artist.artistData
    }
}

const mapDispatchToProps = {
    fetchArtistInfo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Artist)