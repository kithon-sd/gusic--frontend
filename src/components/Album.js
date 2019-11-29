import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../reducers/albumListReducer'

const Album = (props) => {
    return (
        <h1>placeholder</h1>
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

