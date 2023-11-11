
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled,{css} from "styled-components";
import Input from "../../util/Input/Input";
import Button from "../../util/Button/Button";
import Label from "../../util/Label/Label";
import Theme from "../../theme/theme";
import {Link} from "react-router-dom";
import GoogleButton from "../../auth/googleAuth";
import FacebookButton from "../../auth/metaAuth";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa"
import Footer from "../../util/Footer/Footer";
import {useDispatch, useSelector} from 'react-redux';
import { fetchUserDetails, setUserDetails } from "../../redux/feature/registrationSlice";
import { reduceBorderWidth,leftdividerAnimation,rightdividerAnimation,reduceBeforeAfterWidth,shake} from "../../theme/animations/animations";
import bcrypt from 'bcryptjs';


const Signup = () =>{

    
    const [form,setForm]= useState({
        name:"",
        email: "",
        password: "",
     })

     const [isAgree,setIsAgree] = useState(false)
     const [errorMsg, setErrorMsg] = useState(false)
     const navigate = useNavigate()
     const dispatch = useDispatch()

     function handleAgreement()
     {
            setIsAgree((prev) => !prev)
            console.log(isAgree)
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

   
        if(isAgree){
          const response =  await fetch('http://localhost:5000/signup',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(newPerson),
        }).catch(error =>{
            window.alert(error)
            
            return;
        });

        setForm({ 
            name:"",
            email: "",
            password: "",
        });
   
        

      

        if(response.ok){
  

          try {
            const result = await response.json();
            
            dispatch(setUserDetails(result.username));
            
             
             
            navigate("/Dashboard")
            // Handle the result here
          } catch (error) {
            // Handle the case where the response is not valid JSON
            console.error('Invalid JSON response:', error);
          }
         
        }else{
          const err = await response.json()
          window.alert(`An error has occured: ${err}`)
        }
        
       
     }
     else{
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

        
<>
      
            <FormContainer >
                <FormWrapper onSubmit={handleSubmit}>
             
                <Label fontSize="1.5rem" text="Sign Up"/>
                
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


                </FormWrapper>
             </FormContainer>
          
             <ContentWrapper>
             <Divider left/>
        <ContainerWrapper>
        
          <Container left/>
          <p1>SIGN UP WITH</p1>
          <Container right/>
          </ContainerWrapper>
          
             <Divider right/>
           
            </ContentWrapper>
            <ImageWrapper>
            <GoogleButton/>
            <FacebookButton/>
            </ImageWrapper>
            <Footer/>
          </>
        )
}

const ContainerWrapper = styled.div`
position: relative; /* Add relative positioning to create a positioning context */
padding-top:2rem;padding-bottom:2rem;
 z-index:;
  width:10rem;
  border:.15rem solid white;
  padding-left:3rem;
  display:flex;
  align-items:center;
  



  p1{
   
    padding-left:-20px;
    position:absolute;
    font-family: 'Work Sans', sans-serif;
  }
`

const Container = styled.div`




  
${(props)=> props.left && css`
font-family: 'Work Sans', sans-serif;
  color:${Theme.colors.Teal};
  width:4rem;
  padding-top:2rem;padding-bottom:2rem;
  border-left:.5rem solid ${Theme.colors.DarkTeal};
  border-bottom:.5rem solid ${Theme.colors.DarkTeal};
  position: absolute; /* Add relative positioning to create a positioning context */
  top:0rem;
  left:-.1rem;
  animation: ${reduceBorderWidth} 3s forwards;


  

  &::before{
    content:'';
    color:${Theme.colors.Teal};
    width:7rem;
    padding-top:2rem;padding-bottom:2rem;
    border-top:.5rem solid ${Theme.colors.DarkTeal};
    position: absolute; /* Add relative positioning to create a positioning context */
    top:-0.1rem;
    left:-.5rem;
    animation:${reduceBeforeAfterWidth} 3s forwards;
    

    
    
  }

  

  
  

  



`}




${(props)=> props.right && css`
font-family: 'Work Sans', sans-serif;
  color:${Theme.colors.Teal};
  width:4rem;
  top:-.1rem;
  right:-0.15rem;
  padding-top:2rem;padding-bottom:2rem;
  border-right:.5rem solid ${Theme.colors.ColumnBlack};
  border-top:.5rem solid ${Theme.colors.ColumnBlack};
  position: absolute; /* Add relative positioning to create a positioning context */
  animation: ${reduceBorderWidth} 2s forwards;
 

  &::before{
    content:'';
    color:${Theme.colors.Teal};
    width:7rem;
    padding-top:2rem;padding-bottom:2rem;
    border-bottom:.5rem solid ${Theme.colors.ColumnBlack};
    position: absolute; /* Add relative positioning to create a positioning context */
    bottom:-.1rem;
    right:-.5rem;
    animation: ${reduceBeforeAfterWidth} 2s forwards;
    
  }

`}


`

const FormContainer = styled.div`
display:flex;
justify-content:center;

`


const FormWrapper = styled.form`
margin-top:5rem;
display:grid;
gap:0.6rem;
gridTemplateRows: repeat(auto-fit,minmax(0,1fr));
justify-content:center;
padding:2rem 1.3rem;
height:600px;
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

const ContentWrapper = styled.div`
margin-top:5rem;
display:flex;
gap:5rem;
justify-content:space-evenly;

align-items:center;



`

const Divider = styled.div`



    


${(props)=> props.left && css`
border-radius:.1rem;
width:40rem;
background-color:${Theme.colors.ColumnBlack};
height:.5rem;

animation: ${leftdividerAnimation} 3s forwards;



`}


${(props)=> props.right && css`
border-radius:.1rem;
width:40rem;
background-color:${Theme.colors.ColumnBlack};
height:.5rem;

animation: ${rightdividerAnimation} 3s forwards;


`}

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


export default Signup
