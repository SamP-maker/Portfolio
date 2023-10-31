import React, {useState, useEffect} from "react";
import styled,{css} from "styled-components";
import Theme from "../../theme/theme";
import VisaWhite from '../../theme/Icons/Visa_White.png';
import CreditCardChip from '../../theme/Icons/chip.png';
import PaywaveWhite from '../../theme/Icons/PaywaveWhite.png';






const Card = ({mastercard}) =>{

return(<CreditCardWrapper mastercard={mastercard}>
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
<CardNumberWrapper mastercard={mastercard}>4123 1247 1239 1230</CardNumberWrapper>
<GoodTHRU mastercard={mastercard}>GOOD THRU</GoodTHRU> <CardExpireWrapper mastercard={mastercard}>12/23</CardExpireWrapper>
<CardNameWrapper mastercard={mastercard}>Sam Perry Lee Chin Howe</CardNameWrapper>
<Visa_ImageWrapper src={VisaWhite}/>


</CreditCardWrapper>)





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

${(props) => props.mastercard && css`
`}
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
color:white;
text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};
font-family: 'Inconsolata', monospace; 
font-size:23px;
width:20px;
top:69%;
left:43%;
display:flex;

${(props) => props.mastercard && css`
color:${Theme.colors.BackgroundBlack};
text-shadow: 0 1px 3px ${Theme.colors.Greylite};
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
color:${Theme.colors.BackgroundBlack};
text-shadow: 0 1px 3px ${Theme.colors.Greylite};
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
color:${Theme.colors.BackgroundBlack};
text-shadow: 0 1px 3px ${Theme.colors.Greylite};

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
background-color:hsla(23,0%,70%,1);
background-image:
radial-gradient(at 88% 19%, hsla(33,100%,37%,1) 0px, transparent 50%),
radial-gradient(at 80% 100%, hsla(35,100%,50%,1) 0px, transparent 50%),
radial-gradient(at 76% 49%, hsla(48,96%,48%,1) 0px, transparent 50%);
box-shadow: 0 2px 3px ${Theme.colors.Greylite};
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
font-size:40px;
top:50%;
left:10%;
display:flex;
${(props) => props.mastercard && css`
color:${Theme.colors.BackgroundBlack};
text-shadow: 0 1px 3px ${Theme.colors.Greylite};
`}

`

export default Card

{/*



font-family: 'Orbitron', sans-serif;*/}