import Button from '../Button/Button';
import Draggable from './HorizontalScroll'
import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';



const Navbar = ({handleSelectedCategory}) =>{


    const handleClick = (category) =>{
      handleSelectedCategory(category)

    }

  




    const SliderRef = useRef(null)

return(


    
<NavigationContainer>
  <Draggable innerRef={SliderRef} rootClass={"drag"}>
 
      
                    <Button navbar={"true"} padding="2rem 10rem" text="Appetizers"  onClick={() =>handleClick('Appetizers')}/>
      
                    <Button navbar={"true"} padding="2rem 10rem" text="Main"  onClick={() =>handleClick('Main')}/>
     
    
      
                    <Button navbar={"true"} padding="2rem 10rem" text="Pasta"  onClick={() =>handleClick('Pasta')}/>
     

      
                    <Button navbar={"true"} padding="2rem 10rem" text="Beverage"  onClick={() =>handleClick('Beverage')}/>
      
                    <Button navbar={"true"} padding="2rem 10rem" text="Desserts" onClick={() =>handleClick('Desserts')}/>
      
   

  </Draggable>
</NavigationContainer>


)


}




const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between; /* Adjust alignment as needed */
  width:100%; /* Optional: Set a maximum width */

  


  

`;


const SectionWrapper = styled.section`
position:relative;
align-items:center;
width:100%;


`

const NavigationContainer = styled.div`
display:flex;
align-self:center;
width:100%;
flex-direction:row;
grid-column-start:1;
grid-column-end:3;




`

export default Navbar