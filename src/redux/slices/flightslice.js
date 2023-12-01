import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightActoin";


const initialState = {
    flights: [],
    isLoading: true,
    isError: false
}

const flightslice = createSlice({
    name: 'flight',
    initialState,
    extraReducers: (builder) => {
        builder
            //when waiting to answer from API
            .addCase(getFlights.pending, (state) => {
                state.isLoading = true;
            })

            //positive return
            .addCase(getFlights.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isError = false,
                    state.flights = action.payload;

            })

            //negative return

            .addCase(getFlights.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                alert('ERROR!!!')
            })
    }
});

export default flightslice.reducer;

//getflights.pending method: instead of this method I will use
// the other method which is !(builder)