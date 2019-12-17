import React from 'react'
import { generateBacklogList } from '../services/helper'

const Backlog = () => {
    const backlogData = JSON.parse(window.localStorage.getItem('gusic_backlogData'))
    const loginName = window.localStorage.getItem('gusic_loginName')

    return (
        <div>
            {loginName ? <h1>Backlog for {loginName}</h1> : <h2>Backlog is only available for logged in users</h2>}
            {backlogData ? generateBacklogList() : <h2>Your backlog is currently empty</h2>}
        </div>
    )
}

export default Backlog