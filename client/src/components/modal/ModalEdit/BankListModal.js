
import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import {useDispatch} from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import BankList from '../../../util/Banks/bankList.js';
import { setOpenBankListForm } from '../../../redux/feature/LoadManagement';
import { setPaymentTypeStatus } from '../../../redux/feature/PaymentManagement';
import ButtonTypes from '../../../util/Button/ButtonObject.js';

const BankListModal = ()=>{

  const dispatch = useDispatch();
  const [selectedBank, setSelectedBank] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState({

    PaymentType:{
        Bank:{
            BankName:'',
            Status:false,
        },


    },
    





});

  const handleOpenBankingForm = () =>{
    dispatch(setOpenBankListForm(false))

  }

  const handleSelectBank = (item)=>{
    setSelectedBank(item)
    setPaymentMethod({
        PaymentType:{
            Bank:{
                BankName:BankList[item].name,
                Status:true,
            },
  
  
        },
        
    })
  
    
  }

  
  useEffect(() => {
    if (isMounted && selectedBank !== null) {
      dispatch(setPaymentTypeStatus(paymentMethod));
    }
  }, [paymentMethod, isMounted, selectedBank]);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);



    return(
       <PageWrapper>
<FormWrapper>
        <CheckOutWrapper>


          <SectionWrapper>
                  <h1>Other Banks</h1>
                  <CloseButtonWrapper onClick={handleOpenBankingForm}><FaTimes/></CloseButtonWrapper>
          </SectionWrapper>
  <ItemContainerGrid>
        {Object.keys(BankList).slice(6,11).map((items,index) => (
    <ItemContainer key={items} onClick={() => handleSelectBank(items)}>
      <ItemContainerContentWrapper>
        <Image src={BankList[items].Image}/> 
        <h3>{BankList[items].name}</h3>
      </ItemContainerContentWrapper>
    </ItemContainer>
  
  ))}
  </ItemContainerGrid>  

  <FinalizeButtonWrapper>
 
                                                   <ButtonTypes.Confirm onClick={handleOpenBankingForm}/>
</FinalizeButtonWrapper>   
       </CheckOutWrapper>

       

 
        
       


    





       </FormWrapper>  
        </PageWrapper>

        
    )
}

const FinalizeButtonWrapper = styled.div`
display:flex;
justify-content:flex-end;
gap:1rem;
padding-right:1rem;
margin-top:2rem;

`




const SectionWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
font-family: 'Work Sans', sans-serif;
`



const ItemContainerGrid = styled.div`
display:grid;
grid-template-columns: (2,3fr);
grid-template-rows: (auto,3fr);
gap:2.5rem;


div:nth-child(1){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:2;
  grid-row-end:2;
}

div:nth-child(2){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:2;
  grid-row-end:2;
}

div:nth-child(3){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:3;
  grid-row-end:3;
}

div:nth-child(4){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:3;
  grid-row-end:3;
}

div:nth-child(5){
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:4;
  grid-row-end:4;
}

div:nth-child(6){
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:4;
  grid-row-end:4;
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


const CloseButtonWrapper = styled.div`
padding:2px 2px;
height:10px;
width:10px;
display:flex;
justify-content:center;
justify-self:right;
grid-column-start:2;
grid-column-end:2;


&:hover{
cursor:pointer;
}

`







const CheckOutWrapper = styled.div`
padding-bottom:10rem;
background-color: ${Theme.colors.white};
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
width:800px;
padding:2rem 6rem;


`


const PageWrapper = styled.div`
  z-index: 999; /* Ensure it's on top of other content */
  display:flex;
  flex-direction:column;
  gap:5rem;
`




const ArrowPointer = styled.i`
border:  solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 4px;
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
`


const  ItemContainerContentWrapper = styled.div`
display:flex;
flex-direction:row;
gap:1rem;
`



const ItemContainer = styled.div`
display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  font-size: 0.825rem;
  border:1px solid ${Theme.colors.blackFade};
  border-radius: 3px;
  padding:1.5rem 0.5rem;
  justify-content:space-between;
  font-size: 1rem;
  width:100%;
  margin-top: 0;
  
  font-family: 'Work Sans', sans-serif;
  


  h3{
    display:flex;
    align-self:center;
    font-family: 'Work Sans', sans-serif;
    font-weight:bold;
  }

  p5{
    opacity:0.8;
  }

  p6{
    display:flex;
    padding:1rem 1rem;
    align-item:center;
    align-self:center;
    justify-content:flex-end;
  }

  &:hover{
    border:1px solid ${Theme.colors.Teal};
    cursor:pointer;
  }

  &:focus{
    border:1px solid ${Theme.colors.Teal};
  }

`
const Image = styled.img`
height:28px;
width:30px;
display:flex;
   align-item:center;
    align-self:center;
`



const ButtonWrapper = styled.div`
display:flex;
justify-content:flex-end;
grid-column-start:2;
grid-column-end:2;
grid-row-start:11;
grid-row-end:11;
`





export default BankListModal




