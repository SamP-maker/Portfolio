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
            {window.location.pathname === "/Menu" ?
            <StyledLink to="/Menu">Menu</StyledLink> :
            <StyledLink to="/Dashboard">Dashboard</StyledLink>
            }
        <DropDownContent show={dropDown}>
        {window.location.pathname === "/Menu" ?
            <StyledLink to="/Dashboard">Dashboard</StyledLink> :
            <StyledLink to="/Menu">Menu</StyledLink>
            }
      </DropDownContent>
     

     
    </MenuWrapper>
    )

 
    
    
}





const MenuWrapper = styled.button`

color:white;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
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


&:hover{
    color:${Theme.colors.Orange};
}
`

const DropDownContent = styled.div`

transition: padding-bottom 1s ease-in-out, opacity 0.3s ease-in-out;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  padding-bottom: ${(props) => (props.show ? "20px" : 0)};
  height: ${(props) => (props.show ? "auto" : 0)};
  overflow: hidden;
  
`



export default ButtonDropDown