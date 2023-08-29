import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import  ButtonTypes  from '../../util/Button/ButtonObject';
import Carousel from '../../util/Carousel/Carousel';
import Navbar from '../../util/Navbar/Navbar';
import Menu from '../../util/Menu-Content/menuObject_PNG';
import background_img_1 from '../../theme/images/Appetizers PNG/Meat Cherry.png';
import background_img_2 from '../../theme/images/Pasta PNG/Chicken Alfredo.png';
import background_img_3 from '../../theme/images/Desserts PNG/Goat Milk & Corn Panna Cotta.png'
import Footer from '../../util/Footer/Footer';
import MenuButton from '../../util/Button/DropdownButton';
import Cart from '../modal/CartModal'





const randomArrSort = (Menu = [],Count) => {
    const arrSort = Menu.sort(()=> 0.5 - Math.random());
    return arrSort.slice(0,Count);
}




const Dashboard = ()=>{

    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectedCategory = (category) =>{
        setSelectedCategory(category)
    }


    useEffect(() =>{ 
    const selectedMainItems = randomArrSort(Menu.Main, 4);
    const selectedPastaItems = randomArrSort(Menu.Pasta,4);
    const selectedAppetizers = randomArrSort(Menu.Appetizers,4);
    const selectedBeverageItems = randomArrSort(Menu.Beverage,4);
    const selectedDessertItems = randomArrSort(Menu.Desserts,4);


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




    

    
    
},[selectedCategory])
    
    

              
const handleClick = () =>{
    console.log("hello")
}




    return(
        <>

    <ContentWrapper>
        <BackgroundDecoration img_1>
        <img src={background_img_2}/>
        
        </BackgroundDecoration>

        <HeaderWrapper>
            <p1>Promotion</p1>
        <RightWrapper>
            <ButtonWrapper>
            <MenuButton navbar={"true"}>
                                
                                </MenuButton>
            </ButtonWrapper>

            <ImageWrapper>

            <Cart />
            </ImageWrapper>

            
        </RightWrapper>
        </HeaderWrapper>
        <BackgroundDecoration img_2>
        <img src={background_img_1}/>
        
        </BackgroundDecoration>

        
                <ContainerWrapper>

                    <CarouselContainer>

                     
                            <Carousel/>
                    </CarouselContainer>

                    <ButtonContainer>
                        <ButtonTypes.Order_Now/>
                    
                    </ButtonContainer>


                </ContainerWrapper>

                <Navbar handleSelectedCategory={handleSelectedCategory}/>

                <ItemScrollContainer>
                   
                {selectedItem.map( items =>{
            return(
            <ItemContainer key={items.id}>
               <ImageWrapper container>
            <img src={items.Image}/>
            </ImageWrapper>
               <DescriptionWrapper>
                               <p>{items.name}</p>
                               <p>{items.Price}</p>
                               <p>{items.Rating}</p>
                               </DescriptionWrapper>
            </ItemContainer>
            )
        })}

        <BackgroundDecoration img_3>
        <img src={background_img_3}/>
            </BackgroundDecoration>
                   
                       

                </ItemScrollContainer>







            

        
    

    
    
               
    </ContentWrapper>
    <Footer/>
    </>

    )
}

const BackgroundDecoration = styled.div`
position:absolute;
z-index: -1;
${(props)=> props.img_1 && css`
img{

    height:800px;
    width:1000px;
    margin-top:-20rem;
    margin-left:-20rem;
}


`}

${(props)=> props.img_2 && css`
img{
    margin-top:70rem;
    margin-left:90rem;
    height:400px;
    width:400px;
}


`}

${(props)=> props.img_3 && css`
img{
    margin-left:-20vw;
  
}


`}




`


const ContentWrapper = styled.div`

display:flex;
gap: 2rem;
flex-direction:column;
margin-:20vh 20vw;


`

const ContainerWrapper = styled.div`
display:grid;

padding:5rem 5rem;
background-color: ${Theme.colors.white};
gap:1rem;
margin-left: 20vw;
margin-right: 20vw;
border-radius:50px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

`




const CarouselContainer = styled.div`
  padding: 1rem 1rem;
  width:19rem;
`

const ButtonContainer = styled.div`
align-self: end;
grid-row-start:2;
grid-row-end:2;
justify-self:end;

 

`


const ItemScrollContainer = styled.div`
display:grid;
padding:5rem 20rem;
grid-template-columns: repeat(2, 1fr);
gap:5rem;
`



const DescriptionWrapper = styled.div`
display:grid;
grid-template-rows: repeat( 3, 1fr);
grid-row-start:2;
grid-row-end:2;


p:nth-child(1){
    font-family: 'Oleo Script', cursive;
        font-size:22px;
}

p:nth-child(2){
        font-family: 'Work Sans', sans-serif;
        font-size:18px;
        color:${Theme.colors.greenColumn}
}

p:nth-child(3){
    font-size:10px;
}


`

const ItemContainer = styled.div`
position:relative;
background-color: ${Theme.colors.white};
padding:5rem 5rem;
grid-row:span 1;
justify-self:center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
height:250px;
width:250px;

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
font-size:4rem;
margin-top:30px;
color: ${Theme.colors.ColumnBlack};
font-family: 'Hammersmith One', sans-serif;
text-shadow: 1px 2px 4px rgba(81,67,21,0.8);
display:flex;
justify-content:center;
gap:5rem;
align-items: center;
margin-bottom:5rem;



img{
    height:50px;
    width:50px;
    
}
`

const ButtonWrapper = styled.div`
position:relative;
display:flex;
justify-content:center;
flex-direction:column;
`

const RightWrapper = styled.div`
display:flex;
justify-content:flex-end;
width:40rem;
gap:1rem;

`


export default Dashboard




