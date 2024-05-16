import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './feature/cartSlice'
import userReducer from './feature/registrationSlice'
import dbcartReducer from './feature/DBcartSlice'
import addressReducer from './feature/AddressSlice'
import billingAddressReducer from './feature/BillingAddressSlice'
import creditCardCredentialsReducer from './feature/CardCredentialSlice'
import localStorageMiddleware from './middleware/middleware'
import { ErrorReducer} from './feature/ErrorManagement';
import { LoadReducer } from './feature/LoadManagement';
import { PostReducer } from './feature/PostManagement';
import { ReceiptReducer } from './feature/ReceiptSlice';
import authReducer from './feature/authSlice';
import { PaymentReducer } from './feature/PaymentManagement'



  

const store =  configureStore({
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
    reducer:{
        cart: cartReducer,
        user: userReducer,
        PaymentCart: dbcartReducer,
        address: addressReducer,
        billing: billingAddressReducer,
        credit : creditCardCredentialsReducer,
        error : ErrorReducer,
        load: LoadReducer,
        post: PostReducer,
        receipt: ReceiptReducer,
        auth: authReducer,
        Payment: PaymentReducer,
        

    },
    
   
})



export default store;