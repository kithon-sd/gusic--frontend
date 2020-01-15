import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'

import userDataManager from '../services/userDataManager'
import { getSessionKey } from '../services/mainService'

const Auth = (props) => {
    const [redirect, setRedirect] = useState(false)

    const token = queryString.parse(props.location.search).token

    const setCurrentUser = async token => {
        try {
            const response = await getSessionKey(token)
            userDataManager(response.data.session.name, response.data.session.key)
            setRedirect(true)
        }   
        catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        setCurrentUser(token)
    }, [token])

    if (redirect) return <Redirect to='/' />

    return (
        <h1>Loading...</h1>
    )
}

export default Auth 