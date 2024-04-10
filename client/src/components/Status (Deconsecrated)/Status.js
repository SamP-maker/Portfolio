

import React from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Footer from '../../util/Footer/Footer';
import 'react-international-phone/style.css';
import Cart from '../modal/CartModal';
import BackgroundImg from '../../theme/images/BackgroundImg.jpg'





const Status = ()=>{
        


        
  


    return(
       <>

      <Cart/>
      <Top_section/>


       


      <Modal>


        <Grid_Box> Checking for your Order</Grid_Box>
        <Grid_Box> Restaurant is preparing your food</Grid_Box>
        <Grid_Box> Making sure your order is correct</Grid_Box>
        <Grid_Box> Delivery rider picking up your food</Grid_Box>
        <Grid_Box> Delivery is on it's way!</Grid_Box>
        <Grid_Box> Check Status</Grid_Box>

     

      </Modal>
      <Status_Box> Delivery Status</Status_Box>




        

       

               


        
        <Footer/>
        </>

        
    )
}
const Status_Box = styled.div`
width:100%;
height:500px;
border:1px solid red;
`

const Grid_Box = styled.div`
width:(100/3)%;
height:500px;
border:1px solid red;

&:nth-child(1),&:nth-child(3),&:nth-child(5){
background-color:red;
}
`

const Top_section = styled.div`
width:100%;
height:800px;
background: url(${BackgroundImg});
background-repeat: no-repeat;
background-size: cover;
background-position: 30% 10%;

`

const Modal = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-template-rows:repeat(2,1fr);
grid-gap: 0;

`



const StatusContent = styled.div`

box-shadow: 0 2px 4px ${Theme.colors.Greylite};
width:20rem;
height:20rem;
border-radius:1rem;

`








export default Status




