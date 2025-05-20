import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token') || null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setToken:(state , action) => {
            state.token = action.payload
            localStorage.setItem('token' , action.payload)
        },
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('token')
        }
    }
})

export const { setToken, logout } = AuthSlice.actions;
export default AuthSlice.reducer;