import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Input from '../../util/Input/Input';
import Navbar from '../../util/Navbar/Navbar';
import menuObject from '../../util/Menu-Content/menuObject';
import background_img_1 from '../../theme/images/Appetizers PNG/Meat Cherry.png';
import background_img_2 from '../../theme/images/Pasta PNG/Chicken Alfredo.png';
import background_img_3 from '../../theme/images/Desserts PNG/Goat Milk & Corn Panna Cotta.png'
import Footer from '../../util/Footer/Footer';
import ButtonTypes from '../../util/Button/ButtonObject';
import MenuButton from '../../util/Button/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setStoreCategory} from '../../redux/feature/cartSlice';
import Cart from '../modal/CartModal';









const Menu = ()=>{
        const [selectedItem,setSelectedItem] = useState([])
        const [selectedCategory, setSelectedCategory] = useState('Main')
        const {cartItems,amount} = useSelector((store)=> store.cart)
        const dispatch = useDispatch()

       

        const menuSort = (Menu=[]) =>{
                const sort = Menu.map(item =>{
                        return {...item}
                })
                return sort
        }

        const handleAddItems = (itemId) =>{
                dispatch(addItem(itemId))
        }

        const handleStoreCategory = () =>{
                dispatch(setStoreCategory(selectedCategory))
        }




        const handleSelectedCategory = (category) => {
                setSelectedCategory(category)
                handleStoreCategory();
        }

       


        useEffect(() => {
                const itemCategory = menuSort(menuObject[selectedCategory]);
                setSelectedItem(itemCategory);
              }, []);


              useEffect(() => {
                if (selectedCategory) {
                  const itemCategory = menuSort(menuObject[selectedCategory]);
                  setSelectedItem(itemCategory);
                }
              }, [selectedCategory]);






  



    return(
       <>
        
        <MenuWrapper>
        <BackgroundDecoration img_1>
        <img src={background_img_2}/>
            </BackgroundDecoration>
        <HeaderWrapper>
                 <Input black searchBar={true} placeholder={"Search for a meal"}> </Input>
                       

                 <RightWrapper>
            <ButtonWrapper>
            <MenuButton navbar={"true"}/>
                                
                           
            </ButtonWrapper>
            <ImageWrapper>

            <Cart black/>
            
            </ImageWrapper>
        </RightWrapper>
        </HeaderWrapper>

        <BackgroundDecoration img_2>
                        <img src={background_img_1}/>
            </BackgroundDecoration>
                <NavWrapper>
                        <Navbar  handleSelectedCategory={handleSelectedCategory}/>
                </NavWrapper>

        </MenuWrapper>
        
        {selectedItem.map( items =>{
                            return(
                            <ItemContainer key={items.id}>
                               <img src={items.Image}/>
                               <DescriptionWrapper>
                               <p1>{items.name}</p1>
                               <p2>{items.Price}</p2>
                               <p3>{items.Rating}</p3>
                               <ButtonTypes.Add_to_Cart  handleAddItems={() => handleAddItems(items.id)}/>
                               </DescriptionWrapper>
                               
                            </ItemContainer>
                            )
                        })}

<ContentWrapper>
        <BackgroundDecoration img_3>
        <img src={background_img_3}/>
        </BackgroundDecoration>
       
        </ContentWrapper>
        
        <Footer/>
        </>

        
    )
}

const ContentWrapper = styled.div`

display:flex;
flex-direction:column;
margin-bottom:6rem;


`




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
    margin-left:65rem;
    height:400px;
    width:400px;
}


`}

${(props)=> props.img_3 && css`

img{
    margin-top:-60rem;
    
}


`}




`




const MenuWrapper = styled.div`
display:grid;
margin-left:20vw; margin-right:20vw;
grid-template-columns: repeat(2, 1fr);
grid-template-rows:repeat(1,1fr);
column-gap:2rem;
padding-top:5rem;
`


const NavWrapper = styled.div`
grid-row-start:2;
grid-column-start:1;
grid-column-end:3;
`

const ButtonWrapper = styled.div`
position:relative;
display:flex;
justify-content:center;
flex-direction:column;

`

const DescriptionWrapper = styled.div`
display:grid;
grid-template-rows: repeat( 4, 1fr);
grid-column-start:2;
grid-column-end:2;
grid-row:3 span;
width:25rem;


p1{
        font-size:35px;
}

p2{
  
        font-size:30px;
        color:${Theme.colors.greenColumn}
}

`


const ItemContainer = styled.div`
display:grid;
grid-template-columns: repeat( 2, 1fr);
position:relative;
background-color: ${Theme.colors.white};
padding:5rem 5rem;
justify-self:center;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
margin-left:20vw; margin-right:20vw;
font-family: 'Work Sans', sans-serif;



img{
        height:400px;
        width:400px;
        border-radius:20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}


`


const ImageWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;

`


const HeaderWrapper = styled.header`
color: ${Theme.colors.ColumnBlack};
font-family: 'Hammersmith One', sans-serif;
display:flex;
justify-content:space-between;
align-items: center;
width:60vw;
padding-top:5rem;





img{
    height:50px;
    width:50px;
    
}
`

const RightWrapper = styled.div`
display:flex;
justify-item:flex-end;
gap:1rem;
`





export default Menu




