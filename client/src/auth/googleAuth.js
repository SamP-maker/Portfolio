import React,{useEffect} from "react";

const GoogleButton = () => {
  const openPopup = () => {
    const popupWidth = 600;
    const popupHeight = 600;
    const leftPosition = (window.innerWidth - popupWidth) / 2;
    const topPosition = (window.innerHeight - popupHeight) / 2;

    const oauth2Url = "/auth/google";
    const windowOptions = `width=${popupWidth},height=${popupHeight},top=${topPosition},left=${leftPosition},scrollbars=yes,resizable=yes`;

    window.open(oauth2Url, "Google OAuth2", windowOptions);
  };

  return (
    <button id="googleButton" onClick={openPopup}>
      <img src="google_button.png" alt="Sign in with Google" width="200" height="40" />
    </button>
  );
};

export default GoogleButton;