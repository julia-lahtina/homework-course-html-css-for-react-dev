import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    
    body {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`