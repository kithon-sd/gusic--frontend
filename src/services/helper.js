import React from 'react'

export const trimLastFmDescription = (str) => {
        const index = str.indexOf('<a href')
        return str.slice(0, index)
    }

export const addUserToData = (name, sessionKey) => {
    const userData = JSON.parse(window.localStorage.getItem('gusic_userData'))
    
    if (!userData || userData.users.length === 0) {
        const newUserData = {
            users: [
                {
                    name: name,
                    sessionKey: sessionKey,
                    backlog: []
                }
            ]
        }
        window.localStorage.setItem('gusic_userData', JSON.stringify(newUserData))
    } else {
        const filteredUserData = userData.users.filter(user => user.name !== name)
        const cachedUser = userData.users.find(user => user.name === name)

        if (cachedUser) {
            const newUserData = {
                users: [
                    ...filteredUserData,
                    {
                        name: cachedUser.name,
                        sessionKey: sessionKey,
                        backlog: cachedUser.backlog
                    }
                ]
            }
            window.localStorage.setItem('gusic_userData', JSON.stringify(newUserData))
        } else {
            const newUserData = {
                users: [
                    ...userData.users,
                    {
                        name: name,
                        sessionKey: sessionKey,
                        backlog: []
                    }
                ]
            }
            window.localStorage.setItem('gusic_userData', JSON.stringify(newUserData))
        }
    }
}

export const addCurrentUser = (name) => {
    const userData = JSON.parse(window.localStorage.getItem('gusic_userData'))
    const cachedUser = userData.users.find(user => user.name === name)

    if (cachedUser) {
        window.localStorage.setItem('gusic_currentUser', cachedUser.name)
    } else {
        const newCurrentUser = {
            name: name
        }
        window.localStorage.setItem('gusic_currentUser', JSON.stringify(newCurrentUser))
    }
}

export const addToBacklog = (name, album) => {
    const userData = JSON.parse(window.localStorage.getItem('gusic_userData'))
    const targetUser = userData.users.find(user => user.name === name)
    const filteredUserData = userData.users.filter(user => user.name !== name)

    if (targetUser.backlog.find(i => i.title === album.name)) return console.log(`${album.name} is already in your backlog`)

    if (targetUser.backlog.length > 0) {
        const newTargetUser = {
            ...targetUser,
            backlog: [
                ...targetUser.backlog,
                {
                    title: album.name,
                    url: album.url,
                    artist: album.artist
                }
            ]
        }
        const newUserData = {
            users: [
                ...filteredUserData,
                newTargetUser
            ]
        }
        window.localStorage.setItem('gusic_userData', JSON.stringify(newUserData))
    } else {
        const newTargetUser = {
            ...targetUser,
            backlog: [
                {
                    title: album.name,
                    url: album.url,
                    artist: album.artist
                }
            ]
        }
        const newUserData = {
            users: [
                ...filteredUserData,
                newTargetUser
            ]
        }
        window.localStorage.setItem('gusic_userData', JSON.stringify(newUserData))
    }
}

export const clearCurrentUser = () => {
    window.localStorage.setItem('gusic_currentUser', '')
}

export const fetchUserData = () => {
    const userData = JSON.parse(window.localStorage.getItem('gusic_userData'))
    const currentUser = window.localStorage.getItem('gusic_currentUser')
    const currentUserData = userData.users.find(user => user.name === currentUser)
    return {
        userData,
        currentUser,
        currentUserData
    }
}

export const removeFromBacklog = (name, album) => {
    const userData = JSON.parse(window.localStorage.getItem('gusic_userData'))
    const targetUser = userData.users.find(user => user.name === name)
    const filteredUserData = userData.users.filter(user => user.name !== name)

    const newTargetUser = {
        ...targetUser,
        backlog: targetUser.backlog.filter(i => i.title !== album)
    }

    const newUserData = {
        users: [
            ...filteredUserData,
            newTargetUser
        ]
    }
    window.localStorage.setItem('gusic_userData', JSON.stringify(newUserData))

    console.log(`${album} removed from backlog of ${name}`)
}