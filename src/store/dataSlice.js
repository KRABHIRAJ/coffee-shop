/* eslint-disable prettier/prettier */

import { createSlice } from '@reduxjs/toolkit';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

const initialState = {
    coffeeList: CoffeeData,
    beanList: BeansData,
    filteredCoffeeData: CoffeeData,
};

const dataSlice = createSlice({
    name: 'appStore',
    initialState,
    reducers: {
        setFilteredCoffeeData: (state, action) => {
            state.filteredCoffeeData = [...action.payload];
        }
    },
});

export const {setFilteredCoffeeData} = dataSlice.actions;

export default dataSlice.reducer;
