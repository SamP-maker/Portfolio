import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {saveAddressToLocalStorage} from '../actions/actionCreator';




const initialState = {
    errors:{
        Auth:{
            UserFetchStatus:false,

        },
        
        Address:{
            AllAddressFetchStatus:false,
            AddressFillStatus:false,
            AddressSelectStatus:false,
        },
        BillingAddress:{
            AllBillingAddressFetchStatus:false,
            BillingAddressFillStatus:false,
            BillingAddressSelectStatus:false,
        },
        Registration:{
            LoginFetchStatus:false,
            SignupSendStatus:false,
        },
        CreditCard:{
            AllCreditCardFetchStatus:false,
            CreditCardSelectStatus:false,
        },
        Cart:{
            CartStatus:false,
        },
        
        PhoneNumber:{
            PhoneNumberFillStatus: false,
        },
        


    },

   
    
}



const ErrorSlice = createSlice({
    name:'Error',
    initialState: initialState.errors,
    reducers:{
        //User Details Error Status
        setUserFetchStatus:(state,action)=>{
            state.Auth.UserFetchStatus = action.payload;
        },
       
        //Address Error Status
        setAddressFetchStatus:(state,action)=>{
            state.Address.AllAddressFetchStatus = action.payload;
        },
        setAddressFillStatus: (state,action)=>{
            state.Address.AddressFillStatus = action.payload;
        },
        setAddressSelectStatus: (state,action)=>{
            state.Address.AddressSelectStatus = action.payload;
        },

        //Billing Address Error Status
        setBillingAddressFetchStatus:(state,action)=>{
            state.BillingAddress.AllBillingAddressFetchStatus = action.payload;
        },

        setBillingAddressSelectStatus:(state,action)=>{
            state.BillingAddress.BillingAddressSelectStatus = action.payload;
        },

        //Registration Error Status
        setLoginFetchStatus:(state,action)=>{
            state.Registration.LoginFetchLoadStatus = action.payload;
        },
        setSignupSendStatus:(state,action)=>{
            state.Registration.SignupSendStatus = action.payload;
        },

        //CreditCard
        setAllCreditCardFetchStatus:(state,action)=>{
            state.CreditCard.AllCreditCardFetchStatus = action.payload;
        },
        setCreditCardSelectStatus:(state,action)=>{
            state.CreditCard.CreditCardSelectStatus = action.payload;
        },

        //Cart
        setCardStatus:(state,action)=>{
            state.Cart.CartStatus = action.payload;
        },
       

        //PhoneNumber
        setPhoneNumberFillStatus:(state,action)=>{
            state.PhoneNumber.PhoneNumberFillStatus = action.payload;
        }

    },





});


export const {setAddressFetchStatus,setAddressFillStatus,setAddressSelectStatus,setBillingAddressFetchStatus,
    setBillingAddressFillStatus, setBillingAddressSelectStatus,setLoginFetchStatus,setSignupSendStatus,
    setAllCreditCardFetchStatus, setCreditCardFillStatus, setCreditCardSelectStatus, setCardStatus,
    setPhoneNumberFillStatus,setUserFetchStatus
} = ErrorSlice.actions;







export const ErrorReducer = ErrorSlice.reducer;
