//total revamp, make this not laggy
//TRIM ANYTHING HERE. Although items should async render, Too much of this will make it laggy

import React from "react";
import styled,{css} from "styled-components";
import steak_mash from "../../theme/images/Main PNG/Steak with Mash.png"
import Theme from "../../theme/theme";
import Button from "../../util/Button/Button";
import {Link} from "react-router-dom";
import seaside_view from "../../theme/images/Seaside_view.png";
import southern_style from "../../theme/images/Main PNG/Southern Style.png"



const handleRedirectClick = () =>{

   return(
    <>
    <Link to='/Signup'/>
    </>
   )



}




const init_page = () =>{
    return(
    
       <Container>
        <BackgroundImage  src={seaside_view} steak/>
       
   <CenterContent>
   <Image src={steak_mash} southern/>
   <Image src={southern_style} steak/>
        <ImageContainer> 
       
        
                                                        <TitleContainer>
                                                     <p1>FUS</p1>
                                                        <hr></hr>
                                                        <p2>ONE</p2>
                                                        </TitleContainer>
            </ImageContainer>
       <ButtonWrapper>
        <Link to='/Signup'>
            
        <Button text="Sign Up" register="true" onClick={handleRedirectClick}>
            
        </Button>
        </Link>
    </ButtonWrapper>
    </CenterContent>

    </Container>
       

   
    
    )}
const Container = styled.div`
overflow: hidden;

`

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;


  
`;

const CenterContent = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`




const ImageContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:10rem;

@media (max-width: 1448px) {
    margin-top:10rem;
  }

  @media (max-width: 1024px) {
    margin-top:10rem;
  }

  @media (max-width: 768px) {
    margin-top:10rem;
  }


`


const TitleContainer = styled.div`
height:12.5em;
width:50em;
margin: 0 0;
padding:0 0;
position:relative;
justify-content:center;
align-items:center;
display:flex;
gap:30px;
text-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;


@media (max-width: 1448px) {
    gap:20px;
  }

  @media (max-width: 1024px) {
    gap:20px;
  }

  @media (max-width: 768px) {
    gap:20px;
  }




p1{
    font-family: ${Theme.font};
    font-size: 5rem;
    font-weight:bold;
    color:${Theme.colors.BackgroundBlack};
    z-index: 2;
    
    @media (max-width: 1448px) {
        font-size: 3rem;
      }
    
      @media (max-width: 1024px) {
        font-size: 2rem;
      }
    
      @media (max-width: 768px) {
        font-size: 1.7rem;
      }
    
    }
    
    p2{
        font-family: ${Theme.font};
        font-size: 5rem;
        font-weight:bold;
        color:${Theme.colors.BackgroundBlack};
        z-index: 2;

        @media (max-width: 1448px) {
            font-size: 3rem;
          }
        
          @media (max-width: 1024px) {
            font-size: 2rem;
          }
        
          @media (max-width: 768px) {
            font-size: 1.7rem;
          }
      
        }
        
    
    
    
    
        hr{
        background-color:${Theme.colors.BackgroundBlack};
        border:none;
        width:0.625rem;
        height:5.5rem;
        top:2rem;
        border-radius:20px;

        @media (max-width: 1448px) {
            height:3rem;
            width:0.325rem;
          }
        
          @media (max-width: 1024px) {
            height:2rem;
            width:0.225rem;
          }
        
          @media (max-width: 768px) {
            height:1.7rem;
            width:0.225rem;
          }
    
        }



`
const Image = styled.img`
position:fixed;
opacity:0.5;


${(props) => props.steak && css`
left:-30rem;
bottom:-30rem;

@media (max-width: 1648px) {
    /* Adjust styles for screens with a maximum width of 768px */
    max-width: 15vw;
    max-height: 15vh;
  }

`}

${(props) => props.southern && css`
top:-17rem;
right:-17rem;
transform:rotate(180deg);


@media (max-width: 1648px) {
    /* Adjust styles for screens with a maximum width of 768px */
    max-width: 15vw;
    max-height: 15vh;
  }

`}

`

const ButtonWrapper = styled.div`
margin-top:1rem;
display:flex;
justify-content:center;
margin-bottom:5rem;

z-index:1;


@media (max-width: 1448px) {
    margin-bottom:8rem;
    margin-top:-1rem;
  }
  
  @media (max-width: 1024px) {
    margin-bottom:9rem;
    margin-top:-2rem;
  }
  
  @media (max-width: 768px) {
    margin-bottom:10rem;
    margin-top:-3rem;
  }
  



`




export default init_page