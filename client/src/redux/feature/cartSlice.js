import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import menuObject from '../../util/Menu-Content/menuObject';




const initialState = {
    cartItems: [],
    amount:0,
    total:0,
    setCategory: 'Main',
    isLoading:true
};




const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setStoreCategory: (state,action)=>{
            state.setCategory = action.payload;

        },
        addItem: (state,action)=>{
            const itemId = action.payload;
            
        
            
            const itemToAdd = menuObject[state.setCategory].find(items => items.id === itemId)

            if(itemToAdd){

                const existingItemIndex = state.cartItems.findIndex(items => items.id === itemId)
                if(existingItemIndex !== -1){
                    state.cartItems[existingItemIndex].Amount += 1;
                }else{
                    state.cartItems.push({...itemToAdd, Amount: 1});
                }
              
                state.amount += 1;
                state.total += itemToAdd.Price;
                console.log( 'items added to list:', JSON.stringify(itemToAdd, null, 2))
                console.log( JSON.parse(JSON.stringify(state.cartItems)))

                console.log(state.cartItems)
            } else {
                // If the item is not found in its reported category,
                // handle it by searching across all categories
            
                const categories = ['Main', 'Pasta', 'Appetizers', 'Beverage', 'Desserts'];
            
                for (const category of categories) {
                  const categoryItem = menuObject[category].find((item) => item.id === itemId);
            
                  if (categoryItem) {
                    state.cartItems.push({ ...categoryItem, Amount: 1 });
                    state.amount += 1;
                    state.total += categoryItem.Price;
            
                    console.log('Item added to list:', JSON.stringify(categoryItem, null, 2));
                    console.log(JSON.parse(JSON.stringify(state.cartItems)));
                    console.log(state.cartItems);
                    break; // Exit loop if item is found in any category
                  }
                }
              }
            
           
        },
        clearCart: (state) =>{
            state.cartItems = [];
        },
        removeItem: (state, action) =>{
            const itemId = action.payload;
            
            const removedItem = state.cartItems.find((item) => item.id !== itemId);
            const cartItem = state.cartItems.find((item) => item.id === itemId);



            if(removedItem){
                console.log(removedItem.Amount)
                state.total -= removedItem.Price * removeItem.Amount;
                state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
                state.amount -=  cartItem.Amount;
            }else{
                state.total -= removedItem.Price * removeItem.Amount;
                state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
                state.amount -= removedItem.Amount ;

            }
        },
        increase: (state,action) =>{
            const itemId = action.payload;
            const cartItem = state.cartItems.find( (item) => item.id === itemId);
            if (cartItem) {
                    cartItem.Amount += 1;
                    console.log(cartItem)
                    state.amount += 1;
                    state.total += cartItem.Price
            }
            
          
        },
        decrease: (state,action) => {
            const itemId = action.payload
            const cartItem = state.cartItems.find((item) => item.id === itemId);
            
            if (cartItem && cartItem.Amount > 0){
                cartItem.Amount -= 1;
                state.amount -= 1;
                state.total  -= cartItem.Price
                if(cartItem.Amount === 0 ){
                    state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
                    state.total += cartItem.Price;
                    state.amount += 1;
                   
                }
            }
           
        },
        calculateTotal: (state)=>{
            let total = 0;
            state.cartItems.forEach((item) =>{
                total += item.Amount * item.Price;
            });
            state.total = (total/100).toFixed(2);
        },
   
    }
});








export const { clearCart, removeItem, increase, decrease, calculateTotal,addItem,setStoreCategory} = cartSlice.actions;
export default cartSlice.reducer