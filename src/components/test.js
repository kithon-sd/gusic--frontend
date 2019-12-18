import React, { useState } from 'react'
import { addToBacklog } from '../services/helper'


const Test = () => {
    const [name, setName] = useState('')
    const [sessionKey, setSessionKey] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleSkChange = (e) => {
        setSessionKey(e.target.value)
    }

    const userData = JSON.parse(window.localStorage.getItem('gusic_userData'))
    const addUserToCache = (name, sessionKey, e)  => {
        e.preventDefault()
        
        if ( !userData || userData.users.length === 0) {
            const newUserData = {
                users: [
                    {
                        name: name,
                        sessionKey: sessionKey,
                        backlog: []
                    }
                ]
            }
            console.log(newUserData)
            window.localStorage.setItem('gusic_userData', JSON.stringify(newUserData))
            setName('')
            setSessionKey('')
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
            setName('')
            setSessionKey('')
        }
    }


    const addToBacklog = (name, album) => {
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
                    url: album.url
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
                        url: album.url
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

    return (
        <div>
            <form onSubmit={(e) => addUserToCache(name, sessionKey, e)}>
                <input placeholder="Name" value={name} onChange={handleNameChange} />
                <input placeholder="sk" value={sessionKey} onChange={handleSkChange} />
                <button type="submit">Submit data</button>
            </form>
        </div>
    )
}

export default Test