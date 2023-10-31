import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Footer from '../../util/Footer/Footer';
import 'react-international-phone/style.css';
import Cart from '../modal/CartModal';
import MenuButton from '../../util/Button/DropdownButton';
import ButtonTypes from '../../util/Button/ButtonObject';





const Address = ()=>{
        


        
  


    return(
       <>

      <Cart/>

      <Modal>
        <StatusContent>




        </StatusContent>


      </Modal>





        

       

               


        
        <Footer/>
        </>

        
    )
}

const Modal = styled.div`
margin-top:20rem;
margin-bottom:20rem;
padding:20rem 20rem;
display:flex;
justify-content:center;
align-items:center;
`
const StatusContent = styled.div`

box-shadow: 0 2px 4px ${Theme.colors.Greylite};
width:20rem;
height:20rem;
border-radius:1rem;

`








export default Address




