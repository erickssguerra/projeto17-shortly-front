import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #f5f5f5;
    font-size: 14px;
    color: #568259;
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
    display: flex;
    align-items: center;
    justify-content: center;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


input {
    background: white;
    border: none;
    height: 40px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    color: #464E47;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 24px 0px #78B1591F;
    :focus{
        outline: #96E6B3 2px solid;
    }
    ::placeholder{
        font-weight: 400;
        color: #568259;
        font-style: italic;
    }
}

ul, ol{
    list-style: none;
    line-height: 1;
}
a {
    color: inherit;
    text-decoration: none;
}

`;
export default GlobalStyle;
