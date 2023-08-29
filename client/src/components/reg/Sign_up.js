
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled,{css} from "styled-components";
import Input from "../../util/Input/Input";
import Button from "../../util/Button/Button";
import Label from "../../util/Label/Label";
import Theme from "../../theme/theme";
import {Link} from "react-router-dom";
import GoogleButton from "../../auth/googleAuth";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa"
import Footer from "../../util/Footer/Footer";




const Signup = () =>{

    

    const [form,setForm]= useState({
        name:"",
        email: "",
        password: "",
     })

     function handleForm(value){
        return setForm(prev =>{
            return {...prev,...value}
        })
     }

     const navigate = useNavigate()



     

     async function handleSubmit(e){
        e.preventDefault();

        const newPerson = {...form};

        await fetch("http://localhost:5050/api",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        }).catch(error =>{
            window.alert(error)
            navigate("/Signup");
            return;
        });

        setForm({ 
            name:"",
            email: "",
            password: "",
        });
        console.log(newPerson)

        navigate("/Dashboard");
     }
    

    
   


    return(

        <>
             
            <form onSubmit={handleSubmit}>
                <FormWrapper>
               
                <Label fontSize="1.5rem" text="Sign Up"/>
                
                <InputWrapper>
                <IconWrapper>
                        <FaUserAlt style={{ color: "white"}}/>
                </IconWrapper>

                        <Input
                            black={"true"}
                            type="text" 
                            name="name" 
                            placeholder="name"
                            value={form.name}
                            onChange={(e)=> handleForm( { name: e.target.value})}
                            
                           
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
                            placeholder="password"
                            value={form.password}
                            onChange={(e)=> handleForm({ password: e.target.value})}
                            
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
                            placeholder="email" 
                            value={form.email}
                            onChange={(e)=> handleForm({ email: e.target.value})}
                            
                            />
                </InputWrapper>



                <CheckboxWrapper>
                        <Input 
                            type="checkbox"
                            name="checkbox"
                            placeholder={"By Signing up, you accept the Term of service and Privacy & Policy"}
                            />
                </CheckboxWrapper>



                <ButtonWrapper>
                        <Button type="submit" text="Sign Up" register={"true"}></Button>
                </ButtonWrapper>



                <HyperLink>
                <p3>Already have an account?
                    <p4> </p4>
                    <Link to='/login'>Login</Link>
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
            <GoogleButton/>
            </ImageWrapper>
            <Footer/>
        </>
             
        )
}




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
font-size: .75rem;
`

const CheckboxWrapper = styled.div`
grid-column: 1;
font-size: .75rem;


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


export default Signup
