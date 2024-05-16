import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { setCreditCardCredentials ,clearCreditCardCredentials,fetchCreditCardCredential,fetchAllUserCardCredentials } from '../../../redux/feature/CardCredentialSlice';
import ButtonTypes from '../../../util/Button/ButtonObject';
import { setOpenCreditCardForm,setOpenCreditCardSliderForm } from '../../../redux/feature/LoadManagement';
import cashDelivery from '../../../theme/Icons/cash-on-delivery.png';
import creditCart from '../../../theme/Icons/credit-card.png';
import onlineBanking from '../../../theme/Icons/online-banking.png';
import TouchNGo from '../../../theme/Icons/Touch-n-Go-Ewallet.png';
import BankListSelection from './BankListSlider';
import { setPaymentTypeStatus } from '../../../redux/feature/PaymentManagement';


const CreditCardEditSlider = ({isHidden}) =>{

      const name= localStorage.getItem('Username')
       let Username = ''
       name ? Username = name.replace(/^"(.*)"$/, '$1') : Username = '';

  
  
    const dispatch = useDispatch()
    const {CreditCardCredentials, CreditCardCredentialsAll} = useSelector((store)=> store.credit)
    const [selectedCreditCard,setSelectedCreditCard] = useState([])
    const [isBankListShow,setIsBankListShow] = useState(false);
    
    
    const [cashOnDelivery, setCashOnDelivery] = useState({

      PaymentType:{
          CashOnDelivery:{
              Name:'',
              Status:false,
          },
  

  
      },
      
  
  
  
  
  
  });

  const [Touch_n_GO, setTouchNGo] = useState({

    PaymentType:{
        TouchNGo:{
            Number:'',
            Status:false,
        },



    },
    





});

  const handleTouchNGo = ()=>{
    
  
    setTouchNGo({
        PaymentType:{
          TouchNGo:{
            Number:'+60102367603',
            Status:true,
          }
            
  
  
        },
        
    })

    dispatch(setOpenCreditCardSliderForm(false))
    
    
  }




    const handleCashOnDelivery = ()=>{
  
      setCashOnDelivery({
          PaymentType:{
            CashOnDelivery:{
              Name:Username,
              Status:true,
            }
              
    
    
          },
          
      })

      dispatch(setOpenCreditCardSliderForm(false))
    
      
    }

  const handleShowBankList = () =>{
    setIsBankListShow(true)
    
  }

  const handleShowBankListClose = () =>{
    setIsBankListShow(false)
    
  }

  const handleCloseSliderForm = ()=>{
    setIsBankListShow(false)
    dispatch(setOpenCreditCardSliderForm(false))
  }

  const handleOpenCreditCardForm = () =>{

    dispatch(setOpenCreditCardForm(true))

}

    
useEffect(() => {
  dispatch(setPaymentTypeStatus(Touch_n_GO));
  
}, [Touch_n_GO]);


  useEffect(() => {
    dispatch(setPaymentTypeStatus(cashOnDelivery));
    
}, [cashOnDelivery]);





return(
   

  
<Section_Payment_Credentials_fetch_All isHidden={isHidden}>

  



{isBankListShow ? 

<>
<SectionWrapper bankForm>
  <HeaderWrapper>
      <p6><ArrowPointer left onClick={handleShowBankListClose}/></p6>
      <EditButton onClick={handleCloseSliderForm}>Close</EditButton>
</HeaderWrapper>


<h2>Select a Bank</h2>
</SectionWrapper>

<Billing_Item_Container>

  <BankListSelection>
  </BankListSelection>



</Billing_Item_Container>

</>

:
(
  <>
<SectionWrapper>

<h2>Select Payment Method</h2>
<EditButton onClick={handleCloseSliderForm}>close</EditButton>
</SectionWrapper>




 <Billing_Item_Container>

  
<ItemContainer TNG onClick={handleTouchNGo}>


<ItemContainerWrapper >
<Image src={TouchNGo}/> 
            <ItemContainerContentWrapper> 
                <h3>Touch 'n Go</h3>
              
            </ItemContainerContentWrapper> 
</ItemContainerWrapper>
<ItemContainerBottomWrapper>Touch 'n Go eWallet</ItemContainerBottomWrapper>
</ItemContainer>




                       


<ItemContainer onClick={handleShowBankList}>


<ItemContainerWrapper >
<Image src={onlineBanking}/> 
            <ItemContainerContentWrapper> 
                <h3>Online Banking</h3>
                <p1>Internet banking log-in needed</p1>
            </ItemContainerContentWrapper> 
</ItemContainerWrapper>
<p6><ArrowPointer/></p6>
</ItemContainer>

<ItemContainer onClick={handleOpenCreditCardForm}>  

  <ItemContainerWrapper>
  <Image src={creditCart}/>
                <ItemContainerContentWrapper> 
                  <h3>Credit Card</h3>
                  <p1>Credit/Debit Card</p1>
                </ItemContainerContentWrapper>
  </ItemContainerWrapper>
  <p6><ArrowPointer/></p6>
</ItemContainer>

<ItemContainer onClick={handleCashOnDelivery}>  


  <ItemContainerWrapper>
    <Image src={cashDelivery}/>
              <ItemContainerContentWrapper>
                <h3>Cash on Delivery</h3>
                <p1>Cash on Delivery</p1>
              </ItemContainerContentWrapper>
  </ItemContainerWrapper>

</ItemContainer>







                                                 
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                                      
                                                   
                                                   
                                                   
                                                   
                                                 
                                                  
                                     
 </Billing_Item_Container>

</>
)
}
                                      
                                                                                 
</Section_Payment_Credentials_fetch_All>


                                                  
                                                  


)

}


const HeaderWrapper = styled.div`
display:flex;
justify-content:space-between;
flex-direction:row;
width:100%;
`

const ItemContainerBottomWrapper = styled.div`
font-size:12px;
bottom:0;
left:0;
width:100%;
padding:0.5 rem 1rem;
padding-left:.3rem;
opacity:0.8;
color:${Theme.colors.ColumnBlack};
`

const ArrowPointer = styled.i`
border:  solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 4px;
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);


${(props)=> props.left && css`

transform: rotate(135deg);
-webkit-transform: rotate(135deg);

&:hover{
  cursor:pointer;
}


`}


`

const ItemContainerWrapper = styled.div`
display:flex;
flex-direction:row;
gap:1rem;
`

const ItemContainerContentWrapper = styled.div`
display:flex;
flex-direction:column;
align-self:center;
`



const Image = styled.img`
height:40px;
width:40px;

${(props)=> props.TNG && css`
height:60px;
width:60px;

`}
`

const SectionWrapper = styled.div`
display:flex;
justify-content:space-between;
align-content:center;


${(props)=> props.bankForm && css`
gap:1rem;
flex-direction:column;

`}
`



const Section_Payment_Credentials_fetch_All = styled.div`
position:fixed;
right: ${({ isHidden }) => (isHidden ? '0' :'-600px')}; /* Initially hidden */
display:flex;
top:0;
background-color: ${Theme.colors.white};
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
flex-direction:column;
justify-content:space-evenly;
height:100%;
*/max-height: calc(5 * (2.5rem + 2.5rem) + 3rem);*/
overflow-y:scroll;
z-index:9999;
transform: ${({ isHidden }) => (isHidden ? '0' : 'translateX(200px)')};
transition: ${({ isHidden }) => (isHidden ? 'transform 3s ease' : ' ')}; 
width:600px;
padding-bottom:20px;
padding-left:5rem;
background-color: ${Theme.colors.white};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;



p1{
  top:0;
  left:0;

}

h2{
    left:3rem;
    font-size:24px;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}


&::-webkit-scrollbar{
    display:none;
  }
`







const FinalizeButtonWrapper = styled.div`
display:flex;
justify-content:flex-end;
gap:1rem;
padding-right:1rem;


`



const ItemContainer = styled.div`
display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  flex-direction:row;
  font-size: 0.825rem;
  border:1px solid ${Theme.colors.blackFade};
  border-radius: 3px;
  padding:1.5rem 0.5rem;
 
  font-size: 1rem;
  width:80%;
  gap:1rem;
  margin-top: 0;
  
  h3{
    
  }


  p1,p2,p3,p4{
    
    font-size:18px;
    font-weight:bold;
    opacity: 0.8
  }
  p5{
    opacity:0.8;
  }

  p6{
    display:flex;
    padding:1rem 1rem;
    align-item:center;
    justify-content:center;
  }

  &:hover{
    border:1px solid ${Theme.colors.Teal};
    cursor:pointer;
  }

  &:focus{
    border:1px solid ${Theme.colors.Teal};
  }


  ${(props)=> props.TNG && css`
  flex-direction:column;
  gap:1rem;
  padding:0.5rem 0.5rem;
  `}
`



const Billing_Item_Container = styled.div`
display:flex;
gap:1rem;
display:grid;
grid-template-columns: repeat(1,1fr);
grid-template-rows: repeat(1,1fr);
`

const EditButton = styled.p`
color:${Theme.colors.Teal};
display:flex;
justify-content:right;
padding-right:2rem;

&:hover{
  cursor:pointer;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
`




export default CreditCardEditSlider