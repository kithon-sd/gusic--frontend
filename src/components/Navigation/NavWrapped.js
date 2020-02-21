import React from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const NavWrapped = () => {
    return (
        <>
        <DesktopNav />
        <MobileNav />
        </>
    )
}

export default NavWrapped