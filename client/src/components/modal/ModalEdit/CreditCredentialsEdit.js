import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import Input from '../../../util/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { setCreditCardCredentials ,clearCreditCardCredentials,fetchCreditCardCredential,fetchAllUserCardCredentials } from '../../../redux/feature/CardCredentialSlice';
import ButtonTypes from '../../../util/Button/ButtonObject';






const CreditCardEdit = () =>{

  
    const [toggle,setToggle] = useState(false)
    const dispatch = useDispatch()
    const {CreditCardCredentials, CreditCardCredentialsAll} = useSelector((store)=> store.credit)
    const [selectedCreditCard,setSelectedCreditCard] = useState([])


    


    const handleToggle = () =>{

        setToggle((prev) => !prev)

    }

    const hiddenCardNumber = () =>{
      const cardNumber = CreditCardCredentials.CardNumber
      const CCV = CreditCardCredentials.CCV
      
      const maskedNumber = cardNumber.replace(/.(?=.{4})/g, '*');
      const maskedCCV = CCV.replace(/./g, '*');

      return {maskedNumber, maskedCCV}
      
    }

const {maskedNumber, maskedCCV} = hiddenCardNumber();

   

    const handleCheckbox = (itemId) =>{

      if (selectedCreditCard.length > 1 || !selectedCreditCard.includes(itemId)) {
        setSelectedCreditCard([itemId]); // Update selection to include only the clicked item
          // If AddressState holds the full details, update recentAddressState directly
          const selectedCreditCardCredentials = CreditCardCredentialsAll.find((address) => address._id === itemId._id);
          dispatch(setCreditCardCredentials(selectedCreditCardCredentials))// Update recentAddressState
        
          localStorage.setItem('credit', JSON.stringify(selectedCreditCardCredentials));
        }

  }



  
  
  useEffect(() => {
    const storedCredit = localStorage.getItem('credit');
    
    
    if (storedCredit) {
      const parsedCredit = JSON.parse(storedCredit);
      
      if (!CreditCardCredentials._id) {
        dispatch(setCreditCardCredentials(parsedCredit)); // Update Redux state only if Address is not present
      }
      dispatch(fetchCreditCardCredential());
  
      // Fetch AllAddress unconditionally when data is available in local storage
      dispatch(fetchAllUserCardCredentials());
    } else {
      // Fetch both Address and AllAddress if not available in local storage
      dispatch(fetchCreditCardCredential());
      
      dispatch(fetchAllUserCardCredentials());
    }
  }, []);


return(
    <>
  
      
  
{!toggle ? 


/*First card */



<Section_Payment_Billing>
<h2>Payment Method</h2>

<EditButton onClick={handleToggle}>Edit</EditButton>

 <Billing_Item_Container>
                                                  
                                                    <SingleItemContainer>
                                                       
                                                       <div key={CreditCardCredentials._id}>
                                                       <p1>Card Type: {CreditCardCredentials.cardType}</p1>
                                                       <p1>Name on Card: {CreditCardCredentials.FullName}</p1>
                                                       <p1>CardNumber: {maskedNumber}</p1>
                                                       <p1>Expire: {CreditCardCredentials.Month}/{CreditCardCredentials.Year}</p1>
                                                      
                                                       
                                                       </div>
                                                         
                                                   </SingleItemContainer>
                                                 
                                                  
                                     
 </Billing_Item_Container>
                         
                         
                           

               

</Section_Payment_Billing>


   :



<Section_Payment_Credentials_fetch_All>

<h2>Payment Method</h2>
<EditButton onClick={handleToggle}>close</EditButton>

 <Billing_Item_Container>
                                                  {CreditCardCredentialsAll.length > 1 ?      
                                                  
                                                  CreditCardCredentialsAll.map (items => ((
<Selection_Wrapper key={items._id}>

                                          <label>
                                            <Input 
                                                type="checkbox"
                                                name="checkbox"
                                                checked={selectedCreditCard.includes(items)}
                                                onChange={() => handleCheckbox(items)}
                                                
                                               
                                            />
                                            </label> 


                                            <ItemContainer>                               
                
                                                       <div>
                                                       <p1>Card Type: {items.cardType}</p1>
                                                       <p1>Name on Card: {items.FullName}</p1>
                                                       <p1>CardNumber: {maskedNumber}</p1>
                                                       <p1>Expire: {items.Month}/{items.Year}</p1>
                                                       </div>
                                                         
                                                   </ItemContainer>

                                                   </Selection_Wrapper>
                                                  ))): 
                                                  
                                                  (
                                                <SingleItemContainer>
                                                       
                                                       <div key={CreditCardCredentials._id}>
                                                       <p1>Card Type: {CreditCardCredentials.cardType}</p1>
                                                       <p1>Name on Card: {CreditCardCredentials.FullName}</p1>
                                                       <p1>CardNumber: {CreditCardCredentials.CardNumber}</p1>
                                                       <p1>Expire: {CreditCardCredentials.Month}/{CreditCardCredentials.Year}</p1>
                                                      
                                                       </div>
                                                         
                                                   </SingleItemContainer>

                                                  )
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   }
                                                   
                                                 
                                                  
                                     
 </Billing_Item_Container>
 <FinalizeButtonWrapper>
                                                   <ButtonTypes.Confirm onClick={handleToggle}/>
</FinalizeButtonWrapper>                   
                                      
                        
</Section_Payment_Credentials_fetch_All>



   

}

</>
)

}


const SingleItemContainer = styled.div`
grid-column-start:1;
grid-column-end:3;
font-size:0.825rem;
height:200px;
position:relative;
font-size:1rem;
margin-top:0;

p1{

  padding: .5rem .5rem;
  display:flex;
}
`



const Section_Payment_Credentials_fetch_All = styled.div`
grid-row:6;
margin-top:5%;
height: auto;
padding-top:20px;
padding-bottom:20px;
padding-left:5rem;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;
position:relative;
height: auto;



p1{
  top:0;
  left:0;

}

h2{
    position:absolute;
    top:-20px;
    left:3rem;
    font-size:36px;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}
`






const Selection_Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(1,10rem);
grid-template-rows: repeat(1,10rem);
padding-bottom:2rem;
padding-top:2rem;
  
  justify-items:center;
  align-items:center;

  label {
  
    align-items:center;
    justify-items:center;
    grid-column-start: 1;
    grid-column-end: 1;
  }

`


const FinalizeButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
width:250px;
margin-left:80%;

`

const ItemContainer = styled.div`
grid-column-start:2;
grid-column-end:2;
font-size: 0.825rem;

position: relative;
font-size: 1rem;
margin-top: 0;


p1 {
  padding: 0.5rem 0.5rem;
  display: flex;
}
`



const Billing_Item_Container = styled.div`
margin-top:1%;
display:grid;
grid-template-columns: repeat(1,1fr);
grid-template-rows: repeat(1,1fr);


`

const Section_Payment_Billing = styled.div`
grid-row:6;
margin-top:5%;
height:20rem;
padding-top:20px;
padding-left:5rem;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;
position:relative;



p1{
  top:0;
  left:0;

}

h2{
    position:absolute;
    top:-20px;
    left:3rem;
    font-size:36px;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}
`



const EditButton = styled.p`
margin-left:92%;
margin-top:2%;
color:${Theme.colors.Teal};

&:hover{
  cursor:pointer;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

`




export default CreditCardEdit