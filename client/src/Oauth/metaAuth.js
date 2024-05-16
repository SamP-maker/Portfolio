/*
    1. Sign up button Info, Make sure that there is data flowing through.
      - Must redirect to the other page.
    2. Sign in button Info, Make sure that there is data flowing through.
    - Must redirect to the other page



*/




import React, { useEffect,useState} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../redux/feature/registrationSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import Theme from '../theme/theme';

const FacebookLoginButton = ({label}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form,setForm]= useState({
    name:"",
    email: "",
    password: "",
 })


  const handleSubmit = async (res) =>{

    const { email, name } = res
    console.log(email,name)

    setForm({
      name:name,
      email: email,
      password: "",
    })

  
      
  
    const response = await fetch('http://localhost:5000/signup',{
    method: 'POST',
    credentials:'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(form)
    }).catch(error =>{
      window.alert(error)
      return;
    })


    if(response.ok){
      dispatch(setUserDetails(name))
      navigate("/Dashboard")
    }else{
      const err = await response.json()
      window.alert(`an error has occured: ${err}`)
    }
  }
  


  



  return (
    <StyledFacebookLoginWrapper>
    <FacebookLogin
      appId="712294514088459" // Replace with your Facebook App ID
      autoLoad={false} // Set to true if you want to load the login dialog on component mount
      icon="fa-facebook"
      fields="name,email,picture" // Specify the data you want to access
      callback={handleSubmit} // Callback function when the login is successful
      render={(renderProps) => (
        <button onClick={renderProps.onClick}>
          <FaFacebookSquare />
          
          {label}
        </button>
      )}
      
    />
  </StyledFacebookLoginWrapper>
  );
  }

  const StyledFacebookLoginWrapper = styled.div`
 text-decoration:none;
  border-radius: 4px;
  padding: 10px;


  button{
    text-decoration:none;
    border:none;
    font-size:1rem;
    font-family: 'Work Sans', sans-serif;
    padding:18px 1.3rem;
    background-color:${Theme.colors.FacebookBlue};
    color:white;
    display:flex;
    align-items:center;
    gap:.5rem;
    &:hover{
      cursor:pointer;
      box-shadow: ${Theme.colors.FacebookBlue} 2px 2px 4px;
      
    }
    
  }
`;
  

export default FacebookLoginButton;