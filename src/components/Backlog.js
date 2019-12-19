import React, {useState} from 'react'
import BacklogList from './BacklogList'
import {
    removeFromBacklog,
    fetchUserData
} from '../services/helper'

const Backlog = () => {
    const {
        currentUser,
        currentUserData
    } = fetchUserData()
    
    const [backlog, setBacklog] = useState(currentUserData.backlog)

    const handleClick = (name, title) => {
        removeFromBacklog(name, title)
    }

    const foo = () => {
        if (currentUser) {
            return (
                <div>
                    <h2>Backlog for {currentUser}</h2>
                    <BacklogList 
                    removeFromBacklog={handleClick} 
                    backlog={backlog} 
                    currentUser={currentUser} 
                    />
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