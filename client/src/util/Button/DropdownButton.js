import React, {useState} from "react";
import styled,{css} from "styled-components";
import Theme from "../../theme/theme";
import { Link } from "react-router-dom";


const ButtonDropDown =({navbar,padding}) =>{
    const [dropDown,setDropDown] = useState(false)


    const toggleDropDown =() =>{
        setDropDown(!dropDown)
       
    }

 

  
    return(
        <MenuWrapper navbar={navbar} padding={padding} onClick={toggleDropDown} show={dropDown}>
            {(() => {
                if (window.location.pathname === '/Menu') {
                    return <StyledLink to="/Menu">Menu</StyledLink>;
                } else if (window.location.pathname === '/Dashboard') {
                    return <StyledLink to="/Dashboard">Dashboard</StyledLink>;
                } else if ( window.location.pathname === '/Order_confirm' ||window.location.pathname === '/Address'){
                    return <StyledLink to="/Order_confirm">Check Out</StyledLink>
                }
                else if ( window.location.pathname === '/Status'){
                    return <StyledLink to="/Status">Status</StyledLink>
                }
                
                
                return null; // Return null if no conditions match
            })()}
        <DropDownContent show={dropDown}>
        {(() => {
                if (window.location.pathname === '/Menu') {
                    return (
                    <>
                  
                    <StyledLink to="/Dashboard">Dashboard</StyledLink>
                    <StyledLink to="/Order_confirm">Check Out</StyledLink>
                    <StyledLink to="/Status">Status</StyledLink>
                    </>
                    )

                } else if (window.location.pathname === '/Dashboard') {
                    return (
                        <>
                        
                        <StyledLink to="/Menu">Menu</StyledLink>
                        <StyledLink to="/Order_confirm">Check Out</StyledLink>
                        <StyledLink to="/Status">Status</StyledLink>
                        </>
                        )
                } else if ( window.location.pathname === '/Order_confirm' ||  window.location.pathname === '/Address'){
                    return (
                        <>
                        <StyledLink to="/Dashboard">Dashboard</StyledLink>
                        <StyledLink to="/Menu">Menu</StyledLink>
                        <StyledLink to="/Status">Status</StyledLink>
                        </>
                        )
                } else if( window.location.pathname === '/Status'){
                    return (
                        <>
                        <StyledLink to="/Dashboard">Dashboard</StyledLink>
                        <StyledLink to="/Menu">Menu</StyledLink>
                        <StyledLink to="/Order_confirm">Check Out</StyledLink>
                        </>
                        )

                }
                return null; // Return null if no conditions match
            })()}
      </DropDownContent>
     

     
    </MenuWrapper>
    )

 
    
    
}





const MenuWrapper = styled.button`

color:white;
display:flex;
flex-direction:column;
align-items:center;
position:relative;
transform: ${(props) => (props.show ? "translateY(15px)" : "translateY(0)")};
transition: transform 1s ease-in-out, opacity 0.3s ease-in-out;
padding-left:${(props) => (props.show ? "30px" : "0")};
padding-right:${(props) => (props.show ? "30px" : "0")};







${(props) => props.navbar && css`
padding-left:10px; padding-right:10px;
border: 0.1250rem solid ${Theme.colors.blackFade};
background-color: ${Theme.colors.BackgroundBlack};
font-family: 'Work Sans', sans-serif;
color: ${Theme.colors.white};
font-size:1.5rem;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius:10px;






&:hover{
    border:0.1250rem solid ${Theme.colors.Orange};
    border-radius:10px;
}











`}
`

const StyledLink = styled(Link)`
color: white;
text-decoration: none;
padding-top:10px;
justify-content:flex-start;


&:hover{
    color:${Theme.colors.Orange};
}
`

const DropDownContent = styled.div`

display:flex;
flex-direction:column;
transition: padding-bottom 1s ease-in-out, opacity 0.3s ease-in-out;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  padding-bottom: ${(props) => (props.show ? "10px" : 0)};
  height: ${(props) => (props.show ? "auto" : 0)};
  overflow: hidden;
  
`



export default ButtonDropDown