import {createSlice} from '@reduxjs/toolkit';

const sortedDrinks = createSlice({
    name : "sortedDrinks",
    initialState : [],
    reducers : {
        initSortedDrinks : (state , {payload}) => {
            return payload;
        },
        setSortedDrinks : (state , {payload}) => {
            return payload;
        }
    }
});

export const {initSortedDrinks,setSortedDrinks} = sortedDrinks.actions;
export default sortedDrinks.reducer;

