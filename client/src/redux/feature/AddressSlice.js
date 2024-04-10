import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { saveAddressToLocalStorage } from '../actions/actionCreator';
import { useDispatch } from 'react-redux';
export const fetchSingleAddress = createAsyncThunk('Address/fetchSingleAddress',async (_,{dispatch}) =>{




    try{
        const response = await fetch('http://localhost:5000/getAddress', {
            method:'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        });

    if(response.ok){

        const result = await response.json()
        const { FirstName, LastName, Postal, District, Phone, _id }  = result[0]
        dispatch(saveAddressToLocalStorage(result[0]))
        return { FirstName, LastName, Postal, District, Phone, _id} 


    }
}catch(err){
    window.alert(err)
}
});


export const fetchUserAllAddress = createAsyncThunk('Address/fetchAllAddress',async () =>{


    try{
      
        const response = await fetch('http://localhost:5000/getAddressHistory', {
            method:'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        });

    if(response.ok){
        
        const result = await response.json()
        return result
        


    }
}catch(err){
    window.alert(err)
}
});





const initialState ={
    Address:{
        FirstName:'',
        LastName:'',
        Postal:'',
        Address:'',
        District: '',
        Phone:'',
        _id:''
    },
    AllAddress:[]

}


const AddressSlice = createSlice({
    name: 'Address',
    initialState,
    reducers:{
        setAddress:(state,action) =>{
           
            const { FirstName, LastName, Postal, Address, District, Phone} = action.payload;
      state.Address = {
        FirstName,
        LastName,
        Postal,
        Address,
        District,
        Phone,
      };
      
        },
        clearAddress: (state)=>{
            state.Address = {}
            localStorage.removeItem('Address')
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchSingleAddress.fulfilled, (state,action) =>{
            
            const { FirstName, LastName, Postal,Address, District, Phone, _id} = action.payload;

            state.Address = {
              FirstName,
              LastName,
              Postal,
              Address,
              District,
              Phone,
              _id
            };
           
        })
        .addCase(fetchUserAllAddress.fulfilled, (state,action) =>{
            
            state.AllAddress = [...action.payload.map((item) =>({...item}))]
        });
    }
});

export const {setAddress, clearAddress} = AddressSlice.actions;
export default AddressSlice.reducer;