import React, { useState } from 'react'

const Search = (props) => {
    const [query, setQuery] = useState('')

    const { fetchAlbums } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchAlbums(query)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <form  onSubmit={handleSubmit}>
            <input value={query} onChange={handleChange} />
        </form>
    )
}

export default Search