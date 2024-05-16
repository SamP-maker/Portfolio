import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { setBillingAddress,clearBillingAddress,fetchBillAddress,fetchUserAllBillingAddress, setPrevBillingAddress } from '../../../redux/feature/BillingAddressSlice';
import ButtonTypes from '../../../util/Button/ButtonObject';
import { setOpenBillingForm,setOpenBillingSliderForm } from '../../../redux/feature/LoadManagement';






const BillingEditSlider = ({isHidden}) =>{

 
    const {BillingAddress, BillingAddressAll ,PrevBillingAddress} = useSelector((store) => store.billing)
    const [selectedBillingAddresses, setSelectedBillingAddresses]  = useState([])
    const dispatch = useDispatch()

    
  
    

  const handleCloseSliderForm = () =>{
    setSelectedBillingAddresses([]);
      dispatch(setBillingAddress({...PrevBillingAddress}))
    dispatch(setOpenBillingSliderForm(false))
  }


  const handleOpenForm = () =>{

    dispatch(setOpenBillingForm(true))

}


  
 


  const handleConfirmSlider = () =>{
        
        
    setSelectedBillingAddresses([]);
    dispatch(setPrevBillingAddress())
      dispatch(setOpenBillingSliderForm(false))
      
        
    

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

  

  
  

return(
    

<Section_Payment_Billing_fetch_All isHidden={isHidden}>
              <SectionWrapper>
                        <h2>Billing Address</h2>
                        <EditButton onClick={handleOpenForm}>Add Billing Address</EditButton>
              </SectionWrapper>
 <Billing_Item_Container>
                                                  {    
                                                  
                                                  BillingAddressAll.map (items => ((
                                                 
<Selection_Wrapper key={items._id}>
                                          


                                                    
                <ItemContainer>

                <label>
                                            <Input 
                                                type="checkbox"
                                                name="checkbox"
                                                checked={selectedBillingAddresses.includes(items)}
                                                onChange={() => handleCheckbox(items)}
                                                
                                               
                                            />
                                            </label> 
                                      <BottomContainerWrapper>
                                            <TopContainer>
                                                    <p1>{items.Address}</p1>
                                                    <p2>{items.State}</p2>
                                                    
            
                                                    </TopContainer>
                                                    <MidContainer>

                                                    <p3>{items.City}</p3>
                                                    
                                                    </MidContainer>

                                                    
                                                    <BottomContainer>
                                                    
                                                    <p4>{items.Country}</p4>
                                                    <p5> {items.Postal}</p5>
                                                    </BottomContainer>
                                                    
                                                    
                                                    <p6> {items.LastName}  {items.FirstName}</p6>   

                                                    </BottomContainerWrapper>
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

const BottomContainerWrapper = styled.div`
display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  gap:.5rem;
  font-size: 1rem;
  margin-top: 0;


  p1{
    font-size:18px;
    font-weight:bold;
    opacity: 0.8;
  }

  p2{
    font-size:18px;
  }

  p3,p4{
    font-size:18px;
     font-weight:bold;;
  }

  p5{
    font-size:18px;
    opacity:0.8;
  }


  p6{
    font-size:18px;
  }

`

const MidContainer = styled.div`
display:flex;
flex-direction:row;
gap:1rem;

`


const TopContainer = styled.div`

display:flex;
flex-direction:row;
gap:1rem;
align-content:center;

`



const BottomContainer = styled.div`

display:flex;
flex-direction:row;
gap:1rem;
align-content:center;
`





const SectionWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`





const Section_Payment_Billing_fetch_All = styled.div`
position:fixed;
right: ${({ isHidden }) => (isHidden ? '0' :'-800px')}; /* Initially hidden */
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
    font-size:20px;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}


&::-webkit-scrollbar{
    display:none;
  }
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

const FinalizeButtonWrapper = styled.div`
display:flex;
justify-content:right;
margin-bottom:2rem;
margin-top:2rem;
padding-right:4rem;
gap:1rem;

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




export default BillingEditSlider