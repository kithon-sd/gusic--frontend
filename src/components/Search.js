import React, { useState } from 'react'
import { fetchApiKey } from '../services/mainService'

import { clearCurrentUser } from '../services/helper'

const Search = (props) => {
    const {
        handleSubmit,
        handleChange,
        query
    } = props

    const [username, setUsername] = useState(window.localStorage.getItem('gusic_currentUser'))

    const handleLogin = async (e) => {
        const response = await fetchApiKey()
        window.location = `http://last.fm/api/auth/?api_key=${response.data.key}&cb=${window.location.origin}/auth`
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