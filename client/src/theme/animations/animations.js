// keyframes.js
import { keyframes } from 'styled-components';
import Theme from "../../theme/theme";



export const leftdividerAnimation = keyframes`
0% {
  transform: translateX(150px);
  filter:blur(2px);
}
100% {
  transform: translateX(-50px);
  filter:blur(0px);
}
`



export const rightdividerAnimation = keyframes`
0% {
  
  transform: translateX(-150px);
  filter:blur(2px);
}
100% {
  transform: translateX(50px);
  filter:blur(0px);
}`




export const reduceBeforeAfterWidth = keyframes`

0% {
  filter:blur(2px);
  width:7rem;
}
100% {
  width:10rem;
  filter:blur(0px);
}`


export const reduceBorderWidth = keyframes`

0% {
  filter:blur(2px);
  width:4rem;
}
100% {
  width:2rem;
  filter:blur(0px);
}`


export const shake = keyframes`

  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }

`








































export const inputAnimation = keyframes`

0% {
    border-top:1px solid black;
    box-shadow: 0 -3px 3px ${Theme.colors.Grey}; /* Top shadow */
  
    
  }
  25% {
    border-left:1px solid black;
    box-shadow: -2px 0 2px ${Theme.colors.Grey}; /* Left shadow */
     
  }
  50% {
    border-bottom:1px solid black;
    box-shadow: 0 2px 2px ${Theme.colors.Grey}; /* Bottom shadow */
     
  }
  75% {
    border-right:1px solid black;
    box-shadow: 1px 0 1px ${Theme.colors.Grey}; /* Right shadow */
     
  }
  
  100% {
    border:1px solid black;
   
     
  }
`



export const slideKeyframes = keyframes`



  0% {
    transform: translateX(0);
  
    
  }
  
  100% {
    transform: translateX(10.814rem);
    opacity:0;
     
  }


  


`