import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { setUserDetails } from "../redux/feature/registrationSlice";
import {useDispatch} from 'react-redux';

const SignUpUI =({credentials})=>{
    const [progress,setProgress] = useState('0%');
    const navigate = useNavigate();
    const dispatch = useDispatch()


useEffect(()=>{


async function fetchData(){
    try{

        
        const response = await fetch( 'http://localhost:5000/signup', {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(credentials),
        })

      

        if(response.ok){
        
          const result = await response.json();
          localStorage.setItem('Username', result.username);
          dispatch(setUserDetails(result.username))
          
            
         

        }else{
            throw new Error('Failed to sign up: ' + response.status);
        }

    }catch(err){
        console.error('Invalid JSON response:', err);
       
        return;
    }
};

fetchData();
        
return () => {

 };

},[])

return (
    <ProgressBar progress={progress} />
);




}




const ProgressBar = styled.div`
    width: ${props => props.progress || '0%'};
    height: 10px;
    background-color: hsla(126, 100%, 50%, 1);
`;



export default SignUpUI