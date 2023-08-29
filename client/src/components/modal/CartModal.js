import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import ButtonTypes from '../../util/Button/ButtonObject';
import {useDispatch, useSelector} from 'react-redux';
import { removeItem, increase, decrease } from '../../redux/feature/cartSlice';
import { FaShoppingCart } from 'react-icons/fa';


const Cart = ({black}) =>{

       const {cartItems} = useSelector((store) => store.cart)
       const [isOpen,setIsOpen] = useState(true)
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
        setIsOpen(false)


}

const handleCloseModal = () =>{
      setIsOpen(true)
        }


       
     

        return(
        
        <>
        
           <ImageWrapper>
           {black ? <FaShoppingCart style={{color: "black"}} onClick={handleOpenModal}/> : <FaShoppingCart style={{color: "white"}} onClick={handleOpenModal}/> }
        </ImageWrapper>
        
  {!isOpen ? (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={handleCloseModal}>Close</CloseButton>

        {cartItems.length === 0? (
          // Display "This cart is empty" message
          <EmptyCartMessage>This cart is empty.</EmptyCartMessage>
        ) : (
          // Display cart items
          cartItems.map((items) => {
            return (
              <ItemContainer key={items.id}>
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
      </ModalContent>
    </ModalOverlay>
  ) : null}
            </>
       


          
            
    
    )

}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:4;

`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index:4;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index:4;
`;

const EmptyCartMessage = styled.h1`
font-family: 'Work Sans', sans-serif;
font-size: 1.5rem;

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
const ImageWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:auto;
width:auto;
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
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
font-family: 'Work Sans', sans-serif;
width:500px;






img{
        height:100px;
        width:100px;
        border-radius:20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
       
}



`








export default Cart