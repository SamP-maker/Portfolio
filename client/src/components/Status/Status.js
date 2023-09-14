import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Footer from '../../util/Footer/Footer';
import 'react-international-phone/style.css';
import Cart from '../modal/CartModal';
import MenuButton from '../../util/Button/DropdownButton';
import ButtonTypes from '../../util/Button/ButtonObject';





const Address = ()=>{
        


        
  


    return(
       <PageWrapper>





    <HeaderWrapper>
                 <RightWrapper>
            <ButtonWrapper>
            <MenuButton navbar={"true"}/>
            </ButtonWrapper>
            <ImageWrapper>
                <Cart/>
            </ImageWrapper>
        </RightWrapper>
    </HeaderWrapper>

    <ContentWrapper>
        <ParagraphWrapper>
        <h1>Estimated Delivery Time</h1>
        <h3>Having issues receiving your delivery?</h3>
        <p1>Contact the restaurant</p1>
        </ParagraphWrapper>
        <ContactButtonWrapper>
        <ButtonTypes.Contact/>
        </ContactButtonWrapper>






        <BottomContentWrapper>
    <ProgressBarContainer>
            <ProgressBarWrapper/>


            <CheckpointContainer>
                               <Checkpoint><div><span></span></div></Checkpoint>
                               <Checkpoint> <div><span></span></div></Checkpoint>
                               <Checkpoint> <div><span></span></div></Checkpoint>
                               <Checkpoint> <div><span></span></div></Checkpoint>
            </CheckpointContainer>       
    </ProgressBarContainer>  
    
        </BottomContentWrapper>    
    </ContentWrapper>
    


        

       

               


        
        <Footer/>
        </PageWrapper>

        
    )
}



const CheckpointContainer = styled.div`
display: flex;
flex-direction:column;
position:absolute;
  width: 80px;
  height: 25rem;
  display: flex;
  align-items: center;
  gap: 8rem;
  align-content:center;
  justify-self:center;
`






const ProgressBarWrapper = styled.div`
  width: 20px;
  height: 850px;
  border-radius:20px;
  background-color: ${Theme.colors.Greylite};
 


`
const Checkpoint = styled.label`
height: 50px;
  width: 50px;
  background-color: ${Theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:30px;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    div {
      height: 40px;
      width: 40px;
      margin: auto auto;
      background-color: ${Theme.colors.Teal};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin: auto auto;
        width: 5px;
        height: 15px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }




`

const BottomContentWrapper = styled.div`
border: 1px solid red;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 5;
  margin-top: 2rem;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
`

const ProgressBarContainer = styled.div`
grid-column-start: 1;
  grid-column-end: 5;
  justify-content:center;
display:flex;
margin-top:5rem;
width:90px;

`


const ImageWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:auto;
width:auto;

`

const ContentWrapper = styled.div`
background-color:white;
height: 1500px;
width:100%;
display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(3,1fr);



`



const ParagraphWrapper = styled.div`
padding-top:5rem;
padding-left:5rem;
font-family: 'Work Sans', sans-serif;


h1{
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    
}



h3{
    padding-top:5rem;
    padding-left:1rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}


p1{
    padding-top:5rem;
    padding-left:1rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}

`

const ButtonWrapper = styled.div`
position:relative;
display:flex;
justify-content:center;
flex-direction:column;
`



const ContactButtonWrapper = styled.div`
grid-row-start:1;
grid-row-end:1;
grid-column-start:3;
grid-column-end:3;
align-self:end;
justify-self:end;
padding-right:200px;


`





const HeaderWrapper = styled.header`
font-size:4rem;
color: ${Theme.colors.ColumnBlack};
font-family: 'Hammersmith One', sans-serif;
display:flex;
justify-content:flex-end;
align-items: center;
width:60vw;
margin-left:auto;
margin-right:auto;



img{
    height:50px;
    width:50px;
    
}
`

const RightWrapper = styled.div`
display:flex;
justify-item:flex-end;
gap:1rem;
`






const PageWrapper = styled.div`
background-color: ${Theme.colors.ColumnBlack};
padding-top:20rem;
display:flex;
flex-direction:column;
gap:5rem;
`







export default Address




