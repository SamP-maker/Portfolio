import React, {useState,useEffect} from 'react';
import { useNavigate, useLocation, Link} from 'react-router-dom';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import ButtonTypes from '../../../util/Button/ButtonObject';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleAddress,fetchUserAllAddress,setAddress,clearAddress,setPrevAddress} from '../../../redux/feature/AddressSlice';
import { setOpenForm,setOpenSliderForm } from '../../../redux/feature/LoadManagement';







const AddressEditSlider = ({isHidden}) =>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const addressType = useLocation()
    const {Address, AllAddress,PrevAddress} = useSelector((store) => store.address)
    const [selectedAddresses, setSelectedAddresses] = useState([])
    
    
  
  




    const handleCloseSliderForm = () =>{
      setSelectedAddresses([]);
      dispatch(setAddress({...PrevAddress}))
        dispatch(setOpenSliderForm(false))
      }

      const handleOpenForm = () =>{
        dispatch(setOpenForm(true))
      }

      
    


    const handleCheckbox = (itemId) =>{
      

        if (selectedAddresses.length > 1 || !selectedAddresses.includes(itemId)) {
            setSelectedAddresses([itemId]); // Update selection to include only the clicked item
            // If AddressState holds the full details, update recentAddressState directly
            const selectedAddressDetails = AllAddress.find((address) => address._id === itemId._id);
            
            dispatch(setAddress(selectedAddressDetails));
            localStorage.setItem('selectedAddress', JSON.stringify(selectedAddressDetails));


          
            
          }

          

    }


    
    

 


    const handleConfirmSlider = () =>{
        
        
      setSelectedAddresses([]);
      dispatch(setPrevAddress())
        dispatch(setOpenSliderForm(false))
        
          
      

    }




   


    return(
        


<Section_Payment_Billing_fetch_All isHidden={isHidden}>
        <SectionWrapper>
                <h2>Address</h2>
                <EditButton onClick={handleOpenForm}>Add Address</EditButton>
        </SectionWrapper>
                <Billing_Item_Container>
                                                  {  

                                                     AllAddress.map( items => (
                                                    
                                                  
                                                    (

                                            <Selection_Wrapper key={items._id}>
                                        <ItemContainer >
                                                <label>
                                            <Input 
                                                type="checkbox"
                                                name="checkbox"
                                                checked={selectedAddresses.includes(items)}
                                                onChange={() => handleCheckbox(items)}
                                                
                                               
                                                 />
                                              </label> 

                                                   
                                                   
                                                        <p1>Surname: {items.LastName}, {items.FirstName}</p1>
                                                        <p2>Phone : {items.Phone}</p2>
                                                        
                                                        <p3>Address: {items.Address}</p3>
                                                        
                                                        <p4>District: {items.District},{items.Postal}</p4>
                                                     
                                                          
                                        </ItemContainer>
                                            </Selection_Wrapper>
                                                )))
                                                 
                                                  
                                               
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   }

                                
                                                 
                                                  
                                     
            </Billing_Item_Container>
                        <FinalizeButtonWrapper>

                                    <ButtonTypes.Cancel onClick={handleCloseSliderForm}/>    
                                    <ButtonTypes.Confirm onClick={handleConfirmSlider}/>

                        </FinalizeButtonWrapper>                   
                        
</Section_Payment_Billing_fetch_All>
    )
}





const FinalizeButtonWrapper = styled.div`
display:flex;
justify-content:right;
margin-bottom:2rem;
margin-top:2rem;
padding-right:4rem;
gap:1rem;
`




const Selection_Wrapper = styled.div`
display:flex;
padding-bottom:2rem;
padding-top:2rem;
gap:2rem;
margin-right:5rem;
  
  justify-content:left;
  align-items:center;

  

`







const Billing_Item_Container = styled.div`
margin-top:1%;
display:flex;
flex-direction:column;



height:600px;
overflow-y:scroll;

&::-webkit-scrollbar{
  display:none;
}



`

const Section_Payment_Billing_fetch_All = styled.div`
position:fixed;
right: ${({ isHidden }) => (isHidden ? '0' :'-600px')}; /* Initially hidden */
display:flex;
top:0;
background-color: ${Theme.colors.white};
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
flex-direction:column;
justify-content:space-evenly;
height:100%;
*/max-height: calc(5 * (2.5rem + 2.5rem) + 3rem);*/
overflow-y:scroll;
z-index:999;
transform: ${({ isHidden }) => (isHidden ? '0' : 'translateX(200px)')};
transition: ${({ isHidden }) => (isHidden ? 'transform 3s ease' : ' ')}; 
grid-row:4;
width:600px;
padding-top:20px;
padding-bottom:20px;
padding-left:5rem;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;



p1{
  top:0;
  left:0;

}

h2{
    left:3rem;
    font-size:36px;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}


&::-webkit-scrollbar{
    display:none;
  }
`

const SectionWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`




const ItemContainer = styled.div`
display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  font-size: 0.825rem;
  border:1px solid ${Theme.colors.ColumnBlack};
  border-radius: 3px;
  padding:0.5rem 0.5rem;
  gap:.5rem;
  font-size: 1rem;
  width:100%;
  margin-top: 0;

  


  p1,p2,p3,p4{
    font-size:18px;
    font-weight:bold;
    opacity: 0.8
  }
  p5{
    opacity:0.8;
  }



`





const EditButton = styled.p`
color:${Theme.colors.Teal};
display:flex;
justify-content:right;
padding-right:2rem;

&:hover{
  cursor:pointer;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

`





export default AddressEditSlider