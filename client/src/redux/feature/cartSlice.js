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
            console.log('Selected Category:', state.setCategory);
            console.log('Items in Selected Category:', menuObject[state.setCategory]);
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
            }

            
           
        },
        clearCart: (state) =>{
            state.cartItems = [];
        },
        removeItem: (state, action) =>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state,action) =>{
            const itemId = action.payload;
            const cartItem = state.cartItems.find( (item) => item.id === itemId);
            if (cartItem) {
                    cartItem.Amount += 1;
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
        }
    }
});





console.log(initialState)


export const { clearCart, removeItem, increase, decrease, calculateTotal,addItem,setStoreCategory} = cartSlice.actions;
export default cartSlice.reducer