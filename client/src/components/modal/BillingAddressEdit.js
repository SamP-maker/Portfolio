import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import { Link } from 'react-router-dom';
import Input from '../../util/Input/Input';






const BillingEdit = () =>{

    const [billingState, setBillingState] = useState({})
    const [recentBillingState, setrecentBillingState] = useState({})
    const [selectedBillingAddresses, setSelectedBillingAddresses] = useState([]);
    const [toggle,setToggle] = useState(false)



    const handleToggle = () =>{

        setToggle((prev) => !prev)

    }


    const handleCheckbox = (itemId) =>{

      if (selectedBillingAddresses.length > 1 || !selectedBillingAddresses.includes(itemId)) {
        setSelectedBillingAddresses([itemId]); // Update selection to include only the clicked item
          // If AddressState holds the full details, update recentAddressState directly
          const selectedBillingAddressDetails = billingState.find((address) => address._id === itemId._id);
          setrecentBillingState(selectedBillingAddressDetails); // Update recentAddressState
        
      
        }

  }


useEffect(()=>{


    

  const fetchBillAddress = async() =>{
    
     

    try{
      const response = await fetch(`http://localhost:5000/getBillingAddress`,{
        method:'GET',
        credentials: 'include', // Include credentials in the request
        headers:{
          "Content-Type": "application/json",
      },
      });

      if(!response.ok){
        throw new Error(`an Error occured ${response.statusText}`);
    
      }else{
      
      const data = await response.json();
      setrecentBillingState(data[0])
     


      }
   
    }catch(error){
      window.alert(error.message);
    }
      


  }



const fetchUserAllBillingAddress = async()=>{
    
    try{
        const response = await fetch('http://localhost:5000/getBillingAddressHistory', {
          method:'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        });

    if(response.ok){

        const result = await response.json()
        setBillingState(result)


    }
}catch(err){
    window.alert(err)
}






}
fetchUserAllBillingAddress()
fetchBillAddress()

}, [])

return(
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
                                                  
                                                  billingState.map (items => (
                                                  <ItemContainer key={items._id}>

                                          <label>
                                            <Input 
                                                type="checkbox"
                                                name="checkbox"
                                                checked={selectedBillingAddresses.includes(items)}
                                                onChange={() => handleCheckbox(items)}
                                                
                                               
                                            />
                                            </label> 


                                                    
                
                                                       <div>
                                                       <p1>Surname: {items.LastName}</p1>
                                                       <p1>Name: {items.FirstName}</p1>
                                                       <p1>Address: {items.Address}</p1>
                                                       <p1>Post Code: {items.Postal}, State: {items.State}</p1>
                                                       <p1>City: {items.City}, Country: {items.country}</p1>
                                                       </div>
                                                         
                                                   </ItemContainer>
                                                  )): 
                                                  
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