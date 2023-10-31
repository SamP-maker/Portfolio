import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Menu from '../Menu-Content/menuObject_PNG';
import Button from '../Button/Button';


const StyledCarousel = styled(Carousel)`
max-width: 50vw;
padding: 30px 30px;
`
const DescriptContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:3rem;
color:${Theme.colors.ColumnBlack};
font-family: 'Tangerine', cursive;
margin-left:2rem;
font-size:25px;




p1{
  font-size:20px;
  font-family: 'Work Sans', sans-serif;
  text-shadow: 0 2px 3px ${Theme.colors.BackgroundBlack};

}




p4{
  font-size:28px;
  width:300px;
  color:${Theme.colors.ColumnBlack}
  font-family: 'Hammersmith One', sans-serif;
}
`


const CarouselContainer = styled.div`


display:flex;
justify-content:space-between;
flex-direction:row;


`

const Image = styled.img`

`
const FoodImageContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:250px;
width:250px;

`

const Rating = styled.img`
height:20px;
width:20px;
`

const RatingImageContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100px;



`


const CarouselSlide = Menu.Main.map((data) =>{
  return(
   
  <CarouselContainer key={data.id}>
    <FoodImageContainer>
  <Image src={data.Image}/>  
  </FoodImageContainer>
    <DescriptContainer>
       <p1>{data.name}</p1>
       <RatingImageContainer>
        <Rating src={data.Rating}/>
      </RatingImageContainer>
       
       <p4>{data.Description}</p4>

       <Button checkout={true} backgroundColor={"transparent"} padding={"1.2rem 4rem;"}>Explore</Button>
     
      
      </DescriptContainer>
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
  
      <StyledCarousel
        showArrows={false}
        autoPlay={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        selectedItem={Menu.Main[currentIndex]}
        onChange={handleChange}
        width={"48vw"}    
      >
        {CarouselSlide}
      </StyledCarousel>
 
 ) }






export default CarouselComponent