/* Estilo global */
/* importa-lo em qualquer lugar, recomendado no app */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body{
        background-color: #333;
        color: #fff;
    }

`