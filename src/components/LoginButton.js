import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { fetchApiKey } from '../services/mainService'
import { clearCurrentUser } from '../services/helper'

const StyledLogin = styled.button`
font-family: 'Roboto Condensed', sans-serif;
font-size: 16px;
border: none;
background-color: ${props => props.theme.secondary.regular};

&:hover,
&:focus {
    text-decoration: underline;
}

@media (max-width: 1024px) {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    margin: 0;
    font-weight: bold;
    border: none;
    background-color: ${props => props.theme.secondary.regular};
    color: ${props => props.theme.primary.regular};
    text-decoration: none;
    text-align: center;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover,
    &:focus {
      background: ${props => props.theme.primary.regular};
      color: ${props => props.theme.secondary.regular};
    }
}
`

const LoginButton = () => {
    const currentUsername = window.localStorage.getItem('gusic_currentUser')
    const [username, setUsername] = useState(ihatejson())

    const memoizedJsonHate = useCallback(
        () => {        
        if (!currentUsername) return ''
        if (currentUsername) {
            const parsed = JSON.parse(currentUsername)
            return parsed.name
        }
        }, [currentUsername]
    )

    function ihatejson()  {
        if (!currentUsername) return ''
        if (currentUsername) {
            const parsed = JSON.parse(currentUsername)
            return parsed.name
        }
    }

    useEffect(() => {
        memoizedJsonHate()
    }, [memoizedJsonHate])

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
               <StyledLogin onClick={handleLogout}>
                   Log out
               </StyledLogin>
           : <StyledLogin onClick={handleLogin}>
               Log in with last.fm
           </StyledLogin>
        }
        </>
    )
}

export default LoginButton