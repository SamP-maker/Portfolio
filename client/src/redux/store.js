import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './feature/cartSlice'
import userReducer from './feature/registrationSlice'
import dbcartReducer from './feature/DBcartSlice'


const store =  configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
        PaymentCart: dbcartReducer,
        

    }
   
})



export default store;