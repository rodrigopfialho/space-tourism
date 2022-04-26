import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FFFFFF;
        --black: #0B0D17;
        --gray: #616476;
        --lilac: #D0D6F9;
    }

    html, body {
        max-width: 1440px;
        width: 100vw;
        height: 100vh;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px) {
    html {
        font-size: 93.75%;
        overflow: scroll;
    }
}

@media (max-width: 720px){
    html {
        font-size: 87.5%;
        overflow-x: hidden;
    }
}
`;
