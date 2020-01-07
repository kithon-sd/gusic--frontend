import React, { useState, useEffect } from 'react'
import { fetchApiKey } from '../services/mainService'
import { clearCurrentUser } from '../services/helper'

const LoginButton = () => {
    const [username, setUsername] = useState(window.localStorage.getItem('gusic_currentUser'))

    const currentUsername = window.localStorage.getItem('gusic_currentUser')
    useEffect(() => {
        setUsername(currentUsername)
    }, [currentUsername])

    const handleLogin = async () => {
        const response = await fetchApiKey()
        window.location = `http://last.fm/api/auth/?api_key=${response.data.key}&cb=${window.location.origin}/auth`
    }

    const handleLogout = () => {
        clearCurrentUser()
        setUsername('')
    }
    return (
        <>
        {username ? 
           <div>
               <span>{username}</span>
               <button onClick={handleLogout}>
                   Log out
               </button>
           </div> 
           : <button onClick={handleLogin}>
               Log in with last.fm
           </button>
        }
        </>
    )
}

export default LoginButton