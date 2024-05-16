
import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import Label from '../../../util/Label/Label';
import ButtonTypes from '../../../util/Button/ButtonObject';
import { shake } from '../../../theme/animations/animations';
import {useDispatch, useSelector} from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { setOpenBillingForm } from '../../../redux/feature/LoadManagement';
import { setBillingAddressPostStatus } from '../../../redux/feature/PostManagement';
import { setBillingAddress } from '../../../redux/feature/BillingAddressSlice';


const BillingModal = ()=>{


  const [isSame,setIsSame] = useState(false)
  const {Address,AllAddress}= useSelector((store) => store.address)

  
 
  const [form, setForm] = useState({
    FirstName: '',
    LastName: '',
    Address: '',
    Postal: '',
    Country: '',
    City: '',
    State:''
  })

  
 
  const [errorMsg, setErrorMsg] = useState({
    FirstName: true,
    LastName: true,
    Address: true,
    Postal: true,
    Country: true,
    City: true,
    State:true


  })
  const [isLoad,setIsLoad] = useState(false)
  const dispatch = useDispatch();

  

  const handleIsSame = ()=>{
    setIsSame(true)
    
  }
 

  useEffect(()=>{



    if(isSame){
      setForm({
        FirstName: Address.FirstName,
        LastName: Address.LastName,
        Address: Address.Address,
        Postal: Address.Postal,
        Country: '',
        City: '',
        State:''



      })
      
    }
  },[isSame])



  async function handleSubmit(e){
    e.preventDefault();
    const formCheck = Object.values(form).every(item => item.trim() === '')

    
      

          for( const key in form){

            if(form[key].trim() === ''){
  
              setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                [key]: false,
              }));
  
              setTimeout(()=>
                setErrorMsg(prevErrorMsg => ({
                  ...prevErrorMsg,
                  [key]: true,
                }))
                
                
                
                ,1500)
  
  
              
              
            }
            }

            if(!formCheck){

              setForm(()=>({...form,
                FirstName:Address.FirstName,
                LastName:Address.LastName,
                
              }))
              dispatch(setBillingAddress(form))
              dispatch(setBillingAddressPostStatus(true))
            }
          
        


          
          

          



          


        }



 






      
      

       
  
        
  
  
      
  





    






  const handleForm = (value)=>{
    return setForm(prev =>{
      return {...prev,...value}
    })
  }

 


  
  const handleCloseForm = () =>{
    dispatch(setOpenBillingForm(false))
  }











    return(
       <PageWrapper>
       

        
       
        
       


    





    
   
    <FormWrapper onSubmit={handleSubmit}>
     <CheckOutWrapper>

     <CloseButtonWrapper onClick={handleCloseForm}><FaTimes/></CloseButtonWrapper>

{errorMsg.Address ?<Label fontSize="1rem" text="Billing Address"/> : <ErrorMessage>**This field is required**</ErrorMessage>}





    
                <Input
                    white
                    type="text" 
                    name="Address" 
                    placeholder="Address.."
                    value={form.Address}
                    onChange={(e) => handleForm({Address: e.target.value})}
                    />


{errorMsg.Postal ? <Label fontSize="1rem" text="Postal Code"/> : <ErrorMessage>**This field is required**</ErrorMessage>}
                <Input
                    white
                    type="text" 
                    name="name" 
                    placeholder="Postal Code.."
                    value={form.Postal}
                    onChange={(e) => handleForm({Postal: e.target.value})}
                    />

{errorMsg.Country ? <Label fontSize="1rem" text="Country"/>   : <ErrorMessage>**This field is required**</ErrorMessage>}
                <Input
                    white
                    type="text" 
                    name="Country" 
                    placeholder="Country.."
                    value={form.Country}
                    onChange={(e) => handleForm({Country: e.target.value})}
                    />
{errorMsg.State ? <Label fontSize="1rem" text="State"/>    : <ErrorMessage>**This field is required**</ErrorMessage>}
                <Input
                    white
                    type="text" 
                    name="State" 
                    placeholder="State.."
                    value={form.State}
                    onChange={(e) => handleForm({State: e.target.value})}
                    />
{errorMsg.City ? <Label fontSize="1rem" text="City"/> : <ErrorMessage>**This field is required**</ErrorMessage>}
                <Input
                    white
                    type="text" 
                    name="City" 
                    placeholder="City.."
                    value={form.City}
                    onChange={(e) => handleForm({City: e.target.value})}
                    />


<CheckBoxWrapper>
<Input 
     type="checkbox"
     name="checkbox"
     onChange={()=>handleIsSame()}
     placeholder="Same as delivery address"
     />
</CheckBoxWrapper>  

<ButtonWrapper>
        <ButtonTypes.Confirm type="submit"/>
</ButtonWrapper>         
              
     </CheckOutWrapper>
     </FormWrapper>
  
               
        </PageWrapper>

        
    )
}



{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Styling Sheet~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ }


const CloseButtonWrapper = styled.div`
padding:2px 2px;
height:10px;
width:10px;
display:flex;
justify-content:center;
justify-self:right;
grid-row:1;
grid-column:1;


&:hover{
cursor:pointer;
}

`



const FormWrapper = styled.form`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index:999;
  align-items: center;
  justify-content: center;
`




const ErrorMessage = styled.label`
color: ${Theme.colors.Red};
font-family: 'Hammersmith One', sans-serif;

animation:${shake} .5s ease-in-out;
`





const CheckOutWrapper = styled.div`
padding-bottom:10rem;
background-color: ${Theme.colors.white};
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
width:40vw;
display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(auto,1fr);
padding:2rem 2rem;


padding: 5rem 5rem;
Label{
  margin-left:2rem;
}



Div:nth-child(1){
  grid-column-start:3;
  grid-column-end:3;
  grid-row-start:1;
  grid-row-end:1;
}


Label:nth-child(2){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:2;
  grid-row-end:3;
}



Input:nth-child(3){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:3;
  grid-row-end:4;
}

Label:nth-child(4){
 
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:4;
  grid-row-end:5;
}

Input:nth-child(5){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:5;
  grid-row-end:6;
}

Label:nth-child(6){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:2;
  grid-row-end:3;
}

Input:nth-child(7){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:3;
  grid-row-end:4;
}

Label:nth-child(8){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:4;
  grid-row-end:5;
}


Input:nth-child(9){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:5;
  grid-row-end:6;
}

Label:nth-child(10){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:6;
  grid-row-end:7;
}


Input:nth-child(11){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:7;
  grid-row-end:8;
}



`


const PageWrapper = styled.div`
  z-index: 999; /* Ensure it's on top of other content */
  display:flex;
  flex-direction:column;
  gap:5rem;
`



const CheckBoxWrapper = styled.div`
display:flex;
justify-content:left;
height:60px;
font-size:0.8rem;
align-items:center;
grid-column-start:1;
  grid-column-end:1;
  grid-row-start:10;
  grid-row-end:10; 

`

const ButtonWrapper = styled.div`
display:flex;
justify-content:flex-end;
grid-column-start:2;
grid-column-end:2;
grid-row-start:11;
grid-row-end:11;
`





export default BillingModal




