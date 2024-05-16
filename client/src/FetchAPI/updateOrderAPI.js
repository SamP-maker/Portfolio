import React, { useState, useEffect } from "react";
import styled from 'styled-components';




const UpdateOrderUI =({updatedOrder})=>{
    const [progress, setProgress] = useState('0%');

    useEffect(()=>{

        
async function fetchData(){
    try{

        const url = `http://localhost:5000/updateOrder`
        const response = await fetch(url,{
            method:'PUT',
            credentials:'include',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedOrder),
            onProgress: (event) =>{
                if(event.lengthComputable){
                    const percentComplete = (event.loaded / event.total) *100;
                    setProgress(percentComplete);
                }
            }
        });
     
        if(response.ok){

            const data = await response.json();
            console.log('Cart is updated!')
            
    
        }else{
            throw new Error('Failed to sign up: ' + response.status);
        }
    }catch(err){
        window.alert(err.message)
        return;
     
    }
    
    }

    fetchData();

    return () =>{

    }


    },[updatedOrder])


    return (
        <ProgressBar progress={progress + '%'} />
    );





}



const ProgressBar = styled.div`
    width: ${props => props.progress || '0%'};
    height: 10px;
    background-color: hsla(126, 100%, 50%, 1);
`;

export default UpdateOrderUI