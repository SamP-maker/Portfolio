import React,{useEffect} from "react";
import GoogleIcon from "../theme/Icons/google.png";




const GoogleAuth =() => {
    const iconURL = GoogleIcon

    const handleCallbackResponse =(response) =>{
        console.log("Encoded JWT ID Token: " + response.credential);
    }

    useEffect(()=>{

        /* global google */
        google.accounts.id.initialize({
            client_id: "471115544585-e7vterihte839vl9tsumdkj33ahuev9h.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                type:"icon",
                shape: "circle",
                
                });
    },[]);


    

    return(
        <div id="signInDiv"> Sign In</div>

    
    )


    };

export default GoogleAuth