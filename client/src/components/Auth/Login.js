
import React, {useState, useEffect} from "react";
import styled,{css} from "styled-components";
import Input from "../../util/Input/Input";
import Button from "../../util/Button/Button";
import Label from "../../util//Label/Label";
import Theme from "../../theme/theme";
import {Link} from "react-router-dom";
import GoogleAuth from "../../Oauth/googleAuthSignIn"; 
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import FacebookButton from "../../Oauth/metaAuth";
import {useDispatch, useSelector} from 'react-redux';
import LoginUI from "../../FetchAPI/LoginAPI";
import { setUserDetails } from "../../redux/feature/registrationSlice";
import { saveNameToLocalStorage } from "../../redux/actions/actionCreator";
import { openForm,openSignupForm } from "../../redux/feature/authSlice";

const Login = () =>{
    
   
    const dispatch = useDispatch()
    const {Username} = useSelector((store) => store.user)
    
    const [isLoad,setIsLoad] = useState(false)
    const [newDocument,setNewDocuments] = useState({
        identifier: "",
        password:"",
    })


    const handleCloseForm = () =>{
      dispatch(openForm(false));
    }

    const handleOpenForm = () =>{
      dispatch(openForm(false));
      dispatch(openSignupForm(true));
    }
  
    
      
     //Form Handling//
     const handleform = (field, value) => {
      const unsafeChars = /[\{\}\$\.\"\'\&\|\\\n\r\t]/.test(value);
    
      if (field === 'identifier' || field === 'password') {
        if (unsafeChars) {
          // Clear the field if unsafe characters are detected
          
          setNewDocuments((prevForm) => ({
            ...prevForm,
            [field]: '',
          }));
        } else {
          // Update the field with the sanitized value if it doesn't contain unsafe characters
          console.log(newDocument.identifier)
          setNewDocuments((prevForm) => ({
            ...prevForm,
            [field]: value,
          }));
        }
      }
      console.log(newDocument.identifier)
      setNewDocuments((prevForm) => ({
        ...prevForm,
        [field]: value,
      }));
    };

   
   



    async function handleSubmit(e){
        e.preventDefault()

        setIsLoad(true);
        //dispatch(setUserDetails(username));
        //dispatch(saveNameToLocalStorage(username));
        
        
    }

    

    
    return(



<form onSubmit={handleSubmit}>
  {isLoad ? <LoginUI credentials={{Identifier: newDocument.identifier, Password: newDocument.password}}/> : null}
        <FormContainer>
        
            
                <FormWrapper>
                <CloseButtonWrapper onClick={handleCloseForm}><FaTimes/></CloseButtonWrapper>
                <LabelWrapper><Label fontSize="1.5rem" text="Login"/></LabelWrapper>
                
                
                <InputWrapper>

                <IconWrapper>
                        <FaUserAlt style={{ color: "black"}}/>
                </IconWrapper>

                <Input
                           register={"true"}
                            type="text" 
                            name="identifier" 
                            placeholder="Username"
                            value={newDocument.identifier}
                            onChange={(e) => handleform("identifier", e.target.value)}
                            
                            
                            
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
                            placeholder="Password"
                            value={newDocument.password}
                            onChange={(e) => handleform("password", e.target.value)} 
                            
                            />

                
                        
                </InputWrapper>

                <ButtonWrapper>
                        <Button type="submit" text="Login" Signup="true" ></Button>
                </ButtonWrapper>



                <HyperLink>
                <p3>Don't have an account?
                    <p4> </p4>
                    <Link onClick={handleOpenForm}>Sign up</Link>
                </p3>
                </HyperLink>


                <ImageWrapper>
              <GoogleAuth ButtonLabel={"Sign In With Google"}/>
              <FacebookButton label={"Sign In With Facebook"}/>
            </ImageWrapper>


                </FormWrapper>
            </FormContainer>
             
            
            

           
           
      
</form>             
        )
    }

    






const FormContainer = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index:9999;
  align-items: center;
  justify-content: center;


`

const FormWrapper = styled.div`
margin-top:5rem;
display:grid;
gap:0.6rem;
gridTemplateRows: repeat(auto-fit,minmax(0,1fr));
justify-content:center;
padding:2rem 1.3rem;
height:700px;
width:500px;
box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;
background-color:${Theme.colors.white};
&>:first-child{
    margin-left:1.3rem;
}
`



const InputWrapper = styled.div`
grid-column: 1;

&:nth-child(3){
  grid-row:2;
}

&:nth-child(4){
  grid-row:3;
}

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
margin-top:3rem;
margin-bottom:rem;
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
justify-self:left;
grid-row:1;
grid-column:1;
`









export default Login
