import {useNavigate} from "react-router-dom"
import React, {useState,useEffect} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchSingleAddress,fetchUserAllAddress } from "../redux/feature/AddressSlice";



const AddressUI =({form})=>{
  const [progress, setProgress] = useState('0%');
  const navigate = useNavigate();
  const dispatch = useDispatch();

useEffect(()=>{
async function fetchData(){


        try{
          const url =  'http://localhost:5000/postAddress'
        const response = await fetch( url,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          credentials: 'include',
        body: JSON.stringify(form),
        onProgress: (event)=>{
          if(event.lengthComputable){
            const percentComplete = (event.loaded / event.total)  * 100;
                    setProgress(percentComplete);
          }
        }
        });

        if(response.ok){
          const data = await response.json();
          console.log('Address Posted')

          dispatch(fetchSingleAddress())
          dispatch(fetchUserAllAddress())
          
          
          
         
          


        }


        
    
        

      
        
      }catch(err){
        console.error("Error occured,", err);
        window.alert("Error occured. Please try again later.")
      }


}

fetchData();
},[form,navigate])


return (
  <ProgressBar progress={progress + '%'} />
);

}



const ProgressBar = styled.div`
    width: ${props => props.progress || '0%'};
    height: 10px;
    background-color: hsla(126, 100%, 50%, 1);
`;

export default AddressUI