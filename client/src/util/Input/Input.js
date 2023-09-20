import React, {useState} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { FaSearch } from 'react-icons/fa';

const Input = ({type,name, placeholder, onChange, value, searchBar,white,black}) =>{
    const [phone, setPhone] = useState("");



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
                                                            );}
    else if(type === "Phone"){

                
                                                        return (


                                                          <StyledPhoneInput
                                                            country={"eg"}
                                                            enableSearch={true}
                                                            value={phone}
                                                            styled
                                                            onChange={(phone) => setPhone(phone)}
                                                          />);}

                                                          else if(searchBar){

                
                                                            return (
                                                               <InputContainer>
                                                               <IconWrapper>
                                                                   <FaSearch style={{color:"white"}}/>
                                                                </IconWrapper>
                                                              <InputWrapper
                                                              black={black}
                                                              white={white}
                                                              type={type} 
                                                              name={name}
                                                              searchBar={searchBar}
                                                              placeholder={placeholder} 
                                                              onChange={onChange} 
                                                              value={value}>
                                                             
                                                              </InputWrapper>
                                                              </InputContainer>
                                                              
                                                              );}
                                                          
                                                          
                                                          
   else{

    
        
        
                                                        return(
                                                            <InputWrapper 

                                                                black={black}
                                                                white={white}
                                                                type={type} 
                                                                name={name}
                                                                placeholder={placeholder} 
                                                                onChange={onChange} 
                                                                value={value}
                                                            />
                                                        );
                                                    };

}


const InputContainer = styled.div`
width:100%;
`;

const IconWrapper = styled.div`
  margin-left: 35px;
  margin-top:40px;
  position:absolute;
`;


const CheckboxWrapper = styled.label`



display:flex;
position: relative;
justify-content:start;
gap: 1rem;
font-family: 'Work Sans', sans-serif;
font-weight:bold;
    color: ${Theme.colors.ColumnBlack};
    
    top: -0.0625rem;





input{
    opacity: 1;
    cursor: pointer;
    height:0;
    weight:0;
    position:relative;

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
    background-color: ${Theme.colors.Blue};
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
    font-size:1rem;
    font-family: 'Work Sans', sans-serif;
}


`



const InputWrapper = styled.input`




${(props)=>props.black && css`
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
border:0.15rem solid ${Theme.colors.whiteShadow};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
color: ${Theme.colors.white};



&::placeholder{
    color: ${Theme.colors.white};
    font-size:1rem;
    opacity:0.8;
    font-family: 'Work Sans', sans-serif;
}

&:focus{
    border: 0.15rem solid ${Theme.colors.Orange};
    transition:2s;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    outline:none;


    &::placeholder{
        color:transparent;
    }
    
   
}

`}


${(props)=>props.white && css`

padding-top:  1rem;
padding-bottom: 1rem;
padding-left: 3rem;
margin:1rem;
border-radius: 1rem;
text-decoration:none;
font-family: 'Work Sans', sans-serif;
font-size: 0.875rem;
background-color:${Theme.colors.white};
border:0.15rem solid ${Theme.colors.ColumnBlack};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;







&::placeholder{
    color: ${Theme.colors.ColumnBlack};
    font-size:1rem;
    opacity:0.8;
    font-family: 'Work Sans', sans-serif;
}

&:focus{
    border: 0.15rem solid ${Theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition:0.2s;
    outline:none;


    &::placeholder{
        color:transparent;
    }
    
   
}

`}





${(props) => props.searchBar && css`

padding-top:  1.5rem;
padding-bottom: 1.5rem;
padding-right:45vw;
margin:1rem;
border-radius: 1rem;
text-decoration:none;
font-family: 'Work Sans', sans-serif;
font-size: 0.875rem;
background-color:${Theme.colors.BackgroundBlack};
border:0.15rem solid ${Theme.colors.BackgroundBlack};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


&::placeholder{
    color: ${Theme.colors.white};
    font-size:1rem;
    opacity:0.8;
    font-family: 'Work Sans', sans-serif;
}

&:focus{
    border: 0.15rem solid ${Theme.colors.white};
    transition:2s;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    outline:none;





`}
`




const StyledPhoneInput = styled(PhoneInput)`


${(props) => props.styled && css`

input[type="tel"]{
padding-top:  1rem;
padding-bottom: 1rem;
font-size: 0.875rem;
border-radius: 1rem;
text-decoration:none;
background-color:${Theme.colors.white};
border:0.15rem solid ${Theme.colors.columnBlack};
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



export default Input



