
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const CreditCrendentialUI =({creditCredentials})=>{

    const [progress, setProgress] = useState('0%');
const navigate = useNavigate();
    useEffect(()=>{

        async function fetchData(creditCredentials){
            try{
        
                const url = `http://localhost:5000/postCreditCrendentials`
                const response = await fetch(url,{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                        credentials:"include",
                        body:JSON.stringify(creditCredentials),
                        onProgress:(event)=>{
                            if(event.lengthComputable){
                                const percentComplete = (event.loaded/ event.total) *100;
                                    setProgress(percentComplete);
                            }
                        }
                    });
         
                
                if(response.ok){
                    const data = await response.json();
                    console.log('This is ok')
                
                    navigate("/BillingAddress")
                    
        
                }else{
                    throw new Error('Failed to sign up: ' + response.status);
                }
            }catch(err){
        
                console.error('Error occured:', err);
                window.alert("Error occured. Please try again later.");
              
            }
        }

        fetchData();

        return ()=>{

        }




    },[creditCredentials,navigate])

    return (
        <ProgressBar progress={progress + '%'} />
    );
}



const ProgressBar = styled.div`
    width: ${props => props.progress || '0%'};
    height: 10px;
    background-color: hsla(126, 100%, 50%, 1);
`;


export default CreditCrendentialUI