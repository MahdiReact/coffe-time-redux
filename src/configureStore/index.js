import { configureStore } from "@reduxjs/toolkit";

import drinksReducer from './drinksSlice';
import sortedDrinksReducer from "./sortedDrinks";

const store = configureStore({
    reducer : {
        drinks : drinksReducer,
        sortedDrinks : sortedDrinksReducer,
    }
});
export default store;