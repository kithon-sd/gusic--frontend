import React from 'react'

const Notification = props => {
    const {
        notificationData
    } = props

    if (notificationData.type === 'REMOVE_ALBUM') {
        return (
            <h2>Removed {notificationData.data} from backlog</h2>
        )
    }

    if (notificationData.type === 'ADD_ALBUM') {
        return (
            <h2>Added {notificationData.data} to backlog</h2>
        )
    }

    if (notificationData.type === 'ADD_TRACK') {
        return (
            <h2>Added {notificationData.data} to Loved Tracks on last.fm</h2>
        )
    }

    if (notificationData.type === 'REMOVE_TRACK') {
        return (
            <h2>Removed {notificationData.data} from Loved Tracks on last.fm</h2>
        )
    }

    return (
        <h2>
            You broke something!
        </h2>
    )
}

export default Notification