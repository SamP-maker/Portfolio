import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import google_button from '../theme/Icons/google.png';
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../src/redux/feature/registrationSlice";
import GoogleButton from 'react-google-button';


const GoogleOauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to open the popup
  const openPopup = () => {
    const popupWidth = 600;
    const popupHeight = 600;
    const leftPosition = (window.innerWidth - popupWidth) / 2;
    const topPosition = (window.innerHeight - popupHeight) / 2;

    // Construct the OAuth2 URL with required parameters
    const oauth2Url = `http://localhost:5000/auth/google`;
    console.log('OAuth2 URL:', oauth2Url);

    // Open the OAuth2 popup and store a reference to it
    const windowOptions = `width=${popupWidth},height=${popupHeight},top=${topPosition},left=${leftPosition},scrollbars=yes,resizable=yes`;
    const popupWindow = window.open(oauth2Url, "Google OAuth2", windowOptions);
  };
  // Add an event listener to listen for messages from the popup
  window.addEventListener('message', event => {

    dispatch(setUserDetails(event.data.username))
   // navigate('/Dashboard')
});


  

  return (
    
    <GoogleButton
    onClick={openPopup} // Provide your response handling function
    label="Sign in with Google" // Button label
   
  />
  );

}

export default GoogleOauth;