import React, { useState, useLayoutEffect } from 'react'
import LovedButton from './LovedButton'
import { getLovedTracks } from '../services/mainService'
import styled from 'styled-components'

const StyledTracklist = styled.ul`
list-style: none;
`

const TrackWrapper = styled.li`
margin-bottom: 5px;
`

const TrackName = styled.span`
margin-left: 10px;
margin-right: 20px;
font-size: 20px;
`

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
        if (currentUser) {
            fetchLovedTracks(currentUser)
        }
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

    const calculateDuration = duration => {
        const calculateSeconds = s => {
            return s >= 10 ? `${s}` : `0${s}`
        }
        const minutes = duration > 60 ? Math.floor(duration / 60) : 0
        const seconds = duration % 60

        return `${minutes}:${calculateSeconds(seconds)}`
    }
    
    return (
        <StyledTracklist>
            {tracklist.map(track => (
                <TrackWrapper key={track.url || track.mbid}>
                    <span>
                        <span>{track['@attr'].rank}.</span>
                        <TrackName>{track.name}</TrackName>
                        <span>{calculateDuration(track.duration)}</span>
                    </span>
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
                </TrackWrapper>
            ))}
        </StyledTracklist>
    )
}

export default Tracklist