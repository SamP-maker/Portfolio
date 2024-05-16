
import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Carousel from '../../util/Carousel/Carousel';
import Navbar from '../../util/Navbar/Navbar';
import Menu from '../../util/Menu-Content/menuObject_PNG';
import Caterring from '../../theme/images/Caterring.jpg';
import Kitchen from '../../theme/images/Kitchen.png';
import Footer from '../../util/Footer/Footer';
import Cart from '../modal/CartModal'
import { Logo } from '../../theme/theme';
import Button from '../../util/Button/Button';
import { useSelector } from 'react-redux';
import Login from '../Auth/Login';
import Signup from '../Auth/Sign_up';






const randomArrSort = (Menu = [],Count) => {
    const arrSort = Menu.sort(()=> 0.5 - Math.random());
    return arrSort.slice(0,Count);
}




const Dashboard = ()=>{

    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { isFormOpen, isSignUpFormOpen} = useSelector((state) => state.auth);
    const {cartItems,amount,total,setCategory, isOpen} = useSelector((store) => store.cart)
       

    const handleSelectedCategory = (category) =>{
        setSelectedCategory(category)
    }


    useEffect(() =>{ 
    const selectedMainItems = randomArrSort(Menu.Main, 2);
    const selectedPastaItems = randomArrSort(Menu.Pasta,1);
    const selectedAppetizers = randomArrSort(Menu.Appetizers,1);
    const selectedBeverageItems = randomArrSort(Menu.Beverage,1);
    const selectedDessertItems = randomArrSort(Menu.Desserts,1);


    let allSelectedItems = [
        ...selectedMainItems,
        ...selectedPastaItems,
        ...selectedAppetizers,
        ...selectedBeverageItems,
        ...selectedDessertItems,
    ];




    if(selectedCategory){
        const selectedItemCategory = randomArrSort(Menu[selectedCategory],6)
        setSelectedItem(selectedItemCategory)  
    }else{
        setSelectedItem(allSelectedItems)
    }




    
    console.log(isFormOpen)
    
    
},[selectedCategory])
    
    


const Section_1 = styled.div`
display:flex;
justify-content:space-evenly;
flex-direction:column;

`
const Section_1_message = styled.p`
display:inline-block;
width:600px;
margin-left:2rem;
font-family: 'Tangerine', cursive;
font-weight:bold;
font-size:30px;
margin-bottom:2rem;
`



    return(
        <>
          {isFormOpen == true ?  <Login/> : null }
          {isSignUpFormOpen == true ?  <Signup/> : null }
          <Cart/>
          
        <PageWrapper  isCartOpen={isOpen} isFormOpen={isFormOpen} isSignUpFormOpen={isSignUpFormOpen}>
  
        <OverlayWrapper isCartOpen={isOpen}/>

    <ContentWrapper>
    

        <HeaderWrapper>
        <Section_1>
        <Logo/>
        <Section_1_message>Serving you only the finest and fresh ingredients found 

            in our local town. Crafted by our head-chef with multi-

            year experience.
        </Section_1_message>
        </Section_1>
        <CarouselContainer>           
        <Carousel/>
        </CarouselContainer> 
        </HeaderWrapper>
       

        


                  
              




                <Navbar handleSelectedCategory={handleSelectedCategory}/>

                <ItemScrollContainer>
                   
                {selectedItem.map( items =>{
            return(
            <ItemContainer key={items.id}>
               <ImageWrapper container>
               <ItemImageContainer  src={items.Image}/>
            </ImageWrapper>
               <DescriptionWrapper>
                               <p>{items.name}</p>
                               <p>{items.Price}</p>
                               <p>{items.Description}</p>
                               <RatingContainer src={items.Rating}/>
                               </DescriptionWrapper>
            </ItemContainer>
            )
        })}

      
                   
                       

                </ItemScrollContainer>


        <Section_3>
         
            
            <EventImageContainer left>
            <CategoryTitle >Event</CategoryTitle>
            <Image src={Caterring} left/>
            <ButtonWrapper>
            <Button explore={true} padding={"1rem 6rem"} backgroundColor={"transparent"} fontSize={"1.3rem"}>Reserve</Button>
        </ButtonWrapper>
        
            </EventImageContainer>
        
        
            





            <EventImageContainer right>
            <CategoryTitle >Career</CategoryTitle>
        <Image src={Kitchen} right/>    

         <ButtonWrapper>
            <Button explore={true} padding={"1rem 6rem"} backgroundColor={"transparent"} fontSize={"1.3rem"}>Contact</Button>
        </ButtonWrapper> 
            </EventImageContainer>

        </Section_3>




            

        
    

    
    
               
    </ContentWrapper>
    <Footer/>
    
    </PageWrapper>

   
    </>
    )
}

const PageWrapper = styled.div`
overflow-x:hidden;
filter: ${props => (props.isFormOpen || props.isSignUpFormOpen ? 'blur(10px)' : 'none')};
    /* Adjust the blur radius as needed */
    pointer-events: ${props => (props.isFormOpen || props.isSignUpFormOpen? 'none' : 'auto')};
`

const OverlayWrapper = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: ${(props) => (props.isCartOpen ? 'block' : 'none')};


`

const ButtonWrapper = styled.div`
position:absolute;
bottom:20%;
left:35%;
`


const CategoryTitle = styled.h2`
position:absolute;
color:white;
padding:2rem 5rem;
font-family: 'Work Sans', sans-serif;
font-size:30px;
text-shadow: 0 2px 4px ${Theme.colors.ColumnBlack};
`

const Image = styled.img`
height:700px;
width:50vw;



${(props) => props.left && css`

width:50vw;
box-shadow:inset 0 2px 4px ${Theme.colors.BackgroundBlack};

&:hover{
    box-shadow:inset 0 2px 4px ${Theme.colors.white};

  
}
`}



${(props) => props.right && css`

width:50vw;
box-shadow:inset 0 2px 4px ${Theme.colors.BackgroundBlack};

&:hover{
    box-shadow:inset 0 2px 4px ${Theme.colors.white};
   
}
`}

`

const EventImageContainer = styled.div`
position:relative;

transition:2s;

${(props) => props.left && css`
&:hover{
    opacity:0.9;
    transition:2s;
   
}


`}


${(props) => props.right && css`

&:hover{
    opacity:0.9;
    transition:2s;
   
}


`}
`

const Section_3 = styled.div`

height:700px;
display:flex;
flex-direction:row;


`

const CarouselContainer = styled.div`
top:0;
right:2rem;
position:absolute;

`

const RatingContainer = styled.img`
height:20px;
`

const ItemImageContainer = styled.img`


`




const ContentWrapper = styled.div`

display:flex;
gap: 2rem;
flex-direction:column;
margin-:20vh 20vw;


`








const ItemScrollContainer = styled.div`
display:flex;
flex-wrap:wrap;
width:100vw;
gap:0.5rem;
margin-top:-20px;

`



const DescriptionWrapper = styled.div`
display:flex;
margin-top:1rem;
gap:1rem;
flex-direction:column;
justify-content:center;
align-items:center;

text-align: center;

p:nth-child(1){
    font-family: 'Oleo Script', cursive;
        font-size:22px;
}

p:nth-child(2){
        font-family: 'Work Sans', sans-serif;
        font-size:18px;
        color:${Theme.colors.BackgroundBlack};
}

p:nth-child(3){
    font-size:25px;
    font-weight:bold;
    font-family: 'Tangerine', cursive;
}


`

const ItemContainer = styled.div`
position:relative;
background-color: ${Theme.colors.white};
justify-self:center;
padding:12rem 11.8rem;
height:250px;
width:250px;



&:hover{
    cursor:pointer;
    box-shadow: 0 .3px 4px rgba(0, 0, 0, 0.7);
}
`
const ImageWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;



${(props) => props.container && css`
display:flex;
justify-content:center;
align-items:center;
height:200px;
img{
    height:190px;
    width:190px;
    
}



`}
`


const HeaderWrapper = styled.header`
display:flex;
margin-top:3.6rem;

flex-direction:row;


position:relative;
`



export default Dashboard




