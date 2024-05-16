import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { setBillingAddress,clearBillingAddress,fetchBillAddress,fetchUserAllBillingAddress,setPrevBillingAddress} from '../../../redux/feature/BillingAddressSlice';

import { setOpenBillingSliderForm } from '../../../redux/feature/LoadManagement';






const BillingEdit = () =>{

 
    const [toggle,setToggle] = useState(false)
    const {BillingAddress, BillingAddressAll,PrevBillingAddress} = useSelector((store) => store.billing)
    const [selectedBillingAddresses, setSelectedBillingAddresses]  = useState([])
    const dispatch = useDispatch();
    const name= localStorage.getItem('Username')
    let Username = ''
    

    name ? Username = name.replace(/^"(.*)"$/, '$1') : Username = '';

    


  


    
    const handleOpenSliderForm = () =>{

      dispatch(setOpenBillingSliderForm(true))

  }



  
  useEffect(() => {
   
      dispatch(fetchBillAddress());
      
      dispatch(fetchUserAllBillingAddress());
    


    dispatch(setPrevBillingAddress())
  }, [dispatch]);

return(
   
<>

{BillingAddress.FirstName ?
<Section_Payment_Billing>

<SectionWrapper>
<h2>Billing Address</h2>

<EditButton onClick={handleOpenSliderForm}>Edit</EditButton>
</SectionWrapper>

 <Billing_Item_Container>
                                                   
                                                    <SingleItemContainer key={BillingAddress._id}>
                                                       
                                                    <TopContainer>
                                                    <p1>{BillingAddress.Address}</p1>
                                                    <p2>{BillingAddress.State}</p2>
                                                    
            
                                                    </TopContainer>
                                                    <MidContainer>

                                                    <p3>{BillingAddress.City}</p3>
                                                    
                                                    </MidContainer>

                                                    
                                                    <BottomContainer>
                                                    
                                                    <p4>{BillingAddress.Country}</p4>
                                                    <p5> {BillingAddress.Postal}</p5>
                                                    </BottomContainer>
                                                    <p6> {BillingAddress.LastName}  {BillingAddress.FirstName}</p6>  
                                                   </SingleItemContainer>
                                                 
                                                  
                                     
 </Billing_Item_Container>



                         
                         
                           

               

</Section_Payment_Billing> : 


<Section_Payment_Billing login>

<SectionWrapper>
<h2>Billing Address</h2>

<EditButton onClick={handleOpenSliderForm}>Edit</EditButton>
</SectionWrapper>

 <Billing_Item_Container  login>
                                           {Username ?      <SingleItemContainer login>
                                                       
                                                       <p>Add a Billing Address</p>
                                                      </SingleItemContainer>
                                                      :
                                                    <SingleItemContainer login>
                                                       
                                                    <p>Login in to Add an Address</p>
                                                   </SingleItemContainer>
                                                 
                                           } 
                                     
 </Billing_Item_Container>



                         
                         
                           

               

</Section_Payment_Billing>
}


</>






   

)

}

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


const SingleItemContainer = styled.div`
display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  font-size: 0.825rem;
  border:1px solid ${Theme.colors.ColumnBlack};
  border-radius: 3px;
  padding:0.5rem 0.5rem;
  gap:.5rem;
  font-size: 1rem;
  width:100%;
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

  ${(props)=>props.login && css`
  display:flex;
  flex-wrap:wrap;
  border:none;
  align-content:center;
  justify-content:center;
  align-self:center;
  justify-self:center;
  height:100%;
  width:100%;
  font-size:18px;
  font-weight:bold;
  `}
`





const Billing_Item_Container = styled.div`
display:flex;
padding-bottom:2rem;
padding-top:2rem;
gap:2rem;
margin-right:5rem;
  
  justify-content:left;
  align-items:center;

${(props) => props.login && css`
height:200px;
justify-content:center;
align-content:center;
justify-self:center;



`}
`

const Section_Payment_Billing = styled.div`
grid-row:5;
margin-top:5%;
height:20rem;
padding-top:20px;
padding-left:5rem;
grid-row:4;
margin-top:5%;
height: auto;
width:600px;
padding-top:20px;
padding-bottom:20px;
padding-left:5rem;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;
position:relative;




p1{
  top:0;
  left:0;

}

h2{
   
    font-size:36px;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}


${(props) => props.login && css`
height: 300px;




`}
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




export default BillingEdit