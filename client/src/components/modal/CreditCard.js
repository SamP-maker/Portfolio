import React from "react";
import styled, { css } from "styled-components";
import Theme from "../../theme/theme";
import VisaWhite from '../../theme/Icons/Visa_White.png';
import CreditCardChip from '../../theme/Icons/chip.png';
import PaywaveWhite from '../../theme/Icons/PaywaveWhite.png';
import Mastercard from '../../theme/Icons/Mastercard_logo-removebg-preview.png';

const Card = ({ mastercard, CardNumber, Month, Year, CardName, visa }) => {
  return (
    <CreditCardWrapper mastercard={mastercard} visa={visa}>
      
      <PaywaveWrapper src={PaywaveWhite}/>
      <ChipWrapper src={CreditCardChip}/>


      <CardDetailsWrapper>

      <ExpireAndNameWrapper>
        <CardNumberWrapper visa={visa}>{CardNumber}</CardNumberWrapper>

        <DateWrapper>
          <GoodTHRU><p1>GOOD</p1>
          <p2>THRU</p2></GoodTHRU>
          <CardExpireWrapper>{Month}/{Year}</CardExpireWrapper>
          </DateWrapper>


          <CardNameWrapper>{CardName}</CardNameWrapper>
        </ExpireAndNameWrapper>


        <Visa_ImageWrapper src={visa ? VisaWhite : Mastercard} />
      </CardDetailsWrapper>
      
    </CreditCardWrapper>
  );
};

const DateWrapper = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top:.5rem;
  height:100%;
  width:100%;
`



const PaywaveWrapper = styled.img`
height:40px;
width:40px;
padding:1rem 1rem;
text-shadow: 0 2px 3px ${Theme.colors.Grey};
position:absolute;
top:0;
right:0;
`;

const CardDetailsWrapper = styled.div`
  display: flex;
  align-content: flex-end;
  justify-content: space-between;
  
  align-self:flex-end;
`;

const CardExpireWrapper = styled.p`
  color: ${Theme.colors.white};
  text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
color:${Theme.colors.white};;
text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
font-family: 'Inconsolata', monospace; 
font-size:16px;
padding-left:0.175rem;
display:flex;
padding-bottom:0.575rem;
`;

const GoodTHRU = styled.p`
color:white;
text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
font-family: 'Inconsolata', monospace; 
font-size:8px;
display:flex;
flex-direction:column;
 height:100%;
 

${(props) => props.mastercard && css`
color:${Theme.colors.white};
text-shadow: 0 1px 3px ${Theme.colors.BackgroundBlack};
`}

${(props) => props.visa && css`
color:${Theme.colors.white};
text-shadow: 0 1px 3px ${Theme.colors.BackgroundBlack};
`}
`;

const CardNameWrapper = styled.p`
color:white;
text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
font-family: 'Inconsolata', monospace; 
font-size:17px;
margin-top:.5rem;
margin-bottom:.5rem;
padding-left:.5rem;
display:flex;
width:220px;
height:17px;


${(props) => props.mastercard && css`
color:${Theme.colors.white};
text-shadow: 0 1px 3px ${Theme.colors.BackgroundBlack};

`}


${(props) => props.visa && css`
color:${Theme.colors.white};
text-shadow: 0 1px 3px ${Theme.colors.BackgroundBlack};
`}
`;

const ChipWrapper = styled.img`
  position:absolute;
height:40px;
width:50px;
top:35%;
left:10%;

`;

const CreditCardWrapper = styled.div`
  border: 1px solid none;
  height: 225px;
  width: 375px;
  border-radius: 15px;
  ${(props) => props.mastercard && css`
background-color:hsla(0,0%,0%,1);
background-image:
radial-gradient(at 15% 84%, hsla(36,81%,46%,1) 0px, transparent 50%),
radial-gradient(at 95% 58%, hsla(144,7%,28%,1) 0px, transparent 50%),
radial-gradient(at 24% 46%, hsla(15,85%,38%,1) 0px, transparent 50%),
radial-gradient(at 7% 15%, hsla(0,97%,51%,1) 0px, transparent 50%);
box-shadow: 0 2px 3px ${Theme.colors.Greylite};
`}


${(props) => props.visa && css`
background: #222222; background-image: radial-gradient(at 12.0% 90.0%, #083c54 0px, transparent 50%),radial-gradient(at -23.3% 49.7%, #083c54 0px, transparent 50%),radial-gradient(at -17.5% 1.4%, #083c54 0px, transparent 50%),radial-gradient(at -2.6% 33.5%, hsl(199, 98%, 48%) 0px, transparent 50%),radial-gradient(at 1.1% 97.6%, hsl(199, 98%, 48%) 0px, transparent 50%);
box-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
`}

  display: flex;
  position: relative;
`;

const Visa_ImageWrapper = styled.img`


  height: 30px;
  width: 60px;
  padding-top:2.75rem;
  
  text-shadow: 0 2px 3px ${Theme.colors.Grey};
  bottom: 0;
  right: 0;
`;

const CardNumberWrapper = styled.p`
  color: ${props => props.visa ? Theme.colors.white : Theme.colors.BackgroundBlack};
  text-shadow: 0 2px 3px ${props => props.visa ? Theme.colors.BackgroundBlack : Theme.colors.Greylite};

color:white;
text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
font-family: 'Inconsolata', monospace; 
display:flex;
bottom:0;
left:0;
padding-left:2.5rem;
height:19px;
width:250px;

font-size:19px;
`;

const ExpireAndNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
 
  align-items: center;
  justify-content: center;

  height:100%;
width:100%;
`;

export default Card;