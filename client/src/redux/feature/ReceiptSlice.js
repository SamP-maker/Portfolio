import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';



let initialState ={
    Receipt:{
    OrderReceipt:{
        CartItems:'',
        Amount:0,
        Total: 0,
        Tax:0,
        Order_id:'', 


    },
    AddressReceipt:{

        FirstName:'',
        LastName:'',
        Postal:'',
        Address:'',
        District:'',
        Phone:'',
        _id:'',
        Status:false,
    },
    BillingAddressReceipt:{
        FirstName:'',
        LastName:'',
        Address:'',
        Postal:'',
        Country:'',
        City:'',
        State: '',
        _id:''
    },
    }

}


const RecordSumm = createSlice({
    name:'Receipt',
    initialState,
    reducers:{
        setReceipt: (state,action) =>{
            const { Order, Address, BillingAddress} = action.payload;
            
            state.Receipt={
                OrderReceipt:{...Order},
                AddressReceipt:{...Address},
                BillingAddressReceipt:{...BillingAddress},
            }
            console.log(Order,Address,BillingAddress)
        }
    }
})

export const {setReceipt} = RecordSumm.actions;
export const ReceiptReducer = RecordSumm.reducer;