
import React, {useState} from "react";
import styled,{css} from "styled-components";
import Input from "../../util/Input/Input";
import Button from "../../util/Button/Button";
import Label from "../../util/Label/Label";
import Theme from "../../theme/theme";
import {Link} from "react-router-dom";
import GoogleButton from "../../Oauth/googleAuthSignIn";
import FacebookButton from "../../Oauth/metaAuth";
import { FaGlasses, FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa"
import {useDispatch} from 'react-redux';
import { shake} from "../../theme/animations/animations";
import bcrypt from 'bcryptjs';
import { FaTimes } from "react-icons/fa";
import SignUpUI from "../../FetchAPI/SignUpAPI.js";
import { openForm, openSignupForm } from "../../redux/feature/authSlice";


const Signup = () =>{

    
    const [form,setForm]= useState({
        name:"",
        email: "",
        password: "",
     })

     const [isAgree,setIsAgree] = useState(false)
     const [errorMsg, setErrorMsg] = useState(false)
     const [isLoad,setIsLoad] = useState(false)
     const [newPerson, setNewPerson] = useState(null);
     const dispatch = useDispatch();
     

     function handleAgreement()
     {
            setIsAgree((prev) => !prev)
            console.log(isAgree)
     }


     const handleCloseForm = () =>{
      dispatch(openSignupForm(false));
    }


     const handleform = (field, value) => {
      const unsafeChars = /[\{\}\$\.\"\'\&\|\\\n\r\t]/.test(value);
      const updatedForm = { ...form };
    
      if (field === 'name' || field === 'password') {
        if (unsafeChars) {
          // Clear the field if unsafe characters are detected
          updatedForm[field] = '';
        } else {
          // Update the field with the sanitized value if it doesn't contain unsafe characters
          updatedForm[field] = value;
        }
      } else {
        // Handle other fields if needed
        updatedForm[field] = value;
      }
    
      setForm(updatedForm);
    };

    const handleError =  async () =>{
      setErrorMsg((prev) => !prev)
    }

     
       

     

     



     

     async function handleSubmit(e){
      e.preventDefault();
        



        const hashedPassword = await bcrypt.hash(form.password,10);
        const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isEmail = validEmailRegex.test(form.email);
     
  
      
      if(isEmail){
      
      
        const newPerson = {...form, password:hashedPassword};
        setNewPerson(newPerson)
        
        if(isAgree){
          
          setIsLoad(true);

          
         
          
          

        }
     else
     {
      handleError(); // Set the state variable to true
  setTimeout(() => {
    handleError(); // Reset the state variable after a delay
  }, 2000);
     }

        
     }else{
       window.alert(`Email is invalid: its not an email`)
    }

     

        

    }
  
    
    

    
   


    return(

        
<FormContainer >
<FormWrapper onSubmit={handleSubmit}>
{isLoad ? <SignUpUI credentials={newPerson}/> : null}
            
              <CloseButtonWrapper onClick={handleCloseForm}><FaTimes/></CloseButtonWrapper>
                
             
                <LabelWrapper><Label fontSize="1.5rem" text="Sign Up"/></LabelWrapper>
                
                <InputWrapper>
                <IconWrapper>
                        <FaUserAlt style={{ color: "black"}}/>
                </IconWrapper>

                        <Input
                            register={"true"}
                            type="text" 
                            name="name" 
                            placeholder="name"
                            value={form.name}
                            onChange={(e)=> handleform( "name", e.target.value)}
                            
                           
                            />
                </InputWrapper>



                <InputWrapper>
                <IconWrapper>
                        <FaLock style={{ color: "black"}}/>
                </IconWrapper>
                        
                        <Input 
                            register={"true"}
                            type="password" 
                            name="password" 
                            placeholder="password"
                            value={form.password}
                            onChange={(e)=> handleform( "password", e.target.value)}
                            
                    />
                </InputWrapper>



                <InputWrapper>
                <IconWrapper>
                        <FaEnvelope style={{ color: "black"}}/>
                </IconWrapper>
                        <Input 
                            register={"true"}
                            type="email" 
                            name="email" 
                            placeholder="email" 
                            value={form.email}
                            onChange={(e)=> handleform( "email", e.target.value)}
                            
                            />
                </InputWrapper>

             
               
                <CheckboxWrapper errorMsg={errorMsg}>
                  <label>
                        <Input 
                            type="checkbox"
                            name="checkbox"
                            onChange={handleAgreement}
                            placeholder={ !errorMsg ?  "By Signing up, you accept the Term of service and Privacy & Policy":"**You must Agree to the Term of service, Privacy & Policy**"}
                            />
                      </label>      
                </CheckboxWrapper>


               



                <ButtonWrapper>
                        <Button type="submit" text="Sign Up" Signup={"true"}></Button>
                </ButtonWrapper>
              


                <HyperLink>
                <p3>Already have an account?
                    <p4> </p4>
                    <Link to='/login'>Login</Link>
                </p3>
                </HyperLink>


                <ImageWrapper>
            <GoogleButton ButtonLabel={"Sign Up With Google"}/>
            <FacebookButton label={"Sign Up With Facebook"}/>
            </ImageWrapper>


                </FormWrapper>
             </FormContainer>
          
            
       
          
        )
}




const FormContainer = styled.div`
position: fixed;
margin-top:3rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index:999;
  align-items: center;
  justify-content: center;

`


const FormWrapper = styled.form`
margin-bottom:5rem;
display:grid;
gap:0.6rem;
gridTemplateRows: repeat(auto-fit,minmax(0,1fr));
justify-content:center;
padding:2rem 1.3rem;
height:800px;
width:500px;
box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;
background-color:${Theme.colors.white};
&>:first-child{
    margin-left:1.3rem;
}
`





const InputWrapper = styled.div`
grid-column: 1;
font-size: .75rem;


`

const CheckboxWrapper = styled.div`
grid-column: 1;
font-size: .75rem;




${(props)=>
props.errorMsg && css`
      animation: ${shake} 0.5s ease-in-out;
    

      input[type="checkbox"]{
        border:${(props) =>
          props.errorMsg === false
            ? `1px solid ${Theme.colors.Blue}`
            : `1px solid ${Theme.colors.Red}`};
      }

      

      
      
      label {
        color: ${(props) =>
          props.errorMsg === false
            ? Theme.colors.Blue
            : Theme.colors.Red};
      }


`}
`

const ButtonWrapper = styled.div`
justify-self:center;
grid-column: 1;
margin-top:2rem;
`



const HyperLink = styled.div`
padding:0.19rem 0.19rem;
justify-self:right;
padding-right:6rem;
margin:.19rem;
font-size: .6rem;


p3{

    font-size:.8rem;
    font-family: 'Work Sans', sans-serif;
    color:${Theme.colors.ColumnBlack};



   
}

a{
    font-family: ${Theme.font};
    color:${Theme.colors.Teal};
}

`


const ImageWrapper = styled.div`
display:flex;

gap:1rem;
margin-top:5rem;
margin-bottom:5rem;
flex-direction:column;

align-items:center;
justify-content:space-evenly;

`

const IconWrapper = styled.div`
  margin-left: 35px;
  margin-top:42px;
  position:absolute;
  
`;


const CloseButtonWrapper = styled.div`
padding:2px 2px;
height:10px;
width:10px;
display:flex;
justify-content:center;
justify-self:right;
grid-row:1;
grid-column:1;


&:hover{
cursor:pointer;
}

`
const LabelWrapper = styled.div`
margin-left:1rem;
justify-self:left;
grid-row:1;
grid-column:1;
`






export default Signup
