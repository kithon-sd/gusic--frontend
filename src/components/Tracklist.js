import React, { useState, useLayoutEffect } from 'react'
import LovedButton from './LovedButton'
import { getLovedTracks } from '../services/mainService'

const Tracklist = (props) => {
    const {
        tracklist,
        currentUser,
        handleNotification
    } = props
    
    const [lovedTracksData, setLovedData] = useState([])

    const fetchLovedTracks = async user => {
        const response = await getLovedTracks(user)
        setLovedData(response.lovedtracks.track)
    }

    useLayoutEffect(() => {
        fetchLovedTracks(currentUser)
    }, [currentUser])

    const checkLoved = (track) => {
         return lovedTracksData.find(i => i.name === track)
    }

    const add = (track) => {
        setLovedData([...lovedTracksData, track])
    }

    const remove = (track) => {
        setLovedData(lovedTracksData.filter(i => i.name !== track.name))
    }
    
    return (
        <ul>
            {tracklist.map(track => (
                <li key={track.url || track.mbid}>
                    {track.name}

                    {checkLoved(track.name) ? 
                    <LovedButton
                    request={remove}
                    type='REMOVE'
                    data={{
                        track: track
                    }}
                    handleNotification={handleNotification}
                    />
                    : <LovedButton
                    request={add}
                    type='ADD'
                    data={{
                        track: track
                    }}
                    handleNotification={handleNotification}
                    />
                }
                </li>
            ))}
        </ul>
    )
}

export default Tracklist