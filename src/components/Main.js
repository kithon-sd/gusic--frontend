import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { findAlbums } from '../reducers/albumListReducer'
import Search from './Search'

const Main = (props) => {
    const [query, setQuery] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.findAlbums(query)
        setRedirect(true)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    if (redirect) return <Redirect push to='/search' />

    return (
        <Search 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        query={query}
        />
    )
}



const mapDispatchToProps = {
    findAlbums
}

export default connect(
    null,
    mapDispatchToProps
)(Main)