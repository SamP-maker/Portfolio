import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Footer from '../../util/Footer/Footer';
import 'react-international-phone/style.css';
import Cart from '../modal/CartModal';
import VisaCard from '../../theme/Icons/Visa.png';
import MasterCard from '../../theme/Icons/Mastercard.png';
import Wallet from '../../theme/Icons/wallet.png';
import { Link } from 'react-router-dom';
import CheckoutModal from '../modal/CheckoutModal';
import { Logo } from '../../theme/theme';





const Payment = ()=>{

  const [itemDocuments,setItemDocuments] = useState([])
  const [AddressDocuments,setAddressDocuments] = useState([])
  const [BillingAddress, setBillingAddress] = useState([])
  const [cardNumber, setcardNumber] = useState([])
  

  function fetchData(url,setStateFunction){
    return async ()=>{

    try{
      const response = await fetch(`${url}`,{
        credentials: 'include', // Include credentials in the request
      });
      if(!response.ok){
        throw new Error(`an Error occured ${response.statusText}`);
    
      }
      
      const items = await response.json();
      setStateFunction(items);
      const itemArray = [items]

   
    }catch(error){
      window.alert(error.message);
    }
      
  };

  }

/*
  useEffect(()=>fetchData(`http://localhost:5000/userOrderList`,setItemDocuments),[itemDocuments.length])
  useEffect(()=>fetchData(`http://localhost:5000/userAddress`,setAddressDocuments),[AddressDocuments.length])
  useEffect(()=>fetchData(`http://localhost:5000/userBillingAddress`,setBillingAddress),[BillingAddress.length])
  useEffect(()=>fetchData(`http://localhost:5000/userBilling`,setcardNumber),[cardNumber.length])
*/

    return(
      
       <PageWrapper>

<Logo/>
        <Cart/>





<HeaderWrapper>
      
      <StyledLink to="/Order_confirm"><RedirectWrapper><p>Back to Order</p> </RedirectWrapper></StyledLink>
     
    </HeaderWrapper>


    <PaymentInfoWrapper>
        <div><h1>Choose a payment method</h1></div>
    <PaymentMethodWrapper>
    <Link to="/BillingModal">
    <img src={VisaCard}/>

    </Link>
    <Link to="/BillingModal">
    <img src={MasterCard}/>

    </Link>
   
    <img src={Wallet}/>


        

    </PaymentMethodWrapper>
   
{/*First card */}
            <Section_Order_Confirmation>

           
            <StyledLink to="/Order_confirm"> <EditButton>Edit</EditButton></StyledLink>

{itemDocuments.length === 0 ?    ( 
                                     <OrderContentContainer>
                                                      {itemDocuments.map(items =>{
                                                        return(
                                                                <>
                                                                  <ItemContainer>
                                                                      {<p>{items.name}</p>}
                                                                  </ItemContainer>

                                                                  <DetailsContainer>
                                                                        <p>Remarks:<span> None</span></p>
                                                                  </DetailsContainer>

                                                                  <QuantityContainer>
                                                                      <p>{items.amount}</p>
                                                                  </QuantityContainer>
                                                                </>
                                                              )
                                                      })}
                                     </OrderContentContainer>):( 

                                      <OrderContentContainer>
                                                          <ItemContainer>
                                                                        <p>Aglio Olio Pasta</p>
                                                                        <p>Aglio Olio Pasta</p>
                                                                        <p>Aglio Olio Pasta</p>
                                                          </ItemContainer>
                                                          <DetailsContainer>
                                                                        <p>Remarks:<span> None</span></p>
                                                                        <p>Remarks:<span> None</span></p>
                                                                        <p>Remarks:<span> None</span></p>
                                                          </DetailsContainer>
                                                          <QuantityContainer>
                                                                        <p>1</p>
                                                                        <p>1</p>
                                                                        <p>1</p>
                                                          </QuantityContainer>
                                      </OrderContentContainer> )
                                       

                           }
           
            </Section_Order_Confirmation>


{/*Second card */}
              <Section_Delivery_Address>
              <StyledLink to="/BillingModal"> <EditButton>Edit</EditButton></StyledLink>
                                    {AddressDocuments.length === 0 ? (
                                    <AddressContainer>
                                            <Address_Item_Container>
                                                                  <p>Surname: Lee</p>
                                                                  <p>Name: Sam Perry Chin Howe</p>
                                                                  <p>Address: Five Stones Condominium, Block E, Level 5, Unit 02, 47300, Petaling Jaya</p>
                                                                  <p>Phone: +60 102367603</p>
                                            </Address_Item_Container>
                                    </AddressContainer>  )
                                    :
                                ( <AddressContainer>
                                            <Address_Item_Container>
                                                        {AddressDocuments.map(items => {
                                                                   return(
                                                                      <>
                                                                      <p>Surname: {items.LastName}</p>
                                                                      <p>Name: {items.FirstName}</p>
                                                                      <p>Address: {items.Address}</p>
                                                                      <p>Phone: {items.Postal},{items.District}</p>
                                                                      <p>{items.Phone ? items.Phone : "No Phone Number Found"}</p>
                                                                      </>
                                                                    )})}           
                                            </Address_Item_Container>
                          </AddressContainer>
                          )}
            
              </Section_Delivery_Address>




{/*Third card */}
<Section_Payment_Billing>
              <StyledLink to="/BillingAddress"> <EditButton>Edit</EditButton></StyledLink>
                                   <BillingContainer>
                                    {BillingAddress.length === 0 ? 
                              ( <Billing_Item_Container>
                                <p>Card: **** **** **** 1234</p>
                                <p>Name: Sam Perry Lee Chin Howe</p>
                                <p>Address: Five Stones Condominium, Block E, Level 5, Unit 02, 47300, Petaling Jaya</p>
                              </Billing_Item_Container>) :
                              

                              (<Billing_Item_Container>
                              {cardNumber.map((items,index)=>{
                                return(
                                  <>
                                <p>Card: {items.cardNumber}</p>
                                <p>Name:{items.Firstname}, {items.LastName}</p>
                          
                                  
                                  </>
                                )


                              })}
                              </Billing_Item_Container>
                              
                              )}
                              
                             

                                </BillingContainer>
</Section_Payment_Billing>





{/*Fourth card */}

    </PaymentInfoWrapper>
 
<CheckoutModal/>

   
        
  
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



const Billing_Item_Container = styled.div`
grid-column-start:1;
grid-column-end:3;
font-size:0.825rem;
display:flex;
flex-direction:column;
gap:10px;
height:200px;
position:relative;
font-size:1rem;


`



const BillingContainer = styled.div`
margin-top:3%;
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(auto,1fr);
`



const Section_Payment_Billing = styled.div`
grid-row:5;
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



`


const Address_Item_Container = styled.div`
grid-column-start:1;
grid-column-end:3;
font-size:0.825rem;
display:flex;
flex-direction:column;
gap:10px;
height:200px;
position:relative;
font-size:1rem;


`



const AddressContainer = styled.div`
margin-top:3%;
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(auto,1fr);
`

const Section_Delivery_Address = styled.div`
grid-row:4;
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

const ItemContainer = styled.div`
grid-column:1;
font-size:0.825rem;
display:flex;
flex-direction:column;
gap:1rem;
font-size:1rem;

`
const DetailsContainer = styled.div`
grid-column:2;
font-size:0.825rem;
display:flex;
flex-direction:column;
gap:1rem;
font-size:1rem;
`
const QuantityContainer = styled.div`
grid-column:3;
font-size:0.825rem;
display:flex;
flex-direction:column;
gap:1rem;
font-size:1rem;
`

const OrderContentContainer = styled.div`
margin-top:3%;
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(auto,1fr);
justify-items:center;

`

const Section_Order_Confirmation = styled.div`
grid-row:3;
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



p1{
  top:0;
  left:0;
  border:1px solid red;
}
`

const PaymentMethodWrapper = styled.div`
display: flex;
  flex-direction: row;
  grid-row: 2 / span 1;
  justify-content: flex-start;
  gap: 5rem;
  margin-top: 1rem;
  img {

    display: flex;
    justify-content: flex-start;
    gap: 5rem;
    margin-top: 1rem;
    max-height: 20px; /* Set a maximum height for the images */
    &:hover {
     
        img {
          
          &:hover {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            cursor: pointer;
            transition: 1s;
          }
        }
    }
  }
`

const PaymentInfoWrapper = styled.div`
padding-bottom:10rem;
background-color: ${Theme.colors.white};

width:60vw;
margin-left:auto;
margin-right:auto;
display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(2,1fr);
padding:5rem 5rem;
font-family: 'Work Sans', sans-serif;
margin-bottom:30rem;

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
padding-top:2rem;
display:flex;
flex-direction:column;
gap:5rem;
background-color:${Theme.colors.white};

`






export default Payment




