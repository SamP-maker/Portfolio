import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { saveCreditToLocalStorage } from '../actions/actionCreator';


export const fetchCreditCardCredential = createAsyncThunk('CreditCardSlice/fetchCreditCardCredential', async(_,{dispatch}) =>{
  
   

  try{
    const response = await fetch(`http://localhost:5000/getCreditCredentials`,{
      method:'GET',
      credentials: 'include', // Include credentials in the request
      headers:{
        "Content-Type": "application/json",
    },
    });

   
    if(response.ok){

  
    const data = await response.json();
    
    if(data){
      const { CardNumber, FullName, CCV, Month, Year, cardType, _id } = data[0] || {};
      dispatch(saveCreditToLocalStorage(data[0]))
      return { CardNumber, FullName, CCV, Month, Year, cardType, _id }
      
    }else{
      return null;
    }

     
  
    }
 
  }catch(error){
    
    window.alert(error.message);
  }
    


});


export const fetchAllUserCardCredentials = createAsyncThunk('CreditCardSlice/fetchAlluserCardCredentials',async()=>{
    
    try{
        const response = await fetch('http://localhost:5000/getCreditCredentialsHistory', {
          method:'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        });

    if(response.ok){

        const result = await response.json()
        

        if(result){
          return result;
        }else{
          return null;
        }
        


    }
}catch(err){
    window.alert(err)
}






});




const initialState ={
    CreditCardCredentials:{
        CardNumber: '',
        FullName: '',
        CCV:'',
        Month:'',
        Year:'',
        cardType:'',
        _id:''
    },
    CreditCardCredentialsAll:[]

}


const CreditCardCredentialsSlice = createSlice({
    name: 'CreditCardSlice',
    initialState,
    reducers:{
        setCreditCardCredentials:(state,action) =>{
            const { CardNumber, FullName, CCV, Month, Year, cardType } = action.payload || {};
            state.CreditCardCredentials = {
                CardNumber,
                FullName,
                CCV,
                Month,
                Year,
                cardType,
                
                
            }
            
            
        
        },
        clearCreditCardCredentials: (state)=>{
            Object.keys(state.CreditCardCredentials).forEach((key) => {
                state[key] = ''; // Reset each property to an empty string in the draft state
              });

          
        },
    }
    ,
    extraReducers:(builder)=>{
      builder
      .addCase(fetchCreditCardCredential.fulfilled,(state,action)=>{
        const { CardNumber, FullName, CCV, Month, Year, cardType, _id } = action.payload || {};
            state.CreditCardCredentials = {
                CardNumber,
                FullName,
                CCV,
                Month,
                Year,
                cardType,
                _id
                
                
            }
          
      })
      .addCase(fetchAllUserCardCredentials.fulfilled, (state,action)=>{
        if(action.payload){
          state.CreditCardCredentialsAll = [...action.payload.map((item)=>({...item}))]
        }else{
          return null;
        }
    
      });
    }
})

export const {setCreditCardCredentials, clearCreditCardCredentials} = CreditCardCredentialsSlice.actions;
export default CreditCardCredentialsSlice.reducer;