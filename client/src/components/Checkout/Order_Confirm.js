import React, {useState,useEffect} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import menuObject from '../../util/Menu-Content/menuObject';
import Footer from '../../util/Footer/Footer';
import ButtonTypes from '../../util/Button/ButtonObject';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increase, decrease} from '../../redux/feature/cartSlice'
import Cart from '../modal/CartModal';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../theme/theme';




const OrderConfirm = ()=>{
        const [selectedItem,setSelectedItem] = useState([])
        const [selectedCategory, setSelectedCategory] = useState('Main')
        const {cartItems, amount , total } = useSelector((store) => store.cart)
        const dispatch = useDispatch()
        const navigate = useNavigate()
        const [orderList, setOrderList] = useState({
        Order:[],
        Total: 0,
        ItemsAmount: 0,
        })

        

    


      

        const handleIncreaseAmount = (itemId) =>{
                dispatch(increase(itemId))
        }

        const handleDecreaseAmount = (itemId) =>{
                dispatch(decrease(itemId))
        }


        const handleRemoveItem = (itemId) =>{
                dispatch(removeItem(itemId))
        }

      


        const menuSort = (Menu=[]) =>{
                const sort = Menu.map(item =>{
                        return {...item}
                })
                return sort
        }

        useEffect(() => {
                
                
                setOrderList({
                  Order: cartItems,
                  Total: total,
                  ItemsAmount: amount,
                });
                
              }, [cartItems, amount, total]);


       

     

              useEffect(() => {
                if (selectedCategory) {
                  const itemCategory = menuSort(menuObject[selectedCategory]);
                  setSelectedItem(itemCategory);
                }
              }, [selectedCategory]);



        
                
              async function handleSubmit(e){
                e.preventDefault()
                console.log('Sending orderList:', orderList);

                try {
                        await fetch('http://localhost:5000/userOrderList',{
                                method:"POST",
                                headers:{
                                        "Content-Type": "application/json",
                                },
                                credentials: 'include',
                                body:JSON.stringify(orderList)


                
                        })
                        navigate("/Address")
                
                }catch(err){
                        console.error('Error occured:', err);
                        window.alert("Error occured. Please try again later.");
                
                }

                
        

        }

  



    return(
        
     <>
     <Logo/>

{cartItems.length == 0 ?


<>
<Cart/>
<CheckOutWrapper empty_message>
  Cart is Empty
</CheckOutWrapper>   
<PageWrapper blur>


 
 

 <form onSubmit={handleSubmit}>
 


</form>
   
   <Footer/>
   </PageWrapper>

   </>
   
   
   :

        <PageWrapper>
   
        <Cart/>
      
      
  
      <form onSubmit={handleSubmit}>
    <CheckOutWrapper>
        {cartItems.map( items =>{
                            return(
                            <ItemContainer key={items.id}>
                               <img src={items.Image}/>
                               <DescriptionWrapper>
                               <p1>{items.name}</p1>
                               <p2>{items.Price}</p2>
                               <p3>{items.Amount}</p3>
                               </DescriptionWrapper>
                               <IncrementButtonWrapper>
                <ButtonTypes.Increment handleDecreaseCount={() => handleDecreaseAmount(items.id)} handleIncreaseCount={() => handleIncreaseAmount(items.id)} count={items.Amount}/>
              
        </IncrementButtonWrapper>
        
        <ButtonWrapper>
                <ButtonTypes.Remove handleRemove={() => handleRemoveItem(items.id)}/>
        </ButtonWrapper>
                            </ItemContainer>
                            )
                        })}


                        
     <OrderButtonWrapper>
       <ButtonTypes.Confirm_Order type="submit"/>
       </OrderButtonWrapper>
     </CheckOutWrapper>    


     </form>
        
        <Footer/>
        </PageWrapper>
}
</>
        
    )
}

const PageWrapper = styled.div`



${(props)=> props.blur && css`
filter:blur(100px);


`}
`



const CheckOutWrapper = styled.div`
padding-bottom:2rem;
background-color: ${Theme.colors.white};

width:60vw;
margin-bottom:20rem;
margin-left:20vw;
margin-right:20vw;

display:grid;
grid-template-columns: repeat(1,1fr);
grid-template-rows: repeat(auto,1fr);


${(props) => props.empty_message && css`

background-color: ${Theme.colors.white};
display:flex;
border:.15rem solid ${Theme.colors.white};
align-content:center;
justify-content:center;
width:15vw;
margin-top:20rem;
margin-bottom:25rem;
margin-left:42.5vw;
margin-right:42.5vw;
font-family: 'Work Sans', sans-serif;
font-size:24px;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
z-index:999;
padding:1rem 1rem;
text-shadow:0 1px 4px rgba(0, 0, 0, 0.2);
`}

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



const ButtonWrapper = styled.div`
grid-column-start:3;
grid-column-end:3;
grid-row-start:4;
grid-row-end:4;
padding-left:2rem;padding-right:2rem;
`

const OrderButtonWrapper = styled.div`
padding-top:2rem;
padding-right:2rem;
align-items:end;
justify-self:end;
`



const DescriptionWrapper = styled.div`
display:grid;
grid-template-rows: repeat( 2, 1fr);
grid-template-columns: repeat( 3, 1fr);
column-gap:1rem;
grid-column-start:2;
grid-column-end:4;
padding-left:8rem;
justify-items:center;
justify-self:center;
align-content:center;




p1{
        font-size:15px;
        width:10rem;
        gap:10rem;
        grid-column-start:1;
        grid-column-end:1; 
        
}

p2{
  
        font-size:15px;
        grid-column-start:2;
        grid-column-end:2;  

}

p3{
  
    font-size:15px;
    grid-column-start:3;
    grid-column-end:3;  

}

`




const ItemContainer = styled.div`
display:grid;
position:relative;
grid-template-rows: repeat( 4, 2.5rem);
grid-template-columns: repeat( 2, 1fr);
position:relative;
justify-items:center;
background-color: ${Theme.colors.white};
padding:2rem 1rem;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
font-family: 'Work Sans', sans-serif;








img{
        height:150px;
        width:150px;
        border-radius:20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
       
}



`





export default OrderConfirm




