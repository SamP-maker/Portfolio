import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import ButtonTypes from '../../util/Button/ButtonObject';
import Input from '../../util/Input/Input';
import Label from '../../util/Label/Label';
import 'react-international-phone/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { shake } from '../../theme/animations/animations';
import { useDispatch, useSelector} from 'react-redux';
import Error from '../../util/ErrorUI/errorUI';
import { setAddressPostStatus } from '../../redux/feature/PostManagement';
import { FaTimes } from 'react-icons/fa';
import { setOpenForm } from '../../redux/feature/LoadManagement';
import { setAddress } from '../../redux/feature/AddressSlice';




const AddAddress = ()=>{
        const dispatch = useDispatch()
       
        const navigate = useNavigate()
        const [form,setForm] = useState({
          FirstName:'',
          LastName:'',
          Postal:'',
          Address:'',
          District:'',
          Phone:'',
          _id:'',
          Status:false,

        })

        
 
  const [errorMsg, setErrorMsg] = useState({
    FirstName: true,
    LastName: true,
    Address: true,
    Postal: true,
    District: true,
    Phone: true,
    


  })

       




        const handleCloseForm = () =>{
          dispatch(setOpenForm(false))
        }


      

         /*FORM HANDLING */
         const handleForm = (value)=>{
          return setForm(prev =>{
            return {...prev,...value}

          })
        }

        async function handleSubmit(e){
          e.preventDefault();
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
                    dispatch(setAddress(form))
                    dispatch(setAddressPostStatus(true))
                  }
          }
        


          
        
            
        

         







  


    return(
       <PageWrapper>
        
        
        





    





    <form onSubmit={handleSubmit}>
<FormWrapper>


    <CheckOutWrapper>
    <CloseButtonWrapper onClick={handleCloseForm}><FaTimes/></CloseButtonWrapper>
    {errorMsg.FirstName ? <Label fontSize="1.5rem" text="First Name"/> : <ErrorMessage>**This field is required**</ErrorMessage> }
                
               
                        <Input
                            white
                            type="text" 
                            name="firstName" 
                            placeholder="First Name.."
                            value={form.FirstName}
                            onChange={(e) => handleForm({FirstName: e.target.value})}
                            />

{errorMsg.LastName ? <Label fontSize="1.5rem" text="Last Name"/> : <ErrorMessage>**This field is required**</ErrorMessage> }
                
               
                <Input
                    white
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name.."
                    value={form.LastName}
                    onChange={(e) => handleForm({LastName: e.target.value})}
                    />

{errorMsg.Address ? <Label fontSize="1.5rem" text="Address"/> : <ErrorMessage>**This field is required**</ErrorMessage> }
                
               
                <Input
                    white
                    type="text" 
                    name="Address" 
                    placeholder="Address.."
                    value={form.Address}
                    onChange={(e) => handleForm({Address: e.target.value})}
                    />

{errorMsg.Postal ? <Label fontSize="1.5rem" text="Postal Code"/> : <ErrorMessage>**This field is required**</ErrorMessage> }
                
               
                <Input
                    white
                    type="text" 
                    name="Postal" 
                    placeholder="Postal.."
                    value = {form.Postal}
                    onChange={(e) => handleForm({Postal: e.target.value})}
                    />

{errorMsg.District ? <Label fontSize="1.5rem" text="District"/> : <ErrorMessage>**This field is required**</ErrorMessage> }
<Input
                    white
                    type="text" 
                    name="District" 
                    placeholder="District.."
                    value ={form.District}
                    onChange={(e) => handleForm({District: e.target.value})}
                    />
                
               
                

{errorMsg.Phone ? <Label fontSize="1.5rem" text="Phone Number"/> : <ErrorMessage>**This field is required**</ErrorMessage> }
<Input
                    white
                    type="Phone" 
                    name="Phone" 
                    placeholder="Mobile Number.."
                    value={form.Phone}
                    setPhone={(e) => handleForm({Phone: e})}
                    />
               


<Label fontSize="1rem" text="*Delivery is only available in the same state within 20km*"/> 

             
    <PaynowWrapper>
    <ButtonTypes.Cancel onClick={handleCloseForm}/>
        <ButtonTypes.Save type="submit"/>
    </PaynowWrapper>                    
              
     </CheckOutWrapper>
     </FormWrapper>
</form>             



        </PageWrapper>

        
    )
}



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






const FormWrapper = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index:999;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => props.toggle ?  'none' : 'auto'}

`

const ErrorMessage = styled.p`
padding-left:2rem;
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

Label:nth-child(12){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:8;
  grid-row-end:9;
}

div:nth-child(13){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:10;
  grid-row-end:10;
  margin-left:1rem;
  margin-top:1.2rem;
}


div:nth-child(15){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:12;
  grid-row-end:13;
  
}

Label:nth-child(14){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:10;
  grid-row-end:11;
  margin-left:1rem;
  margin-top:1.2rem;
}
  

`





const PaynowWrapper = styled.div`
display:flex;
justify-content:space-evenly;
padding:1.3rem 1.3rem;

`







const PageWrapper = styled.div`
background-color: ${Theme.colors.ColumnBlack};
padding-top:10rem;
display:flex;
flex-direction:column;
gap:5rem;
background-color: ${Theme.colors.white};
`






export default AddAddress




