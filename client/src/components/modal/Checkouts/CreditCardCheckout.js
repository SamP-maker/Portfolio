




//total revamp, make this not laggy
//TRIM ANYTHING HERE. Although items should async render, Too much of this will make it laggy





import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { setCreditCardCredentials ,clearCreditCardCredentials } from '../../../redux/feature/CardCredentialSlice';
import ButtonTypes from '../../../util/Button/ButtonObject';






const CreditCardEdit = () =>{

   const {CreditCardCredentials} = useSelector((store)=> store.credit)
    const dispatch = useDispatch()



return(
    <>
  
      
  




<Section_Payment_Billing>
<h2>Payment Method</h2>


 <Billing_Item_Container>
                                                  
                                                    <ItemContainer>
                                                       
                                                       <div key={CreditCardCredentials._id}>
                                                       <p1>Card Type: {CreditCardCredentials.cardType}</p1>
                                                       <p1>Name on Card: {CreditCardCredentials.FullName}</p1>
                                                       <p1>CardNumber: {CreditCardCredentials.CardNumber}</p1>
                                                       <p1>Expire: {CreditCardCredentials.Month}/{CreditCardCredentials.Year}</p1>
                                                      
                                                       
                                                       </div>
                                                         
                                                   </ItemContainer>
                                                 
                                                  
                                     
 </Billing_Item_Container>
                         
                         
                           

               

</Section_Payment_Billing>
 

   



</>
)

}



const ItemContainer = styled.div`
grid-column-start:1;
grid-column-end:3;
font-size:0.825rem;
height:200px;
position:relative;
font-size:1rem;
margin-top:0;



p1{

  padding: .5rem .5rem;
  display:flex;
}
`



const Billing_Item_Container = styled.div`
grid-column-start:1;
grid-column-end:3;
font-size:0.825rem;
display:flex;
flex-direction:column;
gap:10px;
height:200px;
position:relative;
font-size:1rem;


`

const Section_Payment_Billing = styled.div`
grid-row:6;
margin-top:5%;
height:20rem;
padding-top:20px;
padding-left:5rem;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;
position:relative;



p1{
  top:0;
  left:0;

}

h2{
    position:absolute;
    top:-20px;
    left:3rem;
    font-size:36px;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}
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




export default CreditCardEdit