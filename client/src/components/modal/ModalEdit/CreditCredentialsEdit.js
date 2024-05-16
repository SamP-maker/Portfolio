import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { setCreditCardCredentials ,clearCreditCardCredentials,fetchCreditCardCredential,fetchAllUserCardCredentials } from '../../../redux/feature/CardCredentialSlice';
import cashDelivery from '../../../theme/Icons/cash-on-delivery.png';
import { setOpenCreditCardSliderForm } from '../../../redux/feature/LoadManagement';
import BankList from '../../../util/Banks/bankList.js';
import TouchNGo from '../../../theme/Icons/Touch-n-Go-Ewallet.png';



const CreditCardEdit = () =>{

  
    const [toggle,setToggle] = useState(false)
    const dispatch = useDispatch()
    const {CreditCardCredentials} = useSelector((store)=> store.credit);
    const {Type} = useSelector((store)=>store.Payment);
    

    
    /*
    const hiddenCardNumber = () =>{
      const cardNumber = form.CardNumber
      const CCV = form.CCV
      

      if(cardNumber && CCV){
      const maskedNumber = cardNumber.replace(/.(?=.{4})/g, '*');

      const maskedCCV = CCV.replace(/./g, '*');
      return {maskedNumber, maskedCCV}
      }else{
        return null;
      }

      
      
    }

const {maskedNumber, maskedCCV} = hiddenCardNumber() || {};
*/
    
    

    const handleOpenCreditCardSliderForm = () =>{

      dispatch(setOpenCreditCardSliderForm(true))
      

  }
    


  
const handleShowItem = () =>{

  if(Type.CashOnDelivery && Type.CashOnDelivery.Status){
    return(
      <SingleItemContainer>
                                                       
                    
  <ItemContainerWrapper>
    <Image src={cashDelivery}/>
              <ItemContainerContentWrapper>
                <h3>Cash on Delivery</h3>
                <p1>Cash on Delivery</p1>
              </ItemContainerContentWrapper>
  </ItemContainerWrapper>                                
                                                       
                                                  
                                                      
                                                      
                                                     
                                                         
      </SingleItemContainer>
                                                 
    )
  }else if(Type.Bank && Type.Bank.Status){
    const BankArray = Object.keys(BankList)
      const paymentMethod = Object.keys(Type)[0];
      const storedBankName = Object.keys(Type[paymentMethod])[0];
      const value = Type[paymentMethod][storedBankName];

      const bankItem = Object.values(BankList).find(item => item.name === value);

  if (bankItem) {
    return (
      <SingleItemContainer key={bankItem.id}>
        <ItemContainerWrapper>
          <Image src={bankItem.Image} />
          <ItemContainerContentWrapper>
            <h3>{bankItem.name}</h3>
          </ItemContainerContentWrapper>
        </ItemContainerWrapper>
      </SingleItemContainer>
    );
  } 
      


  }else {
    return (
          
    <SingleItemContainer TNG>
    
    
    <ItemContainerWrapper >
    <Image src={TouchNGo}/> 
                <ItemContainerContentWrapper> 
                    <h3>Touch 'n Go</h3>
                  
                </ItemContainerContentWrapper> 
    </ItemContainerWrapper>
    <ItemContainerBottomWrapper>Touch 'n Go eWallet</ItemContainerBottomWrapper>
    </SingleItemContainer> // Or handle the case when the item is not found
    )
      }

}

   




  
  
return(
   

<Section_Payment_Billing>

<SectionWrapper>
<h2>Payment Method</h2>

<EditButton onClick={handleOpenCreditCardSliderForm}>Edit</EditButton>
</SectionWrapper>

                          <Billing_Item_Container>

                          
                                                  
                                                    
                                            {handleShowItem()}      
                                     
                          </Billing_Item_Container>
                         
                         
                           

               

</Section_Payment_Billing>



)

}

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

const Image = styled.img`
height:40px;
width:40px;

${(props)=> props.TNG && css`
height:60px;
width:60px;

`}
`


const ItemContainerContentWrapper = styled.div`
display:flex;
flex-direction:column;
align-self:center;
`



const ItemContainerWrapper = styled.div`
display:flex;
flex-direction:row;
gap:1rem;
`


const SingleItemContainer = styled.div`
display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  font-size: 0.825rem;
  border:1px solid ${Theme.colors.ColumnBlack};
  border-radius: 3px;
  padding:0.5rem 0.5rem;
  gap:.5rem;
  font-size: 1rem;
  width:100%;
  margin-top: 0;


  p1,p2,p3,p4{
    font-size:18px;
    font-weight:bold;
    opacity: 0.8
  }
  p5{
    opacity:0.8;
  }

   ${(props)=> props.TNG && css`
  flex-direction:column;
  gap:1rem;
  `}
`







const SectionWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`



const Billing_Item_Container = styled.div`
display:flex;
padding-bottom:2rem;
padding-top:2rem;
gap:2rem;
margin-right:5rem;
  
  justify-content:left;
  align-items:center;

`

const Section_Payment_Billing = styled.div`
grid-row:4;
margin-top:5%;
height: auto;
width:600px;
padding-top:20px;
padding-bottom:20px;
padding-left:5rem;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;
position:relative;




p1{
  top:0;
  left:0;

}

h2{
   
    font-size:36px;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}
`



const EditButton = styled.p`
color:${Theme.colors.Teal};
display:flex;
justify-content:right;
padding-right:2rem;

&:hover{
  cursor:pointer;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`




export default CreditCardEdit