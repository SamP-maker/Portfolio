import React, {useState, useEffect} from "react";
import styled,{css} from "styled-components";
import Theme from "../../theme/theme";
import VisaWhite from '../../theme/Icons/Visa_White.png';
import CreditCardChip from '../../theme/Icons/chip.png';
import PaywaveWhite from '../../theme/Icons/PaywaveWhite.png';
import Mastercard from '../../theme/Icons/Mastercard_logo-removebg-preview.png'





const Card = ({mastercard,CardNumber,Month,Year,CardName,visa}) =>{



return(
<CreditCardWrapper mastercard={mastercard}>
<PaywaveArtContainer>
    <PaywaveArt></PaywaveArt>
    <PaywaveArt></PaywaveArt>
    <PaywaveArt></PaywaveArt>
    <PaywaveArt></PaywaveArt>
    <PaywaveArt></PaywaveArt>
    <PaywaveArt></PaywaveArt>
    <PaywaveArt></PaywaveArt>
    <PaywaveArt></PaywaveArt>
    <PaywaveArt></PaywaveArt>
</PaywaveArtContainer>
<PaywaveWrapper src={PaywaveWhite}/>
<ChipWrapper src={CreditCardChip}/>
{visa ? (
        <>
          <CardNumberWrapper visa={visa}>{CardNumber}</CardNumberWrapper>
          <GoodTHRU visa={visa}>GOOD THRU</GoodTHRU>
          <CardExpireWrapper visa={visa}>{Month}/{Year}</CardExpireWrapper>
          <CardNameWrapper visa={visa}>{CardName}</CardNameWrapper>
          <Visa_ImageWrapper src={VisaWhite} />
        </>
      ) : (
        <>
          <CardNumberWrapper mastercard={mastercard}>{CardNumber}</CardNumberWrapper>
          <GoodTHRU mastercard={mastercard}>GOOD THRU</GoodTHRU>
          <CardExpireWrapper mastercard={mastercard}>{Month}/{Year}</CardExpireWrapper>
          <CardNameWrapper mastercard={mastercard}>{CardName}</CardNameWrapper>
          <Visa_ImageWrapper src={Mastercard} />
        </>
      )}

</CreditCardWrapper>
)
}







const PaywaveArtContainer = styled.div`
top:0;
right:0;
position:absolute;
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(3,1fr);
gap:.5rem;
width:50px;
padding:4rem 4.5rem;




`

const PaywaveArt = styled.div`
height:7px;
width:7px;
top:0;
right:0;
border-radius:50%;
background-color:white;


`

const PaywaveWrapper = styled.img`
height:40px;
width:40px;
padding:1rem 1rem;
text-shadow: 0 2px 3px ${Theme.colors.Grey};
position:absolute;
top:0;
right:0;
`

const CardExpireWrapper = styled.p`
position:absolute;
color:${Theme.colors.white};;
text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
font-family: 'Inconsolata', monospace; 
font-size:23px;
width:20px;
top:69%;
left:43%;
display:flex;

${(props) => props.mastercard && css`
color:${Theme.colors.white};
text-shadow: 0 1px 3px ${Theme.colors.BackgroundBlack};
`}

${(props) => props.visa && css`
color:${Theme.colors.white};
text-shadow: 0 1px 3px ${Theme.colors.BackgroundBlack};
`}
`

const GoodTHRU = styled.p`
position:absolute;
color:white;
text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
font-family: 'Inconsolata', monospace; 
font-size:6px;
width:20px;
top:71%;
left:40%;
display:flex;

${(props) => props.mastercard && css`
color:${Theme.colors.white};
text-shadow: 0 1px 3px ${Theme.colors.BackgroundBlack};
`}

${(props) => props.visa && css`
color:${Theme.colors.white};
text-shadow: 0 1px 3px ${Theme.colors.BackgroundBlack};
`}
`
const CardNameWrapper = styled.p`
position:absolute;
color:white;
text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
font-family: 'Inconsolata', monospace; 
font-size:20px;
top:82%;
left:10%;
display:flex;

${(props) => props.mastercard && css`
color:${Theme.colors.white};
text-shadow: 0 1px 3px ${Theme.colors.BackgroundBlack};

`}


${(props) => props.visa && css`
color:${Theme.colors.white};
text-shadow: 0 1px 3px ${Theme.colors.BackgroundBlack};
`}
`



const ChipWrapper = styled.img`
position:absolute;
height:40px;
width:50px;
top:35%;
left:10%;


`

const CreditCardWrapper = styled.div`
border:1px solid none;
height:300px;
width:500px;
border-radius:15px;
background: #222222; background-image: radial-gradient(at 12.0% 90.0%, #083c54 0px, transparent 50%),radial-gradient(at -23.3% 49.7%, #083c54 0px, transparent 50%),radial-gradient(at -17.5% 1.4%, #083c54 0px, transparent 50%),radial-gradient(at -2.6% 33.5%, hsl(199, 98%, 48%) 0px, transparent 50%),radial-gradient(at 1.1% 97.6%, hsl(199, 98%, 48%) 0px, transparent 50%);
box-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
display:flex;
position:relative;
margin: 5rem 5rem;



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

`
const Visa_ImageWrapper = styled.img`
height:30px;
width:60px;
padding:2rem 2rem;
text-shadow: 0 2px 3px ${Theme.colors.Grey};
position:absolute;
bottom:0;
right:0;
`

const CardNumberWrapper = styled.p`
position:absolute;
color:white;
text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
font-family: 'Inconsolata', monospace; 
font-size:36px;
top:50%;
left:10%;
display:flex;
width:450px;
${(props) => props.mastercard && css`
color:${Theme.colors.BackgroundBlack};
text-shadow: 0 1px 3px ${Theme.colors.Greylite};
`}

${(props) => props.visa && css`
color:white;
text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
`}

`

export default Card

{/*



font-family: 'Orbitron', sans-serif;*/}