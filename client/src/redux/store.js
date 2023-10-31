import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './feature/cartSlice'
import userReducer from './feature/registrationSlice'


const store =  configureStore({
    reducer:{
        cart: cartReducer,
        modal:'',
        user: userReducer,
    }
   
})



export default store;