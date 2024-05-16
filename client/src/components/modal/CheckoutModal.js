import React, { useState, useEffect} from "react";
import {styled,css} from 'styled-components';
import Theme from "../../theme/theme";
import { useSelector} from 'react-redux';
import bcrypt from 'bcryptjs';
import { useDispatch } from "react-redux";
import { setRecordSummPostStatus } from "../../redux/feature/PostManagement";
import { setReceipt } from "../../redux/feature/ReceiptSlice";
const { v4: uuidv4 } = require('uuid');

const CheckoutModal = ({isHidden}) => {

  const dispatch = useDispatch();



  const {cartItems, amount, total } = useSelector((store)=> store.cart)
  const {Address,AllAddress} = useSelector((store) => store.address)
  const { BillingAddress, AllBillingAddress} = useSelector((store) => store.billing)
  const uuid = uuidv4();
  const tax = Math.abs(total * 1.16 - total).toFixed(2)
  const tempTotal= Math.abs(parseFloat(total))+parseFloat(tax)
    const ActualTotal = tempTotal.toFixed(2)
   

 

  const [userReceipt, setUserReceipt ] = useState({
    Order:{
      CartItems: [],
      Amount: 0,
      Total:0,
        Tax:0,
      Order_id: '',
    },
    Address:{
      FirstName:'',
        LastName:'',
        Postal:'',
        Address:'',
        District:'',
        Phone:'',
        _id:'',
        Status:false,
    },
    BillingAddress:{
      FirstName:'',
        LastName:'',
        Address:'',
        Postal:'',
        Country:'',
        City:'',
        State: '',
        _id:''
    },
   
  })

  useEffect(()=>{

    
    


     setUserReceipt({
      Order:{
        CartItems:cartItems,
        Amount:amount,
        Total: ActualTotal,
        Tax:tax,
        Order_id:uuid 
      },
      Address:{
      ...Address
      },
      BillingAddress:{
   ...BillingAddress
      },
      




    })

    
    dispatch(setReceipt(userReceipt))
   
  },[cartItems, amount, total, , Address, BillingAddress])







  async function handleSubmit(e){
    e.preventDefault();
   
    
    dispatch(setRecordSummPostStatus(true))



    

}




  return (
<form onSubmit={handleSubmit}>
    <CheckoutWrapper isHidden={isHidden}>
<Fees>

       <OrderTotalWrapper>
        <h3>Order Total: </h3>
        <h3>${total}</h3>


       </OrderTotalWrapper>

       <DeliveryFee>
       <h3>Delivery Fee: </h3>
       <h3>${tax}</h3>
       </DeliveryFee>


       <TaxWrapper>
       <h3>Tax: </h3>
       <h3>${tax}</h3>
       </TaxWrapper>
</Fees>
     <ButtonContainer>
        <ButtonWrapper type="submit">Checkout  <span></span>${(parseFloat(tax) + parseFloat(total)
  ).toFixed(2)}</ButtonWrapper>
     </ButtonContainer>
     
    </CheckoutWrapper>

    </form>


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

const DeliveryFee = styled.div`
display:flex;
padding-left:20px; padding-right:20px;
margin-top:20px;
justify-content:space-evenly;
flex-direction:row;
gap:20px;


`



const Fees = styled.div`
display:flex;

justify-content:space-between;

padding:2rem 2rem;

flex-direction:column;


`

const CheckoutWrapper = styled.div`
background-color: ${Theme.colors.white};
left: 0;
bottom: ${({ isHidden }) => (isHidden ? '-600px' :'0')}; /* Initially hidden */;
height:200px;
transform: ${({ isHidden }) => (isHidden ? 'translateY(600px)' : '0')};
transition: ${({ isHidden }) => (isHidden ? 'transform 3s ease-in' : '0')}; 
width:100%;
z-index:100;
display:flex;
position:fixed;
justify-content:space-evenly;
font-family: 'Work Sans', sans-serif;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`







export default CheckoutModal