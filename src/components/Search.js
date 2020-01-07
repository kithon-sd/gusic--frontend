import React from 'react'

const Search = (props) => {
    const {
        handleSubmit,
        handleChange,
        query
    } = props

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            value={query}
            onChange={handleChange}
            placeholder='Enter an album title'
            />
        </form>
        </div>

    )
}

export default Search