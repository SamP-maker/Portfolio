import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { saveAddressToLocalStorage } from '../actions/actionCreator';
import { setAddressFetchLoadStatus, setAllAddressFetchLoadStatus } from './LoadManagement';






export const fetchSingleAddress = createAsyncThunk('Address/fetchSingleAddress',async (_,{dispatch}) =>{




    try{
        const response = await fetch('http://localhost:5000/getAddress', {
            method:'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            onProgress:(event)=>{

                if(event.lengthComputable){
                  
                }

            }
        });

      


   

    if(response.ok){

        const result = await response.json()

        
if (result && result.length > 0) {
    const { FirstName, LastName, Address, Postal, District, Phone, _id, Status } = result[0];
    dispatch(saveAddressToLocalStorage(result[0]))
       
    return { FirstName, LastName, Address, Postal, District, Phone, _id, Status} 
} else {
    return null
}
        
    }
}catch(err){
    window.alert(err)
    
    
    
   
}
});


export const fetchUserAllAddress = createAsyncThunk('Address/fetchAllAddress',async (_,{dispatch}) =>{


    try{
      
        const response = await fetch('http://localhost:5000/getAddressHistory', {
            method:'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            onProgress:(event)=>{
                if(event.lengthComputable){
                 
                }
            }
        });

      

    

    if(response.ok){
        
        const result = await response.json()

        if(result){

            return result
        }else{
            return null
        }
        
        


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
        District:'',
        Phone:'',
        _id:'',
        Status:false,
        
    },
    AllAddress:[],
    PrevAddress:{
        FirstName:'',
        LastName:'',
        Postal:'',
        Address:'',
        District:'',
        Phone:'',
        _id:'',
        Status:false,

    }
    
   

}


const AddressSlice = createSlice({
    name: 'Address',
    initialState,
    reducers:{
        setAddress:(state,action) =>{
           
            const { FirstName, LastName, Postal, Address, District, Phone,_id, Status} = action.payload;
      state.Address = {
        FirstName,
        LastName,
        Postal,
        Address,
        District,
        Phone,
        _id,
        Status,
      };
      
     
        },
        clearAddress: (state)=>{
            state.Address = {}
            localStorage.removeItem('Address')
        },
        setPrevAddress:(state) =>{
            
            state.PrevAddress={
                ...state.Address
            }

            
      

     

        },
        
       
        
    },
    
    extraReducers: (builder)=>{
        builder
        .addCase(fetchSingleAddress.fulfilled, (state,action) =>{
            if(action.payload){
                
            const { FirstName, LastName, Postal,Address, District, Phone, _id, Status} = action.payload || {};

            state.Address = {
              FirstName,
              LastName,
              Postal,
              Address,
              District,
              Phone,
              _id,
              Status,
            };
        
            }else{
                state.Address = { 
                    ...initialState.Address
                };
            }
            
            
           
        })
        .addCase(fetchUserAllAddress.fulfilled, (state,action) =>{
            
            if(action.payload){
            state.AllAddress = [...action.payload.map((item) =>({...item}))] ;
            }else{
                state.AllAddress = [...initialState.AllAddress];
            }
        });
    },
    
});

export const {setAddress, clearAddress,setPrevAddress} = AddressSlice.actions;
export default AddressSlice.reducer;