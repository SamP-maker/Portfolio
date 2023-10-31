import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    isLoggedin: false,
    Username: '',
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            state.isLoggedin= true;
            state.Username= action.payload;
            console.log(state.Username)
        },
        clearUserDetails: (state)=>{
            state.isLoggedin = false;
            state.Username = ''
            console.log(state.Username)
        }
    },
});

export const fetchUserDetails =  (url) => async (dispatch) =>{

    const response = await fetch(url);
try{
    if(!response.ok){
        throw new Error(`an error occured: ${response.statusText}`);
    }else{

        const result = await response.json();
        dispatch(setUserDetails({username: result.username}));
        console.log("Logged In")

        
    }
}catch(err){
    console.log(err);
}
}

export const { setUserDetails,clearUserDetails } = userSlice.actions;
export default userSlice.reducer;