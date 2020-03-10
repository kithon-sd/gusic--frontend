import React from 'react'
import styled from 'styled-components'
import PickTheme from './PickTheme'

const MainWrapper = styled.div`
color: ${props => props.theme.text.special}
`

const SettingsMain = () => {
    return (
        <MainWrapper>
            <h1>
                Hello
            </h1>
            <PickTheme />
        </MainWrapper>
    )
}

export default SettingsMain