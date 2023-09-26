import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Footer from '../../util/Footer/Footer';
import 'react-international-phone/style.css';
import Cart from '../modal/CartModal';
import MenuButton from '../../util/Button/DropdownButton';
import VisaCard from '../../theme/Icons/Visa.png';
import MasterCard from '../../theme/Icons/Mastercard.png';
import Wallet from '../../theme/Icons/wallet.png';
import BillingModal from '../modal/BillingAddressModal';
import { Link } from 'react-router-dom';



const Payment = ()=>{

    

       





    return(
       <PageWrapper>
        <Cart/>





<HeaderWrapper>
      <RedirectWrapper>
        <Link to="/Address"><p>Back to Address</p></Link>
      </RedirectWrapper>
    </HeaderWrapper>



    <ProgressBarContainer>
                               <ProgressBar>
                               </ProgressBar>

                           <CheckpointContainer>
                               <Checkpoint><div><span></span></div></Checkpoint>
                               <Checkpoint> <div><span></span></div></Checkpoint>
                               <Checkpoint> <div><span></span></div></Checkpoint>
                           </CheckpointContainer>                  


    </ProgressBarContainer> 
    <PaymentInfoWrapper>
        <div><h1>Choose a payment method</h1></div>
    <PaymentMethodWrapper>
    <Link to="/BillingModal">
    <img src={VisaCard}/>

    </Link>
    <Link to="/BillingModal">
    <img src={MasterCard}/>

    </Link>
    <Link to="/BillingModal">
    <img src={Wallet}/>

    </Link>
        

    </PaymentMethodWrapper>
   
{/*First card */}
<Section_Order_Confirmation>
<EditButton>Edit</EditButton>
            <OrderContentContainer>
              
                              <ItemContainer>
                                <p>Aglio Olio Pasta</p>
                                <p>Aglio Olio Pasta</p>
                              </ItemContainer>

                              <DetailsContainer>
                               <p>Remarks:<span> None</span></p>
                                <p>Remarks:<span> None</span></p>
                              </DetailsContainer>

                              <QuantityContainer>
                              <p>1</p>
                              <p>1</p>
                              </QuantityContainer>
            </OrderContentContainer>
</Section_Order_Confirmation>


{/*Second card */}
<Section_Delivery_Address>
<EditButton>Edit</EditButton>
            <OrderContentContainer>
              
                              <ItemContainer>
                                <p>Aglio Olio Pasta</p>
                                <p>Aglio Olio Pasta</p>
                              </ItemContainer>

                              <DetailsContainer>
                               <p>Remarks:<span> None</span></p>
                                <p>Remarks:<span> None</span></p>
                              </DetailsContainer>

                              <QuantityContainer>
                              <p>1</p>
                              <p>1</p>
                              </QuantityContainer>
            </OrderContentContainer>
</Section_Delivery_Address>




{/*Third card */}
<Section_Payment_Billing>
<EditButton>Edit</EditButton>
            <OrderContentContainer>
              
                              <ItemContainer>
                                <p>Aglio Olio Pasta</p>
                                <p>Aglio Olio Pasta</p>
                              </ItemContainer>

                              <DetailsContainer>
                               <p>Remarks:<span> None</span></p>
                                <p>Remarks:<span> None</span></p>
                              </DetailsContainer>

                              <QuantityContainer>
                              <p>1</p>
                              <p>1</p>
                              </QuantityContainer>
            </OrderContentContainer>
</Section_Payment_Billing>





{/*Fourth card */}

    </PaymentInfoWrapper>

    
   
        
        <Footer/>
        </PageWrapper>

        
    )
}

const RedirectWrapper = styled.div`
font-size:1rem;
`



const Section_Payment_Billing = styled.div`
grid-row:5;
grid-column-start:1;
grid-column-end:2;
margin-top:5%;
height:20rem;
padding:20px 20px;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;



`


const Section_Delivery_Address = styled.div`
grid-row:4;
grid-column-start:1;
grid-column-end:2;
margin-top:5%;
height:20rem;
padding:20px 20px;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;


`



const EditButton = styled.p`
margin-left:92%;
margin-top:2%;
color:${Theme.colors.Teal};

&:hover{
  cursor:pointer;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

`

const ItemContainer = styled.div`
grid-column:1;
font-size:0.825rem;


`
const DetailsContainer = styled.div`
grid-column:2;
font-size:0.825rem;

`
const QuantityContainer = styled.div`
grid-column:3;
font-size:0.825rem;
`

const OrderContentContainer = styled.div`
margin-top:3%;
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(auto,1fr);
justify-items:center;

`

const Section_Order_Confirmation = styled.div`
grid-row:3;
grid-column-start:1;
grid-column-end:2;
margin-top:5%;
height:20rem;
padding:20px 20px;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;



p1{
  top:0;
  left:0;
  border:1px solid red;
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
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
width:60vw;
margin-left:auto;
margin-right:auto;
display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(2,1fr);
padding:5rem 5rem;
font-family: 'Work Sans', sans-serif;

`


const ProgressBarContainer = styled.div`

display:flex;
justify-content:center;
align-items:center;
height:100px;
width:70rem;
margin-left:auto;
margin-right:auto;
`

const CheckpointContainer = styled.div`
display:flex;
position:absolute;
width:25rem;
height:80px;
display:flex;
align-items:center;
gap:8rem;
`






const ProgressBar = styled.div`
width:100%;
height:10px;
background-color:${Theme.colors.Greylite};
border-radius:10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);


`
const Checkpoint = styled.label`
height:50px;
width:50px;
background-color: ${Theme.colors.Greylite};
border-radius:50%;
display:flex;
justify-contents:center;
align-items:center;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);


&:nth-child(1),&:nth-child(2),&:nth-child(3){
div{
height:40px;
width:40px;
margin:auto auto;
background-color: ${Theme.colors.Teal};
border-radius:50%;
display:flex;
justify-contents:center;
align-items:center;
animation: fadeIn 2s ease forwards;

@keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }



span{
  
  margin:auto auto;
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



const ButtonWrapper = styled.div`
position:relative;
display:flex;
justify-content:center;
flex-direction:column;
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
background-color:${Theme.colors.white};

`






export default Payment




