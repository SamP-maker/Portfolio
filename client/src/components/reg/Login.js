
import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router";
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
import {FaEnvelope} from "react-icons/fa";


const Login = () =>{

    const [documents,setDocuments] = useState([]);
    const [newDocument,setNewDocuments] = useState({
        name: "",
        email:"",
        password:"",
    })

    const params = useParams();
    const navigate = useNavigate();



    useEffect(()=>{

        async function getDocuments(){
            const response = await fetch(`http://localhost:5050/record/`);


            if(!response.ok){
                const message = `An error occured ${response.statusText}`;
                window.alert(message);
                return;
            }


            const documents = await response.json()
            setDocuments(documents);

        }

        getDocuments();
        return
    }, [documents.length]);

    //Form Handling//
    const handleform = (value) =>{
        return setNewDocuments((prev) =>{
            return {...prev,...value}
        })
    }



    const user = documents.find((user) => user.email === newDocument.email);



    async function handleSubmit(e){
        e.preventDefault()

    try{
        await fetch(`http://localhost:5050/api`,{
            method:"POST",
            headers:{
            "Content-Type": "application/json",
            },
        body: JSON.stringify(newDocument)
        })


        if (user) {
            // User with the provided email exists in the 'documents' array
            if (user.password === newDocument.password) {
              // Password matches, login successful
              navigate("/");
            } else {
              // Password does not match, show error message
              window.alert('Wrong Password Credentials');
            }
          } else {
            // User with the provided email does not exist, show error message
            window.alert('Wrong Email Credentials');
          }

        
    }catch(error){
        console.error("Error occurred:", error);
        window.alert("Error occurred. Please try again later.");
    }

        
    }

    

    
    return(

        <>
             
            <form onSubmit={handleSubmit}>
                <FormWrapper>
               
                <Label fontSize="1.5rem" text="Login"/>
                
                <InputWrapper>

                <IconWrapper>
                        <FaUserAlt style={{ color: "white"}}/>
                </IconWrapper>
                        <Input
                           black={"true"}
                            type="text" 
                            name="name" 
                            placeholder="Username"
                            onChange={(e) => handleform({name : e.target.value})}
                            
                            
                            
                            />
                </InputWrapper>



                <InputWrapper>
                <IconWrapper>
                        <FaLock style={{ color: "white"}}/>
                </IconWrapper>
                        <Input 
                            black={"true"}
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            onChange={(e) => handleform({password : e.target.value})} 
                            
                            />
                </InputWrapper>



                <InputWrapper>
                <IconWrapper>
                        <FaEnvelope style={{ color: "white"}}/>
                </IconWrapper>
                        <Input
                            black={"true"} 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            onChange={(e) => handleform({email : e.target.value})} 
                            
                            />
                </InputWrapper>


                <ButtonWrapper>
                        <Button type="submit" text="Login" register="true" ></Button>
                </ButtonWrapper>



                <HyperLink>
                <p3>Don't have an account?
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

           
            <Footer/>
        </>
             
        )
    }




export default Login

const FormWrapper = styled.div`
margin-top:3rem;
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



p6{
    font-family: 'Work Sans', sans-serif;
    color:${Theme.colors.ColumnBlack};
    display:block;
    width:10rem;
    padding-left: 2rem;
}

`

const Divider = styled.div`
border-radius:1rem;
width:40rem;
background-color:${Theme.colors.Orange};
height:.5rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 3px;

`

const ImageWrapper = styled.div`
display:flex;
justify-content:center;
gap:5rem;
margin-top:5rem;
margin-bottom:5rem;

`

const IconWrapper = styled.div`
  margin-left: 35px;
  margin-top:42px;
  position:absolute;
  
`;
