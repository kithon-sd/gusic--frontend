import React from 'react'
import axios from 'axios'

const Search = (props) => {
    const {
        handleSubmit,
        handleChange,
        query
    } = props

    const handleClick = async (e) => {
        const response = await axios.get('http://localhost:3003/api/user/fetchApiKey')
        window.location = `http://last.fm/api/auth/?api_key=${response.data.key}&cb=http://localhost:3000/auth`
    }

    const loginName = window.localStorage.getItem('gusic_loginName')
    const sessionKey = window.localStorage.getItem('gusic_sessionKey')

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            value={query}
            onChange={handleChange}
            placeholder='Enter an album title'
            />
        </form>
        { loginName ? 
            <p>Logged in as {loginName}</p>
            : <button onClick={handleClick}>Log in with last.fm </button>
        }
        </div>

    )
}

export default Search