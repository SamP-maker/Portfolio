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
        <Cart/>
        <MenuWrapper>
                
        <BackgroundDecoration img_1>
        <img src={background_img_2}/>
            </BackgroundDecoration>
        <HeaderWrapper>
                
                 <Input black searchBar={true} placeholder={"Search for a meal"}> </Input>
                       
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
                               <p4>{items.Description}</p4>
                               <p2>{items.Price}</p2>
                               <p3>{items.Rating}</p3>
                        <ButtonContainer>
                               <ButtonTypes.Add_to_Cart  handleAddItems={() => handleAddItems(items.id)}/>
                        </ButtonContainer>
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
const ButtonContainer = styled.div`
width:100%;
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



const DescriptionWrapper = styled.div`
display:grid;
grid-template-rows: repeat( 4, 1fr);
grid-column-start:2;
grid-column-end:2;
grid-row: 3 span;
width:25rem;


p1{
        font-size:35px;
        font-family: 'Work Sans', sans-serif;
}

p2{
  
        font-size:30px;
        font-family: 'Work Sans', sans-serif;
        color:${Theme.colors.greenColumn}
}

p4{
        font-size:10px;
        color:${Theme.colors.ColumnBlack}
        font-family: 'Hammersmith One', sans-serif;
}

`


const ItemContainer = styled.div`
display:grid;
position:relative;
grid-template-columns: repeat(2, 1fr);

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



const HeaderWrapper = styled.header`
color: ${Theme.colors.ColumnBlack};
font-family: 'Hammersmith One', sans-serif;
display:flex;
justify-content:space-between;
align-items: center;
width:60vw;
padding-top:5rem;
margin-top:5rem;






img{
    height:50px;
    width:50px;
    
}
`







export default Menu




