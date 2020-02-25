const mariner = {
    primary: {
        light: '#6d6d6d',
        regular: '#424242',
        dark: '#1b1b1b',
    },
    secondary: {
        light: '#66ffa5',
        regular: '#00e676',
        dark: '#00b147',
    },
    text: {
        white: '#fff',
        black: '#000',
        special: '#fff'
    }
}

const neapolitan = {
    primary: {
        light: '#ffffff',
        regular: '#f2e8ce',
        dark: '#bfb69d',
    },
    secondary: {
        light: '#ffd8f1',
        regular: '#eaa6be',
        dark: '#b7768e',
    },
    text: {
        white: '#fff',
        black: '#000',
        special: '#000',
    }
}

function themeSelect(theme = 'mariner') {
    return themes[theme]
}

const themes = {
    'mariner': mariner,
    'neapolitan': neapolitan,
}

export default themeSelect