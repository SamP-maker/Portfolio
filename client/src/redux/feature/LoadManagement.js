import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';



const initialState = {
    
    loading:{

        AuthLoad:{
            UserFetchLoadStatus:false,

        },
        RecordSummLoad:{
            UserFetchRecordSummPostLoadStatus:false,
        },

        AddressLoad:{
            AllAddressFetchLoadStatus:false,
            AddressFetchLoadStatus:false,
            openForm: false,
        openSliderForm:false,
        },
        BillingAddressLoad:{
            AllBillingAddressFetchLoadStatus:false,
            BillingAddressFetchLoadStatus:false,
            openForm: false,
            openSliderForm:false,
        },
        CreditCardLoad:{
            AllCreditCardFetchLoadStatus:false,
            CreditCardFetchLoadStatus:false,
            openVisaForm:false,
            openMasterCardForm: false,
            openSliderForm:false,
            openForm:false,
            openBankListForm:false,
            
        },
        CartLoad:{
            CartLoadStatus:false,
        }

    },


}
const LoadSlice = createSlice({
    name: 'Load',
    initialState: initialState.loading,
    reducers:{

        
        //Record Summary Error Status
        setRecordSummaryFetchLoadStatus:(state,action)=>{
            state.AuthLoad.UserFetchRecordSummLoadStatus = action.payload;
        },
        
        

        setOpenForm:(state,action)=>{
            state.AddressLoad.openForm = action.payload;
           
            
        },
        setOpenSliderForm:(state,action)=>{
            
            state.AddressLoad.openSliderForm = action.payload;
        
        },
        

       
        setOpenBillingForm:(state,action)=>{
            state.BillingAddressLoad.openForm = action.payload;
          
            
        },
        setOpenBillingSliderForm:(state,action)=>{
            
            state.BillingAddressLoad.openSliderForm = action.payload;
        
        },
      
     


        setOpenVisaForm:(state,action)=>{
            state.CreditCardLoad.openVisaForm = action.payload;
            console.log(state.CreditCard.openForm)
            
        },
        setOpenMasterCardForm:(state,action)=>{
            
            state.CreditCardLoad.openMasterCardForm = action.payload;
            
        },
        setOpenCreditCardSliderForm:(state,action)=>{
            state.CreditCardLoad.openSliderForm = action.payload;
          
        },
        setOpenCreditCardForm:(state,action)=>{
            state.CreditCardLoad.openForm = action.payload;
        },
        setOpenBankListForm:(state,action)=>{
            state.CreditCardLoad.openBankListForm = action.payload;
        }
     
    
        

     



    }





})



export const {setUserFetchLoadStatus,setRecordSummaryFetchLoadStatus,setAllAddressFetchLoadStatus,setAddressFetchLoadStatus,
    setAllBillingAddressFetchLoadStatus,setBillingAddressSelectLoadStatus,setBillingAddressFetchLoadStatus,
    setAllCreditCardFetchLoadStatus, setCreditCardFetchLoadStatus, setCartLoadStatus,setOpenForm, setOpenSliderForm,setOpenBillingForm,
    setOpenBillingSliderForm, setOpenVisaForm,  setOpenMasterCardForm, setOpenCreditCardSliderForm, setOpenCreditCardForm, setOpenBankListForm

} = LoadSlice.actions;



export const LoadReducer = LoadSlice.reducer;