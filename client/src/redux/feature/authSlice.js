import {createSlice} from '@reduxjs/toolkit';




const initialState = {
  Auth:{
    
    isFormOpen: false,
    isSignUpFormOpen: false,
  }
    
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
       
        openForm: (state,action)=>{
          state.isFormOpen = action.payload
        },
        openSignupForm: (state,action)=>{
          state.isSignUpFormOpen = action.payload
        }
    
}
}
);


export const {openForm,openSignupForm } = authSlice.actions;
export default authSlice.reducer