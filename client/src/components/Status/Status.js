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
       <>

      <Cart/>


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

  
            <CheckpointContainer>
            <ProgressBarWrapper></ProgressBarWrapper>
                               <Checkpoint><div><span></span></div></Checkpoint>
                               <Checkpoint><div><span></span></div></Checkpoint>
                               <Checkpoint><div><span></span></div></Checkpoint>
                               <Checkpoint><div><span></span></div></Checkpoint>
                               <Checkpoint><div><span></span></div></Checkpoint>
            </CheckpointContainer>
    </ProgressBarContainer>  
    <StatusBarColumnWrapper>

             <Status><h3>Status</h3></Status>
             <Status><p1>Delivery has arrived at your doorstep</p1></Status>
             <Status><p2>Delivery is heading towards your address</p2></Status>
             <Status><p3>Your order is being packed</p3></Status>
             <Status><p4>The Kitchen is preparing your meal</p4></Status>


    </StatusBarColumnWrapper>
            <ElapsedTimeWrapper>
            <ElapsedTime><h3>Elapsed Time</h3></ElapsedTime>
             <ElapsedTime><p1>20:00</p1></ElapsedTime>
             <ElapsedTime><p2>19:40</p2></ElapsedTime>
             <ElapsedTime><p3>19:30</p3></ElapsedTime>
             <ElapsedTime><p4>19:20</p4></ElapsedTime>
              </ElapsedTimeWrapper>



    
        </BottomContentWrapper>    
    </ContentWrapper>
    


        

       

               


        
        <Footer/>
        </>

        
    )
}


const StatusBarColumnWrapper = styled.div`
font-family: 'Hammersmith One', sans-serif;
grid-column: 2 / span 1; /* Span 1 column */
grid-row: 1 / span 5; /* Span 5 rows */
display:grid;
justify-items: left;
align-items: center;
grid-template-rows: repeat(5, 1fr);
height:100%;
  }
`

const Status = styled.div`
  background-color: ${Theme.colors.white};
  display: flex;
  border: 1px solid ${Theme.colors.white};
`

const ElapsedTime = styled.div`
background-color: ${Theme.colors.white};
display: flex;
border: 1px solid ${Theme.colors.white};
`



const ElapsedTimeWrapper = styled.div`
font-family: 'Hammersmith One', sans-serif;
grid-column: 3 / span 1; /* Span 1 column */
grid-row: 1 / span 5; /* Span 5 rows */
display:grid;
justify-items: center;
align-items: center;
grid-template-rows: repeat(5, 1fr);
height:100%;
`



const ProgressBarContainer = styled.div`
grid-column: 1 / span 1;
grid-row: 1 / span 5;
z-index: 1; /* Set a lower z-index value for the progress bar container */
`

const ProgressBarWrapper = styled.div`
width: 10px;
  height: 90%;
  border-radius: 20px;
  background-color: ${Theme.colors.Greylite};
  opacity:0.2;
  display: flex; /* Use flexbox */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  position: absolute;
  z-index: 1; /* Set the same z-index value as ProgressBarContainer */
`



const CheckpointContainer = styled.div`
display: grid;
grid-template-rows: repeat(5, 1fr);
justify-items: center;
align-items: center;
grid-row-start: 1;
grid-row-end: 5;
height: 100%;
z-index: 2; /* Set a higher z-index value for the checkpoints container */
`






const Checkpoint = styled.div`
height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;

  z-index:2;

  
    
  
 
 

  &:nth-child(2) {
    grid-row-start:2;
    grid-row-end:2;
    background-color: ${Theme.colors.white};
    border: 1px solid ${Theme.colors.white};
    div {
        
      height: 40px;
      width: 40px;
      background-color: ${Theme.colors.Teal};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        width: 5px;
        height: 15px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }
  }

  &:nth-child(3) {
    grid-row-start:3;
    grid-row-end:3;
    background-color: ${Theme.colors.white};
    border: 1px solid ${Theme.colors.white};
    div {
      height: 40px;
      width: 40px;
      background-color: ${Theme.colors.Teal};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        width: 5px;
        height: 15px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }
  }

  &:nth-child(4) {
    grid-row-start:4;
    grid-row-end:4;
    background-color: ${Theme.colors.white};
    border: 1px solid ${Theme.colors.white};
    div {
      height: 40px;
      width: 40px;
      background-color: ${Theme.colors.Teal};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        width: 5px;
        height: 15px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }
  }


  &:nth-child(5) {
    grid-row-start:5;
    grid-row-end:5;
    background-color: ${Theme.colors.white};
    border: 1px solid ${Theme.colors.white};
    div {
      height: 40px;
      width: 40px;
      background-color: ${Theme.colors.Teal};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        width: 5px;
        height: 15px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }
  }

`

const BottomContentWrapper = styled.div`
grid-column-start: 1;
grid-column-end: 5;
grid-row-start: 2;
grid-row-end: 5;
margin-top: 2rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(5, 1fr);
`



const ContentWrapper = styled.div`
background-color:white;
height: 1500px;
width:100%;
display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(3,1fr);
margin-top:10rem;
margin-bottom:10rem;


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


const ContactButtonWrapper = styled.div`
grid-row-start:1;
grid-row-end:1;
grid-column-start:3;
grid-column-end:3;
align-self:end;
justify-self:end;
padding-right:200px;


`








export default Address




