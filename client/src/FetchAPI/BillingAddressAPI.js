
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";





const BillingAddressUI = ({billingAddressForm})=>{
  const [progress, setProgress] = useState('0%');
  const navigate = useNavigate();

  useEffect(()=>{
    async function fetchData(){
    
    
    try{
        const url = `http://localhost:5000/postBillingAddress`
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            credentials:'include',
            body:JSON.stringify(billingAddressForm),
            onProgress:(event)=>{
              if(event.lengthComputable){
                const percentComplete = (event.loaded / event.total) *100;
                        setProgress(percentComplete);
              }
            }
    
            
        });
    
        
        
    
    
       
    
        if(response.ok){
            const data = await response.json()
            console.log('BillingAddress posted')
            navigate("/Payment")
            
        }
    }catch(err){
        console.error('Error occured: ', err);
        window.alert("Error occured. Please try again later")
        return;
    }
    
  };

  fetchData();

  return () =>{

  };




},[billingAddressForm,navigate])

return (
  <ProgressBar progress={progress + '%'} />
);


}

const ProgressBar = styled.div`
    width: ${props => props.progress || '0%'};
    height: 10px;
    background-color: hsla(126, 100%, 50%, 1);
`;

export default BillingAddressUI



