import React, { useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'

const Auth = (props) => {

    const token = queryString.parse(props.location.search).token
    localStorage.setItem('lastfmToken', token)
    const token_test = localStorage.getItem('lastfmToken')
    console.log(token_test)

    const foo = async token => {
        const response = await axios.get('http://localhost:3003/api/user/getSessionKey', {
            params: {
                token: token
            }
        })
        console.log(response.data)
    }

    useEffect(() => {
        foo(token_test)
    }, [])

    return (
        <h1>Loading...</h1>
    )
}

export default Auth 