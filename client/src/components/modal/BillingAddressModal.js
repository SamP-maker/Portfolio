
//total revamp, make this not laggy
//TRIM ANYTHING HERE. Although items should async render, Too much of this will make it laggy
//Also make sure that the error checks are done properly. Dont let react return the error. instead, visualize it







import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Input from '../../util/Input/Input';
import Label from '../../util/Label/Label';
import { Link, useNavigate } from 'react-router-dom';
import ButtonTypes from '../../util/Button/ButtonObject';
import Cart from './CartModal';
import { Logo } from '../../theme/theme';
import { shake } from '../../theme/animations/animations';





const BillingModal = ()=>{

  const navigate = useNavigate()

  

  const [emptyform,setEmptyForm] = useState({})
 
  const [form, setForm] = useState({
    FirstName: '',
    LastName: '',
    Address: '',
    Postal: '',
    Country: '',
    City: '',
    State:''
  })

  const [isSame,setIsSame] = useState(true)
  const [emptyFormMessage, setEmptyFormMessage] = useState(false)
  const [errorMsg, setErrorMsg] = useState(true)
  
 



  async function handleSubmit(e){
    e.preventDefault();
    const isFormEmpty = Object.values(form).some( value => value.trim() === '')

if(emptyFormMessage){
    try{
      await fetch(`http://localhost:5000/postBillingAddress`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        credentials:"include",
        body:JSON.stringify(form),
      })
  
  
      navigate("/Payment")
    }catch(err){
      console.error('Error occured:', err);
      window.alert("Error occured. Please try again later.");
    
    } 
  }else{
    if(isFormEmpty){
      setTimeout(()=>
      setErrorMsg(false), 100)

      setTimeout(()=> setErrorMsg(true), 1500)
    }else{
      setEmptyFormMessage(true)
    }
  }
}




  const handleForm = (value)=>{
    return setForm(prev =>{
      return {...prev,...value}
    })
  }

  const handleisSame = ()=>{
    setIsSame((same)=> !same)
    console.log(isSame)
  }




  useEffect(()=>{
    if(isSame){
    return async ()=>{
    try{
      const response = await fetch(`http://localhost:5000/getBillingAddress`,{
        method:'GET',
        credentials: 'include', // Include credentials in the request
        headers:{
          "Content-Type": "application/json",


    }});
      if(!response.ok){
        throw new Error(`an Error occured ${response.statusText}`);
      }

      const items = await response.json();

      const tempForm = items.map(item => {
         setEmptyForm(item); 
      });
      
    

      setForm({
        ...form,
        FirstName: emptyform.FirstName || '', // Use default value or leave empty if undefined
        LastName: emptyform.LastName || '',   // Use default value or leave empty if undefined
        Address: emptyform.Address || '',     // Use default value or leave empty if undefined
        Postal: emptyform.Postal || '',       // Use default value or leave empty if undefined
      });
    

    }catch(error){
      window.alert(error.message)
    }
  }

}


  },[isSame])








    return(
       <PageWrapper>
        <Cart/>
        <Logo/>
        
       


    <HeaderWrapper>
    <StyledLink to="/BillingModal"><RedirectWrapper><p>Back to Card Details</p> </RedirectWrapper></StyledLink>
                 <RightWrapper>
          
  
        </RightWrapper>
    </HeaderWrapper>






    
   
    <form onSubmit={handleSubmit}>
     <CheckOutWrapper>

{/*Line ends here for the card*/ }

{errorMsg ?<Label fontSize="1rem" text="Billing Address"/> : <ErrorMessage>**This field is required**</ErrorMessage>}





    
                <Input
                    white
                    type="text" 
                    name="Address" 
                    placeholder="Address.."
                    value={form.Address}
                    onChange={(e) => handleForm({Address: e.target.value})}
                    />


{errorMsg ? <Label fontSize="1rem" text="Postal Code"/> : <ErrorMessage>**This field is required**</ErrorMessage>}
                <Input
                    white
                    type="text" 
                    name="name" 
                    placeholder="Postal Code.."
                    value={form.Postal}
                    onChange={(e) => handleForm({Postal: e.target.value})}
                    />

{errorMsg ? <Label fontSize="1rem" text="Country"/>   : <ErrorMessage>**This field is required**</ErrorMessage>}
                <Input
                    white
                    type="text" 
                    name="Country" 
                    placeholder="Country.."
                    value={form.Country}
                    onChange={(e) => handleForm({Country: e.target.value})}
                    />
{errorMsg ? <Label fontSize="1rem" text="State"/>    : <ErrorMessage>**This field is required**</ErrorMessage>}
                <Input
                    white
                    type="text" 
                    name="State" 
                    placeholder="State.."
                    value={form.State}
                    onChange={(e) => handleForm({State: e.target.value})}
                    />
{errorMsg ? <Label fontSize="1rem" text="City"/> : <ErrorMessage>**This field is required**</ErrorMessage>}
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
     onChange={handleisSame}
     placeholder="Same as delivery address"
     />
</CheckBoxWrapper>  

<ButtonWrapper>
        <ButtonTypes.Head_to_Check_out type="submit"/>
</ButtonWrapper>         
              
     </CheckOutWrapper>
     </form>
  
               
        </PageWrapper>

        
    )
}

{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Styling Sheet~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ }

const StyledLink = styled(Link)`
text-decoration:none;
color: ${Theme.colors.ColumnBlack};
`

const RedirectWrapper = styled.div`
font-size:1rem;
padding:1rem 1rem;
box-shadow: 0 2px 4px ${Theme.colors.Greylite};
border-radius: .5rem;

&:hover{
  cusor:pointer;
}
`

const ErrorMessage = styled.p`
padding-left:2rem;
color: ${Theme.colors.Red};
font-family: 'Hammersmith One', sans-serif;

animation:${shake} .5s ease-in-out;
`


const HeaderWrapper = styled.header`
font-size:4rem;
color: ${Theme.colors.ColumnBlack};
font-family: 'Hammersmith One', sans-serif;
display:flex;
justify-content:space-between;
align-items: center;
width:60vw;
margin-left:auto;
margin-right:auto;
margin-top:10rem;



`

const RightWrapper = styled.div`
display:flex;
justify-item:flex-end;
gap:1rem;
`



const CheckOutWrapper = styled.div`
padding-bottom: 10rem;
background-color: ${Theme.colors.white};
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
border-radius: 1rem;
display: grid;
width:40vw;
margin:auto auto;

grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(auto, 1fr);



padding: 5rem 5rem;
Label{
  margin-left:2rem;
}


Label:nth-child(1){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:1;
  grid-row-end:1;
}




Input:nth-child(2){
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:3;
  grid-row-end:3;
}

Label:nth-child(3){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:4;
  grid-row-end:4;
  padding-left:2rem;
  
}

Input:nth-child(4){
  grid-column-start:1;
  grid-column-end:2;
  grid-row-start:5;
  grid-row-end:5;
}

Label:nth-child(5){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:4;
  grid-row-end:4;
  padding-left:2rem;
  
}

Input:nth-child(6){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:5;
  grid-row-end:5;
}


Label:nth-child(7){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:8;
  grid-row-end:8;
  padding-left:2rem;
  
}

Input:nth-child(8){
  grid-column-start:1;
  grid-column-end:2;
  grid-row-start:9;
  grid-row-end:9;
}

Label:nth-child(9){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:8;
  grid-row-end:8;
  padding-left:2rem;
  
}

Input:nth-child(10){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:9;
  grid-row-end:9;
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




