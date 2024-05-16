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
import { useSelector, useDispatch } from 'react-redux';

import CreditEdit from '../modal/ModalEdit/CreditCredentialsEdit';
import OrderEdit from '../../components/modal/ModalEdit/OrderEdit';
import BillingEdit from '../modal/ModalEdit/BillingAddressEdit';
import AddressEdit from '../modal/ModalEdit/AddressEdit';
import CheckoutModalUI from '../../FetchAPI/CheckoutModalAPI';
import { setOpenVisaForm, setOpenMasterCardForm } from '../../redux/feature/LoadManagement';











const PaymentModal = ()=>{



  
  const dispatch = useDispatch();
 
    const handleVisaForm = () =>{
      dispatch(setOpenVisaForm(true))
    }

    const handleMasterCardForm = () =>{
      dispatch(setOpenMasterCardForm(true))
    }

    return(
      
    <PageWrapper>

       <PaymentContainer>

        







            <PaymentInfoWrapper>

                 <div><h1>Choose a payment method</h1></div>

    <PaymentMethodWrapper>

           

                        <img src={VisaCard} onClick={handleVisaForm}/>

           

            

                        <img src={MasterCard} onClick={handleMasterCardForm}/>
      

                        <img src={Wallet}/>

    </PaymentMethodWrapper>
   


{/*Third card */}
<CreditEdit/>


{/*Fourth card */}
<BillingEdit/>






                </PaymentInfoWrapper>
 


   
        
                </PaymentContainer>
        </PageWrapper>

        
    )
}


const PaymentContainer = styled.div`

height: auto;
width:850px;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;
position:relative;
grid-column-start:2;
  grid-column-end:2;
  grid-row-start:1;
  grid-row-end:2;


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
padding:5rem 5rem;


`






const PageWrapper = styled.div`
grid-column-start:2;
grid-column-end:2;
grid-row-start:1;
grid-rown-end:2;
`






export default PaymentModal


