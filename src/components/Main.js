import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

import Search from './Search'

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

    if (redirect) return <Redirect push to={{
        pathname: '/search',
        search: `?query=${query}`
    }} />

    return (
        <div>
            <Search 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            query={query}
            />
            <Link to='/backlog'>Backlog</Link>
        </div>
    )
}

export default Main