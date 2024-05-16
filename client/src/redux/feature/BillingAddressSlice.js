import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { saveBillingToLocalStorage } from '../actions/actionCreator';

 
export const fetchBillAddress = createAsyncThunk('Billing/fetchBillAddress',  async (_,{dispatch}) =>{
   
   

  try{
    const response = await fetch(`http://localhost:5000/getBillingAddress`,{
      method:'GET',
      credentials: 'include', // Include credentials in the request
      headers:{
        "Content-Type": "application/json",
    },
    });
    

 
    if(response.ok){


        
        
        const data = await response.json();
      
        
        if(data){
            const { FirstName , LastName , Postal ,Address, Country, City, State, _id} = data[0] || {};
            dispatch(saveBillingToLocalStorage(data[0]));
            return { FirstName , LastName , Postal ,Address, Country, City, State, _id}
        }else{
            return null;
        }
        
    
       
    
     
    }
 
  }catch(error){
   
    window.alert(error.message);
  }
    


});


export const fetchUserAllBillingAddress  = createAsyncThunk('Billing/fetchUserAllBillingAddress' , async(_,{dispatch})=>{
    
    try{
        const response = await fetch('http://localhost:5000/getBillingAddressHistory', {
          method:'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        });

    if(response.ok){

    
        const result = await response.json();

        if(result){
            
            return result
        }else{
            return null;
        }
       
        


    }
}catch(err){

    window.alert(err)
}






});

const initialState ={
    BillingAddress:{
        FirstName:'',
        LastName:'',
        Address:'',
        Postal:'',
        Country:'',
        City:'',
        State: '',
        _id:''
    },
    BillingAddressAll:[],
    PrevBillingAddress:{
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


const BillingAddressSlice = createSlice({
    name: 'Billing',
    initialState,
    reducers:{
        setBillingAddress:(state,action) =>{
            const { FirstName , LastName , Postal ,Address, Country, City, State, _id} = action.payload || {};
            state.BillingAddress ={
                FirstName,
                LastName,
                Address,
                Postal,
                Country,
                City,
                State,
                _id
                
                
            }
            
        },
        clearBillingAddress: (state)=>{
            state.BillingAddress = {}
            localStorage.remove('Billing')
        },
        setPrevBillingAddress:(state) =>{

         
                state.PrevBillingAddress = {
                    ...state.BillingAddress
                  };
            
            

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchBillAddress.fulfilled,(state,action)=>{
            if(action.payload)
{
    const { FirstName , LastName , Postal ,Address, Country, City, State, _id} = action.payload || {};
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
}            
            else{
                state.BillingAddress = {
                ...initialState.BillingAddress
            }
            }
        }).addCase(fetchUserAllBillingAddress.fulfilled, (state,action)=>{
            if(action.payload){
                state.BillingAddressAll = [...action.payload.map((item) =>({...item}))]
            }else{
                state.BillingAddressAll = [...initialState.BillingAddressAll];
            }
            
          });
    }
})

export const {setBillingAddress, clearBillingAddress, setPrevBillingAddress} = BillingAddressSlice.actions;
export default BillingAddressSlice.reducer;