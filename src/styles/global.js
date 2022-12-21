import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #F1FFFA;
    font-size: 14px;
    color: #333;
    font-family: 'Lexend Deca', sans-serif ;
}
button{
    background: #568259;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    color: #F1FFFA;
    padding: 5px;
    :hover{
        cursor: pointer;
    }
}
svg {
    :hover{
        cursor: pointer;
    }
}

`;
export default GlobalStyle;
