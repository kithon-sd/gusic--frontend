import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'

import userDataManager from '../services/userDataManager'
import { getSessionKey } from '../services/mainService'

const Auth = (props) => {
    const [redirect, setRedirect] = useState(false)

    const token = queryString.parse(props.location.search).token

    const foo = async token => {
        try {
            const response = await getSessionKey(token)
            console.log(response.data.session)
            userDataManager(response.data.session.name, response.data.session.key)
            setRedirect(true)
        }   
        catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        foo(token)
    }, [token])

    if (redirect) return <Redirect to='/' />

    return (
        <h1>Loading...</h1>
    )
}

export default Auth 