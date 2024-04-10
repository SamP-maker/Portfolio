import React, {useState,useEffect} from 'react';
import { useNavigate, useLocation, Link} from 'react-router-dom';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import ButtonTypes from '../../../util/Button/ButtonObject';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleAddress,fetchUserAllAddress,setAddress,clearAddress } from '../../../redux/feature/AddressSlice';







const AddressEdit = () =>{


   
    const [toggle,setToggle] = useState(false)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const addressType = useLocation()
    const {Address, AllAddress} = useSelector((store) => store.address)
    const [selectedAddresses, setSelectedAddresses] = useState([])



    const handleToggle = () =>{

        setToggle((prev) => !prev)
        

    }

   

 

   


    const handleCheckbox = (itemId) =>{

        if (selectedAddresses.length > 1 || !selectedAddresses.includes(itemId)) {
            setSelectedAddresses([itemId]); // Update selection to include only the clicked item
            // If AddressState holds the full details, update recentAddressState directly
            const selectedAddressDetails = AllAddress.find((address) => address._id === itemId._id);
            dispatch(setAddress(selectedAddressDetails));
            localStorage.setItem('selectedAddress', JSON.stringify(selectedAddressDetails));
            console.log(selectedAddressDetails)
          }

    }


    useEffect(() => {
      const storedAddress = localStorage.getItem('selectedAddress');
      
      if (storedAddress) {
        const parsedAddress = JSON.parse(storedAddress);
    
        if (!Address._id) {
          dispatch(setAddress(parsedAddress)); // Update Redux state only if Address is not present
        }
        dispatch(fetchSingleAddress());
        // Fetch AllAddress unconditionally when data is available in local storage
        dispatch(fetchUserAllAddress());
      } else {
        // Fetch both Address and AllAddress if not available in local storage
        dispatch(fetchSingleAddress());
        
        dispatch(fetchUserAllAddress());
      }
    }, []);


    const handleDataCheck = () =>{
      Address.LastName ?  <Link to='/Payment'></Link> : window.alert('form needs to be filled') 
    }


    





return(
/*First card */
<>
  
      
  
{!toggle ? 


/*First card */



<Section_Payment_Billing>
<h2>Address</h2>

<EditButton onClick={handleToggle}>Edit</EditButton>

 <Address_Item_Container>
                                                  
                                                    <SingleItemContainer>
                                                       
                                                       <div key={Address._id}>
                                                       <p1>Surname: {Address.LastName}</p1>
                                                       <p1>Name: {Address.FirstName}</p1>
                                                       <p1>Address: {Address.Address}</p1>
                                                       <p1>Post Code: {Address.Postal}, District: {Address.District}</p1>
                                                       </div>
                                                         
                                                   </SingleItemContainer>
                                                 
                                                  
                                     
 </Address_Item_Container>
                         
 {addressType.pathname === '/Address' ?  
  <FinalizeButtonWrapper>
     <ButtonTypes.Confirm onClick={handleDataCheck}/>
  </FinalizeButtonWrapper>
  : 
  null
}
               

</Section_Payment_Billing>


   :



<Section_Payment_Billing_fetch_All>

<h2>Address</h2>
<EditButton onClick={handleToggle}>close</EditButton>

 <Billing_Item_Container>
                                                  {AllAddress.length > 1 ?   

                                                     AllAddress.map( items => (
                                                    
                                                  
                                                    (

                                            <Selection_Wrapper key={items._id}>

                                                <label>
                                            <Input 
                                                type="checkbox"
                                                name="checkbox"
                                                checked={selectedAddresses.includes(items)}
                                                onChange={() => handleCheckbox(items)}
                                                
                                               
                                            />
                                            </label> 

                                                   <ItemContainer >
                                                   
                                                        <p1>Surname: {items.LastName}</p1>
                                                        <p1>Name: {items.FirstName}</p1>
                                                        <p1>Address: {items.Address}</p1>
                                                        <p1>Phone : {items.Phone}</p1>
                                                        <p1>Post Code: {items.Postal}, District: {items.District}</p1>
                                                     
                                                          
                                                    </ItemContainer>



                                          </Selection_Wrapper>


                                            )))
                                                 
                                                   :
                                                  
                                                
                                           
                                                  (
                                                <ItemContainer>
                                                       <div key={AllAddress._id}>
                                                       <p1>Surname: {AllAddress.LastName}</p1>
                                                       <p1>Name: {AllAddress.FirstName}</p1>
                                                       <p1>Address: {AllAddress.Address}</p1>
                                                       <p1>Post Code: {AllAddress.Postal}, District: {AllAddress.District}</p1>
                                                       </div>
                                                         
                                                   </ItemContainer>

                                                  )
                                               
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   }

                                
                                                 
                                                  
                                     
 </Billing_Item_Container>
 <FinalizeButtonWrapper>
                 
     <ButtonTypes.Confirm onClick={handleDataCheck}/>
</FinalizeButtonWrapper>                   
                        
</Section_Payment_Billing_fetch_All>



   

}

</>
)

}


const FinalizeButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
width:250px;
margin-bottom:2rem;
margin-top:2rem;
margin-left:80%;


`




const Address_Item_Container = styled.div`
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




const Billing_Item_Container = styled.div`
margin-top:1%;
display:grid;
grid-template-columns: repeat(1,1fr);
grid-template-rows: repeat(1,1fr);


`

const Section_Payment_Billing_fetch_All = styled.div`
grid-row:4;
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



const Section_Payment_Billing = styled.div`
grid-row:4;
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





const EditButton = styled.p`
margin-left:92%;
margin-top:2%;
color:${Theme.colors.Teal};

&:hover{
  cursor:pointer;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

`







export default AddressEdit