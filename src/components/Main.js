import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Main = () => {
    const [query, setQuery] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setRedirect(true)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    if (redirect) return <Redirect to='/search' />

    return (
        <form onSubmit={handleSubmit}>
            <input 
            value={query} 
            onChange={handleChange}
            placeholder='Enter an album title'
            />
        </form>
    )
}

export default Main