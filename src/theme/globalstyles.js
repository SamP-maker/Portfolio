import { createGlobalStyle } from "styled-components"
import theme from "./theme"


export  const Globalstyle = createGlobalStyle`


*{
    
    margin: 0;
    padding: 0;
    }

    html{
        background-color: ${theme.colors.BackgroundBlack};
    }


`

