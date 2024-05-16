import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import BankList from '../../../util/Banks/bankList.js';
import Theme from '../../../theme/theme.js';
import OnlineBanking from '../../../theme/Icons/online-banking.png';
import { setOpenBankListForm,setOpenCreditCardSliderForm } from '../../../redux/feature/LoadManagement.js';
import { useDispatch } from 'react-redux';
import { setPaymentTypeStatus } from '../../../redux/feature/PaymentManagement.js';
import ButtonTypes from '../../../util/Button/ButtonObject.js';


const BankListSelection = () =>{


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
    





})



const handleSelectBank = (item)=>{
  setSelectedBank(item);
  
  setPaymentMethod({
      PaymentType:{
          Bank:{
              BankName:BankList[item].name,
              Status:true,
          },


      },
      
  })

  
}


  const handleOpenBankingForm = ()=>{

    dispatch(setOpenBankListForm(true))
    dispatch(setOpenCreditCardSliderForm(false))
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

        <BankListWrapper>
               
                {Object.keys(BankList).slice(0,6).map((items, index) => (
    <ItemContainer key={items} onClick={() => handleSelectBank(items)}>
      
      <ItemContainerContentWrapper>
        <Image src={BankList[items].Image}/> 
        <h3>{BankList[items].name}</h3>
      </ItemContainerContentWrapper>
    </ItemContainer>
    
))}
<ItemContainer other onClick={() => handleOpenBankingForm()}>
      <ItemContainerContentWrapper >
        <Image src={OnlineBanking}/> 
        <h3>Other Banks</h3>
      </ItemContainerContentWrapper>
      <p6><ArrowPointer/></p6>
    </ItemContainer>



    <FinalizeButtonWrapper>
 
                                                   <ButtonTypes.Confirm onClick={handleOpenBankingForm}/>
</FinalizeButtonWrapper> 

          


           
        </BankListWrapper>

    )
}

const FinalizeButtonWrapper = styled.div`
display:flex;
justify-content:flex-end;
gap:1rem;
padding-right:5rem;
margin-top:2rem;

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
  width:80%;
  gap:1rem;
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

  ${(props)=> props.other && css`
   padding:1rem 0.5rem;
  
  
  `}

`
const Image = styled.img`
height:28px;
width:30px;
display:flex;
   align-item:center;
    align-self:center;
`



const BankListWrapper = styled.div`
width:600px;
display:flex;
gap:1rem;
margin-top:1rem;
display:grid;
grid-template-columns: repeat(1,1fr);
grid-template-rows: repeat(1,1fr);


`


export default BankListSelection