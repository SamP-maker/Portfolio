import React, {useState} from "react";
import styled,{css, keyframes} from "styled-components";
import Theme from "../../theme/theme";
import { slideKeyframes } from "../../theme/animations/animations";


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
    children,
    type,
    Signup,
    explore

}) =>{
 


        


    return(
    <ButtonWrapper
                    onClick={onClick}
                    checkout={checkout}
                    navbar={navbar}
                    type={type}
                    Signup={Signup}
                    register={register}
                    padding={padding}
                    type_normal={type_normal}
                    fontSize={fontSize}
                    backgroundColor={backgroundColor}
                    borderRadius={borderRadius}
                    explore={explore}

    >
        {children}
        {text}
    </ButtonWrapper>

    )
}



const ButtonWrapper = styled.button`
text-decoration: none;
border:none;

${(props)=> props.Signup && css`
font-family: 'Work Sans', sans-serif;
border:.2rem solid ${Theme.colors.BackgroundBlack};
padding: 1rem 6rem;
color:${Theme.colors.BackgroundBlack};
background-color:transparent;
font-size: 1.3rem;
cursor: pointer;
text-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;

z-index:999;


@media (max-width: 1448px) {
  padding: 0.7rem 4rem;
  font-size: 1rem;
  border:.2rem solid ${Theme.colors.BackgroundBlack};
}

@media (max-width: 1024px) {
  padding: 0.5rem 3rem;
  font-size: 0.6rem;
  border:.14rem solid ${Theme.colors.BackgroundBlack};
}

@media (max-width: 768px) {
  padding: 0.4rem 2.6rem;
  font-size: 0.5rem;
  border:.1rem solid ${Theme.colors.BackgroundBlack};
}



&::before {
    
    z-index: 1;
    opacity:0;
    content:'';
    background-color:${Theme.colors.white};
    padding: 1.76rem 3rem;
    margin-left:-96px;
    margin-top:-16px;
    position:absolute;
    
  
   
  }



  


&:hover{

    box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;


&::before {
    content: ''; 
    z-index: 2;
    opacity:0.3;
    filter:blur(3px);
    background-color:${Theme.colors.white};
    padding: 1.76rem 3rem;
    margin-left:-96px;
    margin-top:-16px;
    position:absolute;
    box-shadow:inset ${Theme.colors.white} 0px 3px 8px;
    animation: ${slideKeyframes} 2s forwards;




    @media (max-width: 1448px) {
      padding: 1.4rem 2rem;
      margin-left:-72px;
      font-size: 1rem;
      margin-top:-13px;
    }
    
    @media (max-width: 1024px) {
      padding: 0.9rem 1.4rem;
      margin-left:-76px;
      font-size: 0.7rem;
      margin-top:-9px;
    }
    
    @media (max-width: 768px) {
      padding: 0.7rem .7rem;
      margin-left:-56px;
      font-size: 0.6rem;
      margin-top:-6px;
    }
  
   
  }
  
}
}



   


`
}


${(props)=> props.register && css`
font-family: 'Work Sans', sans-serif;
border:.2rem solid ${Theme.colors.white};
padding: 1rem 6rem;
color:${Theme.colors.white};
background-color:transparent;
font-size: 1.3rem;
cursor: pointer;
text-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;

z-index:999;


@media (max-width: 1448px) {
  padding: 0.7rem 4rem;
  font-size: 1rem;
  border:.2rem solid ${Theme.colors.white};
}

@media (max-width: 1024px) {
  padding: 0.5rem 3rem;
  font-size: 0.6rem;
  border:.14rem solid ${Theme.colors.white};
}

@media (max-width: 768px) {
  padding: 0.4rem 2.6rem;
  font-size: 0.5rem;
  border:.1rem solid ${Theme.colors.white};
}



&::before {
    
    z-index: 1;
    opacity:0;
    content:'';
    background-color:${Theme.colors.white};
    padding: 1.76rem 3rem;
    margin-left:-96px;
    margin-top:-16px;
    position:absolute;
    
  
   
  }



  


&:hover{

    box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;


&::before {
    content: ''; 
    z-index: 2;
    opacity:0.3;
    filter:blur(3px);
    background-color:${Theme.colors.white};
    padding: 1.76rem 3rem;
    margin-left:-96px;
    margin-top:-16px;
    position:absolute;
    box-shadow:inset ${Theme.colors.white} 0px 3px 8px;
    animation: ${slideKeyframes} 2s forwards;




    @media (max-width: 1448px) {
      padding: 1.4rem 2rem;
      margin-left:-72px;
      font-size: 1rem;
      margin-top:-13px;
    }
    
    @media (max-width: 1024px) {
      padding: 0.9rem 1.4rem;
      margin-left:-76px;
      font-size: 0.7rem;
      margin-top:-9px;
    }
    
    @media (max-width: 768px) {
      padding: 0.7rem .7rem;
      margin-left:-56px;
      font-size: 0.6rem;
      margin-top:-6px;
    }
  
   
  }
  
}
}



   


`
}

${(props)=> props.type_normal && css`
padding:${props.padding};
background-color: ${props.backgroundColor};
border-radius: ${props.borderRadius};
border:0.15rem  solid ${Theme.colors.Greylite};
font-family: 'Work Sans', sans-serif;
color:${Theme.colors.Greylite};
font-size: ${props.fontSize};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;




&:hover{
    border:0.15rem solid ${Theme.colors.ColumnBlack};
    color:${Theme.colors.ColumnBlack};
    opacity:1;
    box-shadow: ${Theme.colors.Greylite} 0px 3px 8px;
 
    transition:1.5s;
    }
`
}



${(props)=> props.explore && css`
padding:${props.padding};
background-color: ${props.backgroundColor};
border-radius: ${props.borderRadius};
border:0.15rem  solid ${Theme.colors.BackgroundBlack};
font-family: 'Work Sans', sans-serif;
color:${Theme.colors.BackgroundBlack};
font-size: ${props.fontSize};





&:hover{
    border:0.15rem solid ${Theme.colors.white};
    color:${Theme.colors.OrangeLite};
    opacity:1;
    
    box-shadow: ${Theme.colors.white}  0px 1px 4px;
    
    transition:1.5s;
    }
`
}





${(props) => props.checkout && css`
padding:${props.padding};
background-color: ${props.backgroundColor};
border-radius: ${props.borderRadius};
border:0.15rem  solid ${Theme.colors.Grey};
font-family: 'Work Sans', sans-serif;
color:${Theme.colors.ColumnBlack};
font-size: ${props.fontSize};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;




&:hover{
    border:0.15rem solid ${Theme.colors.ColumnBlack};
    color:${Theme.colors.ColumnBlack};
    opacity:1;
    box-shadow: ${Theme.colors.Greylite} 0px 3px 8px;
    transition:1.5s;
    }






`}









${(props) => props.navbar && css`
padding:${props.padding};

background-color: ${Theme.colors.BackgroundBlack};
font-family: 'Work Sans', sans-serif;
color: ${Theme.colors.white};
font-size:1.5rem;




&:hover{
    
  transition: .5s;
    cursor:pointer;

}

&:focus{
  color: ${Theme.colors.BackgroundBlack};
  background-color: ${Theme.colors.white};
    transition: .1s;
}







`}


`





export default Button