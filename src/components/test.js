import React, { useState } from 'react'
import Hamburger from './Navigation/Hamburger/Hamburger'
import Menu from './Navigation/Menu/Menu'

const Test = () => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <>
        <Hamburger open={open} toggle={toggleMenu} />
        <Menu open={open} />
        </>
    )
}

export default Test