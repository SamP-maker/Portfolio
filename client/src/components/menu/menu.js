import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import Input from '../../util/Input/Input';
import Navbar from '../../util/Navbar/Navbar';
import menuObject from '../../util/Menu-Content/menuObject';
import Footer from '../../util/Footer/Footer';
import ButtonTypes from '../../util/Button/ButtonObject';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setStoreCategory} from '../../redux/feature/cartSlice';
import Cart from '../modal/CartModal';
import { Logo } from '../../theme/theme';
import { useParams } from 'react-router-dom';










const Menu = ()=>{
        const [selectedItem,setSelectedItem] = useState([])
        const [selectedCategory, setSelectedCategory] = useState('Main')
        const { name } = useParams()
        
        const dispatch = useDispatch()

        const [searchItem, setSearchItem] = useState('')
        
     

        const handleSearch = (e) =>{

               
                const inputValue = e.target.value;
                const trimmedValue = inputValue.trim(); 
                const isAlphabetWithSpace = /^[a-zA-Z\s]+$/.test(trimmedValue); 

                if(name){
                        
                        setSearchItem(name)

                }else{
                if(isAlphabetWithSpace){
                        
                 setSearchItem(trimmedValue)
                }else{
                        setSearchItem(inputValue.replace(/[^a-zA-Z\s]/g, ''))
                }
        }
       }
        

        const menuSort = (Menu=[]) =>{
                const sort = Menu.map(item =>{
                        return {...item}
                })
                return sort
        }


        async function searchBarFetchItem(){

                const category = ['Main','Pasta', 'Appetizers', 'Beverage', 'Desserts']
                let searchResults = [];
               for (let i = 0; i < category.length; i++) {
    const categoryName = category[i];
    const menu = menuObject[categoryName];

    if (name) {
      // If the name parameter is present, try to find a menu item with the same name
      const menuItem = menu.find((item) => item.name.toLowerCase() === name.toLowerCase());

      if (menuItem) {
        searchResults.push(menuItem);
      }
    } else {
      // If no name parameter, search for items based on the search input
      const results = menu.filter((item) => item.name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1);
      searchResults = searchResults.concat(results);
    }
  }
      
              setSelectedItem(searchResults)
        
        }

       
        useEffect(() => {
                
                dispatch(setStoreCategory(selectedCategory))
            
                
                  const itemCategory = menuSort(menuObject[selectedCategory]);
                  setSelectedItem(itemCategory);
                  
              }, [selectedCategory,dispatch]);


        useEffect(()=>{
                searchBarFetchItem()
        },[searchItem])



       

        const handleAddItems = (itemId) =>{
                dispatch(addItem(itemId))
        }

   

        const handleSelectedCategory = (category) => {
                setSelectedCategory(category)
               
        }

       








  



    return(
       <PageWrapper>
    
    <Cart/>
        
              


       
        <HeaderWrapper>
                   
        <Logo/>

<InputWrapper>
 <Input  white={true} searchBar={true} 
 placeholder={"Search for a meal"}
 value={searchItem}
 onChange={handleSearch}
 
 
 /> 
 
 </InputWrapper>   
           
                       
        </HeaderWrapper>

        
                <NavWrapper>
                        <Navbar  handleSelectedCategory={handleSelectedCategory}/>
                </NavWrapper>


        
<ItemScrollContainer>
        {selectedItem.map( items =>{
                            return(
                            <ItemContainer key={items.id}>
                               <ItemImageContainer  src={items.Image}/>
                               <DescriptionWrapper>
                               <p1>{items.name}</p1>
                               <p4>{items.Description}</p4>
                               <p2>${items.Price}</p2>
                               <RatingContainer src={items.Rating}/>
                       
                               <ButtonTypes.Add_to_Cart  handleAddItems={() => handleAddItems(items.id)}/>
                        
                               </DescriptionWrapper>
                               
                            </ItemContainer>
                            )
                        })}

        
       
        </ItemScrollContainer>
        
        <Footer/>
        </PageWrapper>

        
    )
}

const PageWrapper = styled.div`
overflow-x:hidden;

`


const InputWrapper = styled.div`

width:50vw;
padding:5rem 5rem;

`


const HeaderWrapper = styled.div`


display:flex;
margin-top:3.6rem;
align-content:center;
flex-direction:row;

position:relative;



`





const RatingContainer = styled.img`
height:20px;
`

const ItemImageContainer = styled.img`
width:300px;
height:300px;
border-radius:20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);



`

const ItemScrollContainer = styled.div`
display:flex;
flex-wrap:wrap;
width:100vw;
gap:0.5rem;

margin-top:-20px;

`






const NavWrapper = styled.div`
grid-row-start:2;

`



const DescriptionWrapper = styled.div`
display:flex;
margin-top:1rem;
gap:1rem;
flex-direction:column;
justify-content:center;
align-items:center;
text-align: center;
padding:2rem 2rem;


p1{
        font-size:20px;
        font-family: 'Work Sans', sans-serif;
        
}

p2{
  
        font-size:18px;
        font-family: 'Work Sans', sans-serif;
        color:${Theme.colors.ColumnBlack}
}

p4{
        
        font-size:10px;
        color:${Theme.colors.ColumnBlack}
        font-family: 'Hammersmith One', sans-serif;
        font-style: italic;
        padding-left:.5rem;
        padding-right:.5rem;
        
       
        
}

`


const ItemContainer = styled.div`
display:flex;
flex-direciton:column;
flex-wrap:wrap;
padding:15rem 15rem;
justify-self:center;
justify-content:center;
font-family: 'Work Sans', sans-serif;
height:400px;
width:450px;



`







export default Menu




