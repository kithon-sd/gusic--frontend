import React  from 'react'
import BacklogList from './BacklogList'
import {
    removeFromBacklog,
    fetchUserData
} from '../services/helper'

const Backlog = () => {
    let currentUser
    let currentUserData
    if (fetchUserData()) {
        currentUser = fetchUserData().currentUser
        currentUserData = fetchUserData().currentUserData
    }

    const handleClick = (name, title) => {
        removeFromBacklog(name, title)
    }

    const foo = () => {
        if (currentUser) {
            return (
                <div>
                    <h2>Backlog for {currentUser}</h2>
                    {currentUserData.backlog.length === 0 ? 
                    <h3>Your backlog is currently empty</h3>
                    :
                    <BacklogList 
                    removeFromBacklog={handleClick} 
                    backlog={currentUserData.backlog} 
                    currentUser={currentUser} 
                    />
                    }       
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