import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { saveBillingToLocalStorage } from '../actions/actionCreator';
import { useDispatch } from 'react-redux';

 
export const fetchBillAddress = createAsyncThunk('Billing/fetchBillAddress',  async (_,{dispatch}) =>{
   
   

  try{
    const response = await fetch(`http://localhost:5000/getBillingAddress`,{
      method:'GET',
      credentials: 'include', // Include credentials in the request
      headers:{
        "Content-Type": "application/json",
    },
    });

    if(!response.ok){
      throw new Error(`an Error occured ${response.statusText}`);
  
    }else{
    
    const data = await response.json();
    const { FirstName , LastName , Postal ,Address, Country, City, State, _id} = data[0]
    dispatch(saveBillingToLocalStorage(data[0]));
    return { FirstName , LastName , Postal ,Address, Country, City, State, _id}

   


    }
 
  }catch(error){
    window.alert(error.message);
  }
    


});


export const fetchUserAllBillingAddress  = createAsyncThunk('Billing/fetchUserAllBillingAddress' , async()=>{
    
    try{
        const response = await fetch('http://localhost:5000/getBillingAddressHistory', {
          method:'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        });

    if(response.ok){

        const result = await response.json()
        console.log(result)
        return result


    }
}catch(err){
    window.alert(err)
}






});

const initialState ={
    BillingAddress:{
        FirstName:'',
        LastName:'',
        Postal:'',
        Address:'',
        District: '',
        Phone:'',
        _id:''
    },
    BillingAddressAll:[]

}


const BillingAddressSlice = createSlice({
    name: 'Billing',
    initialState,
    reducers:{
        setBillingAddress:(state,action) =>{
            const { FirstName , LastName , Postal ,Address, Country, City, State, _id} = action.payload
            state.BillingAddress ={
                FirstName,
                LastName,
                Postal,
                Address,
                Country,
                City,
                State,
                
                
            }
            
        },
        clearBillingAddress: (state)=>{
            state.BillingAddress = {}
            localStorage.remove('Billing')
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchBillAddress.fulfilled,(state,action)=>{
            const { FirstName , LastName , Postal ,Address, Country, City, State, _id} = action.payload
            state.BillingAddress ={
                FirstName,
                LastName,
                Postal,
                Address,
                Country,
                City,
                State,
                _id
                
            }
            
        }).addCase(fetchUserAllBillingAddress.fulfilled, (state,action)=>{
            state.BillingAddressAll = [...action.payload.map((item) =>({...item}))]
            
          });
    }
})

export const {setBillingAddress, clearBillingAddress} = BillingAddressSlice.actions;
export default BillingAddressSlice.reducer;