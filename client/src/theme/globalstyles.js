import { createGlobalStyle } from "styled-components"
import theme from "./theme"



export const Globalstyle = createGlobalStyle`

@font-face{

    font-family:"Big Deal";
    src: url('./fonts/aBigDeal.ttf') format('truetype');
}



html,*{
    
    margin: 0;
    padding: 0;
    }

    html{
        background-color: ${theme.colors.white};
    }


`

export default Globalstyle

