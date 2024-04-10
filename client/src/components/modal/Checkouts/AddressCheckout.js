
//total revamp, make this not laggy
//TRIM ANYTHING HERE. Although items should async render, Too much of this will make it laggy


import React, {useState,useEffect} from 'react';
import { useNavigate, useLocation, Link} from 'react-router-dom';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import ButtonTypes from '../../../util/Button/ButtonObject';
import { useSelector, useDispatch } from 'react-redux';
import { setAddress,clearAddress,fetchSingleAddress } from '../../../redux/feature/AddressSlice';







const AddressEdit = () =>{



    
    const dispatch = useDispatch()
    

    useEffect(()=>{
      const selectedAddress = localStorage.getItem('SelectedAddress')
      const parsedAddress = JSON.parse(selectedAddress);
      dispatch(fetchSingleAddress())
      dispatch(setAddress(parsedAddress))





    },[])

    const {Address} = useSelector((store) => store.address)







return(



<Section_Payment_Billing>
<h2>Address</h2>



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
                         

               

</Section_Payment_Billing>

               
                        

)

}










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