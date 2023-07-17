import React from "react";
import styled,{css} from "styled-components";
import Theme from "../theme/theme";


const Button =({text, onClick, menu,navbar, checkout, register}) =>{

    return(
    <ButtonWrapper
    onClick={onClick}
    checkout={checkout}
    navbar={navbar}
    menu={menu}
    register={register}
    >
        {text}
    </ButtonWrapper>

    )
}


const ButtonWrapper = styled.button`
text-decoration: none;
border:none;


${(props)=> props.register && css`
font-family: ${Theme.font};
border:.1rem solid ${Theme.colors.green};
padding: 1rem 7rem;
background-color: ${Theme.colors.BackgroundBlack};
color:${Theme.colors.white};
font-size: 1.3rem;
cursor: pointer;
opacity:0.7;




&:hover{
border:none;
border:.1rem solid ${Theme.colors.green};
    opacity:1;
    box-shadow: 
                -.09rem -.09rem .25rem ${Theme.colors.whiteShadow},
                .09rem .09rem .25rem ${Theme.colors.whiteShadow};
    transition:1.5s;
}







`
}

${(props)=> props.menu && css`

`
}


${(props)=> props.checkout && css`

`
}

${(props) => props.navbar && css`




`}


`




export default Button