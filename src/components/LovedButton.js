import React from 'react'
import styled from 'styled-components'

import { fetchUserData } from '../services/helper'
import { 
    addToLoved,
    removeFromLoved
} from '../services/mainService'

const Icon = styled.svg`
margin-left: 10px;
position: relative;
width: 15px;
top: 2px;
fill: ${props => props.loved ? "red" : "#fff"};
&:hover {
    cursor: pointer;
    fill: ${props => props.loved ? "#fff" : "red"};
}
`

const IconWrapper = styled.button`
border: none;
background-color: inherit;
`

const LovedButton = (props) => {
    const {
        type,
        data,
        request,
        handleNotification
    } = props

    let sessionKey;
    if (fetchUserData() && fetchUserData().currentUserData) {
        sessionKey = fetchUserData().currentUserData.sessionKey
    }

    if (!fetchUserData() || !fetchUserData().currentUserData) {
        return <div />
    }

    if (type === 'REMOVE') {
        const handleClick = (sessionKey, data) => {
            removeFromLoved(sessionKey, {
                artist: data.track.artist.name,
                track: data.track.name
            })
            request(data.track)
            handleNotification('REMOVE_TRACK', data.track.name)
        }
        return (
            <IconWrapper onClick={() => handleClick(sessionKey, data)}>              
                <Icon loved viewBox="0 0 32 29.6">
                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                </Icon> 
            </IconWrapper>     
        )
    }

    if (type === 'ADD') {
        const handleClick = (sessionKey, data) => {
            addToLoved(sessionKey, {
                artist: data.track.artist.name,
                track: data.track.name
            })
            request(data.track)
            handleNotification('ADD_TRACK', data.track.name)
        }
        return (
            <IconWrapper onClick={() => handleClick(sessionKey, data)}>              
                <Icon viewBox="0 0 32 29.6">
                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                </Icon> 
            </IconWrapper>  
        )
    }
}

export default LovedButton