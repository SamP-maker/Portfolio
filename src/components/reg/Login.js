
import React, {useState, useEffect} from "react";
import styled,{css} from "styled-components";
import Input from "../../util/Input";
import Button from "../../util/Button";
import Label from "../../util/Label";
import Theme from "../../theme/theme";
import {Link} from "react-router-dom";
import GoogleAuth from "../../hooks/googleAuth"; 














const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    

    
    


    
    



    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);

    }
    const handleUsernameChange =(e)=>{
        setUsername(e.target.value);
    }
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    const handleCheckbox = (e) =>{
        setIsChecked(e.target.checked);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(isChecked){

        }else{


        }


    }




    return(

        <>
             
            <form>
                <FormWrapper>
               
                <Label fontSize="1.5rem" text="Login"/>
                
                <InputWrapper>
                        <Input
                            type="text" 
                            name="Name" 
                            placeholder="Username" 
                            onChange={handleUsernameChange}
                            value={username}/>
                </InputWrapper>



                <InputWrapper>
                        <Input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            onChange={handlePasswordChange}
                            value={password}/>
                </InputWrapper>



                <InputWrapper>
                        <Input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            onChange={handleEmailChange}
                            value={email}/>
                </InputWrapper>



                <InputWrapper>
                        <Input 
                            type="checkbox"
                            name="checkbox"
                            value={isChecked}
                            onChange={handleCheckbox}
                            placeholder={"By Signing up, you accept the Term of service and Privacy & Policy"}
                            />
                </InputWrapper>



                <ButtonWrapper>
                        <Button type="submit" text="Sign Up" register="true" onClick={handleSubmit}></Button>
                </ButtonWrapper>



                <HyperLink>
                <p3>Already have an account?
                    <p4> </p4>
                    <Link to='/Signup'>Sign up</Link>
                </p3>
                </HyperLink>


                </FormWrapper>
             </form>
             
             <ContentWrapper>
             <Divider/>
             <p6>SIGN UP WITH</p6>
             <Divider/>
           
            </ContentWrapper>
            <ImageWrapper>
              <GoogleAuth/>
            </ImageWrapper>
 
        </>
             
        )
}




export default Login

const FormWrapper = styled.div`
margin-top:5rem;
display:grid;
gap:0.6rem;
gridTemplateRows: repeat(auto-fit,minmax(0,1fr));
justify-content:center;


&>:first-child{
    margin-left:1.3rem;
}
`



const InputWrapper = styled.div`
grid-column: 1;

`

const ButtonWrapper = styled.div`
justify-self:center;
grid-column: 1;
`



const HyperLink = styled.div`
padding:0.19rem 0.19rem;
justify-self:right;
padding-right:6rem;
margin:.19rem;
font-size: .6rem;


p3{

    font-family: ${Theme.font};
    color:${Theme.colors.white};



   
}

a{
    font-family: ${Theme.font};
    color:${Theme.colors.Teal};
}

`

const ContentWrapper = styled.div`
margin-top:5rem;
display:flex;
gap:5rem;
justify-content:space-evenly;



p6{
    font-family: ${Theme.font};
    color:${Theme.colors.white};
    display:block;
    width:10rem;
    padding-left: 2rem;
}

`

const Divider = styled.div`
border-bottom: 0.125rem solid ${Theme.colors.green};
width:40rem;

`

const ImageWrapper = styled.div`
display:flex;
justify-content:center;
gap:5rem;
margin-top:5rem;
margin-bottom:5rem;

`