import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Search from './Search'
import { resetAlbums } from '../reducers/albumListReducer'

const Main = (props) => {
    const [query, setQuery] = useState('')
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        props.resetAlbums()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setRedirect(true)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    if (redirect) return <Redirect push to={{
        pathname: '/search',
        search: `?query=${query}`
    }} />

    return (
        <Search 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        query={query}
        />
    )
}

export default connect(
    null,
    {resetAlbums}
)(Main)