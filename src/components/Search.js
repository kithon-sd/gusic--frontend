import React from 'react'
import axios from 'axios'

const Search = (props) => {
    const {
        handleSubmit,
        handleChange,
        query
    } = props

    const handleClick = async (e) => {
        const response = await axios.get('http://localhost:3003/api/user/fetchKey')
        window.location = `http://last.fm/api/auth/?api_key=${response.data.key}&cb=http://localhost:3000/auth`
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            value={query}
            onChange={handleChange}
            placeholder='Enter an album title'
            />
        </form>
        <button onClick={handleClick}>test</button>
        </div>
    )
}

export default Search