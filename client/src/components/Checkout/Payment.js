import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import 'react-international-phone/style.css';
import Cart from '../modal/CartModal';
import VisaCard from '../../theme/Icons/Visa.png';
import MasterCard from '../../theme/Icons/Mastercard.png';
import Wallet from '../../theme/Icons/wallet.png';
import { Link } from 'react-router-dom';
import CheckoutModal from '../modal/CheckoutModal';
import { Logo } from '../../theme/theme';

import CreditEdit from '../modal/ModalEdit/CreditCredentialsEdit';
import OrderEdit from '../../components/modal/ModalEdit/OrderEdit';
import BillingEdit from '../modal/ModalEdit/BillingAddressEdit';
import AddressEdit from '../modal/ModalEdit/AddressEdit';












const Payment = ()=>{


 


    return(
      
       <PageWrapper>

<Logo/>
        <Cart/>





<HeaderWrapper>
      
      <StyledLink to="/Order_confirm"><RedirectWrapper><p>Back to Order</p> </RedirectWrapper></StyledLink>
     
    </HeaderWrapper>


    <PaymentInfoWrapper>
        <div><h1>Choose a payment method</h1></div>
    <PaymentMethodWrapper>
    <Link to="/BillingModal?cardType=visa">
    <img src={VisaCard}/>

    </Link>
    <Link to="/BillingModal?cardType=mastercard">
    <img src={MasterCard}/>
    
    </Link>

 
   
    <img src={Wallet}/>


        

    </PaymentMethodWrapper>
   
{/*First card */}
<OrderEdit/>

      
{/*Second card */}
<AddressEdit/>


{/*Third card */}
<BillingEdit/>

{/*Fourth card */}
<CreditEdit/>






    </PaymentInfoWrapper>
 
    <CheckoutModal/>

   
        
  
        </PageWrapper>

        
    )
}



const StyledLink = styled(Link)`
text-decoration:none;
color: ${Theme.colors.ColumnBlack};
`

const RedirectWrapper = styled.div`
font-size:1rem;
padding:1rem 1rem;
box-shadow: 0 2px 4px ${Theme.colors.Greylite};
border-radius: .5rem;

&:hover{
  cusor:pointer;
}
`



const PaymentMethodWrapper = styled.div`
display: flex;
  flex-direction: row;
  grid-row: 2 / span 1;
  justify-content: flex-start;
  gap: 5rem;
  margin-top: 1rem;
  img {

    display: flex;
    justify-content: flex-start;
    gap: 5rem;
    margin-top: 1rem;
    max-height: 20px; /* Set a maximum height for the images */
    &:hover {
     
        img {
          
          &:hover {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            cursor: pointer;
            transition: 1s;
          }
        }
    }
  }
`

const PaymentInfoWrapper = styled.div`
padding-bottom:10rem;
background-color: ${Theme.colors.white};

width:60vw;
margin-left:auto;
margin-right:auto;
display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(2,1fr);
padding:5rem 5rem;
font-family: 'Work Sans', sans-serif;
margin-bottom:30rem;

`





const HeaderWrapper = styled.header`
font-size:4rem;
color: ${Theme.colors.ColumnBlack};
font-family: 'Hammersmith One', sans-serif;
display:flex;
justify-content:space-between;
align-items: center;
width:60vw;
margin-left:auto;
margin-right:auto;



img{
    height:50px;
    width:50px;
    
}
`



const PageWrapper = styled.div`
background-color: ${Theme.colors.ColumnBlack};
padding-top:2rem;
display:flex;
flex-direction:column;
gap:5rem;
background-color:${Theme.colors.white};

`






export default Payment




