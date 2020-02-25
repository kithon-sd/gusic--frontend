import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import App from './App';
import store from './store';
import themeSelect from './services/themes'

const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: ${props => props.theme.primary.regular};
    margin: 0;
    padding: 0;

}
`

ReactDOM.render(
    <ThemeProvider theme={themeSelect('neapolitan')}>
    <GlobalStyles />
    <Provider store={store}>
        <App />
    </Provider>
    </ThemeProvider>,
    document.getElementById('root')
)
