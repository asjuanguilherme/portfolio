import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        font-family: 'Montserrat', 'Open Sans', sans-serif;
    }
    
    html, body {
        padding: 0;
        margin: 0;
    }

    * {
        box-sizing: border-box;
    }
`
