import React from 'react';
import styled,{css} from 'styled-components';
import Theme from '../theme/theme';



const Input = ({type,name, placeholder, onChange, value }) =>{

    if(type === "checkbox"){
        
        
        return(
            <CheckboxWrapper>
                <input
                    type={type}
                    name={name}
                    onChange={onChange}
                    checked={value}
                />
                <span></span>
                    
             

                {placeholder}
            </CheckboxWrapper>
            )}

    
        
        
                return(
                    <InputWrapper 
                        type={type} 
                        name={name}
                        placeholder={placeholder} 
                        onChange={onChange} 
                        value={value}
                    />
                )
            }




const CheckboxWrapper = styled.label`

display:flex;
position: relative;
justify-content:start;
gap: 1rem;
font-family: ${Theme.font};
    color: ${Theme.colors.white};
    font-size:0.625rem;
    top: -0.0625rem;





input{
    opacity: 1;
    cursor: pointer;
    height:0;
    weight:0;
    position:relative;
    border:1px solid red;
}


span{
  top: -0.0225rem;
  left: 0;
  height: 0.625rem;
  width: 0.625rem;
  border:0.0625rem solid ${Theme.colors.greenColumn};
  align-self:center;
  position:relative;
}



&:hover input ~ span{
    background-color:${Theme.colors.whiteShadow};
}



input:checked ~ span{
    background-color: ${Theme.colors.TealCheckbox};
    border:0.0625rem solid ${Theme.colors.whiteShadow};
    
}

span:after{
    content: "";
    position:relative;
    display: none;
  }

input:checked ~ span:After{
    display:block;
}

span:after{
    width:0.125rem;
    height:0.425rem;
    left:0.225rem;
    border: solid white;
    border-width:0px 2px 2px 0;
    transform:rotate(45deg);
}

&::placeholder{
    
    
}


`



const InputWrapper = styled.input`
padding-top:  1.6rem;
padding-bottom: 1.6rem;
padding-right: 15rem;
padding-left: 3rem;
margin:1rem;
border-radius: 1rem;
text-decoration:none;
font-family: ${Theme.font};
font-size: 0.875rem;
background-color:${Theme.colors.BackgroundBlack};
border:0.15rem solid ${Theme.colors.greenColumn};
color: ${Theme.colors.white};


&:focus{
    border: 0.15rem solid ${Theme.colors.Teal};
    transition:2s;
    box-shadow: 
    inset 1px 1px 4px ${Theme.colors.whiteShadow},
    inset -1px -1px 4px ${Theme.colors.whiteShadow};
    outline:none;


    &::placeholder{
        color:transparent;
    }
    
   
}


&::placeholder{
    color: ${Theme.colors.white};
    font-size:1rem;
    font-family: ${Theme.font};
    opacity:0.8;
}


`



export default Input



