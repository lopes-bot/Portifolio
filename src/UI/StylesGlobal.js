import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    *,button,input , h1 ,h2,h3,h4,h5,p{
        font-family: Roboto,sans-serif,;
    }
    html{
    scroll-behavior: smooth;
    }
    :root{
    --color-primary:#06608A;
    --color-secondary:#4C8DAA;
    --color-tertiary:#FFFFFF;
    --color-quaternary:#F8F8F8;
    --color-blue:#1E88E5;
    --color-border:#4070FF;
    --color-brom:#333333;
    --color-dark_blue:#003B5B;
}


`;