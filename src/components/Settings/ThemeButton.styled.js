import styled from 'styled-components'
import themeSelect from '../../services/themes'

const getColors = (theme) => {
    const fullTheme = themeSelect(theme)

    return {
        primary: fullTheme.primary.regular,
        secondary: fullTheme.secondary.regular,
        text: fullTheme.text.special
    }
}

export const ThemeButton = styled.button`
padding: 20px;
font-size: 26px;
border: none;
margin: 5px;
outline: 1px solid ${({colorScheme}) => getColors(colorScheme).secondary};
font-family: 'Roboto Condensed', sans-serif;
color: ${({ colorScheme }) => getColors(colorScheme).text};
background: ${({colorScheme}) => getColors(colorScheme).secondary};
background: ${({colorScheme}) => `linear-gradient(100deg, ${getColors(colorScheme).secondary} 0%, ${getColors(colorScheme).primary} 100%)`};

&:hover {
outline: 3px solid ${({colorScheme}) => getColors(colorScheme).secondary};
}
`