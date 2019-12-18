import React from 'react'
import { generateBacklogList } from '../services/helper'

const Backlog = () => {
    const currentUser = window.localStorage.getItem('gusic_currentUser')

    const foo = () => {
        if (currentUser) {
            return (
                <div>
                    <h2>Backlog for {currentUser}</h2>
                    {generateBacklogList()}
                </div>
            )
        } else {
            return <h2>Backlog is only available for logged in users</h2>
        }
    }

    return (
        <div>
            {foo()}
        </div>
    )
}

export default Backlog