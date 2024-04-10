import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';



export const fetchOrderData = createAsyncThunk('DBcart/fetchOrderData', async () => {
    try {
      const response = await fetch(`http://localhost:5000/order`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
  
      const data = await response.json();
      const {Order,Total, ItemsAmount} = data[0]
    
  
      return {Order,Total,ItemsAmount};
    } catch (error) {
      throw error;
    }
  });







const initialState = {
    originalData:[],
    cartItems: [],
    Order_id: 0,
    amount:0,
    total:0,
    setCategory: 'Main',
    isLoading:true,
    tempTotal:0,
    tempAmount:0,

};




const DBcartSlice = createSlice({
    name:'DBcart',
    initialState,
    reducers:{

        fetchfromDB: (state,action) => {
            const { Order, Total, ItemsAmount } = action.payload;
            state.originalData.push(...state.originalData, ...Order.map(item=>({...item})))
            state.cartItems.push(...state.cartItems,...Order.map(item => ({ ...item })));
            state.total += Total
            state.amount += ItemsAmount
            
          

         
            
        },
        removeItem: (state, action) =>{
            const itemId = action.payload;
            const removedItem = state.cartItems.find((item) => item.id !== itemId);
            const cartItem = state.cartItems.find((item) => item.id === itemId);

            if(removedItem){
                state.total -= removedItem.Price * removedItem.Amount
                state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
                state.amount -=  cartItem.Amount;
            }else{
                state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
                state.total = 0
                state.amount -=  cartItem.Amount;
            }
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
        cancelCart: (state) =>{
            state.cartItems = [...state.originalData.map((item) => ({...item}))]
            console.log(state.cartItems)
            state.amount = state.tempAmount
            state.total = state.tempTotal
           
        
        }
        
        
   
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchOrderData.fulfilled, (state,action) =>{
            const { Order, Total, ItemsAmount, _id} = action.payload;
            state.cartItems = [...Order.map((item) => ({...item}))];
            state.originalData =  [...Order.map((item) => ({...item}))];
            state.Order_id = _id
            state.total = Total
            state.tempAmount = ItemsAmount
            state.tempTotal = Total
            state.amount = ItemsAmount
        })
    }
});








export const {fetchfromDB ,removeItem ,increase,decrease,cancelCart} = DBcartSlice.actions;
export default DBcartSlice.reducer