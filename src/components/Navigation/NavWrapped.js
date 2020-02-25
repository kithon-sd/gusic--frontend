import React from 'react'
import styled from 'styled-components'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const Wrapper = styled.div`
position: sticky;
top: 0;
z-index: 3;
`

const NavWrapped = () => {
    return (
        <Wrapper>
        <DesktopNav />
        <MobileNav />
        </Wrapper>
    )
}

export default NavWrapped