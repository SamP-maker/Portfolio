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
import { useSelector} from 'react-redux';
import BillingEdit from '../../components/modal/BillingAddressEdit'





const Payment = ()=>{

  const [itemDocuments,setItemDocuments] = useState([])
  const [address,setAdress] = useState({})
  const [billing,setBillingAdress] = useState({})
  const [cardDetails,setCardDetai] = useState({})
  const [selectedCardType, setSelectedCardType] = useState('visa');


  





  function fetchOrder(){
    return async ()=>{
     

    try{
      const response = await fetch(`http://localhost:5000/userOrderList`,{
        credentials: 'include', // Include credentials in the request
        headers:{
          "Content-Type": "application/json",
      },
      });

      if(!response.ok){
        throw new Error(`an Error occured ${response.statusText}`);
    
      }else{
      
      const data = await response.json();
      
      
      setItemDocuments(data[0].Order)
      }
   
    }catch(error){
      window.alert(error.message);
    }
      
  };

  }


  function fetchAddress(){
    return async ()=>{
     

    try{
      const response = await fetch(`http://localhost:5000/address`,{
        credentials: 'include', // Include credentials in the request
        headers:{
          "Content-Type": "application/json",
      },
      });

      if(!response.ok){
        throw new Error(`an Error occured ${response.statusText}`);
    
      }else{
      
      const data = await response.json();
      setAdress( data[0])
      console.log('Address',data)
      
     


      }
   
    }catch(error){
      window.alert(error.message);
    }
      
  };

  }


  

  function fetchBillAddress(){
    return async ()=>{
     

    try{
      const response = await fetch(`http://localhost:5000/BillingAddress`,{
        credentials: 'include', // Include credentials in the request
        headers:{
          "Content-Type": "application/json",
      },
      });

      if(!response.ok){
        throw new Error(`an Error occured ${response.statusText}`);
    
      }else{
      
      const data = await response.json();
      console.log('Billing Address',data[0])
      setBillingAdress(data[0])
     


      }
   
    }catch(error){
      window.alert(error.message);
    }
      
  };

  }



  function fetchCreditCard(){
    return async ()=>{
      try{
        const response = await fetch('https://localhost:5000/userBilling',{
          credentials: 'include',
          headers:{
            "Content-Type": "application/json",
          },
        });
        if(!response.ok){
          throw new Error(`an Error occured ${response.statusText}`);
        }
      }catch(err){
        window.alert(err)
      }

    }



  }

  useEffect(()=>{

    const fetchOrderFunction = fetchOrder();
    const fetchAddressFunction = fetchAddress();
    const fetchBillingAddress = fetchBillAddress();
    fetchOrderFunction();
    fetchAddressFunction();
    fetchBillingAddress();
  
   
  },[])


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
    <Link to="/BillingModal?cardType=visa">
    <img src={VisaCard}/>

    </Link>
    <Link to="/BillingModal?cardType=mastercard">
    <img src={MasterCard}/>
    
    </Link>

 
   
    <img src={Wallet}/>


        

    </PaymentMethodWrapper>
   
{/*First card */}
            <Section_Order_Confirmation>

           
            <StyledLink to="/Order_confirm"> <EditButton>Edit</EditButton></StyledLink>

{itemDocuments.length === 0  ?   ( 

<OrderContentContainer>
                      <InvalidOrder>No Orders Found</InvalidOrder>
</OrderContentContainer> ) : ( 
                                     <OrderContentContainer>
                                                      {itemDocuments.map(items =>{
                                                        const itemName = items.name
                                                        const itemMatch = itemDocuments.filter(item=> item.name === itemName)
                                                        const quantity = itemMatch.length
                                              
                                                        return(
                                                                <>
                                                                  <ItemContainer>
                                                                      {<p>{items.name}</p>}
                                                                  </ItemContainer>

                                                                  <DetailsContainer>
                                                                        <p>Remarks:<span> None</span></p>
                                                                  </DetailsContainer>

                                                                  <QuantityContainer>
                                                                
                                                                      <p>Quantity: {quantity} </p>
                                                                  </QuantityContainer>
                                                                </>
                                                              )
                                                      })}
                                     </OrderContentContainer>
                                     
                                     )
                                       

                           }
           
            </Section_Order_Confirmation>

      
{/*Second card */}
<Section_Delivery_Address>
              <StyledLink to="/BillingModal"> <EditButton>Edit</EditButton></StyledLink>
                                    {address ? 
                                ( <AddressContainer>
                                            <Address_Item_Container>
                                                       
                                                                      <div key={address._id}>
                                                                      <p1>Surname: {address.LastName}</p1>
                                                                      <p1>Name: {address.FirstName}</p1>
                                                                      <p1>Address: {address.Address}</p1>
                                                                      <p1>Post Code: {address.Postal}, District: {address.District}</p1>
                                                                      <p1>Phone: +{address.Phone}</p1>  
                                                                      </div>
                                                                        
                                            </Address_Item_Container>
                          </AddressContainer>


                          ) :
                          (
                            <AddressContainer>
                                    <Address_Item_Container>
                                                         <InvalidAddress>No Address Found</InvalidAddress>
                                    </Address_Item_Container>
                            </AddressContainer>  )
                            
                            }
            
              </Section_Delivery_Address>

{/*Third card */}




<BillingEdit/>







    </PaymentInfoWrapper>
 
<CheckoutModal/>

   
        
  
        </PageWrapper>

        
    )
}


const InvalidOrder = styled.p`
font-size:20px;
position:absolute;
left:40%;
top:50%;
`


const InvalidAddress = styled.p`
font-size:20px;
position:absolute;
left:60%;
top:30%;

`


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
height:200px;
position:relative;
font-size:1rem;
margin-top:0;



p1{

  padding: .5rem .5rem;
  display:flex;
}


`



const AddressContainer = styled.div`
margin-top:1%;
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
grid-column-start:1;
grid-column-end:3;
font-size:0.825rem;
display:grid;
flex-direction:column;
gap:10px;
height:200px;
position:relative;
font-size:1rem;

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



const PageWrapper = styled.div`
background-color: ${Theme.colors.ColumnBlack};
padding-top:2rem;
display:flex;
flex-direction:column;
gap:5rem;
background-color:${Theme.colors.white};

`






export default Payment




