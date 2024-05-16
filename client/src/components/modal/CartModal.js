import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import ButtonTypes from '../../util/Button/ButtonObject';
import {useDispatch, useSelector} from 'react-redux';
import { removeItem, increase, decrease, setOpenCart } from '../../redux/feature/cartSlice';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { setUserDetails } from '../../redux/feature/registrationSlice';
import { openForm } from '../../redux/feature/authSlice';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import OrderConfirmUI from '../../FetchAPI/orderConfirmAPI';


const Cart = ({black}) =>{
       const {cartItems,amount,total,setCategory, isOpen} = useSelector((store) => store.cart)
       const {Auth,RecordSumm,Address} = useSelector((store) => store.load)
       const name= localStorage.getItem('Username')
       let Username = ''
       

       name ? Username = name.replace(/^"(.*)"$/, '$1') : Username = '';
         
       
       
       //const [isOpen,setIsOpen] = useState(true);
       const [isDropDown,setIsDropDown] = useState(true);
       const [isHideNav,setisHideNav] = useState(false);
       const [countTotal,setCountTotal] = useState(0);
       const [isLoad,setIsLoad] = useState(false)
       const [orderList, setOrderList] = useState({
        Order:[],
        Total: 0,
        ItemsAmount: 0,
        })
       const dispatch = useDispatch()
       const navigate = useNavigate()
       


       const handleAuthForm = () =>{
        dispatch(openForm(true))
        
       }

      
       

       const handleIncreaseAmount = (itemId) => {
         
         dispatch(increase(itemId))
         
         
       };
     
       const handleDecreaseAmount = (itemId) => {
           dispatch(decrease(itemId))
         
       };

       const handleRemoveItem = (itemId) => {
           dispatch(removeItem(itemId))
       }

       const handleOpenModal = () =>{
        //setIsOpen((prevIsOpen) => !prevIsOpen)
        dispatch(setOpenCart(true))
        
       }

       const handleCloseModal = () =>{
        //setIsOpen((prevIsOpen) => !prevIsOpen)
        dispatch(setOpenCart(false))
        
       }

       const handleOpenDropDown = () =>{
        setIsDropDown((prevDropDown)=> !prevDropDown)
       }


      

       


      const handleRemoveUser = async () =>{
        try{
                 const response = await fetch('http://localhost:5000/logout',{
                  method:'POST',
                  headers:{
                    "Content-Type": 'application/json',
                },
                credentials: 'include',
               
                 })
        
                 if(response.ok){
                  localStorage.removeItem('Username');
                 
                  navigate('/Dashboard')
        
                 }
                }catch(err){
                  window.alert(err);
                }
              }
        



       useEffect(() =>{
        
        
            const username = localStorage.getItem('Username')
            dispatch(setUserDetails(username))

       },[dispatch])

       useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
          total += item.Price * item.Amount || 0 ; // Multiply price by quantity
        });
        setCountTotal(total);
      }, [cartItems]);


      useEffect(() => {

        
        
        setOrderList({
          Order: cartItems,
          Total: total,
          ItemsAmount: amount,
        });

       


        
      }, [orderList.Order, amount, total]);




       
     

        return(
        
        <>
        

        
    <NavbarWrapper className={isHideNav ? 'hidden' : ''}>
        <StyledLink to="/Dashboard"><Navigation>Dashboard</Navigation></StyledLink>
        <StyledLink to="/Menu"><Navigation>Menu</Navigation></StyledLink>
        {name ? <Navigation dropDown  onClick={handleOpenDropDown}>{Username}
        
        {!isDropDown ? (<DropDownWrapper>
        <DropDownContainer><StyledLink to="/Payment"><Navigation>Check Out</Navigation></StyledLink></DropDownContainer>
        
        <DropDownContainer> <StyledLink to="/Dashboard"><Navigation onClick={handleRemoveUser}>Log out</Navigation></StyledLink></DropDownContainer>
      </DropDownWrapper>) : null}
        
        
        
        </Navigation> 
        
        
        
        
        : 
        <StyledButton onClick={handleAuthForm}>Login</StyledButton>}
 
        
        
        
      
 



        <Navigation onClick={handleOpenModal} > Cart{black ? <FaShoppingBag style={{color: "black"}}/> : <FaShoppingBag style={{color: "white"}}/> } {amount ? <AmountWrapper>{amount}</AmountWrapper> : null} </Navigation>
        
    </NavbarWrapper>
    



  <ModalOverlay isHidden={isOpen}>
    <CartModalTopWrapper>
            <CloseButtonWrapper onClick={handleCloseModal}>

            <FaTimes/>

            </CloseButtonWrapper> 

                        <ContentWrapper>
                      
                            <p1>Cart <FaShoppingBag/></p1>
                            <p2>Your Area</p2>

                        </ContentWrapper>
    </CartModalTopWrapper>


    <CartItemWindow>

        {cartItems.length === 0? (
          // Display "This cart is empty" message
          <EmptyItemContainer>
          <EmptyCartMessage>This cart is empty.</EmptyCartMessage>
          </EmptyItemContainer>
        ) : (
          // Display cart items
          cartItems.map((items,index) => {
            
            return (
            
              <ItemContainer key={items.id} className={index !== cartItems.length ? 'with-shadow' : ''}>
                <img src={items.Image} />

                <DescriptionWrapper>
                  <p1>{items.name}</p1>
                  <p2>{items.Price || 0}</p2>
                  <p3>{items.Amount}</p3>
                </DescriptionWrapper>

                <IncrementButtonWrapper>
                  <ButtonTypes.Increment
                    handleDecreaseCount={() => handleDecreaseAmount(items.id)}
                    handleIncreaseCount={() => handleIncreaseAmount(items.id)}
                    count={items.Amount}
                  />
                </IncrementButtonWrapper>
           
                <ButtonWrapper>
                  <ButtonTypes.Remove
                    handleRemove={() => handleRemoveItem(items.id)}
                  />
                </ButtonWrapper>
              </ItemContainer>
              
            );
          })
        )}


                  
                    
                  




        </CartItemWindow>
            
                  <CheckoutWrapper>
                    <PriceWrapper>
                            <p1>Total:</p1>
                            
                            <p2>${countTotal.toFixed(2)}</p2>
                    </PriceWrapper>
                    
                    
                  <ButtonContainer>
                  <Link to="/Order_confirm"> <ButtonTypes.Head_to_Check_out  onClick={handleCloseModal}> </ButtonTypes.Head_to_Check_out></Link>
                  </ButtonContainer>
                  <MessageTag>Note: *Prices are not included tax*</MessageTag>
                  </CheckoutWrapper>
  </ModalOverlay>


 
        
            </>
       


          
            
    
    )

}

const MessageTag = styled.p`
padding-left:3rem;
font-size:16px;

`


const CartModalTopWrapper = styled.div`
padding:2rem 2rem;
top:0;
left:0;
display:flex;
flex-direction:row;
box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
`

const CloseButtonWrapper = styled.div`
&:hover{
  cursor:pointer;
}

`

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  font-family: 'Work Sans', sans-serif;
  font-size:16px;
`





const PriceWrapper = styled.div`
display:flex;
justify-content:space-between;
padding-left:3rem;
padding-right:3rem;
`

const CheckoutWrapper = styled.div`
background-color: ${Theme.colors.white};
z-index:1;
display:flex;
flex-direction: column;
font-family: 'Work Sans', sans-serif;
padding:  3rem;
font-size:20px;
box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);

`

const AmountWrapper = styled.p`

padding:1px 1px;
height:15px;
width:15px;
display:flex;
font-size:15px;
align-items:center;
justify-content:center;
border-radius:50%;
background-color:red;
position:absolute;
top:.8rem;
right:.5rem;

`

const ButtonContainer = styled.div`
padding-top:1rem;
padding-bottom:1rem;
display:flex;
position:relative;
justify-content:center;
justify-self:center;
`

const ModalOverlay = styled.div`
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
z-index:999;
transform: ${({ isHidden }) => (isHidden ? '0' : 'translateX(200px)')};
transition: ${({ isHidden }) => (isHidden ? 'transform 3s ease' : ' ')}; 





&::-webkit-scrollbar{
  display:none;
}







`;

const CartItemWindow = styled.form`

height:600px;
overflow-y:scroll;

&::-webkit-scrollbar{
  display:none;
}
`




const EmptyCartMessage = styled.h1`
font-family: 'Work Sans', sans-serif;
font-size: 1rem;
display: flex;
  justify-content: center;
  align-items: center;
  justify-self:center;
  text-align: center;

`

const EmptyItemContainer = styled.div`
display:flex;

position:relative;
justify-content:center;
justify-self:center;
align-items:center;
background-color: ${Theme.colors.white};
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
font-family: 'Work Sans', sans-serif;
width:600px;
height:600px;

`








const IncrementButtonWrapper = styled.div`
border:1px solid black;
height:1.5rem;
width:80px;
border-radius:4px;
display:flex;
justify-content:space-between;
align-items:center;
font-size:10px;
grid-column-start:2;
grid-column-end:2;
grid-row-start:4;
grid-row-end:4;

`

const ButtonWrapper = styled.div`
grid-column-start:3;
grid-column-end:3;
grid-row-start:4;
grid-row-end:4;

`

const DescriptionWrapper = styled.div`
display:grid;
grid-template-rows: repeat( 2, 1fr);
grid-template-columns: repeat( 3, 1fr);
column-gap:1rem;
grid-column-start:2;
grid-column-end:4;
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
grid-template-rows: repeat( 4, 2.5rem);
grid-template-columns: repeat( 2, 1fr);
position:relative;
justify-items:center;
background-color: ${Theme.colors.white};
padding:2rem 1rem;
font-family: 'Work Sans', sans-serif;
width:600px;


&.with-shadow{
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}

img{
        height:100px;
        width:100px;
        border-radius:20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
       
}



`






const NavbarWrapper = styled.div`
width:100%;
background-color: ${Theme.colors.BackgroundBlack};
display:flex;
justify-content:flex-end;
position:fixed;
top:0;
right:0;
z-index:999;



&.hidden{
  transform: translateY(-100%);
  transition:transform 0.3s ease-in-out;

}
`


const Navigation = styled.div`
padding:20px 20px;
color:white;
display:flex;
gap:0.5rem;
align-items:center;
text-decoration:none;
font-family: 'Work Sans', sans-serif;
overflow: hidden;
&:hover{
  color:${Theme.colors.Orange};
  background-color: ${Theme.colors.ColumnBlack};
}


${(props) => props.dropDown && css`
display:block;



`}
`


const StyledLink = styled(Link)`
color: white;
text-decoration: none;
justify-content:flex-start;
font-family: 'Work Sans', sans-serif;


&:hover{
    color:${Theme.colors.Orange};
}
`

const StyledButton = styled.button`
padding:20px 20px;
color:white;
display:flex;
font-size:16px;
gap:0.5rem;
align-items:center;
font-family: 'Work Sans', sans-serif;
overflow: hidden;
text-decoration: none;
justify-content:flex-start;
z-index:-1;
background-color: transparent;
border:none;
outline: none;
font-family: 'Work Sans', sans-serif;


&:hover{
    
    color:${Theme.colors.Orange};
    cursor:pointer;
    background-color: ${Theme.colors.ColumnBlack};
}
`

const DropDownContainer = styled.div`
  background-color: ${Theme.colors.BackgroundBlack};
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

const DropDownWrapper = styled.div`

position:absolute;
margin-left:-20px;
margin-top:20px;
color:white;
align-items:center;
text-decoration:none;
font-family: 'Work Sans', sans-serif;
overflow: hidden;
flex-direction:column;
`








export default Cart