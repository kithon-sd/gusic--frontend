import React, { useState } from 'react'
import axios from 'axios'

import { clearCurrentUser } from '../services/helper'

const Search = (props) => {
    const {
        handleSubmit,
        handleChange,
        query
    } = props

    const [username, setUsername] = useState(window.localStorage.getItem('gusic_currentUser'))

    const handleLogin = async (e) => {
        const response = await axios.get('http://localhost:3003/api/user/fetchApiKey')
        window.location = `http://last.fm/api/auth/?api_key=${response.data.key}&cb=http://localhost:3000/auth`
    }

    const handleLogout = () => {
        clearCurrentUser()
        setUsername('')
    }

    const renderLoginButton = () => {
        if (username) {
            return (
                <div>
                <h3>Logged in as {username}</h3>
                <button onClick={handleLogout}>
                    Log out 
                </button>
                </div>
            )
        } else {
            return (
                <button onClick={handleLogin}>
                    Log in with last.fm
                </button>
            )
        }
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
        {renderLoginButton()}
        </div>

    )
}

export default Search