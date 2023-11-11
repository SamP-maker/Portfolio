import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Input from '../../util/Input/Input';
import Label from '../../util/Label/Label';
import { DateField } from '@mui/x-date-pickers';
import { Link, useNavigate,useLocation  } from 'react-router-dom';
import Button from '../../util/Button/ButtonObject';
import Cart from './CartModal';
import { Logo } from '../../theme/theme';
import CreditCard from './CreditCard';







const BillingModal = ()=>{

  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search);
 
  const cardType = params.get('cardType')
 


  const handleCardType = () =>{

    if( cardType == 'visa'){
      return true
    }else{
      return false
    }



  }
 
  const [form, setForm] = useState({
    CardNumber: '',
    FullName: '',
    CCV:'',
    Month:'',
    Year:'',
  })

 
 



  async function handleSubmit(e){


    console.log(form)

    e.preventDefault();

  
    


try{
  
    const response = await fetch(`http://localhost:5000/userBilling`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      credentials:"include",
      body:JSON.stringify(form),
      }
  );


  navigate("/BillingAddress")

}catch(err){
  console.error('Error occured:', err);
  window.alert("Error occured. Please try again later.");

}

    





    
  }

  
    
    /*
      const formattedInput = value.CardNumber.replace(/\D/g, '').slice(0, 19);
      let formattedCardNumber = '';
      for (let i = 0; i < formattedInput.length; i += 4) {
        formattedCardNumber += formattedInput.slice(i, i + 4) + ' ';
      }*/
 
  

  

  const handleForm = (field,value)=>{
    if (field === 'Month' || field === 'Year') {
      // Use a regular expression to match 2-digit numbers
      const isNumeric = !isNaN(value);
  
      if (isNumeric) {
        setForm((prevForm) => ({
          ...prevForm,
          [field]: value,
        }));
      }else{
        console.log('error not a number')
      }







    }else if( field === 'FullName'){
      const trimmedValue = value.trim(); 
      const isAlphabetWithSpace = /^[a-zA-Z\s]+$/.test(trimmedValue); 
    
      if (isAlphabetWithSpace) {
        setForm((prevForm) => ({
          ...prevForm,
          [field]: trimmedValue,
        }));
      }else {
        setForm((prevForm) => ({
          ...prevForm,
          [field]: '',
        }));
      }


    }else if( field === 'CardNumber'){
     

      const formattedValue = value.replace(/\D/g, '').slice(0, 19).replace(/(\d{4})/g, '$1 ');

        setForm((prevForm) => ({
          ...prevForm,
          [field]: formattedValue,
        }));
    }
    
    else{

      setForm((prevForm) => ({
        ...prevForm,
        [field]: value,
      }));
    }

    
   
    
  }

  


  
    return(
       <PageWrapper>
<Cart/>
        <Logo/>



    <HeaderWrapper>
    <StyledLink to="/Payment"><RedirectWrapper><p>Back to Payment</p> </RedirectWrapper></StyledLink>
                 <RightWrapper>
          
  
        </RightWrapper>
    </HeaderWrapper>





   
    <form onSubmit={handleSubmit}>
     <CheckOutWrapper>


{cardType == 'mastercard' ?

<CreditCardWrapper>
      <CreditCard  mastercard={handleCardType} CardName={form.FullName} CardNumber={form.CardNumber} Month={form.Month} Year={form.Year} />
</CreditCardWrapper>:
<CreditCardWrapper>
      <CreditCard  visa={handleCardType} CardName={form.FullName} CardNumber={form.CardNumber} Month={form.Month} Year={form.Year} />
</CreditCardWrapper>     }
 


<Label fontSize="1rem" text="Cardholder's Name"/>    
                <Input

                    white
                    type="text" 
                    name="firstName" 
                    placeholder="First Name.."
                    value={form.FullName}
                    onChange={(e) => handleForm('FullName', e.target.value)}

                    />
  
   
    <Label fontSize="1rem" text="Card Number"/>
                
               
                        <Input
                            white
                            type="text" 
                            name="cardNumber" 
                            placeholder="Card Number.."
                            value={form.CardNumber}
                            onChange={(e) => handleForm('CardNumber', e.target.value)}
                            maxlength={19}
                            />

                
<Label fontSize="1rem" text="MM"/>
                
                <Input
                                        white
                                        type="text" 
                                        name="Month" 
                                        placeholder="Month.."
                                        value={form.Month}
                                        onChange={(e) => handleForm('Month', e.target.value)}
                                        maxLength={2}
                                        />
            



    <Label fontSize="1rem" text="YYYY"/>
                
    <Input
                            white
                            type="text" 
                            name="Year" 
                            placeholder="Year.."
                            value={form.Year}
                            onChange={(e) =>  handleForm('Year', e.target.value)}
                            maxLength={2}
                            />

<Label fontSize="1rem" text="CCV"/>
                
               
                <Input
                    white
                    type="text" 
                    name="CCV" 
                    placeholder="CCV.."
                    value={form.CCV}
                    onChange={(e) => handleForm('CCV', e.target.value)}
                    maxLength={3}
                    />
 
 <ButtonWrapper>
        <Button.Billing_Address/>
</ButtonWrapper>         
     </CheckOutWrapper>
     </form>
  

        </PageWrapper>

        
    )
}

{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Styling Sheet~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ }


const CreditCardWrapper = styled.div`
position:absolute;
top:-35%;
left:6%;
`
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



img{
    height:50px;
    width:50px;
    
}
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
width:30vw;
margin:auto auto;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(auto, 1fr);
padding: 8rem 5rem;
position:relative;



Label:nth-child(2){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:1;
  grid-row-end:1;
}

Input:nth-child(3){
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:2;
  grid-row-end:2;
}

Label:nth-child(4){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:3;
  grid-row-end:3;
  padding-left:2rem;
  
}

Input:nth-child(5){
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:4;
  grid-row-end:4;
}

Label:nth-child(6){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:5;
  grid-row-end:5;
  padding-left:2rem;
  
}


Input:nth-child(7){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:6;
  grid-row-end:6;
  padding-left:2rem;

}

Label:nth-child(8){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:5;
  grid-row-end:5;
  padding-left:2rem;
  
}

Input:nth-child(9){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:6;
  grid-row-end:6;
  padding-left:2rem;

}

Label:nth-child(10){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:7;
  grid-row-end:7;
  padding-left:2rem;
  
}

Input:nth-child(11){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:8;
  grid-row-end:8;
  padding-left:2rem;

}







`
const ButtonWrapper = styled.div`
grid-column-start:2;
display:flex;
  grid-column-end:2;
  grid-row-start:9;
  grid-row-end:9;
  justify-content:flex-end;
  padding-top:5rem;
  
`



const PageWrapper = styled.div`
  z-index: 999; /* Ensure it's on top of other content */
  display:flex;
  flex-direction:column;
  gap:2rem;
  margin-bottom:10rem;

`



export default BillingModal




