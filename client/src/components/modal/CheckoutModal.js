import React, { useState } from "react";
import {styled,css} from 'styled-components';
import Theme from "../../theme/theme";

const CheckoutModal = () => {
  

  return (

    <CheckoutWrapper>

       <OrderTotalWrapper>
        <h2>Order Total</h2>
        <h2>$10.00</h2>


       </OrderTotalWrapper>
       <TaxWrapper>
       <h2>Tax</h2>
       <h2>$0.70</h2>
       </TaxWrapper>

     <ButtonContainer>
        <ButtonWrapper>Checkout  <span></span> $10.70</ButtonWrapper>
     </ButtonContainer>
     
    </CheckoutWrapper>

    


  );
}

const ButtonContainer = styled.div`
margin-top:2rem;
display:flex;
justify-content:center;
`

const ButtonWrapper = styled.button`
border:none;
display:flex;
justify-content:space-evenly;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
background-color:${Theme.colors.ColumnBlack};
color:white;
font-family: 'Work Sans', sans-serif;
height:60px;
width:15rem;
border-radius:15px;
&:hover{
    cursor:pointer;
    background-color: ${Theme.colors.BackgroundBlack};


    span{
        background-color: ${Theme.colors.ColumnBlack};
        padding:12px 2px;
        border-radius:2px;
    
    }
    
}

span{
    background-color: ${Theme.colors.BackgroundBlack};
    padding:12px 2px;
    border-radius:2px;

}

`


const OrderTotalWrapper = styled.div`
display:flex;
justify-content:space-between;
padding-left:20px; padding-right:20px;
`

const TaxWrapper = styled.div`
display:flex;
padding-left:20px; padding-right:20px;
margin-top:20px;
justify-content:space-between;
`


const CheckoutWrapper = styled.div`

padding:20px 20px;
height:10rem;
width:25rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius:20px;
font-family: 'Work Sans', sans-serif;
`







export default CheckoutModal