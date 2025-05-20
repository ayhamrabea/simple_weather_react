import { configureStore } from '@reduxjs/toolkit';
import { WeatherApi } from '../features/weather/Weather';
import authReducer from '../features/auth/AuthSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        [WeatherApi.reducerPath]: WeatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(WeatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch