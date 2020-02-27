import React from 'react'
import { setTheme, getCurrentUser } from '../../services/helper'

const PickTheme = () => {
    const currentUser = getCurrentUser()
    return (
        <div>
            <h2>
                Pick a theme:
            </h2>
        <button onClick={() => setTheme(currentUser, 'neapolitan')}>
            Neapolitan
        </button>

        <button onClick={() => setTheme(currentUser, 'mariner')}>
            Mariner
        </button>
        </div>
    )
}

export default PickTheme