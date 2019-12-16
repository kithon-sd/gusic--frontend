import React, { useState } from 'react'
import axios from 'axios'

const Search = (props) => {
    const {
        handleSubmit,
        handleChange,
        query
    } = props

    const [loginName, setLoginName] = useState(window.localStorage.getItem('gusic_loginName'))

    const handleClick = async (e) => {
        const response = await axios.get('http://localhost:3003/api/user/fetchApiKey')
        window.location = `http://last.fm/api/auth/?api_key=${response.data.key}&cb=http://localhost:3000/auth`
    }

    const handleLogOut = () => {
        window.localStorage.removeItem('gusic_loginName')
        setLoginName(null)
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
        { loginName ?  
        <button onClick={handleLogOut}>log Out</button> 
        : <button onClick={handleClick}>Log in with last.fm </button>
        }
        </div>

    )
}

export default Search