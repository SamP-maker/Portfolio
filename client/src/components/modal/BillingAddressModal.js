import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import menuObject from '../../util/Menu-Content/menuObject';
import ButtonTypes from '../../util/Button/ButtonObject';
import Input from '../../util/Input/Input';
import Label from '../../util/Label/Label';

import MenuButton from '../../util/Button/DropdownButton';
import { Link } from 'react-router-dom';







const BillingModal = ({closeModal})=>{

  


 
  const [form, setForm] = useState({
    cardNumber: '',
    Day:'',
    Year:'',
    firstName: '',
    lastName:'',
    Address: '',
    Postal:'',
    cardFirstName:'',
    cardLastName:'',
    Country:'',
    Zip:'',
    City:'',
    State:'',
    Phone:'',



  })

  const handleForm = (value)=>{
    return setForm(prev =>{
      return {...prev,...value}
    })
  }



    return(
       <PageWrapper>

        



    <HeaderWrapper>
      <RedirectWrapper>
        <Link to="/Payment"><p>Back to payment</p></Link>
      </RedirectWrapper>
                 <RightWrapper>
            
            <ButtonWrapper>
            <MenuButton navbar={"true"}/>
            </ButtonWrapper>
  
        </RightWrapper>
    </HeaderWrapper>






    
   

     <CheckOutWrapper>
     
   
    <Label fontSize="1rem" text="Card Number"/>
                
               
                        <Input
                            white
                            type="text" 
                            name="cardNumber" 
                            placeholder="Card Number.."
                            value={form.cardNumber}
                            onChange={(e) => handleForm({cardNumber: e.target.value})}
                            />

    <Label fontSize="1.5rem" text="Expiration"/>
                
    <Label fontSize="1rem" text="Day"/>    
                <Input
                    white
                    type="text" 
                    name="Day" 
                    placeholder="Day.."
                    value={form.Day}
                    onChange={(e) => handleForm({Day: e.target.value})}
                    />
    
    <Label fontSize="1rem" text="Year"/>
                
               
                <Input
                    white
                    type="text" 
                    name="Year" 
                    placeholder="Year.."
                    value={form.Year}
                    onChange={(e) => handleForm({Year: e.target.value})}
                    />

<Label fontSize="1rem" text="First Name"/>    
                <Input

                    white
                    type="text" 
                    name="firstName" 
                    placeholder="First Name.."
                    value={form.firstName}
                    onChange={(e) => handleForm({firstName: e.target.value})}
                    />
    
    <Label fontSize="1rem" text="Last Name"/>
                
               
                <Input
                    white
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name.."
                    value={form.lastName}
                    onChange={(e) => handleForm({lastName: e.target.value})}
                    />


{/*Line ends here for the card*/ }

<Label fontSize="1rem" text="Billing Address"/>
<InputWrapper>
<Input 
     
     type="checkbox"
     name="checkbox"
     checkbox="true"
     placeholder="Remember this card"
     
     />
     </InputWrapper>




     <Label fontSize="1rem" text="Address"/>    
                <Input
                    white
                    type="text" 
                    name="Address" 
                    placeholder="Address.."
                    value={form.Address}
                    onChange={(e) => handleForm({Address: e.target.value})}
                    />


<Label fontSize="1rem" text="Postal Code"/>    
                <Input
                    white
                    type="text" 
                    name="name" 
                    placeholder="Postal Code.."
                    value={form.Postal}
                    onChange={(e) => handleForm({Postal: e.target.value})}
                    />

<Label fontSize="1rem" text="First Name"/>    
                <Input
                    white
                    type="text" 
                    name="cardFirstName" 
                    placeholder="First Name.."
                    value={form.cardFirstName}
                    onChange={(e) => handleForm({cardFirstName: e.target.value})}
                    />

<Label fontSize="1rem" text="Last Name"/>    
                <Input

                     white
                    type="text" 
                    name="cardLastName" 
                    placeholder="First Name.."
                    value={form.cardLastName}
                    onChange={(e) => handleForm({cardLastName: e.target.value})}
                    />
<Label fontSize="1rem" text="Country"/>    
                <Input
                    white
                    type="text" 
                    name="Country" 
                    placeholder="Country.."
                    value={form.Country}
                    onChange={(e) => handleForm({Country: e.target.value})}
                    />
<Label fontSize="1rem" text="Zip Code"/>    
                <Input
                    white
                    type="text" 
                    name="Zip" 
                    placeholder="Zip Code.."
                    value={form.Zip}
                    onChange={(e) => handleForm({Zip: e.target.value})}
                    />
<Label fontSize="1rem" text="City"/>    
                <Input
                    white
                    type="text" 
                    name="City" 
                    placeholder="City.."
                    value={form.City}
                    onChange={(e) => handleForm({City: e.target.value})}
                    />
<Label fontSize="1rem" text="State"/>    
                <Input
                    white
                    type="text" 
                    name="State" 
                    placeholder="State.."
                    value={form.State}
                    onChange={(e) => handleForm({State: e.target.value})}
                    />
<Label fontSize="1rem" text="Mobile Number"/>    
                <Input
                    white
                    type="Phone" 
                    name="Phone" 
                    placeholder="Mobile Number.."
                    value={form.Phone}
                    onChange={(e) => handleForm({Phone: e.target.value})}
                    />

<CheckBoxWrapper>
<Input 
     type="checkbox"
     name="checkbox"
     placeholder="Same as delivery address"
     />
</CheckBoxWrapper>  


              
     </CheckOutWrapper>

  
               
        </PageWrapper>

        
    )
}

const RedirectWrapper = styled.div`
font-size:1rem;
`


const HeaderWrapper = styled.header`
font-size:4rem;
color: ${Theme.colors.ColumnBlack};
font-family: 'Hammersmith One', sans-serif;
display:flex;
justify-content:space-between;
align-items: center;
width:60vw;
margin-top:2rem;
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
const ButtonWrapper = styled.div`
position:relative;
display:flex;
justify-content:center;
flex-direction:column;
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
  grid-row-start:2;
  grid-row-end:2;
}

Label:nth-child(3){
 
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:3;
  grid-row-end:3;
  margin-top:2rem;
  margin-bottom:2rem;
}

Label:nth-child(4){
 
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:4;
  grid-row-end:4;
}

Input:nth-child(5){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:5;
  grid-row-end:5;
}

Label:nth-child(6){
 
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:4;
  grid-row-end:4;
}

Input:nth-child(7){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:5;
  grid-row-end:5;
}

Label:nth-child(8){
 
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:6;
  grid-row-end:6;
}

Input:nth-child(9){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:7;
  grid-row-end:7;
}

Label:nth-child(10){
 
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:6;
  grid-row-end:6;
}

Input:nth-child(11){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:7;
  grid-row-end:7;
}

Label:nth-child(12){
  
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:9;
  grid-row-end:9;
  margin-top:1rem;
  margin-bottom:2rem;
}


Input:nth-child(13){
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:12;
  grid-row-end:12;
}

Label:nth-child(14){
  
  
  grid-row-start:11;
  grid-row-end:11;
}

Input:nth-child(15){
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:12;
  grid-row-end:12;
}

Label:nth-child(16){
  
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:13;
  grid-row-end:13;
}


Input:nth-child(17){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:14;
  grid-row-end:14;
}

Label:nth-child(18){
  
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:15;
  grid-row-end:15;
}

Input:nth-child(19){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:16;
  grid-row-end:16;
}

Label:nth-child(20){
  
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:15;
  grid-row-end:15;
}


Input:nth-child(21){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:16;
  grid-row-end:16;
}

Label:nth-child(22){
  
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:17;
  grid-row-end:17;
}

Input:nth-child(23){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:18;
  grid-row-end:18;
}

Label:nth-child(24){
  
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:17;
  grid-row-end:17;
}

Input:nth-child(25){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:18;
  grid-row-end:18;
}

Label:nth-child(26){
  
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:19;
  grid-row-end:19;
}

Input:nth-child(27){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:20;
  grid-row-end:20;
}

Label:nth-child(28){
  
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:19;
  grid-row-end:19;
}

Input:nth-child(29){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:20;
  grid-row-end:20;
}


Label:nth-child(30){
  
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:21;
  grid-row-end:21;
}

Div:nth-child(31){
  
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:22;
  grid-row-end:22;
  margin-top:.5rem;
  margin-left:1rem;
}






`


const PageWrapper = styled.div`
  z-index: 999; /* Ensure it's on top of other content */
  display:flex;
  flex-direction:column;
  gap:5rem;
`

const InputWrapper = styled.div`
display:flex;
justify-content:left;
height:60px;
margin-top:0.25rem;
font-size:1rem;
  margin-bottom:.25rem;
align-items:center;
grid-column-start:1;
  grid-column-end:1;
  grid-row-start:8;
  grid-row-end:8;

`

const CheckBoxWrapper = styled.div`
display:flex;
justify-content:left;
height:60px;
font-size:1rem;
align-items:center;
grid-column-start:1;
  grid-column-end:1;
  grid-row-start:23;
  grid-row-end:23; 

`






export default BillingModal




