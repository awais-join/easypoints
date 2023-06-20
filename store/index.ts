import {configureStore} from '@reduxjs/toolkit';
import {FlightFareReducer, flightFeature} from '@/store/features/flight/flight.feature';

export const store = configureStore({
  reducer: {
    flightResponse: FlightFareReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
