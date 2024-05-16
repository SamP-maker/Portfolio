import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../../theme/theme';
import { Link } from 'react-router-dom';
import ButtonTypes from '../../../util/Button/ButtonObject';
import {fetchOrderData,removeItem,decrease, increase,cancelCart} from '../../../redux/feature/DBcartSlice';
import { useDispatch, useSelector } from 'react-redux';
import  updateOrderAPI from '../../../FetchAPI/updateOrderAPI'


const OrderEdit = React.memo(() =>{

  const dispatch = useDispatch()
  const {cartItems, amount, total, Order_id} = useSelector((store) => store.PaymentCart)
  const [toggle,setToggle] = useState(false)




      

  const handleIncreaseAmount = (itemId) =>{
    dispatch(increase(itemId))
}

const handleDecreaseAmount = (itemId) =>{
    dispatch(decrease(itemId))
}

const handleCancelCart = () =>{
  dispatch(cancelCart())
  handleToggle()
}


const handleRemoveItem = (itemId) =>{
    dispatch(removeItem(itemId))
}


  

    const handleToggle = () =>{

        setToggle((prev) => !prev)

    }


useEffect(()=>{

  dispatch(fetchOrderData())

}, [dispatch])


async function handleSubmit(e){
  

  e.preventDefault()
   const updatedOrder ={
     _id: Order_id,
     Order: cartItems,
     Total: total,
     ItemsAmount: amount,
   }
   
   updateOrderAPI(updatedOrder);
     

 }

return(

<>
  
      
  
{!toggle ? 




<Section_Order_Confirmation_fetch_One>
  
<h2>Order</h2>
<EditButton onClick={handleToggle}>Edit</EditButton>


{cartItems ? 
 

    <Billing_Item_Container >


                                                  
{cartItems.map((items,index) =>{
   const itemName = items.name
   const itemMatch = cartItems.filter( item => item.name === itemName)
   const quantity = itemMatch.length

   return(
   
   <>
   {index > 5 ? 
   
   
   <ItemContainer>
    <p1>. . . . .</p1>
   </ItemContainer> 
   
   :
   <>
   <ItemContainer>
       <p1>{itemName}</p1>
   </ItemContainer>
   
   <DetailsContainer>
                       <p>Remarks:<span> None</span></p>
   </DetailsContainer>
   
   
   <QuantityContainer>
                     <p>Quantity: {items.Amount} </p>
   </QuantityContainer>
   </>
}
</>
   
   )
})}


</Billing_Item_Container>

:

<Billing_Item_Container>
<InvalidOrder>
    No Order Found
</InvalidOrder>

</Billing_Item_Container>






}
                         
                         
                           

            
</Section_Order_Confirmation_fetch_One >


   :


                    
<Section_Order_Confirmation onSubmit={handleSubmit}>
<h2>Order</h2>

<EditButton onClick={handleToggle}>Close</EditButton>

<Billing_Item_Container>

                                                  
{cartItems.map(items =>{
   const itemName = items.name
   const itemMatch = cartItems.filter( item => item.name === itemName)
   const quantity = itemMatch.length

   return(
   
   <>
   <ItemContainer>
       <p1>{itemName}</p1>
   </ItemContainer>
   
   <DetailsContainer>
                       <p>Remarks:<span> None</span></p>
   </DetailsContainer>
   
<QuantityContainer>
   <IncrementButtonWrapper>
   <ButtonTypes.Increment handleDecreaseCount={() => handleDecreaseAmount(items.id)} handleIncreaseCount={() => handleIncreaseAmount(items.id)} count={items.Amount}/>
   </IncrementButtonWrapper>
</QuantityContainer>
   
<RemoveButtonWrapper>
                <ButtonTypes.Remove handleRemove={() => handleRemoveItem(items.id)}/>
</RemoveButtonWrapper>
   
   </>)
})}


</Billing_Item_Container>
                         
<FinalizeButtonWrapper>
       
        <ButtonTypes.Cancel onClick={handleCancelCart}/>
        <ButtonTypes.Confirm type="submit" onClick={handleToggle}/>
</FinalizeButtonWrapper>             
                           

            
</Section_Order_Confirmation>                   
      



   

}

</>
)

})


const Section_Order_Confirmation_fetch_One = styled.div`
display:grid;
margin-top:5%;
height:auto;
padding-bottom:5rem;
padding-left:5rem;
padding-right:5rem;
grid-column-start:1;
grid-column-end:4;
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


const InvalidOrder = styled.p`
font-size:20px;
position:absolute;
left:40%;
top:50%;
`



const IncrementButtonWrapper = styled.div`
border:1px solid black;
height:1.5rem;
width:80px;
border-radius:4px;
display:flex;
justify-content:space-between;
justify-items:right;
justify-self:right;
align-content:right;
align-items:center;
font-size:10px;
grid-column-start:2;
grid-column-end:2;
grid-row-start:4;
grid-row-end:4;
margin-right:3.5rem;


`

const Billing_Item_Container = styled.div`
grid-template-rows: repeat( auto, 1fr);
grid-template-columns: repeat( 4, 1fr);
font-size:0.825rem;
display:grid;
flex-direction:column;
column-gap:2rem;
row-gap:1rem;
height:auto;
padding-top:5rem;
grid-column-start:1;
grid-column-end:5;
grid-row-start:2;
grid-row-end:3;
position:relative;
font-size:1rem;
justify-items: left; /* Center items along the column axis */
padding-left:2rem;


> * {
  padding: 0;
  margin: 0;
}

  
p1{
  width:15rem;
  display:flex;
}
`

const Section_Order_Confirmation = styled.form`
display:grid;
margin-top:5%;
height:auto;
padding-bottom:20px;
padding-left:5rem;
padding-right:5rem;
grid-column-start:1;
grid-column-end:4;
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


const DetailsContainer = styled.div`
grid-column:2;
font-size:0.825rem;
display:flex;
flex-direction:column;

font-size:1rem;
`
const QuantityContainer = styled.div`
grid-column:3;
`

const RemoveButtonWrapper = styled.div`
grid-column-start:4;
grid-column-end:4;
font-size:0.825rem;
display:flex;
flex-direction:column;




`

const ItemContainer = styled.div`
grid-column:1;
font-size:0.825rem;
display:flex;
flex-direction:column;
gap:1rem;
font-size:1rem;



`





const EditButton = styled.p`
grid-column-start:5;
grid-column-end:6;
position:absolute;
margin-bottom:2rem;
margin-top:2rem;

color:${Theme.colors.Teal};

&:hover{
  cursor:pointer;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

`



const FinalizeButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
width:250px;
margin-bottom:2rem;
margin-top:2rem;
grid-column-start:4;
grid-column-end:5;
grid-row-start:3;
grid-row-end:3;



`






export default OrderEdit