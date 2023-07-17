
import React from "react";
import styled,{css} from "styled-components";
import topImg from "../../theme/images/CaydenPhhotography-5860-1024x683.png";
import Theme from "../../theme/theme";
import Button from "../../util/Button";
import {Link} from "react-router-dom";




const handleRedirectClick = () =>{

   return(
    <>
    <Link to='/Signup'/>
    </>
   )



}




const Img1 = () =>{

    const path_1 = topImg;
    return(<Image topimg src={path_1} alt="Image description"/> )
}


const init_page = () =>{
    return(

        <>
    <Container>
    
        <ImageContainer>
        <Img1 topimg/>
        
            <TitleContainer>
            <p1>FUS</p1>
            <hr></hr>
            <p2>ONE</p2>
            </TitleContainer>
            </ImageContainer>
       <ButtonWrapper>
        <Link to='/Signup'>
        <Button text="Sign Up" register="true" onClick={handleRedirectClick}/>
        </Link>
    </ButtonWrapper> 
           
       

        
    </Container> 
    
    
    </>
    )}




const Container = styled.div`
gridTemplateRows:repeat(auto-fit,minmax(0,1fr));
justify-content:center;

`

const HyperLink = styled.div`
position:relative;
padding:0.19rem 0.19rem;
margin:.19rem;
font-size: .6rem;
display:flex;
left:5rem;
justify-content:center;


p3{

    font-family: ${Theme.font};
    color:${Theme.colors.white};



   
}

a{
    font-family: ${Theme.font};
    color:${Theme.colors.Teal};
}

`


const ImageContainer = styled.div`
display:flex;
position:relative;
justify-content:center;
align-items:center;

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
left: -0.4375rem;
gap:1rem;
left:-7rem;




p1{
    font-family: ${Theme.font};
    font-size: 68px;
    font-weight:bold;
    color:${Theme.colors.white};
    z-index: 2;
    
    }
    
    p2{
        font-family: ${Theme.font};
        font-size: 68px;
        font-weight:bold;
        color:${Theme.colors.green};
        z-index: 2;
      
        }
        
    
    
    
    
        hr{
        background-color:${Theme.colors.white};
        border:none;
        width:0.625rem;
        height:7.5rem;
        top:2rem;
        border-radius:20px;
    
        }



`
const Image = styled.img`
position:relative;
left:20rem;


${(props) => props.topimg && css`
width:35rem;
height:25rem;

`}

`

const ButtonWrapper = styled.div`
margin-top:1rem;
display:flex;
justify-content:center;
position:relative;
`




export default init_page