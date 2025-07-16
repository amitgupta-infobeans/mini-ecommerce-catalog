import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({

    name: "user",
    initialState: {
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload))
            state.user = action.payload;
        },
        clearUser: (state, action) => {
            localStorage.clear()
            state.user = null

        }
    },
})

export const { setUser, clearUser } = UserSlice.actions;

export default UserSlice.reducer;