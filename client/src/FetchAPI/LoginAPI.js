
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { openForm, openSignupForm } from "../redux/feature/authSlice";
import { useDispatch } from "react-redux";




const LoginUI =({credentials})=>{
const [progress, setProgress] = useState('0%');
const navigate = useNavigate();
const dispatch = useDispatch();



useEffect(()=>{
async function fetchData(){


try{
    const url = 'http://localhost:5000/login'
    const response = await fetch(url, {
        method:'POST',
        headers:{
            "Content-Type": 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
        onProgress: (event) =>{
            if(event.lengthComputable){
                const percentComplete = (event.loaded / event.total) * 100;
                            setProgress(percentComplete);
            }
        }
    });


    if(response.ok){
         
            const data = await response.json();
            console.log('This is ok')
            localStorage.setItem('Username', data.username);
            
            
                navigate('/Dashboard');
                dispatch(openForm(false));
                dispatch(openSignupForm(false));

            
                   
                    
                    
    } else {
        throw new Error('Failed to sign up: ' + response.status);
        
    }
}catch(err){

    window.alert(err)
    return;

    }



};





fetchData();
        
return () => {

 };



},[credentials,navigate]);



return (
    <ProgressBar progress={progress + '%'} />
);


}


const ProgressBar = styled.div`
    width: ${props => props.progress || '0%'};
    height: 10px;
    background-color: hsla(126, 100%, 50%, 1);
`;

export default LoginUI