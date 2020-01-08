import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { fetchApiKey } from '../services/mainService'
import { clearCurrentUser } from '../services/helper'

const StyledLogin = styled.button`
`

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
        window.location.reload()
    }

    return (
        <>
        {username ? 
           <div>
               <span>{username}</span>
               <StyledLogin onClick={handleLogout}>
                   Log out
               </StyledLogin>
           </div> 
           : <StyledLogin onClick={handleLogin}>
               Log in with last.fm
           </StyledLogin>
        }
        </>
    )
}

export default LoginButton