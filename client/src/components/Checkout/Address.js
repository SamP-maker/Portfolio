import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Footer from '../../util/Footer/Footer';
import ButtonTypes from '../../util/Button/ButtonObject';
import Input from '../../util/Input/Input';
import Label from '../../util/Label/Label';
import 'react-international-phone/style.css';
import Cart from '../modal/CartModal';
import { Link } from 'react-router-dom';





const Address = ()=>{
        const [phone, setPhone] = useState('');
        const [form,setForm] = useState({
          firstName: '',
          lastName: '',
          Address: '',
          Postal:'',
          District:'',

        })


        const handleForm = (value)=>{
          return setForm(prev =>{
            return {...prev,...value}

          })
        }




  


    return(
       <PageWrapper>
        <Cart/>





    <HeaderWrapper>
    <RedirectWrapper>
        <Link to="/Order_confirm"><p>Back to Order Confirmation</p></Link>
      </RedirectWrapper>
                 <RightWrapper>

  
        </RightWrapper>
    </HeaderWrapper>



    <ProgressBarContainer>
                               <ProgressBar>
                               </ProgressBar>

                           <CheckpointContainer>
                               <Checkpoint><div><span></span></div></Checkpoint>
                               <Checkpoint> <div><span></span></div></Checkpoint>
                               <Checkpoint> <div><span></span></div></Checkpoint>
                           </CheckpointContainer>                  


    </ProgressBarContainer> 
    
       
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
                    onChange={(e) => handleForm({Phone: e.target.value})}
                    />
               


<Label fontSize="1rem" text="*Delivery is only available in the same state within 20km*"/>

            
<PaynowWrapper>
<ButtonTypes.Pay_Now/>
</PaynowWrapper>                    
              
     </CheckOutWrapper>
               


        
        <Footer/>
        </PageWrapper>

        
    )
}

const RedirectWrapper = styled.div`
font-size:1rem;
`




const ProgressBarContainer = styled.div`

display:flex;
justify-content:center;
align-items:center;
height:100px;
width:70rem;
margin-left:auto;
margin-right:auto;
`

const CheckpointContainer = styled.div`
display:flex;
position:absolute;
width:25rem;
height:80px;
display:flex;
align-items:center;
gap:8rem;
`






const ProgressBar = styled.div`
width:100%;
height:10px;
background-color:${Theme.colors.Greylite};
border-radius:10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`
const Checkpoint = styled.label`
height:50px;
width:50px;
background-color:${Theme.colors.Greylite};
border-radius:50%;
display:flex;
justify-contents:center;
align-items:center;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
&:nth-child(1),&:nth-child(2){
div{
height:40px;
width:40px;
margin:auto auto;
background-color: ${Theme.colors.Teal};
border-radius:50%;
display:flex;
justify-contents:center;
align-items:center;
animation: fadeIn 2s ease forwards;

@keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }



span{
  
  margin:auto auto;
  width: 5px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

}

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



const ButtonWrapper = styled.div`
position:relative;
display:flex;
justify-content:center;
flex-direction:column;
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






const PageWrapper = styled.div`
background-color: ${Theme.colors.ColumnBlack};
padding-top:20rem;
display:flex;
flex-direction:column;
gap:5rem;
background-color: ${Theme.colors.white};
`






export default Address




