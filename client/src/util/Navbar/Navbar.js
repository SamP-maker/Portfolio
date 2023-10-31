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
                    <Button navbar={"true"} padding="2rem 9.2rem" text="Appetizers"  onClick={() =>handleClick('Appetizers')}/>
      </SectionWrapper>
      <SectionWrapper>
                    <Button navbar={"true"} padding="2rem 9.2rem" text="Main"  onClick={() =>handleClick('Main')}/>
      </SectionWrapper>
    
      <SectionWrapper>
                    <Button navbar={"true"} padding="2rem 9.2rem" text="Pasta"  onClick={() =>handleClick('Pasta')}/>
      </SectionWrapper>

      <SectionWrapper>
                    <Button navbar={"true"} padding="2rem 9.2rem" text="Beverage"  onClick={() =>handleClick('Beverage')}/>
      </SectionWrapper>
    
      <SectionWrapper>
                    <Button navbar={"true"} padding="2rem 9.2rem" text="Desserts" onClick={() =>handleClick('Desserts')}/>
      </SectionWrapper>
   </NavbarWrapper>

  </Draggable>
</NavigationContainer>


)


}




const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
 
  width:100vw;

  

`;


const SectionWrapper = styled.section`
position:relative;
align-items:center;


`

const NavigationContainer = styled.div`
display:flex;
align-self:center;


`

export default Navbar