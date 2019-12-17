import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

const Auth = (props) => {
    const [redirect, setRedirect] = useState(false)

    const token = queryString.parse(props.location.search).token

    const foo = async token => {
        try {
            const response = await axios.get('http://localhost:3003/api/auth/getSession', {
                params: {
                    token: token
                }
            })
            console.log(response.data)
            window.localStorage.setItem('gusic_loginName', response.data.session.name)
            window.localStorage.setItem('gusic_sessionKey', response.data.session.key)
            setRedirect(true)
        }   
        catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        foo(token)
    }, [])

    if (redirect) return <Redirect to='/' />

    return (
        <h1>Loading...</h1>
    )
}

export default Auth 