import Theme from "../../theme/theme";
import styled,{css} from "styled-components";



const Footer = () =>{




    return(
    
    <FooterWrapper>
    
    <LeftContainer>
            <p1>FUS</p1>
            <hr></hr>
            <p2>ONE</p2>
            
            
    </LeftContainer>
    
    <CenterContainer>
          
    <p1>@2023 Fusione, All Rights Reserved</p1>
    <p2>Genting Court 14 2 Jln 3/50C Off Jln Genting Kelang M, Kuala Lumpur, Wilayah Persekutuan, 53300, Malaysia</p2>


    </CenterContainer>

    <RightContainer>
        <p3>Get help </p3>
        <p4>Contact Us</p4>
        <p5>Payment Options</p5>
        <p6>Delivery Options</p6>
    </RightContainer>

    <RightContainer>
        <p3>Social Media </p3>
        <a href="https://www.instagram.com/perrryyyberry" target="_blank">Instagram</a>
        <a href="https://www.facebook.com/sam.perry.902" target="_blank">Facebook</a>
        <a href="https://www.linkedin.com/in/sam-perry-lee-98ab99192" target="_blank">Linked-In</a>
    </RightContainer>

   
    
  
    </FooterWrapper>
    
    
    )




}


const FooterWrapper = styled.footer`
background-color: ${Theme.colors.BackgroundBlack};
left: 0;
bottom: 0;
height:200px;
width:100%;
z-index:1;
display:flex;
justify-content:flex-start;
gap:10rem;


`


const LeftContainer = styled.div`
position:relative;
justify-content:center;
flex-direction:row;
align-items:center;
display:flex;
gap:1rem;
margin-left:5rem;




p1{
    font-family: 'Work Sans', sans-serif;
    font-size: 68px;
    font-weight:bold;
    color:${Theme.colors.white};
    z-index: 2;

    
    }
    
    p2{
        font-family: 'Work Sans', sans-serif;
        font-size: 68px;
        font-weight:bold;
        color:${Theme.colors.Orange};
        z-index: 2;
      
        }
        
    
    
    
    
        hr{
        background-color:${Theme.colors.white};
        border:none;
        width:0.625rem;
        height:7.5rem;
        top:2rem;
        border-radius:20px;
    
        }



`

const CenterContainer = styled.div`
display:flex;
flex-direction:column;
font-family: 'Work Sans', sans-serif;
    color:${Theme.colors.white};
padding: 2rem 0rem;
gap:1rem;
width:300px;


p1{
    font-size: 16px;
}

p2{
    font-size: 12px;
}
`

const RightContainer = styled.div`
display:flex;
flex-direction:column;
font-family: 'Work Sans', sans-serif;
    
    color:${Theme.colors.white};
padding:2rem 0rem;
gap:1rem;

p3{
    font-size: 16px;
    font-weight:bold;
}



a{
    text-decoration:none;
    color:${Theme.colors.white};

}
`


export default Footer