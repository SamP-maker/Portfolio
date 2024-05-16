import React, {useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import ButtonTypes from '../../../util/Button/ButtonObject';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleAddress,fetchUserAllAddress,setAddress,clearAddress,setPrevAddress } from '../../../redux/feature/AddressSlice';
import { setOpenSliderForm, setOpenForm,} from '../../../redux/feature/LoadManagement';




const AddressEdit = () =>{


    

    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {Address,AllAddress,PrevAddress} = useSelector((store) => store.address)
    const name= localStorage.getItem('Username')
    let Username = ''
    

    name ? Username = name.replace(/^"(.*)"$/, '$1') : Username = '';

    

  


    const handleOpenSliderForm = () =>{

      
      dispatch(setOpenSliderForm(true))
    }


   

   

    useEffect(() => {
     
 
        dispatch(fetchSingleAddress());
        // Fetch AllAddress unconditionally when data is available in local storage
        dispatch(fetchUserAllAddress());
     

      dispatch(setPrevAddress())
    }, [dispatch]);



    

 


  


    





return(
/*First card */
<PageWrapper>








<Section_Payment_Billing>
<SectionWrapper>
<h2>Address</h2>

<EditButton onClick={handleOpenSliderForm}>Edit</EditButton>
</SectionWrapper>
{Address.FirstName ? 
 <Address_Item_Container>
                                          
                                                    <SingleItemContainer key={Address._id}>
                                                    <TopContainer>
                                                    <p1>{Address.LastName} {Address.FirstName}</p1>
                                                        <p3>{Address.Phone}</p3>
                                                        </TopContainer>
                                                        
                                                        <p4>{Address.Address}</p4>
                                                      <BottomContainer>
                                                        <p5>{Address.District}</p5>-<p6>{Address.Postal}</p6>
                                                        
                                                        </BottomContainer>   
                                                   </SingleItemContainer>
                                                 
                                                  
                                     
 </Address_Item_Container> : 
 
 <>
 
 {Username ? <SingleItemContainer login>  <p>Add an Address</p> </SingleItemContainer>:<SingleItemContainer login>  <p>Login in to Add an Address</p> </SingleItemContainer> }
 </>
 

 
 
 
 }
                         

 
               

</Section_Payment_Billing>
</PageWrapper>
)

}


const TopContainer = styled.div`

display:flex;
flex-direction:row;
gap:1rem;

`



const BottomContainer = styled.div`

display:flex;
flex-direction:row;

`




const PageWrapper = styled.div`

  top: 0;
  left: 0;
  height: 100%;
  display:grid;
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:1;
  grid-row-end:1;


`









const Address_Item_Container = styled.div`
display:flex;
padding-bottom:2rem;
padding-top:2rem;
gap:2rem;
margin-right:5rem;
  
  justify-content:left;
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


  p1,p2,p4{
    font-size:18px;
    font-weight:bold;
    opacity: 0.8
  }

  p3{
    font-size:18px;
    opacity:0.8;
  }
  p5{
    opacity:0.8;
  }

  ${(props)=>props.login && css`
  display:flex;
  flex-wrap:wrap;
  border:none;
  align-content:center;
  justify-content:center;
  align-self:center;
  justify-self:center;
  height:75%;
  width:85%;
  font-size:18px;
  font-weight:bold;
  
  `}
`



const SectionWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const Section_Payment_Billing = styled.div`
height: 200px;
width:600px;
padding-top:20px;
padding-bottom:20px;
padding-left:5rem;
grid-column-start:1;
grid-column-end:1;
grid-row-start:1;
grid-row-end:2;
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





export default AddressEdit