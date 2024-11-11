import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./Component/Reducers/index";


const Store = configureStore({
    reducer : rootReducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default Store;