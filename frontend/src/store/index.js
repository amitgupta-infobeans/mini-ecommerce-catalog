import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slice/UserSlice"
import productReducer from "../slice/ProductSlice"
import categoryReducer from "../slice/CategorySlice"
const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        category: categoryReducer,
    }
})
export default store;