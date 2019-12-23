import React from 'react'

import { fetchUserData } from '../services/helper'
import { 
    addToLoved,
    removeFromLoved
} from '../services/mainService'

const LovedButton = (props) => {
    const {
        type,
        data,
        request
    } = props
    const sessionKey = fetchUserData().currentUserData.sessionKey

    if (type === 'REMOVE') {
        const handleClick = (sessionKey, data) => {
            removeFromLoved(sessionKey, {
                artist: data.track.artist.name,
                track: data.track.name
            })
            request(data.track)
        }
        return (
            <button onClick={() => handleClick(sessionKey, data)}>Remove from Loved</button>
        )
    }

    if (type === 'ADD') {
        const handleClick = (sessionKey, data) => {
            addToLoved(sessionKey, {
                artist: data.track.artist.name,
                track: data.track.name
            })
            request(data.track)
        }
        return (
            <button onClick={() => handleClick(sessionKey, data)}>Add to Loved</button>
        )
    }
}

export default LovedButton