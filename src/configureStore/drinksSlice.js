import { createSlice } from "@reduxjs/toolkit";

const drinks = createSlice({
  name: "drinks",
  initialState: [],
  reducers: {
    setDrinks : (state ,{ payload }) => {
      return payload;
    }
  },
});

export const { setDrinks,deleteADrink } = drinks.actions;
export default drinks.reducer;
