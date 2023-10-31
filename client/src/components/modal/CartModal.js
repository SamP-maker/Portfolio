import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import ButtonTypes from '../../util/Button/ButtonObject';
import {useDispatch, useSelector} from 'react-redux';
import { removeItem, increase, decrease } from '../../redux/feature/cartSlice';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = ({black}) =>{
       const {Username ,isLoggedin} = useSelector((store) => store.user)
       const {cartItems,amount} = useSelector((store) => store.cart)
       
       const [isOpen,setIsOpen] = useState(true)
       const [isDropDown,setIsDropDown] = useState(true)
       const [isHideNav,setisHideNav] = useState(false)
       const prevScrollY = useRef(0)
       const dispatch = useDispatch()
       

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
        setIsOpen((prevIsOpen) => !prevIsOpen)
       }

       const handleOpenDropDown = () =>{
        setIsDropDown((prevDropDown)=> !prevDropDown)
       }


       const handleScroll = () =>{
        const currentScrollY = window.scrollY;
        if( currentScrollY > prevScrollY.current){
          setisHideNav(true)
          setIsOpen(true)
          setIsDropDown(true)
         

          
        }else{
          setisHideNav(false)
          setIsDropDown(true)
          setIsOpen(true)
          
        }
        prevScrollY.current = currentScrollY;


       };

       useEffect(()=>{
        window.addEventListener('scroll',handleScroll)

        return () =>{
          window.removeEventListener('scroll',handleScroll)
        }
       },[])



       
     

        return(
        
        <>

        
    <NavbarWrapper className={isHideNav ? 'hidden' : ''}>
        <StyledLink to="/Dashboard"><Navigation>Dashboard</Navigation></StyledLink>
        <StyledLink to="/Menu"><Navigation>Menu</Navigation></StyledLink>
        {Username ? <Navigation dropDown  onClick={handleOpenDropDown}>{Username}
        {!isDropDown ? (<DropDownWrapper>
        <DropDownContainer><StyledLink to="/Payment"><Navigation>Check Out</Navigation></StyledLink></DropDownContainer>
        <DropDownContainer> <StyledLink to="/Status"><Navigation>Status</Navigation></StyledLink></DropDownContainer>
        <DropDownContainer> <StyledLink to="/"><Navigation>Log out</Navigation></StyledLink></DropDownContainer>
      </DropDownWrapper>) : null}
        
        
        
        </Navigation> 
        
        
        
        
        : 
        <Navigation dropDown onClick={handleOpenDropDown}> {isDropDown ? "Login" : <StyledLink to="/login">Login</StyledLink> }
      {!isDropDown ? (<DropDownWrapper>
        <DropDownContainer><StyledLink to="/Payment"><Navigation>Check Out</Navigation></StyledLink></DropDownContainer>
        <DropDownContainer> <StyledLink to="/Status"><Navigation>Status</Navigation></StyledLink></DropDownContainer>
        <DropDownContainer> <StyledLink to="/"><Navigation>Log out</Navigation></StyledLink></DropDownContainer>
      </DropDownWrapper>) : null}
        
        </Navigation>}
        
      
 



        <Navigation onClick={handleOpenModal} > Cart{black ? <FaShoppingBag style={{color: "black"}}/> : <FaShoppingBag style={{color: "white"}}/> } {amount ? <AmountWrapper>{amount}</AmountWrapper> : null} </Navigation>
        
    </NavbarWrapper>
    {!isOpen ? (



  
  <ModalOverlay className={isOpen ? 'hidden' : ''}>
        {cartItems.length === 0? (
          // Display "This cart is empty" message
          <EmptyItemContainer>
          <EmptyCartMessage>This cart is empty.</EmptyCartMessage>
          </EmptyItemContainer>
        ) : (
          // Display cart items
          cartItems.map((items,index) => {
            return (
            
              <ItemContainer key={items.id} className={index !== cartItems.length - 1? 'with-shadow' : ''}>
                <img src={items.Image} />

                <DescriptionWrapper>
                  <p1>{items.name}</p1>
                  <p2>{items.Price}</p2>
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


                  {cartItems.length === 0 ? null :
                    <ButtonContainer>
                        <Link to="/Order_confirm"> <ButtonTypes.Head_to_Check_out/></Link>
                  </ButtonContainer>
                  }






  </ModalOverlay>


  ) : null}
        
            </>
       


          
            
    
    )

}

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
margin-left:60%;
position:relative;
`

const ModalOverlay = styled.div`
position:fixed;
right:0;
top:0;
background-color: ${Theme.colors.white};
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
padding-top:3.5rem;
max-height: calc(5 * (2.5rem + 2.5rem) + 3rem);
overflow-y:scroll;
z-index:99;




&::-webkit-scrollbar{
  display:none;
}



&.hidden{
  transform: translateY(-100%);
  transition:transform 0.3s ease-in-out;
}
`;




const EmptyCartMessage = styled.h1`
font-family: 'Work Sans', sans-serif;
font-size: 1rem;
grid-column: 1 / span 2; /* Center horizontally between columns 1 and 3 */
grid-row: 2 / span 2;    /* Center vertically between rows 1 and 5 */
display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

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
width:500px;


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


const EmptyItemContainer = styled.div`
display:grid;
grid-template-rows: repeat( 4, 2.5rem);
grid-template-columns: repeat( 2, 1fr);
position:relative;
justify-items:center;
background-color: ${Theme.colors.white};
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
font-family: 'Work Sans', sans-serif;
width:500px;




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