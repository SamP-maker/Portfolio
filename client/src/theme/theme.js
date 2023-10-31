import styled from "styled-components";


export const Theme={


    colors:{

        BackgroundBlack: "hsl(75,4%,13%,1)",
        green: "hsl(75,53%,41%,1)",
        greenColumn: "hsl(75,53%,41%,0.8)",
        white: "hsl(191,100%,100%,1)",
        whiteShadow: "hsl(191,100%,100%,.2)",
        ColumnBlack: "hsl(0,0%,0%,1)",
        blackFade: "hsla(0,0%,0%,.2)",
        Teal:"hsl(191,79%,50%,1)",
        TealCheckbox: "hsl(191,96%,75%,0.85)",
        Orange: "hsl(37, 90%, 51%)",
        OrangeLite: "hsl(40, 94%, 58%);",
        CarrotOrange: "hsl(16, 87%, 62%);",
        Grey: "hsl(0, 0%, 28%)",
        Blue:"hsl(216, 100%, 50%)",
        Greylite:"hsl(0, 1%, 79%)",
        Red:"hsl(0, 100%, 50%)",
        VelvetRed: "hsl(5,95%,38%)",
        DarkTeal: "hsl(180,100%,25%)",
        FacebookBlue: "hsl(223,73%,57%)"
    },
    font:['Nunito','Inter','sans-serif'].join(',')
}



export const Logo=()=>{

    

const ImageContainer = styled.div`
display:flex;
justify-content:flex-start;
padding-top:2rem;
padding-bottom:2rem;

`


const TitleContainer = styled.div`
height:12.5em;
width:30vw;
margin: 0 0;
padding:0 2rem;
position:relative;
align-items:center;
display:flex;
gap:30px;
text-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;


@media (max-width: 1448px) {
    gap:20px;
  }

  @media (max-width: 1024px) {
    gap:20px;
  }

  @media (max-width: 768px) {
    gap:20px;
  }




p1{
    font-family: ${Theme.font};
    font-size: 5rem;
    font-weight:bold;
    color:${Theme.colors.BackgroundBlack};
    z-index: 2;
    
    @media (max-width: 1448px) {
        font-size: 3rem;
      }
    
      @media (max-width: 1024px) {
        font-size: 2rem;
      }
    
      @media (max-width: 768px) {
        font-size: 1.7rem;
      }
    
    }
    
    p2{
        font-family: ${Theme.font};
        font-size: 5rem;
        font-weight:bold;
        color:${Theme.colors.BackgroundBlack};
        z-index: 2;

        @media (max-width: 1448px) {
            font-size: 3rem;
          }
        
          @media (max-width: 1024px) {
            font-size: 2rem;
          }
        
          @media (max-width: 768px) {
            font-size: 1.7rem;
          }
      
        }
        
    
    
    
    
        hr{
        background-color:${Theme.colors.BackgroundBlack};
        border:none;
        width:0.625rem;
        height:5.5rem;
        top:2rem;
        border-radius:20px;

        @media (max-width: 1448px) {
            height:3rem;
            width:0.325rem;
          }
        
          @media (max-width: 1024px) {
            height:2rem;
            width:0.225rem;
          }
        
          @media (max-width: 768px) {
            height:1.7rem;
            width:0.225rem;
          }
    
        }



`


    return (


        <ImageContainer> 
       
        
        <TitleContainer>
     <p1>FUS</p1>
        <hr></hr>
        <p2>ONE</p2>
        </TitleContainer>
</ImageContainer>
    
    )
    


}

export default Theme