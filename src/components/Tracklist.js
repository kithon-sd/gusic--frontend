import React, { useState, useEffect } from 'react'
import LovedButton from './LovedButton'
import { getLovedTracks } from '../services/mainService'

const Tracklist = (props) => {
    const {
        tracklist,
        currentUser
    } = props

    const [render, setRender] = useState(false)
    const forceRender = () => {
        setRender(!render)
    }
    const [lovedTracksData, setLovedData] = useState([])

    useEffect(() => {
        const lovedTracks = async (user) => {
            const response = await getLovedTracks(user)
            setLovedData(response.lovedtracks.track)
        }
        lovedTracks(currentUser)
    }, [])

    const checkLoved = (track) => {
        return lovedTracksData.find(i => i.name === track)
    }
    console.log(lovedTracksData)
    return (
        <ul>
            {tracklist.map(track => (
                <li key={track.url || track.mbid}>
                    {track.name}

                    {checkLoved(track.name) ? 
                    <LovedButton 
                    type='REMOVE'
                    render={forceRender}
                    data={{
                        artist: track.artist,
                        track: track.name
                    }}
                    />
                    : <LovedButton
                    type='ADD'
                    render={forceRender}
                    data={{
                        artist: track.artist,
                        track: track.name
                    }}
                    />
                }
                </li>
            ))}
        </ul>
    )
}

export default Tracklist