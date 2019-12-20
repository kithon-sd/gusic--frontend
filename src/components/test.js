import React from 'react'
import axios from 'axios'

const Test = () => {
    const handleClick = async () => {
        const response = await axios.get('http://localhost:3003/api/user/getLovedTracks', {
            params: {
                user: 'kithon-fw'
            }
        })
        console.log(response.data)
    }

    return (
        <button onClick={handleClick}>Test button</button>
    )
}

export default Test