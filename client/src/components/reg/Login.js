import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router";
import styled,{css} from "styled-components";
import Input from "../../util/Input/Input";
import Button from "../../util/Button/Button";
import Label from "../../util//Label/Label";
import Theme from "../../theme/theme";
import {Link} from "react-router-dom";
import GoogleAuth from "../../auth/googleAuth"; 
import Footer from "../../util/Footer/Footer";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import FacebookButton from "../../auth/metaAuth";
import {useDispatch, useSelector} from 'react-redux';
import { setUserDetails } from "../../redux/feature/registrationSlice";
import { reduceBorderWidth,leftdividerAnimation,rightdividerAnimation,reduceBeforeAfterWidth} from "../../theme/animations/animations";

const Login = () =>{
    
   
    const dispatch = useDispatch()
    const {Username} = useSelector((store) => store.user)
    const [newDocument,setNewDocuments] = useState({
        identifier: "",
        password:"",
    })


    const navigate = useNavigate();

     //Form Handling//
     const handleform = (value) =>{
        return setNewDocuments((prev) =>{
            return {...prev,...value}
        })
    }




    async function handleSubmit(e){
        e.preventDefault()
        try{
        const response =  await fetch('http://localhost:5000/login',{
          method:'POST',
          headers:{
            "Content-Type": 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ Identifier: newDocument.identifier, Password: newDocument.password}),
          });

          

          if(response.ok){
            const data = await response.json();
           
            dispatch(setUserDetails(data.username));
            navigate("/Dashboard")
          }else{
            window.alert('Login Failed');
          }

       
      }catch(err){  
   
        window.alert(err)
        return;
      };

       

        
    }

    

    
    return(
<>
        <FormContainer>
            
                <FormWrapper>
               
                <Label fontSize="1.5rem" text="Login"/>
                
                <InputWrapper>

                <IconWrapper>
                        <FaUserAlt style={{ color: "black"}}/>
                </IconWrapper>
                        <Input
                           register={"true"}
                            type="text" 
                            name="identifier" 
                            placeholder="Username or Password"
                            onChange={(e) => handleform({identifier : e.target.value})}
                            
                            
                            
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
                            onChange={(e) => handleform({password : e.target.value})} 
                            
                            />
                </InputWrapper>

                <ButtonWrapper>
                        <Button type="submit" text="Login" Signup="true" ></Button>
                </ButtonWrapper>



                <HyperLink>
                <p3>Don't have an account?
                    <p4> </p4>
                    <Link to='/Signup'>Sign up</Link>
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
              <GoogleAuth/>
              <FacebookButton/>
            </ImageWrapper>

           
            <Footer/>
      
</>             
        )
    }

    
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



const FormContainer = styled.div`
display:flex;
justify-content:center;

`

const FormWrapper = styled.div`
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






export default Login
