import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import styled from "styled-components";


const OrderConfirmUI =({orderList})=>{
    const [progress,setProgress] = useState('0%');
    const navigate = useNavigate();


useEffect(()=>{
async function fecthData(){


    try{
        
        const response = await fetch('http://localhost:5000/postOrder',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            credentials:'include',
            body:JSON.stringify(orderList),
            onProgress: (event)=>{
                if(event.lengthComputable){
                    const percentComplete = (event.loaded/ event.total) * 100;
                    setProgress(percentComplete);
                }
            }
        })
     
        
           
           
        


    }catch(err){
        console.error('Error occured:', err);
        window.alert("Error occured. Please try again later.");
     
        
    }
};

fecthData();
return () =>{

};

},[orderList,navigate]);



return(
    <ProgressBar progress={progress + '%'}/>
)

}



const ProgressBar = styled.div`
    width: ${props => props.progress || '0%'};
    height: 10px;
    background-color: hsla(126, 100%, 50%, 1);
`;



export default OrderConfirmUI