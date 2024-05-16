import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Input from '../../util/Input/Input';
import Label from '../../util/Label/Label';
import Button from '../../util/Button/ButtonObject';
import CreditCredentialsUI from '../../FetchAPI/CreditCredentialsAPI'
import { shake } from '../../theme/animations/animations';
import { FaTimes } from 'react-icons/fa';
import { setOpenCreditCardForm } from '../../redux/feature/LoadManagement';
import { useDispatch } from 'react-redux';
import Card from './CreditCard';
import { setPaymentTypeStatus } from '../../redux/feature/PaymentManagement';

const CreditCredentialsModal = ()=>{


  const [isLoad, setIsLoad] = useState(false)
  const [newForm,setNewForm] = useState(null);
  const [cardType, setCardType] = useState('');
  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState({

    PaymentType:{
        CreditCard:{
          Last4DigitNumber:'',
          Status:false,
        },


    },
});


  const [form, setForm] = useState({
    CardNumber: '',
    FullName: '',
    CCV:'',
    Month:'',
    Year:'',
    cardType:'',
  })


  const [errorMsg, setErrorMsg] = useState({
    CardNumber: true,
    FullName: true,
    CCV: true,
    Month: true,
    Year: true,
    cardType: true,
    


  })


  /*      Close Modal     */ 
  const handleCloseForm = () =>{
    dispatch(setOpenCreditCardForm(false))
  }


  
    

  



  
  



  /*      Check and Submit      */ 
  async function handleSubmit(e){
  e.preventDefault();

  
  setPaymentMethod({
    PaymentType:{
      CreditCard:{
        Last4DigitNumber:form.CardNumber,
        Status:true,
      }
        


    },
    
})



const formCheck = Object.values(form).every(item => item.trim() === '')


console.log(formCheck)

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
    setIsLoad(true);
  }
          
  }

  
  
  

  
  /*        You Would Need to Change This, handle the form      */ 
  const handleForm = (field,value)=>{
    if (field === 'Month' || field === 'Year') {
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
          [field]: value,
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






  useEffect(()=>{
    setCardType('mastercard')
    if(form.CardNumber.startsWith('4',0)){
      console.log(cardType)
      setCardType('visa')
      setForm(()=> ({...form,cardType: cardType}))
    }else if( form.CardNumber.startsWith('5',0)){
      console.log(cardType)
      setCardType('mastercard')
      setForm(()=> ({...form,cardType: cardType}))
    }

  },[form.CardNumber])


  useEffect(() => {
    dispatch(setPaymentTypeStatus(paymentMethod));
    
}, [paymentMethod]);



  
  


  
    return(
       <PageWrapper>
        {isLoad? <CreditCredentialsUI creditCredentials={form}/> : null}

       
    <FormWrapper onSubmit={handleSubmit}>

    



     <CheckOutWrapper>

     <Container>

{cardType == 'mastercard' ?


<Card  mastercard={cardType} CardName={form.FullName} CardNumber={form.CardNumber} Month={form.Month} Year={form.Year} />
:

<Card  visa={cardType} CardName={form.FullName} CardNumber={form.CardNumber} Month={form.Month} Year={form.Year} />
}

</Container>

 
     <CloseButtonWrapper onClick={handleCloseForm}><FaTimes/></CloseButtonWrapper>

{errorMsg.FullName ? <Label fontSize="1rem" text="Cardholder's Name"/> : <ErrorMessage>**This field is required**</ErrorMessage>} 
                <Input

                    white
                    type="text" 
                    name="firstName" 
                    placeholder="First Name.."
                    value={form.FullName}
                    onChange={(e) => handleForm('FullName', e.target.value)}

                    />
  
   
{errorMsg.CardNumber? <Label fontSize="1rem" text="Card Number"/> : <ErrorMessage>**This field is required**</ErrorMessage>}
                
               
                        <Input
                            white
                            type="text" 
                            name="cardNumber" 
                            placeholder="Card Number.."
                            value={form.CardNumber}
                            onChange={(e) => handleForm('CardNumber', e.target.value)}
                            maxlength={19}
                            />

                
{errorMsg.Month ? <Label fontSize="1rem" text="MM"/> : <ErrorMessage>**This field is required**</ErrorMessage>}
                
                <Input
                                        white
                                        type="text" 
                                        name="Month" 
                                        placeholder="Month.."
                                        value={form.Month}
                                        onChange={(e) => handleForm('Month', e.target.value)}
                                        maxLength={2}
                                        />
            



{errorMsg.Year ? <Label fontSize="1rem" text="YYYY"/> : <ErrorMessage>**This field is required**</ErrorMessage>}
                
    <Input
                            white
                            type="text" 
                            name="Year" 
                            placeholder="Year.."
                            value={form.Year}
                            onChange={(e) =>  handleForm('Year', e.target.value)}
                            maxLength={2}
                            />

{errorMsg.CCV ? <Label fontSize="1rem" text="CCV"/> : <ErrorMessage>**This field is required**</ErrorMessage>}
                
               
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
        <Button.Add_Card type='submit'/>
</ButtonWrapper>         
     </CheckOutWrapper>
     </FormWrapper>
  

        </PageWrapper>

        
    )
}

{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Styling Sheet~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ }
const Container = styled.div`
  top: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index:999;
  align-items: center;
  justify-content: center;


`




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
  top: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  display:flex;
  z-index:102;
  align-items: center;
  justify-content: center;
  

`
const ErrorMessage = styled.label`
padding-left:2rem;
color: ${Theme.colors.Red};
font-family: 'Hammersmith One', sans-serif;

animation:${shake} .5s ease-in-out;
`




const CheckOutWrapper = styled.div`
border-radius:2rem;
padding-bottom:10rem;
background-color: ${Theme.colors.white};
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);

display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(auto,1fr);
padding:2rem 2rem;





Div:nth-child(1){
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:1;
  grid-row-end:1;
}
Div:nth-child(2){
  grid-column-start:3;
  grid-column-end:3;
  grid-row-start:1;
  grid-row-end:1;
}


Label:nth-child(3){
  margin-top:4rem;
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:3;
  grid-row-end:4;
}



Input:nth-child(4){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:4;
  grid-row-end:5;
}

Label:nth-child(5){
 
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:5;
  grid-row-end:6;
}

Input:nth-child(6){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:6;
  grid-row-end:7;
}

Label:nth-child(7){
  margin-top:4rem;
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:3;
  grid-row-end:4;
}

Input:nth-child(8){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:4;
  grid-row-end:5;
}

Label:nth-child(9){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:5;
  grid-row-end:6;
}


Input:nth-child(10){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:6;
  grid-row-end:7;
}

Label:nth-child(11){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:7;
  grid-row-end:8;
}


Input:nth-child(12){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:8;
  grid-row-end:9;
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



export default CreditCredentialsModal




