import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Menu from '../Menu-Content/menuObject_PNG'




const DescripContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-content:left;
align-items:flex-start;
gap:2rem;
color:${Theme.colors.ColumnBlack};
font-family: 'Oleo Script', cursive;
margin-left:2rem;
font-size:50px;



p2{
  font-size:25px;
  font-family: 'Work Sans', sans-serif;
}



p3{
  font-size:15px;
}
`


const CarouselContainer = styled.div`
position:relative;
display:grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column: span 2;
grid-row: span 2;
gap: 1rem;
height:30rem;

img{
  height:30rem;
  width:20rem;
}


`


const CarouselSlide = Menu.Main.map((data) =>{
  return(
   
  <CarouselContainer key={data.id}>
    <img src={data.Image}/>
  
    <DescripContainer>
       <p1>{data.name}</p1>
       <p2>{data.Price}</p2>
       <p3>{data.Rating}</p3>
      </DescripContainer>
      <div>

      </div>
  </CarouselContainer>
  )
    
})


const CarouselComponent = () =>{
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return(
  
      <Carousel
        showArrows={false}
        autoPlay={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        selectedItem={Menu.Main[currentIndex]}
        onChange={handleChange}
        width={"60rem"}

      >
        {CarouselSlide}
      </Carousel>
 
 ) }






export default CarouselComponent