import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import {styled,css} from 'styled-components';
import Theme from "../../theme/theme";

const Phone = () => {
  const [phone, setPhone] = useState("");

  return (


    <StyledPhoneInput
      country={"eg"}
      enableSearch={true}
      value={phone}
      styled
      onChange={(phone) => setPhone(phone)}
    />


  );
}



const StyledPhoneInput = styled(PhoneInput)`


${(props) => props.styled && css`

input[type="tel"]{

border-radius: 1rem;
text-decoration:none;
font-family: 'Work Sans', sans-serif;
font-size: 0.875rem;
background-color:${Theme.colors.white};
border:0.15rem solid ${Theme.colors.whiteShadow};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
color: ${Theme.colors.black};


&:focus{
    border: 0.15rem solid ${Theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    outline:none;
    -webkit-tap-highlight-color: transparent;


    &::placeholder{
        color:transparent;
    }
    


}


}









`}

`




export default Phone