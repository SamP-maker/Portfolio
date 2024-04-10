


//total revamp, make this not laggy
//TRIM ANYTHING HERE. Although items should async render, Too much of this will make it laggy





import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';

import { useSelector, useDispatch } from 'react-redux';
import { setBillingAddress } from '../../../redux/feature/BillingAddressSlice';






const BillingEdit = () =>{

    const {BillingAddress} = useSelector((store) => store.billing)
    const dispatch = useDispatch()


    useEffect(()=>{
      const selectedBillingAddress = localStorage.getItem('Billing')
      const parsedAddress = JSON.parse(selectedBillingAddress);
      
      





    },[])

return(
    <>
  
      


<Section_Payment_Billing>
<h2>Billing Address</h2>



 <Billing_Item_Container>
                                                  
                                                    <ItemContainer>
                                                       
                                                       <div key={BillingAddress._id}>
                                                       <p1>Surname: {BillingAddress.LastName}</p1>
                                                       <p1>Name: {BillingAddress.FirstName}</p1>
                                                       <p1>Address: {BillingAddress.Address}</p1>
                                                       <p1>Post Code: {BillingAddress.Postal}, State: {BillingAddress.State}</p1>
                                                       <p1>City: {BillingAddress.City}, Country: {BillingAddress.Country}</p1>
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
grid-row:5;
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




export default BillingEdit