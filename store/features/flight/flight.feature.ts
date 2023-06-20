import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/store';
import {Airport, FlightResponse} from '@/store/features/flight/flights';

const INITIAL_STATE: FlightResponse = {
  responses: [],
  airports: []
};

export const flightFeature = createSlice({
  name: 'flightState',
  initialState: INITIAL_STATE,
  reducers: {
    addToResponse: (
      state,
      action: PayloadAction<FlightResponse['responses']>
    ) => {
      state.responses = [...state.responses, ...action.payload];
    },
    resetResponse: state => {
      state.responses = [];
    },
    setAirports: (state, action: PayloadAction<Airport[]>) => {
      state.airports = action.payload;
    }
  }
});

export const {addToResponse, resetResponse, setAirports} = flightFeature.actions;
export const getAllResponse = (state: RootState) =>
  state.flightResponse.responses;
export const getAirports = (state: RootState) => state.flightResponse.airports;
export const FlightFareReducer = flightFeature.reducer;
