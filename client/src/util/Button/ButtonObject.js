import Theme from '../../theme/theme';
import Button from "./Button"
import styled,{css} from "styled-components";
import { Link } from 'react-router-dom';


const ButtonTypes = {

    Confirm_Order:()=> (<Button type_normal={true} padding="1.5rem 3.875rem " text="Confirm Order" fontSize="2rem" backgroundColor={Theme.colors.OrangeLite} borderRadius="1rem"/>),

    Order_Now:()=> (
    
    
    
    
    
        <StyledLink to="/Menu">
            <Button type_normal={true} padding="2.063rem 6.813rem" text={"Order Now"} fontSize="1.5rem" backgroundColor={Theme.colors.OrangeLite} borderRadius="1rem"></Button>



        </StyledLink>
        )
    
    
    ,

    Add_to_Cart:({handleAddItems})=> {

        return(
    
    <>
    <Button type_normal={true} onClick={handleAddItems} padding="2.063rem 4.813rem" text="Add to Cart" fontSize="1.5rem" backgroundColor={Theme.colors.OrangeLite} borderRadius="1rem"/>
    </>
        )
        },

    Head_to_Check_out:()=> (<Button type_normal={true} padding="2.313rem 9.625rem " text="Head to Check Out" fontSize="1.5rem" backgroundColor={Theme.colors.OrangeLite} borderRadius="1rem"/>),

    Remove:({handleRemove})=> {
        return(
        <>
    
    <Button type_normal={true} onClick={handleRemove} padding=".30rem 1.25rem " text="Remove" fontSize="0.75rem" backgroundColor={Theme.colors.OrangeLite} borderRadius="1rem"/>
    </>
        )},
    

    Pay_Now:()=> (<Button type_normal={true} padding="1.5rem 5rem" text="Pay now" fontSize="1.5rem" backgroundColor={Theme.colors.OrangeLite} borderRadius="1rem"/>),

    Contact:()=>  (<Button type_normal={true} padding="1.375rem 4.875rem " text="Contact" fontSize="1.5rem" backgroundColor={Theme.colors.OrangeLite} borderRadius="1rem"/>),

    Confirm:()=>  (<Button type_normal={true} padding="1.375rem 4.875rem " text="Confirm" fontSize="1.5rem" backgroundColor={Theme.colors.BackgroundBlack} borderRadius="1.5rem"/>),

    Increment:({handleDecreaseCount,count,handleIncreaseCount})=> {
    
    return(<>
        <QuantityButton decrease onClick={handleDecreaseCount}> - </QuantityButton>
        <p>{count}</p>
        <QuantityButton increase onClick={handleIncreaseCount}> + </QuantityButton>
        </>)}
        
        
    

}





const QuantityButton = styled.button`
width:20px;
border:none;
background-color:white;
border-radius:4px;
height:100%;
&:hover{
    cursor:pointer;
}



${(props) => props.decrease && css`
border-right:1px solid black;
border-top-right-radius:0px;
border-bottom-right-radius:0px;


`}

${(props) => props.increase && css`
border-left:1px solid black;
border-top-left-radius:0px;
border-bottom-left-radius:0px;

`}

`


const StyledLink = styled(Link)`
color: white;
text-decoration: none;
padding-top:10px;


&:hover{
    color:${Theme.colors.Orange};
}
`

export default ButtonTypes;