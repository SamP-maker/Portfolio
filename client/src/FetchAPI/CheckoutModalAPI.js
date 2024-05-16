import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRecordSummPostStatus } from "../redux/feature/PostManagement";


const CheckoutModalUI =({userReceipt})=>{
    const [progress, setProgress] = useState('0%');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{

        
async function fetchData(){
    try{
       
        const response = await fetch("http://localhost:5000/recordSummary",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            credentials:"include",
            body:JSON.stringify(userReceipt),
            onProgress:(event)=>{
                if(event.lengthComputable){
                    const percentComplete = (event.loaded/ event.total) *100;
                    setProgress(percentComplete);
                }
            }
        })
     
        if(response.ok){
            const data = response.json()
            console.log(`Receipt:`, data)
            localStorage.removeItem('address')
            localStorage.removeItem('credit')
            localStorage.removeItem('billing')
          
            
        }else{
            throw new Error('Failed to sign up: ' + response.status);
        }
    }catch(err){
        console.error(`an error has occured`, err)
    }
}

fetchData();


return ()=>{



}







    },[dispatch])

    return (
        <ProgressBar progress={progress + '%'} />
    );


}

const ProgressBar = styled.div`
    width: ${props => props.progress || '0%'};
    height: 10px;
    background-color: hsla(126, 100%, 50%, 1);
`;

export default CheckoutModalUI