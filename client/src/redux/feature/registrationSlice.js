import {createSlice} from '@reduxjs/toolkit';


const initiateState ={
    isSigningUp: false,
    signupSuccess: false,
    signupError: null,
};

const signupSlice = createSlice({
    name: 'signup',
    initiateState,
    reducers: {
        signupState: (state)=>{
            state.isSigningUp = true;
            state.signupSuccess = false;
            state.signupError = null;
        },
        signupSuccess: (state)=>{
            state.isSigningUp = false;
            state.signupSuccess = true;
            state.signupError = null;
        },
        signupFailure: (state,action) =>{
            state.isSigningUp = false;
            state.signupSuccess = false;
            state.signupError = action.payload;
        },
        resetSignup: (state) =>{
            state.isSigningUp = false;
            state.signupSuccess = false;
            state.signupError = null;
        },




},


})


export const {signupState, signupSuccess, signupFailure, resetSignup} = signupSlice.actions;
export default signupSlice.reducer;