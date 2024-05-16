import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {saveAddressToLocalStorage} from '../actions/actionCreator';





const initialState ={
    
    Post:{
       
        RecordSummary:{
            UserRecordSummPostStatus:false,
        },
        AddressPost:{
            AddressPostStatus:false,
        },
        BillingAddressPost:{
            BillingAddressPostStatus:false,
        }
       
    }
}




const PostSlice = createSlice({
    name:'Post',
    initialState:initialState.Post,
    reducers:{

       
         //Record Summary Error Status
         setRecordSummPostStatus:(state,action)=>{
            state.RecordSummary.UserRecordSummPostStatus = action.payload;
        },
        setAddressPostStatus:(state,action)=>{
            state.Address.AddressPostStatus = action.payload;
        },
        setBillingAddressPostStatus:(state,action)=>{
            state.BillingAddress.BillingAddressPostStatus = action.payload;

        }

    }
})



export const {setRecordSummPostStatus,setAddressPostStatus, setBillingAddressPostStatus} = PostSlice.actions;
export const PostReducer = PostSlice.reducer;

