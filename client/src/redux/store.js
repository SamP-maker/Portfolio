import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './feature/cartSlice'
import userReducer from './feature/registrationSlice'
import dbcartReducer from './feature/DBcartSlice'
import addressReducer from './feature/AddressSlice'
import billingAddressReducer from './feature/BillingAddressSlice'
import creditCardCredentialsReducer from './feature/CardCredentialSlice'
import localStorageMiddleware from './middleware/middleware'
import thunk from 'redux-thunk'; // Assuming you're using redux-thunk for async actions




  

const store =  configureStore({
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
    reducer:{
        cart: cartReducer,
        user: userReducer,
        PaymentCart: dbcartReducer,
        address: addressReducer,
        billing: billingAddressReducer,
        credit : creditCardCredentialsReducer,
        

    },
    
   
})



export default store;