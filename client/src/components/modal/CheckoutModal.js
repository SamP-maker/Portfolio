import React, { useState } from "react";
import {styled,css} from 'styled-components';
import Theme from "../../theme/theme";
import { useEffect } from "react";


const CheckoutModal = () => {

  const [orderTotal,setOrderTotal] = useState({
    Total: 0,
    Tax: 0,
    

  })



  async function handleSubmit(e){
    e.preventDefault()
try{
  const response = await fetch("http://localhost:5000/recordSummary",{
    method:"POST",
    headers:{
      "Content-Type": "application/json",


},
    credentials:"include",
    body: JSON.stringify()
  })


  if(response.ok){
    const data = response.json()
    console.log(`Receipt:`, data)
  }
}catch(err){
  console.error(`an error has occured`, err)
}

}



  useEffect(()=>{
      return async () =>{

try{
    let response = await fetch('http://localhost:5000/order',{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
  
  
  },
      credentials:"include",
    });

    if(response.ok){
    
      const result= await response.json()
   
      
      setOrderTotal({
        Total: result[0].Total.toFixed(2),
        Tax: Math.abs(result[0].Total * 1.16 - result[0].Total).toFixed(2),
        
      })
      
    }else{
        window.alert('Cannot get item')
    }

  }catch(err){
    console.error('An error has occured:', err)
  }







  }
},[])


  return (
<form onSubmit={handleSubmit}>
    <CheckoutWrapper>
<Fees>
       <OrderTotalWrapper>
        <h3>Order Total: </h3>
        <h3>${orderTotal.Total}</h3>


       </OrderTotalWrapper>

       <DeliveryFee>
       <h3>Delivery Fee: </h3>
       <h3>${orderTotal.Tax}</h3>
       </DeliveryFee>


       <TaxWrapper>
       <h3>Tax: </h3>
       <h3>${orderTotal.Tax}</h3>
       </TaxWrapper>
</Fees>
     <ButtonContainer>
        <ButtonWrapper>Checkout  <span></span>${(parseFloat(orderTotal.Tax) + parseFloat(orderTotal.Total)
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
bottom: 0;
height:200px;
width:100%;
z-index:1;
display:flex;
position:fixed;
justify-content:space-evenly;
font-family: 'Work Sans', sans-serif;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`







export default CheckoutModal