import Theme from '../../theme/theme';
import Button from "./Button"
import styled,{css} from "styled-components";
import { Link } from 'react-router-dom';


const ButtonTypes = {

    Confirm_Order:()=> (<Button checkout={true} padding="1.2rem 2rem " type="submit" text="Confirm Order"  fontSize="1rem" backgroundColor={"transparent"}/>),

    Order_Now:()=> (
    
    
    
    
    
        <StyledLink to="/Menu">
            <Button type_normal={true} padding="2.063rem 6.813rem" text={"Order Now"} fontSize="1.5rem" backgroundColor={Theme.colors.OrangeLite} borderRadius="1rem"></Button>



        </StyledLink>
        )
    
    
    ,

    Add_to_Cart:({handleAddItems})=> {

        return(
    
    <>
    <Button type_normal={true} onClick={handleAddItems} padding="1rem 3rem" text="Add to Cart" fontSize="1rem" backgroundColor={"transparent"} />
    </>
        )
        },

    Head_to_Check_out:({type})=> (<Button checkout={true} type={type} padding=".8rem 1.625rem " text="Head to Check Out" fontSize="1rem" backgroundColor={"transparent"} />),

    Remove:({handleRemove})=> {
        return(
        <>
    
    <Button checkout={true} onClick={handleRemove} padding=".4rem 1.25rem " text="Remove" fontSize="0.75rem" backgroundColor={"transparent"} />
    </>
        )},
    

    Pay_Now:()=> (
    
                    <Button type_normal={true} padding="1.5rem 5rem" text="Pay now" fontSize="1.5rem" backgroundColor={"transparent"}  type="submit"/>
  
    ),

    Contact:()=>  (<Button checkout={true} padding="1.375rem 4.875rem " text="Contact" fontSize="1.5rem" backgroundColor={"transparent"}/>),

    Confirm:()=>  (<Button type_normal={true} padding="1.375rem 4.875rem " text="Confirm" fontSize="1.5rem" backgroundColor={Theme.colors.BackgroundBlack} borderRadius="1.5rem"/>),

    Increment:({handleDecreaseCount,count,handleIncreaseCount})=> {
    
    return(<>
        <QuantityButton decrease onClick={handleDecreaseCount}> - </QuantityButton>
        <p>{count}</p>
        <QuantityButton increase onClick={handleIncreaseCount}> + </QuantityButton>
        </>)},


Billing_Address:()=> (  <Button checkout={true} type="submit" padding=".8rem 1.625rem " text="Head to Billing Address" fontSize="1rem" backgroundColor={"transparent"} />),

  
        
        
    

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