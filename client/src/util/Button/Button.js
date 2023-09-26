import React, {useState} from "react";
import styled,{css} from "styled-components";
import Theme from "../../theme/theme";



const Button =({
    text, 
    onClick, 
    menu,
    navbar, 
    checkout, 
    register,
    padding,
    type_normal,
    fontSize,
    backgroundColor,
    borderRadius,
    children

}) =>{
 


        


    return(
    <ButtonWrapper
                    onClick={onClick}
                    checkout={checkout}
                    navbar={navbar}
                    menu={menu}
                    register={register}
                    padding={padding}
                    type_normal={type_normal}
                    fontSize={fontSize}
                    backgroundColor={backgroundColor}
                    borderRadius={borderRadius}

    >
        {text}
    </ButtonWrapper>

    )
}





const ButtonWrapper = styled.button`
text-decoration: none;
border:none;


${(props)=> props.register && css`
font-family: 'Work Sans', sans-serif;
border:.15rem solid ${Theme.colors.Orange};
padding: 1rem 7rem;
border-radius:1rem;
background-color: ${Theme.colors.BackgroundBlack};
color:${Theme.colors.white};
font-size: 1.3rem;
cursor: pointer;
opacity:0.7;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition:1.5s;




&:hover{
border:.15rem solid ${Theme.colors.Orange};
    opacity:1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition:1.5s;
}







`
}

${(props)=> props.type_normal && css`
padding:${props.padding};
background-color: ${props.backgroundColor};
border-radius: ${props.borderRadius};
border:0.1250rem solid ${Theme.colors.whiteShadow};
font-family: 'Work Sans', sans-serif;
color:${Theme.colors.white};
font-size: ${props.fontSize};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;




&:hover{
    border:0.1250rem solid ${Theme.colors.whiteShadow};
    background-color:${Theme.colors.Orange};
    color:${Theme.colors.ColumnBlack};
    opacity:1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition:1.5s;
    }
`
}





${(props) => props.menu && css`
padding:${props.padding};
border: 0.1250rem solid ${Theme.colors.white};
background-color: ${Theme.colors.white};
font-family: 'Work Sans', sans-serif;
color: ${Theme.colors.black};
font-size:1.5rem;
box-shadow: ${Theme.colors.white}  0px 1px 4px;
border-radius:10px;


&:hover{
    border:0.15rem solid ${Theme.colors.blackFade};
    border-radius:10px;
    transition: 1s;
    box-shadow: ${Theme.colors.blackFade} 0px 1px 4px;

}

&:focus{
    border:0.15rem solid ${Theme.colors.Orange};
    border-radius:10px;
    transition: 1s;
    box-shadow: ${Theme.colors.blackFade} 0px 1px 4px;
}







`}









${(props) => props.navbar && css`
padding:${props.padding};
border: 0.1250rem solid ${Theme.colors.blackFade};
background-color: ${Theme.colors.BackgroundBlack};
font-family: 'Work Sans', sans-serif;
color: ${Theme.colors.white};
font-size:1.5rem;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius:10px;


&:hover{
    border:0.1250rem solid ${Theme.colors.white};
    border-radius:10px;
    transition: 1s;

}

&:focus{
    border:0.1250rem solid ${Theme.colors.white};
    border-radius:10px;
    transition: 1s;
}







`}


`





export default Button