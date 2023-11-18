import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Footer from '../../util/Footer/Footer';
import ButtonTypes from '../../util/Button/ButtonObject';
import Input from '../../util/Input/Input';
import Label from '../../util/Label/Label';
import 'react-international-phone/style.css';
import Cart from '../modal/CartModal';
import { Link, useNavigate } from 'react-router-dom';





const Address = ()=>{
        const navigate = useNavigate()
        const [form,setForm] = useState({
          firstName: '',
          lastName: '',
          Address: '',
          Postal:'',
          District:'',
          Phone:'',

        })

      

         /*FORM HANDLING */
         const handleForm = (value)=>{
          return setForm(prev =>{
            return {...prev,...value}

          })
        }

        async function handleSubmit(e){
          e.preventDefault();


              try{
                await fetch('http://localhost:5000/postAddress',{
                  method:"POST",
                  headers:{
                    "Content-Type":"application/json",
                  },
                  credentials: 'include',
                body: JSON.stringify(form)
                })
                navigate("/Payment")

              
                
              }catch(err){
                console.error("Error occured,", err);
                window.alert("Error occured. Please try again later.")
              }

            
        }

         







  


    return(
       <PageWrapper>
        <Cart/>





    <HeaderWrapper>
    
        <StyledLink to="/Order_confirm"><RedirectWrapper><p>Back to Order Confirm</p> </RedirectWrapper></StyledLink>
     
                 <RightWrapper>

  
        </RightWrapper>
    </HeaderWrapper>



    
    <form onSubmit={handleSubmit}>
    <CheckOutWrapper>
    <Label fontSize="1.5rem" text="First Name"/>
                
               
                        <Input
                            white
                            type="text" 
                            name="firstName" 
                            placeholder="First Name.."
                            value={form.firstName}
                            onChange={(e) => handleForm({firstName: e.target.value})}
                            />

<Label fontSize="1.5rem" text="Last Name"/>
                
               
                <Input
                    white
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name.."
                    value={form.lastName}
                    onChange={(e) => handleForm({lastName: e.target.value})}
                    />

<Label fontSize="1.5rem" text="Address"/>
                
               
                <Input
                    white
                    type="text" 
                    name="Address" 
                    placeholder="Address.."
                    value={form.Address}
                    onChange={(e) => handleForm({Address: e.target.value})}
                    />

<Label fontSize="1.5rem" text="Postal Code"/>
                
               
                <Input
                    white
                    type="text" 
                    name="Postal" 
                    placeholder="Postal.."
                    value = {form.Postal}
                    onChange={(e) => handleForm({Postal: e.target.value})}
                    />

<Label fontSize="1.5rem" text="District"/>
<Input
                    white
                    type="text" 
                    name="District" 
                    placeholder="District.."
                    value ={form.District}
                    onChange={(e) => handleForm({District: e.target.value})}
                    />
                
               
                

<Label fontSize="1.5rem" text="Phone Number"/>
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
        <ButtonTypes.Pay_Now type="submit"/>
    </PaynowWrapper>                    
              
     </CheckOutWrapper>
</form>             


        
        <Footer/>
        </PageWrapper>

        
    )
}

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


const CheckOutWrapper = styled.div`
padding-bottom:10rem;
background-color: ${Theme.colors.white};
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
width:60vw;
margin-left:auto;
margin-right:auto;
display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(auto,1fr);
padding:5rem 5rem;

Button:nth-child(14){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:14;
  grid-row-end:14;
}

Label:nth-child(13){
  grid-column-start:1;
  grid-column-end:2;
  grid-row-start:12;
  grid-row-end:12;
}

Label:nth-child(n+1){
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
  grid-column-end:1;
  grid-row-start:2;
  grid-row-end:2;
}

Label:nth-child(3){
 
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:1;
  grid-row-end:1;
}

Input:nth-child(4){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:2;
  grid-row-end:2;
}

Label:nth-child(5){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:3;
  grid-row-end:3;
}

Input:nth-child(6){
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:4;
  grid-row-end:4;
}

Label:nth-child(7){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:5;
  grid-row-end:5;
}


Input:nth-child(8){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:6;
  grid-row-end:6;
}

Label:nth-child(9){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:5;
  grid-row-end:5;
}


Input:nth-child(10){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:6;
  grid-row-end:6;
}

Label:nth-child(11){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:7;
  grid-row-end:7;
}


div:nth-child(12){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:8;
  grid-row-end:8;
  margin-left:1rem;
  margin-top:1.2rem;
}



`





const PaynowWrapper = styled.div`
display:flex;
justify-content:right;
padding:1.3rem 1.3rem;
grid-column-start:2;
  grid-column-end:2;
  grid-row-start:9;
  grid-row-end:9;

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

`

const RightWrapper = styled.div`
display:flex;
justify-item:flex-end;
gap:1rem;
`






const PageWrapper = styled.div`
background-color: ${Theme.colors.ColumnBlack};
padding-top:10rem;
display:flex;
flex-direction:column;
gap:5rem;
background-color: ${Theme.colors.white};
`






export default Address




