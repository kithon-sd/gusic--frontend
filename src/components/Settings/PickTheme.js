import React from 'react'
import { setTheme, getCurrentUser } from '../../services/helper'
import { ThemeButton } from './ThemeButton.styled'

const PickTheme = () => {
    const currentUser = getCurrentUser()
    return (
        <div>
            <h2>
                Pick a theme:
            </h2>
        <ThemeButton 
        colorScheme={'neapolitan'}
        onClick={() => setTheme(currentUser, 'neapolitan')}>
            Neapolitan
        </ThemeButton>

        <ThemeButton onClick={() => setTheme(currentUser, 'mariner')}>
            Mariner
        </ThemeButton>
        </div>
    )
}

export default PickTheme