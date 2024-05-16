import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import { error_shake } from '../../theme/animations/animations';




const Error = ({label,padding })=>{


  return(
  <ErrorPopUp>


    {label}
  
  
  
  </ErrorPopUp>)

}







const ErrorPopUp = styled.div`

border-radius: 5px;
  border: 1px solid hsla(5, 80%, 50%, 1);
  background-color: hsla(5, 62%, 54%, 0.77);
  color: white;
  position: absolute;
  opacity: ${props => (props.visible ? '0' : '1')};
  left:45%;
  padding: ${props => props.padding}; /* Add some padding for visibility */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  font-size: 20px;
  animation: ${error_shake} 1s ease-in;
  


`


export default Error