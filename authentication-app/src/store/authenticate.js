import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
    name:'authentication',
    initialState:{token:null,isAuthenticated:false},
    reducers:{
        addToken(state,action){
            
        },
        removeToken(state,action){

        },
        authenticateUser(state,action){
           
        }
    }
})

export const login =(credentials)=>{
    return async (dispatch)=>{
        // login with firebase //


        dispatch(addToken(credentials))
    }
}
export const logout =()=>{
    return async (dispatch)=>{
        // logout with firebase //


        dispatch(removeToken())
    }
}