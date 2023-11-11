import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import { Link } from 'react-router-dom';








const AddressEdit = () =>{


    const [AddressState, setAddressState] = useState({})
    const [recentAddressState, setrecentAddressState] = useState({})
    const [toggle,setToggle] = useState(false)

useEffect(()=>{

const fetchUserAllBillingAddress = async () =>{

    try{
        const response = await fetch('http://localhost:5000/AddressHistory', {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        });

    if(response.ok){

        const result = await response.json()
        recentAddressState(result[0])


    }
}catch(err){
    window.alert(err)
}
};


const fetchBillingAddress = async () =>{

    try{
        const response = await fetch('http://localhost:5000/AddressHistory', {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        });

    if(response.ok){

        const result = await response.json()
        setAddressState(result[0])


    }
}catch(err){
    window.alert(err)
}
};




fetchUserAllBillingAddress()
fetchBillingAddress()
}, [])



return(
/*First card */
<>
  
      
  
{!toggle ? 


/*First card */



<Section_Payment_Billing>
<h2>Billing Address</h2>

<EditButton onClick={handleToggle}>Edit</EditButton>

 <Billing_Item_Container>
                                                  
                                                    <ItemContainer>
                                                       
                                                       <div key={recentBillingState._id}>
                                                       <p1>Surname: {recentBillingState.LastName}</p1>
                                                       <p1>Name: {recentBillingState.FirstName}</p1>
                                                       <p1>Address: {recentBillingState.Address}</p1>
                                                       <p1>Post Code: {recentBillingState.Postal}, State: {recentBillingState.State}</p1>
                                                       <p1>City: {recentBillingState.City}, Country: {recentBillingState.country}</p1>
                                                       </div>
                                                         
                                                   </ItemContainer>
                                                 
                                                  
                                     
 </Billing_Item_Container>
                         
                         
                           

               

</Section_Payment_Billing>


   :



<Section_Payment_Billing>

<h2>Billing Address</h2>
<EditButton onClick={handleToggle}>close</EditButton>

 <Billing_Item_Container>
                                                  {billingState.length > 1 ?      
                                                  
                                                  (
                                                  <ItemContainer>
                
                                                       <div key={billingState._id}>
                                                       <p1>Surname: {billingState.LastName}</p1>
                                                       <p1>Name: {billingState.FirstName}</p1>
                                                       <p1>Address: {billingState.Address}</p1>
                                                       <p1>Post Code: {billingState.Postal}, State: {billingState.State}</p1>
                                                       <p1>City: {billingState.City}, Country: {billingState.country}</p1>
                                                       </div>
                                                         
                                                   </ItemContainer>
                                                  ): 
                                                  
                                                  (
                                                <ItemContainer>
                                                       
                                                       <div key={recentBillingState._id}>
                                                       <p1>Surname: {recentBillingState.LastName}</p1>
                                                       <p1>Name: {recentBillingState.FirstName}</p1>
                                                       <p1>Address: {recentBillingState.Address}</p1>
                                                       <p1>Post Code: {recentBillingState.Postal}, State: {recentBillingState.State}</p1>
                                                       <p1>City: {recentBillingState.City}, Country: {recentBillingState.country}</p1>
                                                       </div>
                                                         
                                                   </ItemContainer>

                                                  )
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   }
                                                   
                                                 
                                                  
                                     
 </Billing_Item_Container>
                         
                        
</Section_Payment_Billing>



   

}

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



const OrderContentContainer = styled.div`
margin-top:1%;
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(auto,1fr);

`

const Section_Order_Confirmation = styled.div`
grid-row:3;
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



p1{
  top:0;
  left:0;

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

const StyledLink = styled(Link)`
text-decoration:none;
color: ${Theme.colors.ColumnBlack};
`





export default AddressEdit