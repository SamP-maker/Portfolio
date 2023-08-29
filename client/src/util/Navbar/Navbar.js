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
 
    <NavbarWrapper>
      <SectionWrapper>
                    <Button navbar={"true"} padding="1rem 4.875rem" text="Appetizers"  onClick={() =>handleClick('Appetizers')}/>
      </SectionWrapper>
      <SectionWrapper>
                    <Button navbar={"true"} padding="1rem 4.875rem" text="Main"  onClick={() =>handleClick('Main')}/>
      </SectionWrapper>
    
      <SectionWrapper>
                    <Button navbar={"true"} padding="1rem 4.875rem" text="Pasta"  onClick={() =>handleClick('Pasta')}/>
      </SectionWrapper>

      <SectionWrapper>
                    <Button navbar={"true"} padding="1rem 4.875rem" text="Beverage"  onClick={() =>handleClick('Beverage')}/>
      </SectionWrapper>
    
      <SectionWrapper>
                    <Button navbar={"true"} padding="1rem 4.875rem" text="Desserts" onClick={() =>handleClick('Desserts')}/>
      </SectionWrapper>
   </NavbarWrapper>

  </Draggable>
</NavigationContainer>


)


}




const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  position:relative;
  overflow:auto;
  align-self: center;
  width:59vw;

  

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover{
    box-shadow:inset ${Theme.colors.blackFade} 0px 2px 6px 0px;
  }
 

`;


const SectionWrapper = styled.section`
position:relative;
padding:5rem;
align-items:center;


`

const NavigationContainer = styled.div`
display:flex;
align-self:center;


`

export default Navbar