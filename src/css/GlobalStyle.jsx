import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `

:root{
    --roxo: #8A2BE2;
    --verde: #32CD32;
    --cinza: #f5f5f5;
    --preto: #333333;
    --amarelo: #CCFF00;

}
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-decoration:none;
        list-style:none;
        font-size:1rem;
        font-family:"Nunito", sans-serif;

}




`

export default GlobalStyle