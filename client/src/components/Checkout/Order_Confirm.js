import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import menuObject from '../../util/Menu-Content/menuObject';
import Footer from '../../util/Footer/Footer';
import ButtonTypes from '../../util/Button/ButtonObject';
import Button from '../../util/Button/Button';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increase, decrease} from '../../redux/feature/cartSlice'








const Menu = ()=>{
        const [selectedItem,setSelectedItem] = useState([])
        const [selectedCategory, setSelectedCategory] = useState('Main')
        const {cartItems} = useSelector((store) => store.cart)
        const dispatch = useDispatch()

        const handleIncreaseAmount = (itemId) =>{
                dispatch(increase(itemId))
        }

        const handleDecreaseAmount = (itemId) =>{
                dispatch(decrease(itemId))
        }


        const handleRemoveItem = (itemId) =>{
                dispatch(removeItem(itemId))
        }




        const menuSort = (Menu=[]) =>{
                const sort = Menu.map(item =>{
                        return {...item}
                })
                return sort
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
       <PageWrapper>
        <HeaderWrapper>
                 <RightWrapper>
            <ButtonMenuWrapper>
                        <Button menu={"true"} padding=".5rem 3.875rem" text="Menu"/>
            </ButtonMenuWrapper>
            <ImageWrapper>
           <FaShoppingCart style={{color: "white"}}/>
            </ImageWrapper>
        </RightWrapper>
    </HeaderWrapper>
    <ProgressBarContainer>
        <ProgressBar>
        </ProgressBar>

    <CheckpointContainer>
        <Checkpoint><div><span></span></div></Checkpoint>
        <Checkpoint> <div><span></span></div></Checkpoint>
        <Checkpoint> <div><span></span></div></Checkpoint>
    </CheckpointContainer>                  


    </ProgressBarContainer> 
    
       
    <CheckOutWrapper>
        {cartItems.map( items =>{
                            return(
                            <ItemContainer key={items.id}>
                               <img src={items.Image}/>
                               <DescriptionWrapper>
                               <p1>{items.name}</p1>
                               <p2>{items.Price}</p2>
                               <p3>{items.Amount}</p3>
                               </DescriptionWrapper>
                               <IncrementButtonWrapper>
                <ButtonTypes.Increment handleDecreaseCount={() => handleDecreaseAmount(items.id)} handleIncreaseCount={() => handleIncreaseAmount(items.id)} count={items.Amount}/>
              
        </IncrementButtonWrapper>
        
        <ButtonWrapper>
                <ButtonTypes.Remove handleRemove={() => handleRemoveItem(items.id)}/>
        </ButtonWrapper>
                            </ItemContainer>
                            )
                        })}
        <ButtonWrapper Confirm_Order>
                        <ButtonTypes.Confirm_Order/>
        </ButtonWrapper>
     </CheckOutWrapper>             


        
        <Footer/>
        </PageWrapper>

        
    )
}


const HeaderWrapper = styled.header`
font-size:4rem;
color: ${Theme.colors.ColumnBlack};
font-family: 'Hammersmith One', sans-serif;
display:flex;
justify-content:flex-end;
align-items: center;
width:60vw;
margin-left:auto;
margin-right:auto;



img{
    height:50px;
    width:50px;
    
}
`

const ButtonMenuWrapper = styled.div`
position:relative;
display:flex;
justify-content:center;
`

const RightWrapper = styled.div`
display:flex;
justify-item:flex-end;
gap:1rem;
align-items:center;
`

const ImageWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;

`


const ProgressBarContainer = styled.div`

display:flex;
justify-content:center;
align-items:center;
height:100px;
width:70rem;
margin-left:auto;
margin-right:auto;
`

const CheckpointContainer = styled.div`
display:flex;
position:absolute;
width:25rem;
height:80px;
display:flex;
align-items:center;
gap:8rem;



`

const ProgressBar = styled.div`
width:100%;
height:10px;
background-color:${Theme.colors.white};


`
const Checkpoint = styled.label`
height:50px;
width:50px;
background-color: ${Theme.colors.white};
border-radius:50%;
display:flex;
justify-contents:center;
align-items:center;

&:nth-child(1){
div{
height:40px;
width:40px;
margin:auto auto;
background-color: ${Theme.colors.Teal};
border-radius:50%;
display:flex;
justify-contents:center;
align-items:center;



span{
  
  margin:auto auto;
  width: 5px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

}

}




`

const CheckOutWrapper = styled.div`
padding-bottom:10rem;
background-color: ${Theme.colors.white};
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
width:60vw;
margin-left:20vw;
margin-right:20vw;
display:grid;
grid-template-columns: repeat(1,1fr);

`





const IncrementButtonWrapper = styled.div`
border:1px solid black;
height:1.5rem;
width:80px;
border-radius:4px;
display:flex;
justify-content:space-between;
justify-items:right;
justify-self:right;
align-content:right;
align-items:center;
font-size:10px;
grid-column-start:2;
grid-column-end:2;
grid-row-start:4;
grid-row-end:4;
margin-right:3.5rem;


`



const ButtonWrapper = styled.div`
grid-column-start:3;
grid-column-end:3;
grid-row-start:4;
grid-row-end:4;
padding-left:2rem;padding-right:2rem;


${(props) => props.Confirm_Order && css`
padding-top:5rem;
padding-right:5rem;
grid-column-start:1;
grid-column-end:1;
grid-row-start:auto;
grid-row-end:auto;
align-items:end;
justify-self:end;
`}

`
const DescriptionWrapper = styled.div`
display:grid;
grid-template-rows: repeat( 2, 1fr);
grid-template-columns: repeat( 3, 1fr);
column-gap:1rem;
grid-column-start:2;
grid-column-end:4;
padding-left:8rem;
justify-items:center;
justify-self:center;
align-content:center;




p1{
        font-size:15px;
        width:10rem;
        gap:10rem;
        grid-column-start:1;
        grid-column-end:1; 
        
}

p2{
  
        font-size:15px;
        grid-column-start:2;
        grid-column-end:2;  

}

p3{
  
    font-size:15px;
    grid-column-start:3;
    grid-column-end:3;  

}

`




const ItemContainer = styled.div`
display:grid;
position:relative;
grid-template-rows: repeat( 4, 2.5rem);
grid-template-columns: repeat( 2, 1fr);
position:relative;
justify-items:center;
background-color: ${Theme.colors.white};
padding:2rem 1rem;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
font-family: 'Work Sans', sans-serif;








img{
        height:150px;
        width:150px;
        border-radius:20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
       
}



`


const PageWrapper = styled.div`
background-color: ${Theme.colors.ColumnBlack};
padding-top:20rem;
display:flex;
flex-direction:column;
gap:5rem;
`






export default Menu




