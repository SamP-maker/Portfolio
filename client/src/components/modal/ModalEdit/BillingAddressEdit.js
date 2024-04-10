import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { setBillingAddress,clearBillingAddress,fetchBillAddress,fetchUserAllBillingAddress } from '../../../redux/feature/BillingAddressSlice';
import ButtonTypes from '../../../util/Button/ButtonObject';
import { Link } from 'react-router-dom';






const BillingEdit = () =>{

 
    const [toggle,setToggle] = useState(false)
    const {BillingAddress, BillingAddressAll} = useSelector((store) => store.billing)
    const [selectedBillingAddresses, setSelectedBillingAddresses]  = useState([])
    const dispatch = useDispatch()


  


    const handleToggle = () =>{

        setToggle((prev) => !prev)

    }



    const handleCheckbox = (itemId) =>{

      if (selectedBillingAddresses.length > 1 || !selectedBillingAddresses.includes(itemId)) {
        setSelectedBillingAddresses([itemId]); // Update selection to include only the clicked item
          // If AddressState holds the full details, update recentAddressState directly
          const selectedBillingAddressDetails = BillingAddressAll.find((address) => address._id === itemId._id);
          
        
          dispatch(setBillingAddress(selectedBillingAddressDetails));
          localStorage.setItem('billing', JSON.stringify(selectedBillingAddressDetails));
        }
        

  }

  
  useEffect(() => {
    const storedBilling = localStorage.getItem('billing');
    
    if (storedBilling) {
      const parsedBilling = JSON.parse(storedBilling);
      
      if (!BillingAddress._id) {
        dispatch(setBillingAddress(parsedBilling)); // Update Redux state only if Address is not present
      }
      dispatch(fetchBillAddress());
  
      // Fetch AllAddress unconditionally when data is available in local storage
      dispatch(fetchUserAllBillingAddress());
    } else {
      // Fetch both Address and AllAddress if not available in local storage
      dispatch(fetchBillAddress());
      
      dispatch(fetchUserAllBillingAddress());
    }
  }, []);

return(
    <>
  
      
  
{!toggle ? 


/*First card */



<Section_Payment_Billing>
<h2>Billing Address</h2>

<EditButton onClick={handleToggle}>Edit</EditButton>

 <Billing_Item_Container>
                                                  
                                                    <SingleItemContainer>
                                                       
                                                       <div key={BillingAddress._id}>
                                                       <p1>Surname: {BillingAddress.LastName}</p1>
                                                       <p1>Name: {BillingAddress.FirstName}</p1>
                                                       <p1>Address: {BillingAddress.Address}</p1>
                                                       <p1>Post Code: {BillingAddress.Postal}, State: {BillingAddress.State}</p1>
                                                       <p1>City: {BillingAddress.City}, Country: {BillingAddress.country}</p1>
                                                       </div>
                                                         
                                                   </SingleItemContainer>
                                                 
                                                  
                                     
 </Billing_Item_Container>
                         
                         
                           

               

</Section_Payment_Billing>


   :



<Section_Payment_Billing_fetch_All>

<h2>Billing Address</h2>
<EditButton onClick={handleToggle}>close</EditButton>

 <Billing_Item_Container>
                                                  {BillingAddressAll.length > 1 ?      
                                                  
                                                  BillingAddressAll.map (items => ((
                                                 
<Selection_Wrapper key={items._id}>
                                          <label>
                                            <Input 
                                                type="checkbox"
                                                name="checkbox"
                                                checked={selectedBillingAddresses.includes(items)}
                                                onChange={() => handleCheckbox(items)}
                                                
                                               
                                            />
                                            </label> 


                                                    
                <ItemContainer>
                                                       <div>
                                                       <p1>Surname: {items.LastName}</p1>
                                                       <p1>Name: {items.FirstName}</p1>
                                                       <p1>Address: {items.Address}</p1>
                                                       <p1>Post Code: {items.Postal}, State: {items.State}</p1>
                                                       <p1>City: {items.City}, Country: {items.country}</p1>
                                                       </div>
                                                         
                                                   </ItemContainer>
                                                   </Selection_Wrapper>

                                                
))): 
                                                  
                                                  (
                                                <SingleItemContainer>
                                                       
                                                       <div key={BillingAddress._id}>
                                                       <p1>Surname: {BillingAddress.LastName}</p1>
                                                       <p1>Name: {BillingAddress.FirstName}</p1>
                                                       <p1>Address: {BillingAddress.Address}</p1>
                                                       <p1>Post Code: {BillingAddress.Postal}, State: {BillingAddress.State}</p1>
                                                       <p1>City: {BillingAddress.City}, Country: {BillingAddress.country}</p1>
                                                       </div>
                                                         
                                                   </SingleItemContainer>

                                                  )
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   }
                                                   
                                                 
                                                  
                                     
 </Billing_Item_Container>
 <FinalizeButtonWrapper>
 <ButtonTypes.Confirm onClick={handleToggle}/>
</FinalizeButtonWrapper>                   
                                      
                        
</Section_Payment_Billing_fetch_All>



   

}

</>
)

}


const SingleItemContainer = styled.div`
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


const Section_Payment_Billing_fetch_All = styled.div`
grid-row:5;
margin-top:5%;
height: auto;
padding-top:20px;
padding-bottom:20px;
padding-left:5rem;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;
position:relative;
height: auto;



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


const Selection_Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(1,10rem);
grid-template-rows: repeat(1,10rem);
padding-bottom:2rem;
padding-top:2rem;
  
  justify-items:center;
  align-items:center;

  label {
  
    align-items:center;
    justify-items:center;
    grid-column-start: 1;
    grid-column-end: 1;
  }

`

const FinalizeButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
width:250px;
margin-left:80%;


`

const ItemContainer = styled.div`
grid-column-start:2;
grid-column-end:2;
font-size: 0.825rem;

position: relative;
font-size: 1rem;
margin-top: 0;


p1 {
  padding: 0.5rem 0.5rem;
  display: flex;
}
`



const Billing_Item_Container = styled.div`
margin-top:1%;
display:grid;
grid-template-columns: repeat(1,1fr);
grid-template-rows: repeat(1,1fr);



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