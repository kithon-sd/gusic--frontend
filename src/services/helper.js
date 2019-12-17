import React from 'react'
const backlogData = JSON.parse(window.localStorage.getItem('gusic_backlogData'))

export const addAlbumToBacklog = (album) => {

        if (!backlogData) {
            const newBacklog = [album]
            window.localStorage.setItem('gusic_backlogData', JSON.stringify(newBacklog))
            console.log(`Added ${album} to backlog`)
        } else {
            const newBacklog = [...backlogData, album]
            window.localStorage.setItem('gusic_backlogData', JSON.stringify(newBacklog))
            console.log(`Added ${album} to the existing backlog`)
        }
    }

export const trimLastFmDescription = (str) => {
        const index = str.indexOf('<a href')
        return str.slice(0, index)
    }

export const generateBacklogList = () => {

    return (
        <ul>
            {backlogData.map(album => (
                <li key={album}>
                    {album}
                </li>
            ))}
        </ul>
    )
}